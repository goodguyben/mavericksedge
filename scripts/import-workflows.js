import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials!');
  console.error('Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env file');
  console.error('See env.example for reference');
  process.exit(1);
}

// Create Supabase client with service role key for admin operations
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to extract title from workflow JSON
function extractWorkflowTitle(workflowJson) {
  try {
    const data = typeof workflowJson === 'string' ? JSON.parse(workflowJson) : workflowJson;
    
    // Extract title from name field first, then metadata
    let title = data.name || data.metadata?.title || 'Untitled Workflow';
    
    // If title is still "Untitled Workflow", try to generate from filename or nodes
    if (title === 'Untitled Workflow' && data.nodes && data.nodes.length > 0) {
      // Try to get title from first node name
      const firstNode = data.nodes[0];
      if (firstNode.name && firstNode.name !== 'Start' && firstNode.name !== 'On Workflow Execution') {
        title = firstNode.name + ' Workflow';
      }
    }
    
    return title;
  } catch (error) {
    console.error('Error parsing workflow JSON:', error);
    return 'Invalid Workflow';
  }
}

// Function to generate SEO-friendly slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[🎯🚀⚡🔧📊💡]/g, '') // Remove emojis
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Function to get the current max ID from database
async function getMaxId() {
  try {
    const { data, error } = await supabase
      .from('workflows')
      .select('id')
      .order('id', { ascending: false })
      .limit(1)
      .single();
    
    if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned"
      throw error;
    }
    
    return data ? data.id : 0;
  } catch (error) {
    console.error('Error getting max ID:', error);
    return 0;
  }
}

// Function to import workflows from a directory
async function importWorkflowsFromDirectory(directoryPath) {
  try {
    console.log(`Reading workflows from: ${directoryPath}`);
    
    // Get current max ID from database
    const maxId = await getMaxId();
    console.log(`Current max ID in database: ${maxId}`);
    console.log(`New workflows will start from ID: ${maxId + 1}`);
    
    // Read all JSON files from the directory
    const files = fs.readdirSync(directoryPath).filter(file => file.endsWith('.json'));
    console.log(`Found ${files.length} JSON files`);
    
    const workflows = [];
    
    for (const file of files) {
      try {
        const filePath = path.join(directoryPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const workflowJson = JSON.parse(fileContent);
        
        const title = extractWorkflowTitle(workflowJson);
        const slug = generateSlug(title);
        workflows.push({
          title,
          slug,
          json_data: workflowJson
        });
        
        console.log(`Processed: ${title}`);
      } catch (error) {
        console.error(`Error processing file ${file}:`, error);
      }
    }
    
    console.log(`\nPrepared ${workflows.length} workflows for import`);
    
    // Insert workflows with sequential IDs starting from maxId + 1
    const batchSize = 100;
    let inserted = 0;
    
    for (let i = 0; i < workflows.length; i += batchSize) {
      const batch = workflows.slice(i, i + batchSize);
      
      // Add sequential IDs starting from maxId + 1
      const batchWithIds = batch.map((workflow, index) => {
        const currentId = maxId + inserted + index + 1;
        // Make slug unique by appending ID
        const uniqueSlug = `${workflow.slug}-${currentId}`;
        
        return {
          id: currentId,
          title: workflow.title,
          slug: uniqueSlug,
          json_data: workflow.json_data
        };
      });
      
      console.log(`Inserting batch ${Math.floor(i / batchSize) + 1} (${batch.length} workflows)...`);
      
      const { data, error } = await supabase
        .from('workflows')
        .insert(batchWithIds);
      
      if (error) {
        console.error('Error inserting batch:', error);
      } else {
        inserted += batch.length;
        console.log(`Successfully inserted ${inserted}/${workflows.length} workflows`);
      }
    }
    
    console.log(`\nImport completed! Inserted ${inserted} workflows.`);
    
  } catch (error) {
    console.error('Error importing workflows:', error);
  }
}

// Function to import from a single JSON file
async function importWorkflowsFromFile(filePath) {
  try {
    console.log(`Reading workflows from: ${filePath}`);
    
    // Get current max ID from database
    const maxId = await getMaxId();
    console.log(`Current max ID in database: ${maxId}`);
    console.log(`New workflows will start from ID: ${maxId + 1}`);
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const workflowsData = JSON.parse(fileContent);
    
    // Handle both single workflow and array of workflows
    const workflowsArray = Array.isArray(workflowsData) ? workflowsData : [workflowsData];
    
    console.log(`Found ${workflowsArray.length} workflows`);
    
    const workflows = workflowsArray.map(workflowJson => {
      const title = extractWorkflowTitle(workflowJson);
      const slug = generateSlug(title);
      return {
        title,
        slug,
        json_data: workflowJson
      };
    });
    
    console.log(`\nPrepared ${workflows.length} workflows for import`);
    
    // Insert workflows with sequential IDs starting from maxId + 1
    const batchSize = 100;
    let inserted = 0;
    
    for (let i = 0; i < workflows.length; i += batchSize) {
      const batch = workflows.slice(i, i + batchSize);
      
      // Add sequential IDs starting from maxId + 1
      const batchWithIds = batch.map((workflow, index) => {
        const currentId = maxId + inserted + index + 1;
        // Make slug unique by appending ID
        const uniqueSlug = `${workflow.slug}-${currentId}`;
        
        return {
          id: currentId,
          title: workflow.title,
          slug: uniqueSlug,
          json_data: workflow.json_data
        };
      });
      
      console.log(`Inserting batch ${Math.floor(i / batchSize) + 1} (${batch.length} workflows)...`);
      
      const { data, error } = await supabase
        .from('workflows')
        .insert(batchWithIds);
      
      if (error) {
        console.error('Error inserting batch:', error);
      } else {
        inserted += batch.length;
        console.log(`Successfully inserted ${inserted}/${workflows.length} workflows`);
      }
    }
    
    console.log(`\nImport completed! Inserted ${inserted} workflows.`);
    
  } catch (error) {
    console.error('Error importing workflows:', error);
  }
}

// Main execution
async function main() {
  console.log('🚀 Starting n8n Workflow Import...');
  console.log(`📡 Connecting to: ${supabaseUrl}`);
  
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: node import-workflows.js <path-to-json-file-or-directory>');
    console.log('Example: node import-workflows.js ./workflows.json');
    console.log('Example: node import-workflows.js ./workflows-directory/');
    process.exit(1);
  }
  
  const inputPath = args[0];
  
  // Check if path exists
  if (!fs.existsSync(inputPath)) {
    console.error(`Path does not exist: ${inputPath}`);
    process.exit(1);
  }
  
  const stats = fs.statSync(inputPath);
  
  if (stats.isDirectory()) {
    await importWorkflowsFromDirectory(inputPath);
  } else if (stats.isFile()) {
    await importWorkflowsFromFile(inputPath);
  } else {
    console.error('Invalid path type');
    process.exit(1);
  }
}

// Run the import
main().catch(console.error);
