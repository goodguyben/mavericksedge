#!/usr/bin/env node

import { execSync } from 'child_process';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync, mkdirSync } from 'fs';

const FFMPEG_PATH = 'ffmpeg'; // Assuming ffmpeg is installed
const INPUT_DIR = './attached_assets';
const OUTPUT_DIR = './public/attached_assets/optimized';

// Video optimization settings
const OPTIMIZATION_SETTINGS = {
  mobile: {
    webm: {
      codec: 'libvpx-vp9',
      crf: 30,
      maxrate: '500k',
      bufsize: '1000k',
      preset: 'fast',
      width: 640,
      height: 360
    },
    mp4: {
      codec: 'libx264',
      crf: 28,
      maxrate: '500k',
      bufsize: '1000k',
      preset: 'fast',
      width: 640,
      height: 360
    }
  },
  desktop: {
    webm: {
      codec: 'libvpx-vp9',
      crf: 25,
      maxrate: '1000k',
      bufsize: '2000k',
      preset: 'medium',
      width: 1280,
      height: 720
    },
    mp4: {
      codec: 'libx264',
      crf: 23,
      maxrate: '1000k',
      bufsize: '2000k',
      preset: 'medium',
      width: 1280,
      height: 720
    }
  }
};

async function checkFFmpeg() {
  try {
    execSync(`${FFMPEG_PATH} -version`, { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.error('❌ FFmpeg not found. Please install FFmpeg first.');
    console.error('Installation: https://ffmpeg.org/download.html');
    return false;
  }
}

async function getVideoFiles(dir) {
  const files = await readdir(dir);
  const videoFiles = [];
  
  for (const file of files) {
    const filePath = join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isFile()) {
      const ext = extname(file).toLowerCase();
      if (['.mp4', '.webm', '.mov', '.avi', '.mkv'].includes(ext)) {
        videoFiles.push(filePath);
      }
    }
  }
  
  return videoFiles;
}

function optimizeVideo(inputPath, outputPath, settings) {
  const { codec, crf, maxrate, bufsize, preset, width, height } = settings;
  
  const command = `${FFMPEG_PATH} -i "${inputPath}" \
    -c:v ${codec} \
    -crf ${crf} \
    -maxrate ${maxrate} \
    -bufsize ${bufsize} \
    -preset ${preset} \
    -vf "scale=${width}:${height}:force_original_aspect_ratio=decrease,pad=${width}:${height}:(ow-iw)/2:(oh-ih)/2" \
    -c:a aac \
    -b:a 128k \
    -movflags +faststart \
    -y "${outputPath}"`;
  
  try {
    execSync(command, { stdio: 'pipe' });
    return true;
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
    return false;
  }
}

async function getFileSize(filePath) {
  const stats = await stat(filePath);
  return stats.size;
}

function formatFileSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
}

async function main() {
  console.log('🎬 Starting video optimization...\n');
  
  // Check FFmpeg
  if (!await checkFFmpeg()) {
    process.exit(1);
  }
  
  // Create output directories
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Get video files
  const videoFiles = await getVideoFiles(INPUT_DIR);
  
  if (videoFiles.length === 0) {
    console.log('ℹ️  No video files found in', INPUT_DIR);
    return;
  }
  
  console.log(`📁 Found ${videoFiles.length} video files to optimize\n`);
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let successCount = 0;
  
  for (const videoFile of videoFiles) {
    const fileName = basename(videoFile);
    const nameWithoutExt = basename(videoFile, extname(videoFile));
    
    console.log(`🔄 Processing: ${fileName}`);
    
    // Get original file size
    const originalSize = await getFileSize(videoFile);
    totalOriginalSize += originalSize;
    
    // Optimize for mobile
    const mobileWebmPath = join(OUTPUT_DIR, `${nameWithoutExt}-mobile.webm`);
    const mobileMp4Path = join(OUTPUT_DIR, `${nameWithoutExt}-mobile.mp4`);
    
    console.log(`  📱 Creating mobile WebM...`);
    const mobileWebmSuccess = optimizeVideo(videoFile, mobileWebmPath, OPTIMIZATION_SETTINGS.mobile.webm);
    
    console.log(`  📱 Creating mobile MP4...`);
    const mobileMp4Success = optimizeVideo(videoFile, mobileMp4Path, OPTIMIZATION_SETTINGS.mobile.mp4);
    
    // Optimize for desktop
    const desktopWebmPath = join(OUTPUT_DIR, `${nameWithoutExt}-desktop.webm`);
    const desktopMp4Path = join(OUTPUT_DIR, `${nameWithoutExt}-desktop.mp4`);
    
    console.log(`  🖥️  Creating desktop WebM...`);
    const desktopWebmSuccess = optimizeVideo(videoFile, desktopWebmPath, OPTIMIZATION_SETTINGS.desktop.webm);
    
    console.log(`  🖥️  Creating desktop MP4...`);
    const desktopMp4Success = optimizeVideo(videoFile, desktopMp4Path, OPTIMIZATION_SETTINGS.desktop.mp4);
    
    if (mobileWebmSuccess && mobileMp4Success && desktopWebmSuccess && desktopMp4Success) {
      successCount++;
      
      // Calculate optimized sizes
      const mobileWebmSize = await getFileSize(mobileWebmPath);
      const mobileMp4Size = await getFileSize(mobileMp4Path);
      const desktopWebmSize = await getFileSize(desktopWebmPath);
      const desktopMp4Size = await getFileSize(desktopMp4Path);
      
      const minSize = Math.min(mobileWebmSize, mobileMp4Size, desktopWebmSize, desktopMp4Size);
      totalOptimizedSize += minSize;
      
      const compressionRatio = ((originalSize - minSize) / originalSize * 100).toFixed(1);
      
      console.log(`  ✅ Optimized: ${formatFileSize(originalSize)} → ${formatFileSize(minSize)} (${compressionRatio}% reduction)`);
    } else {
      console.log(`  ❌ Failed to optimize ${fileName}`);
    }
    
    console.log('');
  }
  
  // Summary
  console.log('📊 Optimization Summary:');
  console.log(`  📁 Files processed: ${successCount}/${videoFiles.length}`);
  console.log(`  💾 Original size: ${formatFileSize(totalOriginalSize)}`);
  console.log(`  💾 Optimized size: ${formatFileSize(totalOptimizedSize)}`);
  console.log(`  📉 Total reduction: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log(`  📂 Output directory: ${OUTPUT_DIR}`);
  
  if (successCount > 0) {
    console.log('\n🎉 Video optimization completed successfully!');
    console.log('\n📝 Next steps:');
    console.log('  1. Update your video components to use the optimized files');
    console.log('  2. Implement responsive video loading based on device type');
    console.log('  3. Add lazy loading for videos below the fold');
    console.log('  4. Test performance improvements on mobile devices');
  } else {
    console.log('\n❌ No videos were successfully optimized.');
  }
}

main().catch(console.error); 