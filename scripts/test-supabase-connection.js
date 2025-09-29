import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials!');
  console.error('Please set SUPABASE_URL and SUPABASE_ANON_KEY in your .env file');
  process.exit(1);
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  console.log('🔍 Testing Supabase connection...');
  console.log(`📡 URL: ${supabaseUrl}`);
  
  try {
    // Test basic connection
    const { data, error } = await supabase
      .from('workflows')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('❌ Connection failed:', error.message);
      return;
    }
    
    console.log('✅ Connection successful!');
    
    // Test table exists and get count
    const { count, error: countError } = await supabase
      .from('workflows')
      .select('*', { count: 'exact', head: true });
    
    if (countError) {
      console.error('❌ Error counting workflows:', countError.message);
      return;
    }
    
    console.log(`📊 Total workflows in database: ${count}`);
    
    // Test search functionality
    const { data: searchData, error: searchError } = await supabase
      .from('workflows')
      .select('id, title, slug')
      .limit(3);
    
    if (searchError) {
      console.error('❌ Search test failed:', searchError.message);
      return;
    }
    
    console.log('🔍 Sample workflows:');
    searchData.forEach(workflow => {
      console.log(`  - ID: ${workflow.id}, Title: ${workflow.title}, Slug: ${workflow.slug}`);
    });
    
    console.log('\n🎉 All tests passed! Your Supabase setup is ready.');
    
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

testConnection();
