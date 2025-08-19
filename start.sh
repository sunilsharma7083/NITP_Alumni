#!/bin/bash

# NITP Alumni Portal Startup Script
# This script starts both the backend and frontend servers

echo "🚀 Starting NITP Alumni Portal..."
echo ""

# Function to check if a port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        echo "⚠️  Port $1 is already in use. Please stop the existing process or choose a different port."
        return 1
    fi
    return 0
}

# Check if ports are available
echo "🔍 Checking if ports are available..."
if ! check_port 5000; then
    echo "Backend port (5000) is in use"
    exit 1
fi

if ! check_port 3000; then
    echo "Frontend port (3000) is in use"
    exit 1
fi

echo "✅ Ports are available"
echo ""

# Check if MongoDB is running
echo "🔍 Checking MongoDB connection..."
if ! mongosh --quiet --eval "db.adminCommand('ping')" >/dev/null 2>&1; then
    echo "⚠️  MongoDB is not running. Please start MongoDB first."
    echo "   You can start MongoDB with: brew services start mongodb/brew/mongodb-community"
    echo "   Or: sudo systemctl start mongod (Linux)"
    exit 1
fi
echo "✅ MongoDB is running"
echo ""

# Start backend server in background
echo "🔧 Starting backend server..."
cd backend
npm start &
BACKEND_PID=$!
echo "Backend server started with PID: $BACKEND_PID"
cd ..

# Wait a few seconds for backend to start
sleep 5

# Start frontend server in background
echo "🎨 Starting frontend server..."
cd frontend
npm start &
FRONTEND_PID=$!
echo "Frontend server started with PID: $FRONTEND_PID"
cd ..

echo ""
echo "🎉 Both servers are starting up!"
echo "📊 Backend API: http://localhost:5000"
echo "🌐 Frontend App: http://localhost:3000"
echo ""
echo "📝 To stop both servers, press Ctrl+C or run: kill $BACKEND_PID $FRONTEND_PID"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Shutting down servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ Servers stopped"
    exit 0
}

# Trap Ctrl+C and call cleanup
trap cleanup INT

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
