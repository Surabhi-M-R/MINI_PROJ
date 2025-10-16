import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Users } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    return (
        <motion.nav
            className="bg-white shadow-lg border-b border-gray-200"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
                            <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            SkillBridge
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === '/'
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/hiring-dashboard"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === '/hiring-dashboard'
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                }`}
                        >
                            I'm Hiring
                        </Link>
                        <Link
                            to="/jobseeker-dashboard"
                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === '/jobseeker-dashboard'
                                ? 'text-primary-600 bg-primary-50'
                                : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                                }`}
                        >
                            Find Work
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Users className="h-4 w-4" />
                            <span>Connecting Workers</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
