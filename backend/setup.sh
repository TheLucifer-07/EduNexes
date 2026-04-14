#!/bin/bash

echo "🔧 Setting up YouTube AI Backend..."

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm install

# Check if Python3 is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 is not installed. Please install Python3 first."
    exit 1
fi

# Install Python dependencies
echo "🐍 Installing Python dependencies..."
pip3 install youtube-transcript-api

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating template..."
    cat > .env << EOF
GEMINI_API_KEY_1=your_api_key_here
GEMINI_API_KEY_2=
GEMINI_API_KEY_3=
GEMINI_API_KEY_4=
EOF
    echo "📝 Please add your Gemini API keys to .env file"
else
    echo "✅ .env file found"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the backend:"
echo "  npm start"
echo ""
echo "Backend will run on: http://localhost:5000"
