const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// User model
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admissionNumber: { type: String },
  dateOfBirth: { type: Date, required: true },
  graduationYear: { type: Number },
  currentCompany: { type: String },
  currentPosition: { type: String },
  location: { type: String },
  role: { type: String, enum: ['alumni', 'admin'], default: 'alumni' },
  isApproved: { type: Boolean, default: false }
});

const User = mongoose.model('User', UserSchema);

async function createAdminUser() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Admin user details
    const adminData = {
      fullName: 'NITP Admin',
      email: 'admin@nitp.ac.in', // Change this to your preferred admin email
      password: 'Admin@123456', // Change this password
      admissionNumber: 'ADMIN001',
      dateOfBirth: new Date('1990-01-01'),
      graduationYear: 2020,
      currentCompany: 'NIT Patna',
      currentPosition: 'Administrator',
      location: 'Patna, Bihar',
      role: 'admin',
      isApproved: true
    };

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminData.email });
    if (existingAdmin) {
      console.log('❌ Admin user already exists with email:', adminData.email);
      console.log('📧 Email:', adminData.email);
      console.log('🔐 If you forgot the password, you can reset it through the app or update manually in database');
      process.exit(0);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    adminData.password = await bcrypt.hash(adminData.password, salt);

    // Create admin user
    const adminUser = new User(adminData);
    await adminUser.save();

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email:', 'admin@nitp.ac.in');
    console.log('🔐 Password:', 'Admin@123456');
    console.log('⚠️  Please change the password after first login!');
    console.log('🌐 Login at: http://localhost:3000/login');

  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
    if (error.code === 11000) {
      console.log('Admin user already exists. Try logging in or reset password.');
    }
  } finally {
    mongoose.connection.close();
  }
}

// Run the script
createAdminUser();
