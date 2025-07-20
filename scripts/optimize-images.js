#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  inputDir: 'client/public/images',
  outputDir: 'client/public/images/optimized',
  formats: ['webp', 'avif'],
  sizes: {
    mobile: 400,
    tablet: 800,
    desktop: 1200,
    large: 1920
  },
  quality: {
    webp: 80,
    avif: 75
  }
};

// Ensure output directory exists
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
}

// Get all image files
function getImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (/\.(jpg|jpeg|png|gif|bmp)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Optimize single image
async function optimizeImage(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const relativePath = path.relative(CONFIG.inputDir, inputPath);
  const outputSubDir = path.dirname(relativePath);
  const outputPath = path.join(CONFIG.outputDir, outputSubDir);
  
  // Create output subdirectory
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }
  
  console.log(`Optimizing: ${relativePath}`);
  
  // Generate WebP versions
  for (const [sizeName, width] of Object.entries(CONFIG.sizes)) {
    const webpPath = path.join(outputPath, `${filename}-${sizeName}.webp`);
    
    try {
      // Use ImageMagick for conversion
      const command = `convert "${inputPath}" -resize ${width}x -quality ${CONFIG.quality.webp} "${webpPath}"`;
      execSync(command, { stdio: 'pipe' });
      console.log(`  ✓ Created: ${path.relative(CONFIG.outputDir, webpPath)}`);
    } catch (error) {
      console.error(`  ✗ Failed to create WebP: ${webpPath}`);
    }
  }
  
  // Generate AVIF version (if supported)
  try {
    const avifPath = path.join(outputPath, `${filename}.avif`);
    const command = `convert "${inputPath}" -quality ${CONFIG.quality.avif} "${avifPath}"`;
    execSync(command, { stdio: 'pipe' });
    console.log(`  ✓ Created: ${path.relative(CONFIG.outputDir, avifPath)}`);
  } catch (error) {
    console.log(`  ⚠ AVIF not supported, skipping`);
  }
}

// Generate responsive image component
function generateResponsiveImageComponent(imagePath) {
  const filename = path.basename(imagePath, path.extname(imagePath));
  const relativePath = path.relative(CONFIG.inputDir, imagePath);
  const outputSubDir = path.dirname(relativePath);
  
  const srcset = Object.entries(CONFIG.sizes)
    .map(([sizeName, width]) => {
      const webpPath = `/images/optimized/${outputSubDir}/${filename}-${sizeName}.webp`;
      return `${webpPath} ${width}w`;
    })
    .join(', ');
  
  return `
// Generated responsive image component for ${relativePath}
export const ${filename.replace(/[^a-zA-Z0-9]/g, '_')}Image = () => (
  <picture>
    <source
      srcSet="${srcset}"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      type="image/webp"
    />
    <img
      src="/images/${relativePath}"
      alt="${filename}"
      loading="lazy"
      decoding="async"
    />
  </picture>
);
`;
}

// Main execution
async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(`❌ Input directory not found: ${CONFIG.inputDir}`);
    process.exit(1);
  }
  
  const imageFiles = getImageFiles(CONFIG.inputDir);
  
  if (imageFiles.length === 0) {
    console.log('ℹ️ No images found to optimize');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to optimize\n`);
  
  // Process each image
  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath);
  }
  
  // Generate component file
  const componentContent = imageFiles
    .map(generateResponsiveImageComponent)
    .join('\n');
  
  const componentFile = path.join('client/src/components/optimized-images.tsx');
  fs.writeFileSync(componentFile, `// Auto-generated optimized image components\n${componentContent}`);
  
  console.log(`\n✅ Optimization complete!`);
  console.log(`📁 Optimized images: ${CONFIG.outputDir}`);
  console.log(`📝 Component file: ${componentFile}`);
  console.log(`\n💡 Usage: Import and use the generated components in your React components`);
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeImage, generateResponsiveImageComponent }; 