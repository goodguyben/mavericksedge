import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://fsvjrlaxqegmzcngpnib.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzdmpybGF4cWVnbXpjbmdwbmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwOTg2OTcsImV4cCI6MjA3NDY3NDY5N30.AZ_Ik2nPCF-aaFBGFc-BZJOIIVnbgHaGeXrZI-Fy9Cg';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Database types
export interface Workflow {
  id: number;
  title: string;
  slug: string;
  json_data: any;
  created_at: string;
}

// Search function
export async function searchWorkflows(query: string, limit: number = 20) {
  let supabaseQuery = supabase
    .from('workflows')
    .select('*')
    .order('id', { ascending: true });

  // Add text search if query provided
  if (query.trim()) {
    supabaseQuery = supabaseQuery.textSearch('title', query, {
      type: 'websearch',
      config: 'english',
    });
  }

  // Limit results
  supabaseQuery = supabaseQuery.limit(limit);

  const { data, error } = await supabaseQuery;

  if (error) {
    console.error('Error searching workflows:', error);
    throw error;
  }

  return data as Workflow[];
}

// Get featured workflows
export async function getFeaturedWorkflows(limit: number = 6) {
  const { data, error } = await supabase
    .from('workflows')
    .select('*')
    .order('id', { ascending: true })
    .limit(limit);

  if (error) {
    console.error('Error fetching featured workflows:', error);
    throw error;
  }

  return data as Workflow[];
}

// Get workflow by slug
export async function getWorkflowBySlug(slug: string) {
  const { data, error } = await supabase
    .from('workflows')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching workflow by slug:', error);
    throw error;
  }

  return data as Workflow;
}
