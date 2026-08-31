const fs = require('fs');

async function scrape() {
  const res = await fetch('https://animecult.in/');
  const html = await res.text();
  fs.writeFileSync('animecult.html', html);
  console.log('Saved animecult.html. Size:', html.length);
  
  const classSet = new Set();
  const regex = /class="([^"]+)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    match[1].split(/\s+/).forEach(c => {
      if (c) classSet.add(c);
    });
  }

  console.log('Total unique classes:', classSet.size);
  console.log('Sample classes:', Array.from(classSet).slice(0, 150).join(', '));
  
  const idSet = new Set();
  const idRegex = /id="([^"]+)"/g;
  while ((match = idRegex.exec(html)) !== null) {
    if (match[1]) idSet.add(match[1]);
  }
  console.log('IDs:', Array.from(idSet).join(', '));
}

scrape();
