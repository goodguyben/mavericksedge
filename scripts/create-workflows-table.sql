-- Create workflows table
CREATE TABLE IF NOT EXISTS workflows (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  json_data JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS workflows_title_idx ON workflows USING GIN (to_tsvector('english', title));
CREATE INDEX IF NOT EXISTS workflows_slug_idx ON workflows (slug);
CREATE INDEX IF NOT EXISTS workflows_created_at_idx ON workflows (created_at);

-- Create full-text search index
CREATE INDEX IF NOT EXISTS workflows_search_idx ON workflows 
USING GIN (to_tsvector('english', title));

-- Enable Row Level Security (RLS)
ALTER TABLE workflows ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON workflows
  FOR SELECT USING (true);

-- Create policy to allow insert for authenticated users (optional)
CREATE POLICY "Allow insert for authenticated users" ON workflows
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow update for authenticated users (optional)
CREATE POLICY "Allow update for authenticated users" ON workflows
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policy to allow delete for authenticated users (optional)
CREATE POLICY "Allow delete for authenticated users" ON workflows
  FOR DELETE USING (auth.role() = 'authenticated');
