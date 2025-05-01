const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = [
  { width: 16, height: 16, name: 'favicon-16x16.png' },
  { width: 32, height: 32, name: 'favicon-32x32.png' },
  { width: 192, height: 192, name: 'logo192.png' },
  { width: 512, height: 512, name: 'logo512.png' }
];

async function generateFavicons() {
  const inputSvg = path.join(__dirname, '../public/images/favicon/favicon.svg');
  const outputDir = path.join(__dirname, '../public/images/favicon');

  try {
    for (const size of sizes) {
      await sharp(inputSvg)
        .resize(size.width, size.height)
        .png()
        .toFile(path.join(outputDir, size.name));
      
      console.log(`Generated ${size.name}`);
    }
    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 