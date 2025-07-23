# Vercel Deployment Guide

## Prerequisites
1. Vercel account (sign up at https://vercel.com)
2. Vercel CLI installed: `npm install -g vercel`

## Deployment Steps

### 1. Build the Application
```bash
npm run build
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy to Vercel
```bash
vercel --prod
```

## Configuration Files

### vercel.json
The project includes a `vercel.json` configuration file that:
- Builds the Node.js server from `dist/index.js`
- Routes API requests to the serverless function
- Serves static files from `dist/public/`
- Sets production environment variables

### Project Structure
- **Frontend**: React + Vite (built to `dist/public/`)
- **Backend**: Express.js server (built to `dist/index.js`)
- **API Routes**: Handled by the Express server
- **Static Files**: Served from the build output

## Environment Variables
Make sure to set the following environment variables in your Vercel dashboard:
- `NODE_ENV=production`
- Any database connection strings
- API keys and secrets

## Custom Domain
After deployment, you can add a custom domain in the Vercel dashboard.

## Troubleshooting
- If you encounter issues, check the Vercel deployment logs
- Ensure all dependencies are properly installed
- Verify that the build process completes successfully 