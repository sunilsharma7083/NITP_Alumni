import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  EyeIcon, 
  EyeSlashIcon, 
  UserPlusIcon, 
  EnvelopeIcon, 
  LockClosedIcon,
  UserIcon,
  CalendarDaysIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import authService from '../services/authService';
import toast from 'react-hot-toast';

export default function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        batchYear: '',
        admissionNumber: '',
        dateOfBirth: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Full name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        } else if (formData.fullName.length < 2) {
            newErrors.fullName = 'Full name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
            newErrors.fullName = 'Full name can only contain letters and spaces';
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one lowercase letter, one uppercase letter, and one number';
        }

        // Batch year validation
        if (!formData.batchYear) {
            newErrors.batchYear = 'Batch year is required';
        } else {
            const year = parseInt(formData.batchYear);
            const currentYear = new Date().getFullYear();
            if (year < 1950 || year > currentYear) {
                newErrors.batchYear = `Batch year must be between 1950 and ${currentYear}`;
            }
        }

        // Date of birth validation
        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = 'Date of birth is required';
        } else {
            const dob = new Date(formData.dateOfBirth);
            const today = new Date();
            const minDate = new Date('1900-01-01');
            
            if (dob > today) {
                newErrors.dateOfBirth = 'Date of birth cannot be in the future';
            } else if (dob < minDate) {
                newErrors.dateOfBirth = 'Date of birth must be after 1900';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            await authService.register(formData);
            toast.success('Registration successful! Please wait for admin approval.');
            navigate('/login');
        } catch (error) {
            const message = error.response?.data?.message || 'Registration failed.';
            
            // Handle validation errors from backend
            if (error.response?.data?.errors) {
                const backendErrors = {};
                error.response.data.errors.forEach(err => {
                    backendErrors[err.field] = err.message;
                });
                setErrors(backendErrors);
                toast.error('Please fix the validation errors below.');
            } else {
                toast.error(message);
            }
        } finally {
            setLoading(false);
        }
    };

    const getInputClassName = (fieldName) => {
        const baseClasses = "w-full pl-10 pr-4 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-neutral-900 placeholder-neutral-500";
        return `${baseClasses} ${errors[fieldName] ? 'border-red-500 focus:ring-red-500' : 'border-neutral-300'}`;
    };

    const getPasswordInputClassName = (fieldName) => {
        const baseClasses = "w-full pl-10 pr-12 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-neutral-900 placeholder-neutral-500";
        return `${baseClasses} ${errors[fieldName] ? 'border-red-500 focus:ring-red-500' : 'border-neutral-300'}`;
    };

    return (
        <>
            <div className="min-h-screen flex">
                {/* Left Side - Branding */}
                <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
                    <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16">
                        <div className="max-w-md">
                            <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mb-8 shadow-strong">
                                <span className="text-white font-bold text-2xl">NIT</span>
                            </div>
                            <h1 className="text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
                                Join the
                                <span className="block bg-gradient-to-r from-secondary-200 to-accent-200 bg-clip-text text-transparent">
                                    NIT Patna Family
                                </span>
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                Connect with 10,000+ NITians worldwide and unlock endless opportunities.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Access exclusive job opportunities',
                                    'Connect with industry leaders',
                                    'Join interest-based groups',
                                    'Stay updated with latest news'
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                                        <p className="text-white/70 text-sm">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute top-20 right-20 w-32 h-32 bg-secondary-400/20 rounded-full blur-xl animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-400/15 rounded-full blur-lg animate-pulse"></div>
                </div>

                {/* Right Side - Registration Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
                    <div className="max-w-md w-full">
                        <div className="text-center mb-8">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                                <UserPlusIcon className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-2">Create Account</h2>
                            <p className="text-neutral-600">
                                Already have an account?{' '}
                                <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Full Name Field */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-semibold text-neutral-700 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={getInputClassName('fullName')}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={getInputClassName('email')}
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-neutral-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete="new-password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={getPasswordInputClassName('password')}
                                        placeholder="Create a strong password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                                    >
                                        {showPassword ? (
                                            <EyeSlashIcon className="w-5 h-5" />
                                        ) : (
                                            <EyeIcon className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                <p className="mt-1 text-xs text-neutral-500">
                                    Must contain at least 8 characters, one uppercase, one lowercase, and one number
                                </p>
                                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Batch Year Field */}
                                <div>
                                    <label htmlFor="batchYear" className="block text-sm font-semibold text-neutral-700 mb-2">
                                        Batch Year
                                    </label>
                                    <div className="relative">
                                        <AcademicCapIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                        <input
                                            id="batchYear"
                                            name="batchYear"
                                            type="number"
                                            required
                                            value={formData.batchYear}
                                            onChange={handleChange}
                                            className={getInputClassName('batchYear')}
                                            placeholder="2020"
                                            min="1950"
                                            max={new Date().getFullYear()}
                                        />
                                    </div>
                                    {errors.batchYear && <p className="mt-1 text-sm text-red-600">{errors.batchYear}</p>}
                                </div>

                                {/* Date of Birth Field */}
                                <div>
                                    <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-neutral-700 mb-2">
                                        Date of Birth
                                    </label>
                                    <div className="relative">
                                        <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                        <input
                                            id="dateOfBirth"
                                            name="dateOfBirth"
                                            type="date"
                                            required
                                            value={formData.dateOfBirth}
                                            onChange={handleChange}
                                            className={getInputClassName('dateOfBirth')}
                                            max={new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                    {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>}
                                </div>
                            </div>

                            {/* Admission Number Field */}
                            <div>
                                <label htmlFor="admissionNumber" className="block text-sm font-semibold text-neutral-700 mb-2">
                                    Admission Number <span className="text-neutral-400 text-xs">(Optional)</span>
                                </label>
                                <div className="relative">
                                    <AcademicCapIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input
                                        id="admissionNumber"
                                        name="admissionNumber"
                                        type="text"
                                        value={formData.admissionNumber}
                                        onChange={handleChange}
                                        className={getInputClassName('admissionNumber')}
                                        placeholder="Enter your admission number"
                                    />
                                </div>
                                {errors.admissionNumber && <p className="mt-1 text-sm text-red-600">{errors.admissionNumber}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-xl font-semibold text-lg shadow-medium hover:shadow-strong hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mt-6"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Creating Account...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-2">
                                        <UserPlusIcon className="w-5 h-5" />
                                        Create Account
                                    </div>
                                )}
                            </button>
                        </form>

                        {/* Additional Info */}
                        <div className="mt-6 text-center">
                            <p className="text-xs text-neutral-500">
                                By creating an account, you agree to our{' '}
                                <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-700">
                                    Privacy Policy
                                </Link>
                                {' '}and will wait for admin approval.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
