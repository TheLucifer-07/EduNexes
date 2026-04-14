#!/bin/bash

echo "🔍 EduNexes - Status Check"
echo "================================"
echo ""

# Check Backend
echo "🔧 Backend Status:"
if curl -s http://localhost:5000 > /dev/null 2>&1; then
    echo "   ✅ Backend is RUNNING on port 5000"
    RESPONSE=$(curl -s http://localhost:5000)
    echo "   Response: $RESPONSE"
else
    echo "   ❌ Backend is NOT running"
    echo "   Start with: cd backend && npm start"
fi

echo ""

# Check Frontend
echo "🎨 Frontend Status:"
if curl -s http://localhost:5173 > /dev/null 2>&1; then
    echo "   ✅ Frontend is RUNNING on port 5173"
else
    echo "   ❌ Frontend is NOT running"
    echo "   Start with: npm run dev"
fi

echo ""

# Check Dependencies
echo "📦 Dependencies:"
if [ -d "backend/node_modules" ]; then
    echo "   ✅ Backend dependencies installed"
else
    echo "   ❌ Backend dependencies missing"
    echo "   Install with: cd backend && npm install"
fi

# Check Config
echo "⚙️  Configuration:"
if [ -f "backend/.env" ]; then
    echo "   ✅ .env file exists"
    if grep -q "GEMINI_API_KEY_1=" backend/.env && ! grep -q "GEMINI_API_KEY_1=your_api_key_here" backend/.env; then
        echo "   ✅ API key configured"
    else
        echo "   ⚠️  API key needs to be set in backend/.env"
    fi
else
    echo "   ❌ .env file missing"
fi

echo ""
echo "================================"
echo ""

# Overall Status
if curl -s http://localhost:5000 > /dev/null 2>&1 && curl -s http://localhost:5173 > /dev/null 2>&1; then
    echo "🎉 All systems operational!"
    echo "   Access app at: http://localhost:5173"
else
    echo "⚠️  Some services are not running"
    echo "   Run ./start.sh to start everything"
fi
