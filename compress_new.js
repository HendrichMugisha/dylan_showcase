
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, '../images/resources');
const destDir = path.join(__dirname, 'public/images');

const filesToCompress = [
  { src: 'M2.png', dest: 'Maki Zenin3.webp' },
  { src: 'T2.png', dest: 'Toji Fushiguro3.webp' },
  { src: 'geto.png', dest: 'Suguru Geto3.webp' },
  { src: 'yuuta.png', dest: 'Okkotsu Yuuta3.webp' },
  { src: 'ChatGPT Image Aug 31, 2026, 09_26_56 PM.png', dest: 'Size_Chart.webp' }
];

async function compressAll() {
  for (const file of filesToCompress) {
    const filePath = path.join(srcDir, file.src);
    const newPath = path.join(destDir, file.dest);
    
    if (fs.existsSync(filePath)) {
      console.log('Compressing', file.src, '...');
      await sharp(filePath)
        .resize(1000)
        .webp({ quality: 80 })
        .toFile(newPath);
      console.log('Done', file.src, '->', file.dest);
    }
  }
}

compressAll().catch(console.error);

