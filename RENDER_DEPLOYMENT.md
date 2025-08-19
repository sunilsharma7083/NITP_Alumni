# Render Deployment Guide

## Backend Deployment (Already Done)
- Backend is deployed at: `https://nitp-alumni.onrender.com`
- Make sure the following environment variables are set in your Render backend service:
  - All your MongoDB, JWT, and other backend environment variables

## Frontend Deployment

### Method 1: Using .env.production (Recommended)
1. The `.env.production` file has been created with the correct backend URLs
2. When you build for production, React will automatically use this file
3. Deploy your frontend to Render as a static site

### Method 2: Set Environment Variables in Render
If you prefer to set environment variables in Render dashboard:
1. Go to your frontend service settings in Render
2. Add these environment variables:
   - `REACT_APP_API_URL=https://nitp-alumni.onrender.com/api`
   - `REACT_APP_SOCKET_URL=https://nitp-alumni.onrender.com`
   - `REACT_APP_ENV=production`

### Build Command
Use this build command in Render:
```
npm run build
```

### Start Command
For static sites, Render will automatically serve from the `build` folder.

## Changes Made to Fix CORS Issues

1. **Backend (server.js)**: Added your frontend URL to allowed origins:
   ```javascript
   const allowedOrigins = [
     "http://localhost:3000",
     "http://localhost:3001", 
     "https://nit-patna-alumni-portal.vercel.app",
     "https://nitpatna-alumni.herokuapp.com",
     "https://nitp-alumni-1.onrender.com"  // Added this line
   ];
   ```

2. **Frontend**: 
   - Created `.env.production` with correct backend URLs
   - Fixed Vercel Analytics to only load on Vercel deployments
   - Added missing `manifest.json` file
   - Updated SocketContext to use dedicated socket URL

## Testing
After deployment:
1. Check browser console for CORS errors (should be resolved)
2. Test login functionality 
3. Test real-time chat features
4. Verify API calls are going to the correct backend URL

## Troubleshooting
If you still get CORS errors:
1. Make sure your frontend URL exactly matches what's in the `allowedOrigins` array
2. Check that your backend is properly deployed and accessible
3. Verify environment variables are correctly set in Render
