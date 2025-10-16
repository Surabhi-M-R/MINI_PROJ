import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Users, ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const LandingPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-6 floating-element">
                                <Briefcase className="h-10 w-10 text-white" />
                                <div className="pulse-ring"></div>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                                Welcome to{' '}
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    SkillBridge
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                                Connecting Skills with Opportunities – One Click Away.
                                Join thousands of professionals and companies finding their perfect match.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                        >
                            <Link to="/hiring-form">
                                <motion.button
                                    className="btn-primary flex items-center space-x-2 text-lg px-8 py-4 magnetic-hover shimmer"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 2,
                                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    >
                                        <Briefcase className="h-5 w-5" />
                                    </motion.div>
                                    <span>I'm Hiring</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                    >
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                </motion.button>
                            </Link>

                            <Link to="/jobseeker-form">
                                <motion.button
                                    className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4 magnetic-hover shimmer"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: -2,
                                        boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <motion.div
                                        animate={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    >
                                        <Users className="h-5 w-5" />
                                    </motion.div>
                                    <span>I Want a Job</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                    >
                                        <ArrowRight className="h-5 w-5" />
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                        >
                            <motion.div
                                className="text-center card p-6 card-hover"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="text-3xl font-bold gradient-text mb-2"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                                >
                                    10,000+
                                </motion.div>
                                <div className="text-gray-600">Active Job Seekers</div>
                            </motion.div>
                            <motion.div
                                className="text-center card p-6 card-hover"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="text-3xl font-bold gradient-text mb-2"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 6 }}
                                >
                                    2,500+
                                </motion.div>
                                <div className="text-gray-600">Companies Hiring</div>
                            </motion.div>
                            <motion.div
                                className="text-center card p-6 card-hover"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="text-3xl font-bold gradient-text mb-2"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 8 }}
                                >
                                    95%
                                </motion.div>
                                <div className="text-gray-600">Success Rate</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-gentle"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
                    <ParticleBackground particleCount={30} />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose SkillBridge?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We make the job search and hiring process simple, efficient, and successful.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <CheckCircle className="h-8 w-8 text-primary-600" />,
                                title: "Smart Matching",
                                description: "Our AI-powered algorithm matches the right candidates with the right opportunities.",
                                color: "primary"
                            },
                            {
                                icon: <Star className="h-8 w-8 text-secondary-600" />,
                                title: "Quality Focus",
                                description: "We ensure high-quality matches by verifying skills and experience of all users.",
                                color: "secondary"
                            },
                            {
                                icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
                                title: "Fast Results",
                                description: "Get connected with opportunities or candidates within 24 hours of posting.",
                                color: "primary"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="card p-8 text-center card-hover group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
                                }}
                            >
                                <motion.div
                                    className="flex justify-center mb-4"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className={`p-3 rounded-full bg-${feature.color}-100 group-hover:bg-${feature.color}-200 transition-colors duration-300`}>
                                        {feature.icon}
                                    </div>
                                </motion.div>
                                <motion.h3
                                    className="text-xl font-semibold text-gray-900 mb-3"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {feature.title}
                                </motion.h3>
                                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                    {feature.description}
                                </p>
                                <motion.div
                                    className="mt-4 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8">
                            Join thousands of professionals and companies who have found success with SkillBridge.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/hiring-form">
                                <motion.button
                                    className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Hiring Today
                                </motion.button>
                            </Link>
                            <Link to="/jobseeker-form">
                                <motion.button
                                    className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Find Your Dream Job
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
