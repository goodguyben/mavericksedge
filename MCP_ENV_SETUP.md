# Cursor MCP Environment Variables Setup - n8n Only

## Required Environment Variables for n8n MCP Server

### n8n MCP Server Configuration
```bash
N8N_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNTlhMzJkMy1kYjNlLTRhNTgtODQ2YS1hYjZmNWZmMTUwMTUiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzU1OTI4ODY4LCJleHAiOjE3NjM3MDEyMDB9.TXXoubzYE1XpRpAgo7ubqfPjzTb33c7pfN-CAENnw2Q
N8N_API_URL=http://localhost:5678
N8N_WORKFLOW_ID=KlTrZIBDCPEAWGMZ
```

## Setup Instructions

1. **Install n8n MCP Server:**
   ```bash
   npm install -g n8n-mcp
   ```

2. **Set Environment Variables:**
   - Copy the variables above to your `.env` file
   - Or set them directly in your system environment

3. **Restart Cursor** after setting up the environment variables

4. **Verify n8n MCP server is running** by checking Cursor's MCP status

## What This Enables

- **AI-Powered Workflow Automation**: Cursor can now trigger n8n workflows
- **Automated Development Tasks**: Generate code, process files, and more
- **Integration Capabilities**: Connect with external services and APIs
- **Workflow Management**: Create and manage complex automation workflows

## Troubleshooting API Authentication

If you're still getting "Unauthorized" errors, try these solutions:

### Option 1: Check n8n API Key Configuration
1. Open `http://localhost:5678` in your browser
2. Go to Settings → API Keys
3. Verify the API key is active and has the correct permissions

### Option 2: Restart n8n Container with Environment Variables
```bash
docker stop n8n
docker run -it --rm --name n8n -p 5678:5678 \
  -e N8N_API_KEY_ENABLED=true \
  -e N8N_API_KEY=your_api_key \
  -v n8n_data:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
```

### Option 3: Use Session Authentication
1. Log into n8n interface
2. Use browser session cookies for authentication
3. Configure MCP to use session-based auth

## Important Note

The MCP server expects `N8N_API_URL` (not `N8N_BASE_URL`) for the n8n API connection. Make sure to use the correct environment variable name.
