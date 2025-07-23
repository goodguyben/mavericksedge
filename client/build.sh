#!/bin/bash
set -e

echo "Installing dependencies..."
npm ci --only=production --no-audit --no-fund

echo "Building the application..."
npm run build

echo "Build completed successfully!" 