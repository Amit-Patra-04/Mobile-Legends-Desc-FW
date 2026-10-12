import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { HEROES } from '../src/data/heroesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fandom wiki sometimes uses specific title formatting (e.g., "Chang'e", "X.Borg", "Popol and Kupa")
// Let's create an accurate mapping for MediaWiki titles
function getWikiTitle(name) {
  const overrides = {
    'Yi Sun-shin': 'Yi_Sun-shin',
    'Lapu-Lapu': 'Lapu-Lapu',
    'X.Borg': 'X.Borg',
    "Chang'e": "Chang'e",
    'Popol and Kupa': 'Popol_and_Kupa',
    'Yu Zhong': 'Yu_Zhong',
  };
  return overrides[name] || name.replace(/ /g, '_');
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Starting fetch for ${HEROES.length} heroes...`);
  
  // Output directory for local hero portraits
  const outDir = path.resolve(__dirname, '../public/assets/images/heroes');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Load Gist data as fallback
  let gistMap = {};
  try {
    const gistContent = fs.readFileSync('C:/Users/amitp/.gemini/antigravity-ide/brain/cad4e66b-12c4-45b3-8e9b-e2ac57b81cdf/.system_generated/steps/303/content.md', 'utf8');
    const gistParsed = JSON.parse(gistContent.substring(gistContent.indexOf('{')));
    for (const item of gistParsed.data) {
      gistMap[item.hero_name.toLowerCase().replace(/[^a-z0-9]/g, '')] = item.portrait;
    }
  } catch (err) {
    console.log('Gist load err:', err.message);
  }

  const batchSize = 30;
  const heroWikiMap = {};

  for (let i = 0; i < HEROES.length; i += batchSize) {
    const batch = HEROES.slice(i, i + batchSize);
    const titles = batch.map(h => getWikiTitle(h.name)).join('|');
    const url = `https://mobile-legends.fandom.com/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=pageimages&pithumbsize=800&format=json`;
    
    try {
      const json = await fetchJson(url);
      if (json && json.query && json.query.pages) {
        for (const page of Object.values(json.query.pages)) {
          if (page.title && page.thumbnail) {
            heroWikiMap[page.title.toLowerCase().replace(/[^a-z0-9]/g, '')] = page.thumbnail.source;
          }
        }
      }
    } catch (err) {
      console.error(`Batch error [${i}]:`, err.message);
    }
  }

  console.log(`Fandom portraits found: ${Object.keys(heroWikiMap).length}`);

  let downloadedCount = 0;
  let fallbackCount = 0;
  let failed = [];

  for (const hero of HEROES) {
    const key = hero.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const fandomUrl = heroWikiMap[key];
    const gistUrl = gistMap[key];
    const destPath = path.join(outDir, `${hero.id}.png`);

    // Pick highest quality source: Fandom high-res portrait first, then Gist Moonton CDN
    const targetUrl = fandomUrl || gistUrl;

    if (targetUrl) {
      try {
        await downloadFile(targetUrl, destPath);
        downloadedCount++;
        process.stdout.write(`\rDownloaded [${downloadedCount}/${HEROES.length}]: ${hero.name}`);
      } catch (e) {
        // Fallback to gistUrl if fandom failed
        if (gistUrl && targetUrl !== gistUrl) {
          try {
            await downloadFile(gistUrl, destPath);
            downloadedCount++;
            fallbackCount++;
          } catch (e2) {
            failed.push({ hero: hero.name, error: e2.message });
          }
        } else {
          failed.push({ hero: hero.name, error: e.message });
        }
      }
    } else {
      failed.push({ hero: hero.name, error: 'No URL found' });
    }
  }

  console.log(`\nDownload completed! Successfully saved ${downloadedCount}/${HEROES.length} hero portraits.`);
  if (failed.length > 0) {
    console.log('Failed or missing heroes:', failed);
  }
}

run();
