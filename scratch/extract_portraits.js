import fs from 'fs';
import { HEROES } from '../src/data/heroesData.js';

const content = fs.readFileSync('C:/Users/amitp/.gemini/antigravity-ide/brain/cad4e66b-12c4-45b3-8e9b-e2ac57b81cdf/.system_generated/steps/280/content.md', 'utf8');

const heroRegex = /"hero_name":\s*"([^"]+)"[\s\S]*?"portrait":\s*"([^"]*)"/g;
let match;
const found = {};
while ((match = heroRegex.exec(content)) !== null) {
  const name = match[1];
  const portrait = match[2];
  if (portrait && portrait.startsWith('http')) {
    found[name.toLowerCase()] = { name, portrait };
  }
}

console.log('Total heroes with portraits parsed:', Object.keys(found).length);
console.log('Total HEROES in DB:', HEROES.length);

let matched = 0;
let unmatched = [];
for (const h of HEROES) {
  const normName = h.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  let hit = null;
  for (const [k, v] of Object.entries(found)) {
    if (k.replace(/[^a-z0-9]/g, '') === normName) {
      hit = v;
      break;
    }
  }
  if (hit) {
    matched++;
  } else {
    unmatched.push(h.name);
  }
}

console.log('Matched count:', matched, 'Unmatched count:', unmatched.length);
console.log('Unmatched heroes:', unmatched);
