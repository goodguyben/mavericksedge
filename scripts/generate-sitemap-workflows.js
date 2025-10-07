#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
  process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateWorkflowSitemap(workflows) {
  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
  
  // Use today's date as lastmod for all workflows since we've added new content
  const today = new Date().toISOString().split('T')[0];
  
  workflows.forEach((workflow) => {
    const loc = `https://mavericksedge.ca/largest-n8n-workflow-collection/${workflow.slug}`;
    
    lines.push('  <url>');
    lines.push(`    <loc>${escapeXml(loc)}</loc>`);
    lines.push(`    <lastmod>${today}</lastmod>`);
    lines.push('    <changefreq>monthly</changefreq>');
    lines.push('    <priority>0.7</priority>');
    lines.push('  </url>');
  });
  
  lines.push('</urlset>');
  return lines.join('\n');
}

async function fetchAllWorkflows() {
  console.log('Fetching all workflows from Supabase...');
  
  let allWorkflows = [];
  let page = 0;
  const pageSize = 1000; // Supabase default limit
  
  while (true) {
    const { data, error } = await supabase
      .from('workflows')
      .select('id, title, slug, created_at')
      .order('id', { ascending: true })
      .range(page * pageSize, (page + 1) * pageSize - 1);
    
    if (error) {
      console.error('Error fetching workflows:', error);
      throw error;
    }
    
    if (!data || data.length === 0) {
      break;
    }
    
    allWorkflows = allWorkflows.concat(data);
    console.log(`Fetched ${allWorkflows.length} workflows so far...`);
    
    if (data.length < pageSize) {
      break; // Last page
    }
    
    page++;
  }
  
  console.log(`Total workflows fetched: ${allWorkflows.length}`);
  return allWorkflows;
}

async function main() {
  try {
    console.log('🚀 Starting workflow sitemap generation...');
    
    const workflows = await fetchAllWorkflows();
    
    if (workflows.length === 0) {
      console.error('No workflows found in database.');
      process.exit(1);
    }
    
    console.log(`Generating sitemap for ${workflows.length} workflows...`);
    const xml = generateWorkflowSitemap(workflows);
    
    const outPath = path.join(__dirname, '../public/sitemap-workflows.xml');
    fs.writeFileSync(outPath, xml, 'utf8');
    
    console.log(`✅ Workflow sitemap written to ${outPath}`);
    console.log(`📊 Total workflows indexed: ${workflows.length}`);
    
    // Update the main sitemap index lastmod date
    const sitemapIndexPath = path.join(__dirname, '../public/sitemap.xml');
    const sitemapIndexContent = fs.readFileSync(sitemapIndexPath, 'utf8');
    const today = new Date().toISOString().split('T')[0];
    const updatedContent = sitemapIndexContent.replace(
      /<lastmod>2025-09-29T00:00:00\+00:00<\/lastmod>/,
      `<lastmod>${today}T00:00:00+00:00</lastmod>`
    );
    fs.writeFileSync(sitemapIndexPath, updatedContent, 'utf8');
    
    console.log('✅ Updated sitemap index with new lastmod date');
    
  } catch (error) {
    console.error('❌ Error generating workflow sitemap:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export {};
