
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Video directories to process
const VIDEO_DIRS = [
  'client/public/videos',
  'client/public/videos/services',
  'client/src/assets',
  'attached_assets'
];

async function checkFFmpeg() {
  try {
    await execAsync('ffmpeg -version');
    console.log('✓ FFmpeg found');
    return true;
  } catch (error) {
    console.error('❌ FFmpeg not found. Please install FFmpeg first.');
    return false;
  }
}

async function stripAudioFromVideo(inputPath) {
  const dir = path.dirname(inputPath);
  const ext = path.extname(inputPath);
  const basename = path.basename(inputPath, ext);
  const outputPath = path.join(dir, `${basename}_no_audio${ext}`);
  const tempPath = path.join(dir, `${basename}_temp${ext}`);

  console.log(`Stripping audio from: ${inputPath}`);

  try {
    // Strip audio using FFmpeg
    const command = `ffmpeg -i "${inputPath}" -c:v copy -an "${tempPath}" -y`;
    
    await execAsync(command);
    
    // Replace original file with audio-stripped version
    fs.renameSync(tempPath, inputPath);
    
    console.log(`✓ Audio stripped from: ${inputPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    
    // Clean up temp file if it exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    
    return false;
  }
}

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`);
    return { processed: 0, errors: 0 };
  }

  console.log(`\n📁 Processing directory: ${dirPath}`);
  
  const files = fs.readdirSync(dirPath);
  let processed = 0;
  let errors = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) continue;
    
    const ext = path.extname(file).toLowerCase();
    
    // Process video files
    if (['.mp4', '.mov', '.avi', '.webm', '.mkv'].includes(ext)) {
      const success = await stripAudioFromVideo(filePath);
      if (success) {
        processed++;
      } else {
        errors++;
      }
    }
  }
  
  return { processed, errors };
}

async function main() {
  console.log('🔇 Starting audio removal from videos...\n');
  
  const ffmpegAvailable = await checkFFmpeg();
  if (!ffmpegAvailable) {
    console.log('\n📝 To install FFmpeg:');
    console.log('- On macOS: brew install ffmpeg');
    console.log('- On Ubuntu/Debian: sudo apt update && sudo apt install ffmpeg');
    console.log('- On Windows: Download from https://ffmpeg.org/download.html');
    return;
  }
  
  let totalProcessed = 0;
  let totalErrors = 0;
  
  for (const dir of VIDEO_DIRS) {
    const result = await processDirectory(dir);
    totalProcessed += result.processed;
    totalErrors += result.errors;
  }
  
  console.log('\n📊 Audio Removal Summary:');
  console.log(`✅ Videos processed: ${totalProcessed}`);
  console.log(`❌ Errors: ${totalErrors}`);
  
  if (totalProcessed > 0) {
    console.log('\n✅ Audio removal complete!');
    console.log('\n📝 All videos now have no audio track and will be silent.');
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { stripAudioFromVideo, processDirectory };
