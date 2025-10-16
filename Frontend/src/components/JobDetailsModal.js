import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    MapPin,
    Clock,
    Building,
    Users,
    DollarSign,
    Calendar,
    CheckCircle,
    Star,
    Phone,
    Mail,
    Globe,
    Briefcase,
    Target,
    Award,
    TrendingUp
} from 'lucide-react';

const JobDetailsModal = ({ job, isOpen, onClose, onApply }) => {
    if (!job) return null;

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        },
        exit: { opacity: 0, scale: 0.8 }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    // Dummy map component
    const DummyMap = () => {
        const locationDetails = job.locationDetails || {};

        return (
            <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-lg h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-green-200/50"></div>

                {/* Location Info */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-xs">
                    <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-medium text-gray-700">{job.location}</span>
                    </div>
                    {locationDetails.address && (
                        <div className="text-xs text-gray-600 mb-1">{locationDetails.address}</div>
                    )}
                    {locationDetails.commute && (
                        <div className="text-xs text-gray-500">{locationDetails.commute}</div>
                    )}
                </div>

                {/* Nearby Places */}
                {locationDetails.nearby && locationDetails.nearby.length > 0 && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg max-w-32">
                        <div className="text-xs font-medium text-gray-700 mb-1">Nearby:</div>
                        {locationDetails.nearby.slice(0, 2).map((place, index) => (
                            <div key={index} className="text-xs text-gray-600 truncate">{place}</div>
                        ))}
                    </div>
                )}

                {/* Dummy map markers */}
                <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-green-500 rounded-full"></div>

                {/* Dummy roads */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300/50"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300/50"></div>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                    <div className="text-xs text-gray-600">📍 Interactive Map</div>
                </div>
            </div>
        );
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-200"
                        >
                            <X className="h-5 w-5 text-gray-600" />
                        </button>

                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-t-2xl">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <Building className="h-5 w-5" />
                                            <span className="text-lg font-medium">{job.organization}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Clock className="h-5 w-5" />
                                            <span>{job.jobType}</span>
                                        </div>
                                    </div>

                                    {/* Location Priority Section */}
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                                        <div className="flex items-center space-x-3">
                                            <MapPin className="h-6 w-6" />
                                            <div>
                                                <div className="text-lg font-semibold">📍 {job.location}</div>
                                                <div className="text-sm opacity-90">
                                                    {job.location === 'Remote'
                                                        ? 'Work from anywhere in the world'
                                                        : 'On-site position with flexible work options'
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="flex items-center space-x-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current text-yellow-300" />
                                        ))}
                                        <span className="ml-2 text-sm">4.8 (127 reviews)</span>
                                    </div>
                                    <div className="text-sm opacity-90">Posted 2 days ago</div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Main Content */}
                                <div className="lg:col-span-2 space-y-6">
                                    {/* Job Description */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <Briefcase className="h-5 w-5 mr-2 text-primary-600" />
                                            Job Description
                                        </h3>
                                        <div className="prose prose-gray max-w-none">
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                {job.description}
                                            </p>
                                            <p className="text-gray-700 leading-relaxed">
                                                We are looking for a passionate and experienced professional to join our dynamic team.
                                                This role offers excellent growth opportunities and the chance to work on cutting-edge projects
                                                that make a real impact. You'll collaborate with talented individuals in a supportive environment
                                                that values innovation and creativity.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Key Responsibilities */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <Target className="h-5 w-5 mr-2 text-primary-600" />
                                            Key Responsibilities
                                        </h3>
                                        <ul className="space-y-2">
                                            {[
                                                'Lead and execute strategic initiatives that drive business growth',
                                                'Collaborate with cross-functional teams to deliver exceptional results',
                                                'Analyze market trends and provide data-driven insights',
                                                'Mentor junior team members and foster a culture of excellence',
                                                'Manage multiple projects simultaneously while maintaining quality standards'
                                            ].map((responsibility, index) => (
                                                <li key={index} className="flex items-start space-x-3">
                                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Required Skills */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <Award className="h-5 w-5 mr-2 text-primary-600" />
                                            Required Skills
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {job.skillsRequired.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                            <TrendingUp className="h-5 w-5 mr-2 text-primary-600" />
                                            Benefits & Perks
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { icon: DollarSign, text: 'Competitive salary + performance bonuses' },
                                                { icon: Calendar, text: 'Flexible working hours and remote options' },
                                                { icon: Users, text: 'Health insurance and wellness programs' },
                                                { icon: Award, text: 'Professional development opportunities' },
                                                { icon: Globe, text: 'International travel opportunities' },
                                                { icon: Star, text: 'Team building events and company retreats' }
                                            ].map((benefit, index) => (
                                                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                                    <benefit.icon className="h-5 w-5 text-primary-600" />
                                                    <span className="text-gray-700">{benefit.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="space-y-6">
                                    {/* Map */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                            <MapPin className="h-5 w-5 mr-2 text-primary-600" />
                                            Location
                                        </h3>
                                        <DummyMap />
                                    </div>

                                    {/* Company Info */}
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <Building className="h-5 w-5 text-gray-500" />
                                                <span className="text-gray-700">{job.organization}</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Users className="h-5 w-5 text-gray-500" />
                                                <span className="text-gray-700">500-1000 employees</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Globe className="h-5 w-5 text-gray-500" />
                                                <span className="text-gray-700">Technology & Innovation</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Award className="h-5 w-5 text-gray-500" />
                                                <span className="text-gray-700">Founded 2015</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="bg-primary-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <Mail className="h-5 w-5 text-primary-600" />
                                                <span className="text-gray-700">hr@{job.organization.toLowerCase().replace(/\s+/g, '')}.com</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Phone className="h-5 w-5 text-primary-600" />
                                                <span className="text-gray-700">+1 (555) 123-4567</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Globe className="h-5 w-5 text-primary-600" />
                                                <span className="text-gray-700">www.{job.organization.toLowerCase().replace(/\s+/g, '')}.com</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="bg-secondary-50 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Statistics</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Applications:</span>
                                                <span className="font-semibold text-gray-900">47</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Views:</span>
                                                <span className="font-semibold text-gray-900">234</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Days Left:</span>
                                                <span className="font-semibold text-gray-900">12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-50 px-8 py-6 rounded-b-2xl">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                    Posted by <span className="font-medium">{job.postedBy}</span> • 2 days ago
                                </div>
                                <div className="flex space-x-3">
                                    <motion.button
                                        onClick={onClose}
                                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Close
                                    </motion.button>
                                    <motion.button
                                        onClick={onApply}
                                        className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Apply Now
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default JobDetailsModal;
