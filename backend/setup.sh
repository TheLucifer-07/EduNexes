#!/bin/bash

echo "🔧 Setting up EduNexes Backend..."

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm install

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating template..."
    cat > .env << EOF
GEMINI_API_KEY_1=your_api_key_here
EOF
    echo "📝 Please add your API keys to .env file"
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
