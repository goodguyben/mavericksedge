#!/usr/bin/env node

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const blogImages = [
  // This script is currently not generating images for any blog posts
  // as all the previous entries were for non-existent posts
  // Add new blog post image configurations here when needed
];

function generateBlogSVG({ filename, title, subtitle, color }) {
  const width = 1200;
  const height = 630;
  
  // Create SVG content
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${adjustBrightness(color, -30)};stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#gradient)"/>
  
  <!-- Pattern overlay -->
  <defs>
    <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
      <circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#dots)"/>
  
  <!-- Title -->
  <text x="${width/2}" y="${height/2 - 40}" font-family="Raleway, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">
    ${title}
  </text>
  
  <!-- Subtitle -->
  <text x="${width/2}" y="${height/2 + 20}" font-family="Raleway, sans-serif" font-size="24" text-anchor="middle" fill="rgba(255,255,255,0.8)">
    ${subtitle}
  </text>
  
  <!-- Branding -->
  <text x="${width/2}" y="${height - 30}" font-family="Raleway, sans-serif" font-size="18" text-anchor="middle" fill="rgba(255,255,255,0.6)">
    Mavericks Edge
  </text>
</svg>`;

  const outputPath = join(process.cwd(), 'public', 'attached_assets', 'blog', filename.replace('.jpg', '.svg'));
  
  // Ensure directory exists
  mkdirSync(join(process.cwd(), 'public', 'attached_assets', 'blog'), { recursive: true });
  
  writeFileSync(outputPath, svg);
  console.log(`Generated: ${filename.replace('.jpg', '.svg')}`);
}

function adjustBrightness(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Generate all blog images
console.log('Generating blog images...');
blogImages.forEach(generateBlogSVG);
console.log('Blog images generated successfully!'); 