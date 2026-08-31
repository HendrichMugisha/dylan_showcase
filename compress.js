
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public/images');
const files = fs.readdirSync(dir);

async function compressAll() {
  for (const file of files) {
    if (file.endsWith('.png') && file !== 'LOGO.png') {
      const filePath = path.join(dir, file);
      const newPath = path.join(dir, file.replace('.png', '.webp'));
      
      console.log('Compressing', file, '...');
      await sharp(filePath)
        .resize(1000) // max width 1000px
        .webp({ quality: 80 })
        .toFile(newPath);
        
      fs.unlinkSync(filePath); // remove original huge PNG
      console.log('Done', file);
    }
  }
}

compressAll().catch(console.error);

