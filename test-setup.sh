#!/bin/bash

echo "🧪 Testing YouTube AI Setup..."
echo ""

# Test 1: Check if backend dependencies are installed
echo "1️⃣ Checking Node.js dependencies..."
cd backend
if [ -d "node_modules" ]; then
    echo "   ✅ Node modules installed"
else
    echo "   ❌ Node modules missing - run: cd backend && npm install"
fi

# Test 2: Check Python dependencies
echo ""
echo "2️⃣ Checking Python dependencies..."
if python3 -c "import youtube_transcript_api" 2>/dev/null; then
    echo "   ✅ youtube-transcript-api installed"
else
    echo "   ❌ youtube-transcript-api missing - run: pip3 install youtube-transcript-api"
fi

# Test 3: Check .env file
echo ""
echo "3️⃣ Checking environment variables..."
if [ -f ".env" ]; then
    if grep -q "GEMINI_API_KEY_1=your_api_key_here" .env || ! grep -q "GEMINI_API_KEY_1=" .env; then
        echo "   ⚠️  .env exists but API key not configured"
        echo "      Please add your Gemini API key to backend/.env"
    else
        echo "   ✅ .env configured"
    fi
else
    echo "   ❌ .env file missing"
fi

# Test 4: Check if backend is running
echo ""
echo "4️⃣ Checking if backend is running..."
if curl -s http://localhost:5000 > /dev/null 2>&1; then
    echo "   ✅ Backend is running on port 5000"
else
    echo "   ⚠️  Backend not running - start with: cd backend && npm start"
fi

# Test 5: Test Python script directly
echo ""
echo "5️⃣ Testing Python transcript script..."
TEST_URL="https://www.youtube.com/watch?v=jNQXAC9IVRw"
RESULT=$(python3 transcript.py "$TEST_URL" 2>&1 | head -c 100)
if [[ $RESULT == Error* ]]; then
    echo "   ❌ Python script error: $RESULT"
else
    echo "   ✅ Python script working"
fi

echo ""
echo "📋 Summary:"
echo "   - If all checks pass, your setup is ready!"
echo "   - Start backend: cd backend && npm start"
echo "   - Start frontend: npm run dev"
echo "   - Access app: http://localhost:5173"
