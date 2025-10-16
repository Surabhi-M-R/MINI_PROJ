import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    User,
    Star,
    TrendingUp,
    Calendar,
    MapPin,
    Phone,
    Mail,
    Shield,
    Award,
    Briefcase,
    Clock,
    CheckCircle,
    AlertCircle,
    Edit,
    LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('profile');

    const handleLogout = () => {
        logout();
        navigate('/jobseeker-dashboard');
    };

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'ratings', label: 'Ratings & Reviews', icon: Star },
        { id: 'jobs', label: 'Job History', icon: Briefcase },
        { id: 'analytics', label: 'Analytics', icon: TrendingUp }
    ];

    const renderProfileTab = () => (
        <div className="space-y-6">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                            <User className="h-10 w-10" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{user.fullName}</h2>
                            <p className="text-primary-100">Employee ID: {user.id}</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <span className="flex items-center space-x-1">
                                    <Star className="h-4 w-4 fill-current text-yellow-300" />
                                    <span>{user.rating || 0}/5</span>
                                </span>
                                <span className="text-sm">({user.totalRatings || 0} reviews)</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${user.isVerified
                                ? 'bg-green-500 text-white'
                                : 'bg-yellow-500 text-white'
                            }`}>
                            {user.isVerified ? 'Verified' : 'Pending Verification'}
                        </div>
                        <p className="text-sm text-primary-100 mt-1">
                            Joined {new Date(user.joinedDate).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <User className="h-5 w-5 text-gray-500" />
                            <div>
                                <p className="text-sm text-gray-600">Full Name</p>
                                <p className="font-medium">{user.fullName}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Calendar className="h-5 w-5 text-gray-500" />
                            <div>
                                <p className="text-sm text-gray-600">Age</p>
                                <p className="font-medium">{user.age} years</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-gray-500" />
                            <div>
                                <p className="text-sm text-gray-600">Phone</p>
                                <p className="font-medium">{user.phoneNumber}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-gray-500" />
                            <div>
                                <p className="text-sm text-gray-600">Email</p>
                                <p className="font-medium">{user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h3>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                            <div>
                                <p className="text-sm text-gray-600">Address</p>
                                <p className="font-medium">{user.address}</p>
                                <p className="text-sm text-gray-600">{user.city}, {user.state} - {user.pincode}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Information */}
            <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Education</p>
                        <p className="font-medium">{user.education}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Experience</p>
                        <p className="font-medium">{user.experience}</p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-600 mb-2">Skills</p>
                        <div className="flex flex-wrap gap-2">
                            {user.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-600 mb-2">Preferred Job Types</p>
                        <div className="flex flex-wrap gap-2">
                            {user.preferredJobTypes.map((type) => (
                                <span
                                    key={type}
                                    className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm"
                                >
                                    {type}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Security Information */}
            <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Aadhar Number</p>
                        <p className="font-medium">****-****-{user.aadharNumber.slice(-4)}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-1">PAN Number</p>
                        <p className="font-medium">****{user.panNumber.slice(-4)}</p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-600 mb-1">Emergency Contact</p>
                        <p className="font-medium">{user.emergencyContactName} ({user.emergencyContactRelation})</p>
                        <p className="text-sm text-gray-600">{user.emergencyContactPhone}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderRatingsTab = () => (
        <div className="space-y-6">
            <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Rating</h3>
                <div className="flex items-center space-x-4">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary-600">{user.rating || 0}</div>
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-5 w-5 ${i < (user.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Based on {user.totalRatings || 0} reviews</p>
                    </div>
                    <div className="flex-1">
                        <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((rating) => (
                                <div key={rating} className="flex items-center space-x-2">
                                    <span className="text-sm w-8">{rating}</span>
                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-yellow-400 h-2 rounded-full"
                                            style={{ width: `${Math.random() * 100}%` }}
                                        />
                                    </div>
                                    <span className="text-sm text-gray-600 w-8">0</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sample Reviews */}
            <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                    {[
                        {
                            employer: "Delhi Builders Pvt Ltd",
                            rating: 5,
                            comment: "Excellent worker, very reliable and hardworking. Completed the construction work on time.",
                            date: "2024-01-15"
                        },
                        {
                            employer: "Flipkart Logistics",
                            rating: 4,
                            comment: "Good performance in warehouse operations. Shows up on time and follows safety protocols.",
                            date: "2024-01-10"
                        }
                    ].map((review, index) => (
                        <div key={index} className="border-l-4 border-primary-500 pl-4">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium">{review.employer}</h4>
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 mb-2">{review.comment}</p>
                            <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderJobsTab = () => (
        <div className="space-y-6">
            <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600">{user.completedJobs || 0}</div>
                        <p className="text-gray-600">Completed Jobs</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-secondary-600">₹{(user.completedJobs || 0) * 800}</div>
                        <p className="text-gray-600">Total Earnings</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">98%</div>
                        <p className="text-gray-600">Success Rate</p>
                    </div>
                </div>
            </div>

            <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Jobs</h3>
                <div className="space-y-4">
                    {[
                        {
                            title: "Construction Worker",
                            employer: "Delhi Builders Pvt Ltd",
                            date: "2024-01-15",
                            status: "completed",
                            rating: 5,
                            earnings: "₹1,200"
                        },
                        {
                            title: "Warehouse Worker",
                            employer: "Flipkart Logistics",
                            date: "2024-01-10",
                            status: "completed",
                            rating: 4,
                            earnings: "₹1,500"
                        }
                    ].map((job, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div>
                                <h4 className="font-medium">{job.title}</h4>
                                <p className="text-sm text-gray-600">{job.employer}</p>
                                <p className="text-sm text-gray-500">{new Date(job.date).toLocaleDateString()}</p>
                            </div>
                            <div className="text-right">
                                <div className={`px-2 py-1 rounded-full text-xs font-medium ${job.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {job.status}
                                </div>
                                <p className="text-sm font-medium text-green-600 mt-1">{job.earnings}</p>
                                <div className="flex items-center space-x-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-3 w-3 ${i < job.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderAnalyticsTab = () => (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Punctuality</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }} />
                                </div>
                                <span className="text-sm font-medium">95%</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Quality of Work</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }} />
                                </div>
                                <span className="text-sm font-medium">92%</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Communication</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '88%' }} />
                                </div>
                                <span className="text-sm font-medium">88%</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Team Work</span>
                            <div className="flex items-center space-x-2">
                                <div className="w-24 bg-gray-200 rounded-full h-2">
                                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }} />
                                </div>
                                <span className="text-sm font-medium">90%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Earnings</h3>
                    <div className="space-y-3">
                        {[
                            { month: 'Jan 2024', earnings: 15000 },
                            { month: 'Dec 2023', earnings: 12000 },
                            { month: 'Nov 2023', earnings: 18000 },
                            { month: 'Oct 2023', earnings: 14000 }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <span className="text-gray-600">{item.month}</span>
                                <span className="font-medium">₹{item.earnings.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Skill Development</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-medium mb-3">Current Skills</h4>
                        <div className="space-y-2">
                            {user.skills.slice(0, 5).map((skill) => (
                                <div key={skill} className="flex items-center justify-between">
                                    <span className="text-gray-600">{skill}</span>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-3 w-3 ${i < Math.floor(Math.random() * 3) + 3 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-medium mb-3">Recommended Skills</h4>
                        <div className="space-y-2">
                            {['Advanced Welding', 'Forklift Operation', 'Safety Management', 'Team Leadership'].map((skill) => (
                                <div key={skill} className="flex items-center justify-between">
                                    <span className="text-gray-600">{skill}</span>
                                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                                        Learn
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
                        <p className="text-gray-600">Manage your profile and track your performance</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => navigate('/jobseeker-dashboard')}
                            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                            Browse Jobs
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
                        >
                            <LogOut className="h-4 w-4" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                    <nav className="flex space-x-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${activeTab === tab.id
                                        ? 'border-primary-500 text-primary-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                <tab.icon className="h-4 w-4" />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTab === 'profile' && renderProfileTab()}
                    {activeTab === 'ratings' && renderRatingsTab()}
                    {activeTab === 'jobs' && renderJobsTab()}
                    {activeTab === 'analytics' && renderAnalyticsTab()}
                </motion.div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
