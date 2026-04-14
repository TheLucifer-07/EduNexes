#!/bin/bash

echo "🚀 Starting EduNexes Application..."
echo ""

# Check if backend dependencies are installed
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

# Check if .env exists and has API key
if [ ! -f "backend/.env" ]; then
    echo "❌ Error: backend/.env file not found!"
    echo "Please create backend/.env and add your Gemini API key:"
    echo "GEMINI_API_KEY_1=your_api_key_here"
    exit 1
fi

# Start backend in background
echo "🔧 Starting backend server..."
cd backend
node server.js &
BACKEND_PID=$!
cd ..

# Wait for backend to start
sleep 3

# Check if backend is running
if curl -s http://localhost:5000 > /dev/null 2>&1; then
    echo "✅ Backend running on http://localhost:5000"
else
    echo "❌ Backend failed to start"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

# Start frontend
echo "🎨 Starting frontend..."
echo ""
echo "📱 Frontend will be available at: http://localhost:5173"
echo "🔗 Backend API running at: http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

npm run dev

# Cleanup: Kill backend when frontend stops
kill $BACKEND_PID 2>/dev/null
echo ""
echo "👋 Servers stopped"
