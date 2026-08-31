const fs = require('fs');
const html = fs.readFileSync('animecult.html', 'utf8');

const imgRegex = /<img[^>]+src=\"([^\">]+)\"[^>]*>/g;
const imgUrls = new Set();
let match;
while ((match = imgRegex.exec(html)) !== null) {
  if (match[1].includes('//')) imgUrls.add(match[1]);
}

const headingRegex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/g;
const headings = new Set();
while ((match = headingRegex.exec(html)) !== null) {
  const clean = match[1].replace(/<[^>]+>/g, '').trim();
  if (clean) headings.add(clean);
}

const videoRegex = /<video[^>]+src=\"([^\">]+)\"[^>]*>/g;
const videoUrls = new Set();
while ((match = videoRegex.exec(html)) !== null) {
  if (match[1].includes('//')) videoUrls.add(match[1]);
}

const sourceRegex = /<source[^>]+src=\"([^\">]+)\"[^>]*>/g;
while ((match = sourceRegex.exec(html)) !== null) {
  if (match[1].includes('//')) videoUrls.add(match[1]);
}

console.log('--- HEADINGS ---');
console.log(Array.from(headings).join('\n'));

console.log('\n--- IMAGES ---');
console.log(Array.from(imgUrls).slice(0, 10).join('\n'));

console.log('\n--- VIDEOS ---');
console.log(Array.from(videoUrls).join('\n'));

