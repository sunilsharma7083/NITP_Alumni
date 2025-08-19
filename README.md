# 🎓 NIT Patna Alumni Portal

A comprehensive alumni portal for National Institute of Technology Patna alumni to connect, share experiences, and build a stronger professional network.

## 🌟 Features

- **User Authentication & Authorization**
  - Secure registration and login system
  - Admin approval system for new users
  - Password reset functionality
  - JWT-based authentication

- **Alumni Directory**
  - Browse and search alumni profiles
  - Filter by batch year, location, and organization
  - Detailed alumni profiles with social media links

- **Post Management**
  - Create and share posts (Job Openings, Articles, Events, News Updates)
  - Like and comment on posts
  - Admin approval system for posts

- **Real-time Chat System**
  - Group-based messaging
  - Real-time message delivery using Socket.io
  - Mention functionality (@username)

- **Admin Dashboard**
  - Manage pending users and posts
  - View feedback from users
  - User role management

- **Birthday Notifications**
  - Automated birthday email system
  - Daily cron job for birthday wishes

- **Responsive Design**
  - Mobile-friendly interface
  - Modern UI with Tailwind CSS
  - Premium animations and effects

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Socket.io** - Real-time communication
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Nodemailer** - Email functionality
- **Cloudinary** - Image upload and management
- **Node-cron** - Scheduled tasks

### Frontend
- **React 18** - UI framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client
- **Socket.io-client** - Real-time client
- **React Hot Toast** - Notifications
- **Framer Motion** - Animations

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MongoDB** (v5 or higher)
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/NITP_Alumni_Portal.git
cd NITP_Alumni_Portal
```

### 2. Install Dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
cd ..
```

### 3. Start MongoDB
Make sure MongoDB is running on your system:

**macOS (with Homebrew):**
```bash
brew services start mongodb/brew/mongodb-community
```

**Linux (Ubuntu/Debian):**
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

**Windows:**
```bash
net start MongoDB
```

### 4. Environment Configuration

The environment files are already configured with default values. You can customize them as needed:

**Backend (.env):**
- Database connection string
- JWT secrets
- Email configuration (optional)
- Cloudinary configuration (optional)

**Frontend (.env):**
- API URL configuration
- Socket URL configuration

### 5. Run the Application

**Option 1: Use the startup script (Recommended)**
```bash
./start.sh
```

**Option 2: Manual startup**
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend  
cd frontend
npm start
```

### 6. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📱 Usage

### First Time Setup

1. **Access the application** at http://localhost:3000
2. **Register a new account** with your details
3. **Wait for admin approval** (you'll need to create an admin user in the database)
4. **Login** once approved and start using the portal

### Creating an Admin User

To create the first admin user, you can use MongoDB Compass or the MongoDB shell:

```javascript
// Connect to MongoDB
use nit_patna_alumni_portal

// Update a user to admin role
db.users.updateOne(
  { email: "your-admin-email@example.com" },
  { 
    $set: { 
      role: "admin",
      isApproved: true 
    }
  }
)
```

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development
```bash
cd frontend
npm start   # React development server with hot reload
```

### Database

The application uses the following main collections:
- **users** - Alumni profiles and authentication data
- **posts** - Posts, job openings, articles, and events
- **groups** - Interest-based and batch-wise groups
- **messages** - Real-time chat messages
- **notifications** - User notifications and mentions
- **feedbacks** - Alumni feedback and suggestions

## 🔐 Security Features

- **Password Hashing** with bcrypt
- **JWT Authentication** with secure secrets
- **Rate Limiting** on sensitive endpoints
- **Input Validation** and sanitization
- **CORS Configuration** for secure API access
- **Account Lockout** after failed login attempts
- **Helmet.js** for security headers

## 🌐 Deployment

### Backend Deployment
1. Set up environment variables on your server
2. Install dependencies: `npm install --production`
3. Start the application: `npm start`

### Frontend Deployment
1. Build the application: `npm run build`
2. Serve the build folder using a static file server

### Database
- MongoDB Atlas for cloud database
- Local MongoDB for development

## 🔧 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
```
Error: ECONNREFUSED 127.0.0.1:27017
```
Solution: Make sure MongoDB is running on your system.

**Port Already in Use:**
```
Error: listen EADDRINUSE :::5000
```
Solution: Stop the existing process or change the port in the .env file.

**JWT Token Error:**
```
Error: jwt malformed
```
Solution: Clear browser localStorage and login again.

**Build Errors:**
Solution: Delete node_modules and package-lock.json, then run `npm install` again.

## 👥 Development Team

**NIT Patna Alumni Portal Development Team**
- Modern, scalable architecture
- Professional design and user experience
- Real-time features and mobile responsiveness

**Original Inspiration:**
Sumit Dhaker - Electronics & Communication Engineering, NIT Patna | Batch 2026

Project: NIT Patna Alumni Portal
URL: https://nit-patna-alumni-portal.vercel.app/

---

**Happy Connecting! 🎓✨**
# NITP_Alumni
