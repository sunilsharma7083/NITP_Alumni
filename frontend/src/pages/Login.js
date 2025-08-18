import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon, LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import useAuth from '../hooks/useAuth';
import authService from '../services/authService';
import toast from 'react-hot-toast';
import ForgotPasswordModal from '../components/auth/ForgotPasswordModal';

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isForgotModalOpen, setForgotModalOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await authService.login(formData);
            login(res.data.token);
            toast.success('Logged in successfully!');
            navigate('/');
        } catch (error) {
            const message = error.response?.data?.message || 'Login failed. Please try again.';
            toast.error(message);
            setLoading(false);
        }
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
                                Welcome Back to
                                <span className="block bg-gradient-to-r from-secondary-200 to-accent-200 bg-clip-text text-transparent">
                                    NIT Patna
                                </span>
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed mb-8">
                                Connect with your fellow NITians and be part of our growing alumni network.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-accent-400 border-2 border-white flex items-center justify-center">
                                            <span className="text-white font-medium text-sm">{i}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-white/70 text-sm">Join 10,000+ Alumni</p>
                            </div>
                        </div>
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute top-20 right-20 w-32 h-32 bg-secondary-400/20 rounded-full blur-xl animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-400/15 rounded-full blur-lg animate-pulse"></div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
                    <div className="max-w-md w-full">
                        <div className="text-center mb-10">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                                <LockClosedIcon className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-neutral-900 mb-2">Sign In</h2>
                            <p className="text-neutral-600">
                                Don't have an account?{' '}
                                <Link to="/register" className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                                    Register here
                                </Link>
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                        className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-neutral-900 placeholder-neutral-500"
                                        placeholder="Enter your email"
                                    />
                                </div>
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
                                        autoComplete="current-password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-12 py-3 border border-neutral-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-neutral-900 placeholder-neutral-500"
                                        placeholder="Enter your password"
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
                            </div>

                            {/* Forgot Password */}
                            <div className="flex items-center justify-end">
                                <button
                                    type="button"
                                    onClick={() => setForgotModalOpen(true)}
                                    className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                                >
                                    Forgot password?
                                </button>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-xl font-semibold text-lg shadow-medium hover:shadow-strong hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Signing in...
                                    </div>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </form>

                        {/* Additional Info */}
                        <div className="mt-8 text-center">
                            <p className="text-xs text-neutral-500">
                                By signing in, you agree to our{' '}
                                <Link to="/privacy-policy" className="text-primary-600 hover:text-primary-700">
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {isForgotModalOpen && <ForgotPasswordModal onClose={() => setForgotModalOpen(false)} />}
        </>
    );
}