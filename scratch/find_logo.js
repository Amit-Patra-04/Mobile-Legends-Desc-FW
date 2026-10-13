import https from 'https';
import fs from 'fs';

https.get('https://m.mobilelegends.com/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const matches = data.match(/https:\/\/[^"'<>\s]+\.(?:png|jpg|webp|svg)/gi);
    if (matches) {
      const filtered = [...new Set(matches)].filter(u => /logo|icon|brand|head/i.test(u));
      console.log('Filtered logos:', filtered);
    } else {
      console.log('No matches found in HTML');
    }
  });
}).on('error', e => console.log('Err:', e.message));
