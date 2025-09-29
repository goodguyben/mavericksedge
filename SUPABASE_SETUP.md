# Supabase Setup Guide

## 1. Create Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign up
2. Click "New Project"
3. Fill in project details:
   - **Name**: n8n-workflow-collection
   - **Database Password**: (choose a strong password)
   - **Region**: Choose closest to your users
4. Click "Create new project"

## 2. Get API Keys

1. Go to **Settings** → **API**
2. Copy your **Project URL** and **anon public** key
3. Create a `.env.local` file in the `client` directory:

```bash
# client/.env.local
REACT_APP_SUPABASE_URL=https://your-project-ref.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
```

## 3. Create Database Table

1. Go to **SQL Editor** in Supabase dashboard
2. Run the SQL from `scripts/create-workflows-table.sql`:

```sql
-- Create workflows table
CREATE TABLE IF NOT EXISTS workflows (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  json_data JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS workflows_title_idx ON workflows USING GIN (to_tsvector('english', title));
CREATE INDEX IF NOT EXISTS workflows_created_at_idx ON workflows (created_at);

-- Create full-text search index
CREATE INDEX IF NOT EXISTS workflows_search_idx ON workflows 
USING GIN (to_tsvector('english', title));

-- Enable Row Level Security (RLS)
ALTER TABLE workflows ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON workflows
  FOR SELECT USING (true);
```

## 4. Import Your Workflows

1. Create a `.env` file in the project root:

```bash
# .env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

2. Run the import script:

```bash
# For a single JSON file
node scripts/import-workflows.js path/to/your/workflows.json

# For a directory of JSON files
node scripts/import-workflows.js path/to/your/workflows-directory/
```

## 5. Test the Integration

1. Start the development server:
```bash
npm run dev
```

2. Visit `http://localhost:5173/n8n-workflow-collection`

3. Test the search functionality

## Troubleshooting

- **CORS errors**: Make sure your Supabase project allows your domain
- **RLS errors**: Check that the public read policy is enabled
- **Import errors**: Verify your service role key has the correct permissions
- **Search not working**: Ensure the full-text search indexes are created

## Next Steps

- Add more workflow categories
- Implement advanced filtering
- Add workflow ratings and reviews
- Create user accounts for favorites
