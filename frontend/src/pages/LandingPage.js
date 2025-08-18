import React from 'react';
import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  BuildingOffice2Icon,
  BeakerIcon,
  LightBulbIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import { useInView } from 'react-intersection-observer';

const notableAlumni = [
    { name: 'Dr. Rajesh Kumar', batch: '2005', achievement: 'Director, ISRO Space Center' },
    { name: 'Priya Singh', batch: '2008', achievement: 'VP Engineering at Microsoft' },
    { name: 'Amit Sharma', batch: '2010', achievement: 'Founder, EdTech Unicorn Startup' },
    { name: 'Dr. Sunita Verma', batch: '2006', achievement: 'Chief Scientist, DRDO' },
    { name: 'Rohit Gupta', batch: '2012', achievement: 'Product Lead at Google' },
    { name: 'Kavita Jha', batch: '2009', achievement: 'IAS Officer & District Collector' },
];

const achievements = [
    { icon: TrophyIcon, title: '50+ Years', subtitle: 'of Academic Excellence' },
    { icon: UserGroupIcon, title: '10,000+', subtitle: 'Alumni Network' },
    { icon: BuildingOffice2Icon, title: 'Top 20', subtitle: 'NIT in India' },
    { icon: LightBulbIcon, title: '500+', subtitle: 'Research Publications' },
];

const AnimatedSection = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </div>
    );
};

export default function LandingPage() {
    return (
        <>
            <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-0 m-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600"></div>
                <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-secondary-400/20 rounded-full blur-xl animate-float"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-accent-400/15 rounded-full blur-lg animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-secondary-300/10 rounded-full blur-2xl animate-float delay-500"></div>
                    <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-accent-300/20 rounded-full blur-lg animate-bounce-subtle delay-1500"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 mb-12 animate-fade-in-down shadow-glow relative overflow-hidden">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center">
                            <BuildingOffice2Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold">Join 10,000+ Alumni of NIT Patna</span>
                        <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                    </div>

                    <div className="space-y-8 mb-12">
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none animate-fade-in-up">
                            <span className="block text-white/95 drop-shadow-lg">Welcome to</span>
                            <span className="block bg-gradient-to-r from-secondary-300 via-secondary-200 to-accent-300 bg-clip-text text-transparent drop-shadow-2xl">
                                NIT Patna
                            </span>
                        </h1>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white/90 animate-fade-in-up delay-200">
                            Alumni Portal - Connecting Excellence
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl lg:text-2xl text-white/85 max-w-4xl mx-auto leading-relaxed mb-16 font-light animate-fade-in-up delay-300">
                        Connect with fellow NITians, share experiences, and build a stronger network.
                        <span className="block text-secondary-200 font-semibold mt-3 text-xl md:text-2xl">Engineering Excellence, Forever United</span>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-500">
                        <Link to="/register" className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-bold py-5 px-12 rounded-2xl text-xl shadow-strong hover:shadow-glow-accent transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-enhanced-shimmer"></div>
                            <UserGroupIcon className="w-6 h-6 relative z-10" />
                            <span className="relative z-10">Join Network</span>
                            <ArrowRightIcon className="h-6 w-6 transition-transform group-hover:translate-x-2 relative z-10" />
                        </Link>
                        <Link to="/login" className="group relative inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold py-5 px-12 rounded-2xl text-xl hover:bg-white hover:text-primary-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-medium overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <AcademicCapIcon className="w-6 h-6 relative z-10" />
                            <span className="relative z-10">Sign In</span>
                        </Link>
                    </div>
                </div>
                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
                    <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative">
                        <div className="w-2 h-4 bg-gradient-to-b from-white to-secondary-200 rounded-full mt-2 animate-pulse"></div>
                    </div>
                    <p className="text-white/60 text-xs mt-2 font-medium">Scroll to explore</p>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Achievements Section */}
                <section className="py-20">
                    <AnimatedSection>
                        <div className="container mx-auto max-w-6xl">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Why NIT Patna?</h2>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                                    A legacy of excellence in technical education and research
                                </p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {achievements.map((achievement, index) => {
                                    const Icon = achievement.icon;
                                    return (
                                        <div key={index} className="text-center group">
                                            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110">
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-primary-600 mb-2">{achievement.title}</h3>
                                            <p className="text-neutral-600 font-medium">{achievement.subtitle}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </AnimatedSection>
                </section>

                <section id="about" className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/30">
                    <AnimatedSection>
                        <div className="container mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">About NIT Patna</h3>
                                    <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                                        National Institute of Technology Patna, established in 1924 as Bihar College of Engineering,
                                        is one of India's premier technical institutions. With nearly a century of excellence in
                                        engineering education, NIT Patna has been at the forefront of technological innovation
                                        and research.
                                    </p>
                                    <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                                        Our alumni network spans the globe, contributing to breakthrough innovations in technology,
                                        leading Fortune 500 companies, and driving entrepreneurial ventures that shape the future.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="bg-white px-6 py-3 rounded-full shadow-soft">
                                            <span className="text-primary-600 font-semibold">Since 1924</span>
                                        </div>
                                        <div className="bg-white px-6 py-3 rounded-full shadow-soft">
                                            <span className="text-accent-600 font-semibold">NIRF Ranked</span>
                                        </div>
                                        <div className="bg-white px-6 py-3 rounded-full shadow-soft">
                                            <span className="text-secondary-600 font-semibold">NBA Accredited</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 shadow-strong">
                                        <div className="grid grid-cols-2 gap-6 text-white">
                                            <div className="text-center">
                                                <BeakerIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                                                <h4 className="text-2xl font-bold mb-2">15+</h4>
                                                <p className="text-primary-100">Departments</p>
                                            </div>
                                            <div className="text-center">
                                                <AcademicCapIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                                                <h4 className="text-2xl font-bold mb-2">100+</h4>
                                                <p className="text-primary-100">Faculty</p>
                                            </div>
                                            <div className="text-center">
                                                <UserGroupIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                                                <h4 className="text-2xl font-bold mb-2">5000+</h4>
                                                <p className="text-primary-100">Students</p>
                                            </div>
                                            <div className="text-center">
                                                <GlobeAltIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
                                                <h4 className="text-2xl font-bold mb-2">50+</h4>
                                                <p className="text-primary-100">Countries</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </section>

                <section id="notable-alumni" className="py-20">
                    <AnimatedSection>
                        <div className="container mx-auto max-w-7xl">
                            <div className="text-center mb-16">
                                <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Distinguished Alumni</h3>
                                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                                    Our graduates are making their mark across industries and geographies
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {notableAlumni.map((alumnus, index) => (
                                    <div key={index} className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-strong border border-neutral-100 transition-all duration-300 transform hover:-translate-y-2">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-xl">{alumnus.name.charAt(0)}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-neutral-900 mb-2">{alumnus.name}</h4>
                                        <p className="text-sm font-semibold text-primary-600 mb-4">Batch of {alumnus.batch}</p>
                                        <p className="text-neutral-700 leading-relaxed">{alumnus.achievement}</p>
                                        <div className="mt-6 pt-4 border-t border-neutral-100">
                                            <div className="w-full bg-gradient-to-r from-primary-500 to-accent-500 h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </section>

                <section id="developer">
                    {/* Footer Section */}
                </section>
            </div>
        </>
    );
}
