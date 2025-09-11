#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function extractBlogData() {
  const blogDataPath = path.join(__dirname, '../client/src/data/blogData.ts');
  const content = fs.readFileSync(blogDataPath, 'utf8');
  const match = content.match(/export const blogData: BlogPost\[\] = (\[[\s\S]*?\]);/);
  if (!match) return [];
  const jsArray = match[1]
    .replace(/:\s*string/g, '')
    .replace(/:\s*number/g, '')
    .replace(/:\s*boolean/g, '')
    .replace(/:\s*string\[\]/g, '')
    .replace(/:\s*number\[\]/g, '')
    .replace(/:\s*boolean\[\]/g, '');
  // eslint-disable-next-line no-eval
  const data = eval(jsArray);
  return data;
}

function generateBlogSitemap(posts) {
  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">');
  posts.forEach((post) => {
    const loc = `https://mavericksedge.ca/blog/${post.slug}`;
    const lastmod = new Date(post.publishDate).toISOString();
    lines.push('  <url>');
    lines.push(`    <loc>${loc}</loc>`);
    lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push('    <changefreq>weekly</changefreq>');
    lines.push('    <priority>0.7</priority>');
    if (post.featuredImage) {
      const img = post.featuredImage.startsWith('http') ? post.featuredImage : `https://mavericksedge.ca${post.featuredImage}`;
      lines.push('    <image:image>');
      lines.push(`      <image:loc>${img}</image:loc>`);
      lines.push(`      <image:title>${escapeXml(post.title)}</image:title>`);
      lines.push('    </image:image>');
    }
    lines.push('  </url>');
  });
  lines.push('</urlset>');
  return lines.join('\n');
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function main() {
  console.log('Generating blog sitemap...');
  const posts = extractBlogData();
  if (!posts.length) {
    console.error('No blog posts found.');
    process.exit(1);
  }
  const xml = generateBlogSitemap(posts);
  const outPath = path.join(__dirname, '../public/sitemap-blog.xml');
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log(`Blog sitemap written to ${outPath}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {};


