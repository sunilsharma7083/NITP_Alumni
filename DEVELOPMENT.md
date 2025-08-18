# 🚀 Development Guide

## Quick Commands

### Start the Application
```bash
# Use the startup script (recommended)
./start.sh

# Or manually
cd backend && npm start &
cd frontend && npm start &
```

### Development Mode
```bash
# Backend with nodemon (auto-restart)
cd backend && npm run dev

# Frontend (already has hot reload)
cd frontend && npm start
```

### Database Operations
```bash
# Connect to MongoDB shell
mongosh

# Switch to project database
use jnv_alumni_portal

# Create first admin user (replace with actual email)
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { role: "admin", isApproved: true } }
)

# View all users
db.users.find({}, { email: 1, fullName: 1, role: 1, isApproved: 1 })

# View all posts
db.posts.find({}, { title: 1, category: 1, isApproved: 1, createdAt: 1 })
```

### Common Development Tasks

#### Reset Database
```bash
# Drop the entire database (be careful!)
mongosh --eval "use jnv_alumni_portal; db.dropDatabase()"
```

#### Clear Browser Storage
```javascript
// In browser console
localStorage.clear();
sessionStorage.clear();
```

#### Test API Endpoints
```bash
# Test user registration
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "password": "Test123456",
    "batchYear": 2020,
    "admissionNumber": "12345",
    "dateOfBirth": "1995-01-01"
  }'

# Test user login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "Test123456"
  }'
```

## Project Structure

```
JNV_Alumni_Portal/
├── backend/                 # Node.js/Express API
│   ├── config/             # Database and service configs
│   ├── controllers/        # Route handlers
│   ├── middleware/         # Auth, validation, etc.
│   ├── models/            # Database schemas
│   ├── routes/            # API routes
│   ├── utils/             # Helper functions
│   ├── .env               # Environment variables
│   └── server.js          # Entry point
├── frontend/               # React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom hooks
│   │   ├── pages/         # Page components
│   │   ├── services/      # API calls
│   │   └── utils/         # Helper functions
│   ├── .env               # Environment variables
│   └── tailwind.config.js # Tailwind configuration
├── start.sh               # Startup script
└── README.md              # Documentation
```

## Environment Variables

### Backend (.env)
```env
# Required
MONGODB_URI=mongodb://localhost:27017/jnv_alumni_portal
JWT_SECRET=your_jwt_secret
JWT_RESET_SECRET=your_reset_secret
PORT=5000

# Optional (for full functionality)
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
```

## Debugging

### Backend Debugging
```bash
# Enable debug logs
DEBUG=* npm start

# Check if port is in use
lsof -i :5000

# Kill process on port
kill -9 $(lsof -t -i:5000)
```

### Frontend Debugging
```bash
# Clear npm cache
npm start -- --reset-cache

# Check for dependency issues
npm ls

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Database Debugging
```bash
# Check MongoDB status
brew services list | grep mongodb

# View MongoDB logs
tail -f /usr/local/var/log/mongodb/mongo.log

# Start MongoDB manually
mongod --config /usr/local/etc/mongod.conf
```

## Common Issues & Solutions

### Port Already in Use
```bash
# Find and kill the process
sudo lsof -i :5000
kill -9 <PID>
```

### MongoDB Connection Failed
```bash
# Start MongoDB
brew services start mongodb/brew/mongodb-community
# or
sudo systemctl start mongod
```

### JWT Token Issues
- Clear browser localStorage
- Check JWT_SECRET in backend .env
- Verify token expiration

### CORS Issues
- Check CORS configuration in server.js
- Verify frontend URL in allowedOrigins

### File Upload Issues
- Check Cloudinary configuration
- Verify file size limits
- Ensure proper file types

## Testing

### Manual Testing Checklist

#### Authentication
- [ ] User registration works
- [ ] Email validation works
- [ ] Password requirements enforced
- [ ] Login with correct credentials
- [ ] Login fails with wrong credentials
- [ ] JWT token is stored
- [ ] Protected routes require auth

#### User Management
- [ ] Profile update works
- [ ] Profile picture upload works
- [ ] User directory shows approved users
- [ ] Search and filter work

#### Posts
- [ ] Create post works
- [ ] Posts require admin approval
- [ ] Like/unlike functionality
- [ ] Comment functionality
- [ ] Post categories work

#### Real-time Features
- [ ] Socket connection established
- [ ] Messages sent and received
- [ ] User mentions work
- [ ] Group membership verified

#### Admin Features
- [ ] Admin can approve users
- [ ] Admin can approve posts
- [ ] Admin can view feedback
- [ ] Admin dashboard accessible

## Deployment Checklist

### Pre-deployment
- [ ] Update environment variables
- [ ] Test all functionality
- [ ] Check for console errors
- [ ] Verify database connections
- [ ] Update README if needed

### Production Environment Variables
- [ ] Use strong JWT secrets
- [ ] Configure production database
- [ ] Set up email service
- [ ] Configure Cloudinary
- [ ] Set NODE_ENV=production

## Contributing

1. Create a feature branch
2. Make changes with proper commit messages
3. Test thoroughly
4. Update documentation if needed
5. Create pull request

## Code Style

### Backend
- Use ES6+ features
- Follow Express.js conventions
- Add error handling
- Use meaningful variable names
- Add comments for complex logic

### Frontend
- Use functional components
- Follow React hooks patterns
- Use Tailwind CSS classes
- Keep components small and focused
- Handle loading and error states
