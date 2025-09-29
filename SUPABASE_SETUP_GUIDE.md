# Supabase Setup Guide for n8n Workflow Collection

## Step 1: Create Supabase Project

1. **Go to Supabase**: Visit [https://supabase.com](https://supabase.com) and sign up/login
2. **Create New Project**: Click "New Project" in your dashboard
3. **Project Details**:
   - **Name**: `n8n-workflow-collection` (or your preferred name)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Select closest to your users (e.g., US East for North America)
4. **Create Project**: Click "Create new project" and wait 2-3 minutes for setup

## Step 2: Get Your Project Credentials

1. **Go to Settings**: In your Supabase dashboard, click the gear icon (Settings)
2. **API Settings**: Click "API" in the left sidebar
3. **Copy Credentials**:
   - **Project URL**: `https://your-project-ref.supabase.co`
   - **anon public key**: `eyJ...` (starts with eyJ)
   - **service_role key**: `eyJ...` (starts with eyJ) - **Keep this secret!**

## Step 3: Set Up Environment Variables

Create a `.env` file in your project root:

```bash
# Supabase Configuration
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

## Step 4: Create Database Schema

1. **Open SQL Editor**: In Supabase dashboard, click "SQL Editor"
2. **Create New Query**: Click "New query"
3. **Copy Schema**: Copy the contents of `scripts/create-workflows-table.sql`
4. **Run Schema**: Paste and click "Run" to create the workflows table

## Step 5: Import Your Workflows

1. **Install Dependencies** (if not already done):
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Run Import Script**:
   ```bash
   # For a directory of JSON files:
   node scripts/import-workflows.js /path/to/your/workflows/directory/
   
   # For a single JSON file:
   node scripts/import-workflows.js /path/to/your/workflows.json
   ```

## Step 6: Verify Setup

1. **Check Table Editor**: In Supabase dashboard, go to "Table Editor"
2. **View workflows table**: You should see your imported workflows
3. **Test Search**: Use the SQL Editor to test:
   ```sql
   SELECT * FROM workflows WHERE title ILIKE '%automation%' LIMIT 5;
   ```

## Step 7: Update Frontend Configuration

Update `client/src/lib/supabase.ts` with your credentials:

```typescript
const supabaseUrl = 'https://your-project-ref.supabase.co';
const supabaseKey = 'your-anon-key-here';
```

## Troubleshooting

### Common Issues:

1. **Import Fails**: Check your service role key is correct
2. **Search Not Working**: Ensure the GIN indexes were created
3. **RLS Errors**: Check that the public read policy is active
4. **Slug Conflicts**: The script handles duplicate slugs automatically

### Useful SQL Queries:

```sql
-- Check total workflows
SELECT COUNT(*) FROM workflows;

-- Test search functionality
SELECT title, slug FROM workflows 
WHERE to_tsvector('english', title) @@ plainto_tsquery('automation')
LIMIT 10;

-- Check for duplicate slugs
SELECT slug, COUNT(*) FROM workflows 
GROUP BY slug HAVING COUNT(*) > 1;
```

## Next Steps

Once setup is complete:
1. Test the frontend with real data
2. Verify individual workflow pages load correctly
3. Test search functionality
4. Add SEO optimizations
