import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Briefcase } from 'lucide-react';

const Footer = () => {
    return (
        <motion.footer
            className="bg-gray-900 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
                                <Briefcase className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                SkillBridge
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Connecting Skills with Opportunities – One Click Away.
                            Join thousands of professionals and companies finding their perfect match.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/hiring-form" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Post a Job
                                </Link>
                            </li>
              <li>
                <Link to="/jobseeker-dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Find Jobs
                </Link>
              </li>
                            <li>
                                <button className="text-gray-300 hover:text-white transition-colors duration-200 text-left">
                                    About Us
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2 text-gray-300">
                                <Mail className="h-4 w-4" />
                                <span>contact@skillbridge.com</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-300">
                                <Phone className="h-4 w-4" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-2 text-gray-300">
                                <MapPin className="h-4 w-4" />
                                <span>123 Business Ave, Suite 100</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 SkillBridge. All rights reserved. Made with ❤️ for connecting talent.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
