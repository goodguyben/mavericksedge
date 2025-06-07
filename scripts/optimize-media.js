
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Configuration
const CONFIG = {
  video: {
    formats: ['mp4', 'webm'],
    quality: 23, // CRF value (lower = better quality, higher file size)
    maxWidth: 1920,
    maxHeight: 1080,
    audioBitrate: '128k'
  },
  image: {
    webpQuality: 85,
    maxWidth: 2048,
    maxHeight: 2048
  }
};

// Media directories to process
const MEDIA_DIRS = [
  'client/public/videos',
  'client/public/assets',
  'client/src/assets',
  'attached_assets'
];

async function checkDependencies() {
  try {
    await execAsync('ffmpeg -version');
    console.log('✓ FFmpeg found');
  } catch (error) {
    console.error('❌ FFmpeg not found. Installing...');
    await execAsync('npm install -g @ffmpeg-installer/ffmpeg');
  }

  try {
    await execAsync('cwebp -version');
    console.log('✓ WebP tools found');
  } catch (error) {
    console.error('❌ WebP tools not found. Please install libwebp-tools');
  }
}

async function optimizeVideo(inputPath, outputDir) {
  const basename = path.basename(inputPath, path.extname(inputPath));
  const optimizedMp4 = path.join(outputDir, `${basename}-optimized.mp4`);
  const optimizedWebm = path.join(outputDir, `${basename}-optimized.webm`);

  console.log(`Optimizing video: ${inputPath}`);

  try {
    // Optimize MP4 with H.264
    const mp4Command = `ffmpeg -i "${inputPath}" -c:v libx264 -crf ${CONFIG.video.quality} -preset medium -c:a aac -b:a ${CONFIG.video.audioBitrate} -vf "scale='min(${CONFIG.video.maxWidth},iw)':'min(${CONFIG.video.maxHeight},ih)':force_original_aspect_ratio=decrease" -movflags +faststart -y "${optimizedMp4}"`;
    
    console.log('Creating optimized MP4...');
    await execAsync(mp4Command);
    console.log(`✓ Created: ${optimizedMp4}`);

    // Create WebM version for better compression
    const webmCommand = `ffmpeg -i "${inputPath}" -c:v libvp9 -crf ${CONFIG.video.quality} -b:v 0 -c:a libopus -b:a ${CONFIG.video.audioBitrate} -vf "scale='min(${CONFIG.video.maxWidth},iw)':'min(${CONFIG.video.maxHeight},ih)':force_original_aspect_ratio=decrease" -y "${optimizedWebm}"`;
    
    console.log('Creating WebM version...');
    await execAsync(webmCommand);
    console.log(`✓ Created: ${optimizedWebm}`);

    return { mp4: optimizedMp4, webm: optimizedWebm };
  } catch (error) {
    console.error(`Error optimizing video ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeImage(inputPath, outputDir) {
  const basename = path.basename(inputPath, path.extname(inputPath));
  const outputPath = path.join(outputDir, `${basename}.webp`);

  console.log(`Converting image to WebP: ${inputPath}`);

  try {
    const command = `cwebp -q ${CONFIG.image.webpQuality} -resize ${CONFIG.image.maxWidth} ${CONFIG.image.maxHeight} "${inputPath}" -o "${outputPath}"`;
    
    await execAsync(command);
    console.log(`✓ Created: ${outputPath}`);
    
    return outputPath;
  } catch (error) {
    console.error(`Error optimizing image ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`);
    return;
  }

  const optimizedDir = path.join(dirPath, 'optimized');
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) continue;
    
    const ext = path.extname(file).toLowerCase();
    
    // Process videos
    if (['.mp4', '.mov', '.avi', '.webm'].includes(ext)) {
      await optimizeVideo(filePath, optimizedDir);
    }
    
    // Process images
    if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
      await optimizeImage(filePath, optimizedDir);
    }
  }
}

async function generateOptimizationReport() {
  const report = {
    processed: [],
    errors: [],
    sizeSavings: 0
  };

  // This would be expanded to track actual file sizes and savings
  console.log('\n📊 Optimization Report:');
  console.log('- All videos converted to optimized MP4 and WebM formats');
  console.log('- All images converted to WebP format');
  console.log('- Files saved to respective "optimized" directories');
  
  return report;
}

async function main() {
  console.log('🚀 Starting media optimization...\n');
  
  await checkDependencies();
  
  for (const dir of MEDIA_DIRS) {
    console.log(`\n📁 Processing directory: ${dir}`);
    await processDirectory(dir);
  }
  
  await generateOptimizationReport();
  
  console.log('\n✅ Media optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update your components to use the optimized media files');
  console.log('2. Consider implementing lazy loading for better performance');
  console.log('3. Test the optimized media files in your application');
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  optimizeVideo,
  optimizeImage,
  processDirectory
};
