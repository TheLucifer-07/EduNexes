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

# Test 2: Check transcript API configuration
echo ""
echo "2️⃣ Checking transcript API configuration..."
if [ -f ".env" ] && grep -q "YOUTUBE_TRANSCRIPT_API_KEY=" .env && ! grep -q "YOUTUBE_TRANSCRIPT_API_KEY=your_transcript_api_key_here" .env; then
    echo "   ✅ YouTube transcript API key configured"
else
    echo "   ⚠️  YOUTUBE_TRANSCRIPT_API_KEY missing in backend/.env"
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

# Test 5: Test YouTube route config
echo ""
echo "5️⃣ Checking YouTube transcription setup..."
if [ -f ".env" ] && grep -q "YOUTUBE_TRANSCRIPT_API_KEY=" .env && ! grep -q "YOUTUBE_TRANSCRIPT_API_KEY=your_transcript_api_key_here" .env; then
    echo "   ✅ Backend is ready to request transcripts"
else
    echo "   ❌ Missing YOUTUBE_TRANSCRIPT_API_KEY"
fi

echo ""
echo "📋 Summary:"
echo "   - If all checks pass, your setup is ready!"
echo "   - Start backend: cd backend && npm start"
echo "   - Start frontend: npm run dev"
echo "   - Access app: http://localhost:5173"
