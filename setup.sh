#!/bin/bash

# Setup script for Zoofari React App

echo "🚀 Setting up Zoofari React App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 14 ]; then
    echo "❌ Node.js version 14 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy images if they exist
if [ -d "../img" ]; then
    echo "📸 Copying images..."
    mkdir -p public/img
    cp -r ../img/* public/img/ 2>/dev/null || true
    echo "✅ Images copied successfully"
else
    echo "⚠️  Warning: Images folder not found. Please manually copy images to public/img/"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm start"
echo ""
echo "The app will be available at http://localhost:3000"