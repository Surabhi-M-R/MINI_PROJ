import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Search,
    Filter,
    MapPin,
    Clock,
    Star,
    ArrowLeft,
    Users,
    CheckCircle,
    Plus,
    Briefcase,
    TrendingUp,
    Eye,
    Edit,
    Trash2,
    Calendar,
    DollarSign
} from 'lucide-react';
import { jobSeekers } from '../data/dummyData';
import LoadingSpinner from '../components/LoadingSpinner';

const HiringDashboard = () => {
    const navigate = useNavigate();
    const [hiringData, setHiringData] = useState(null);
    const [postedJobs, setPostedJobs] = useState([]);
    const [filteredJobSeekers, setFilteredJobSeekers] = useState(jobSeekers);
    const [searchTerm, setSearchTerm] = useState('');
    const [jobTypeFilter, setJobTypeFilter] = useState('');
    const [skillFilter, setSkillFilter] = useState('');
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        // Get hiring form data from localStorage (optional)
        const storedData = localStorage.getItem('hiringFormData');
        if (storedData) {
            setHiringData(JSON.parse(storedData));
        } else {
            // Set default data for dashboard access
            setHiringData({
                fullName: 'Employer',
                organizationName: 'Your Company',
                jobType: 'Any',
                skillsRequired: []
            });
        }

        // Get posted jobs from localStorage
        const storedJobs = localStorage.getItem('postedJobs');
        if (storedJobs) {
            setPostedJobs(JSON.parse(storedJobs));
        } else {
            // Set some sample posted jobs
            const sampleJobs = [
                {
                    id: 1,
                    title: "Construction Worker",
                    organization: "Delhi Builders Pvt Ltd",
                    jobType: "Daily Wage",
                    skillsRequired: ["Physical Labor", "Construction Tools", "Safety Awareness"],
                    description: "Join our construction team for daily wage work. Physical labor required for building projects.",
                    location: "New Delhi, India",
                    postedDate: "2024-01-15",
                    applications: 12,
                    views: 45,
                    status: "active"
                },
                {
                    id: 2,
                    title: "Warehouse Worker",
                    organization: "QuickShip Logistics",
                    jobType: "Part-Time",
                    skillsRequired: ["Heavy Lifting", "Inventory Management", "Physical Stamina"],
                    description: "Warehouse work with good hourly pay. Loading, unloading, and organizing packages.",
                    location: "Mumbai, India",
                    postedDate: "2024-01-10",
                    applications: 8,
                    views: 32,
                    status: "active"
                }
            ];
            setPostedJobs(sampleJobs);
            localStorage.setItem('postedJobs', JSON.stringify(sampleJobs));
        }
    }, [navigate]);

    useEffect(() => {
        let filtered = jobSeekers;

        // Filter by search term (name or skills)
        if (searchTerm) {
            filtered = filtered.filter(seeker =>
                seeker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                seeker.skills.some(skill =>
                    skill.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }

        // Filter by job type preference
        if (jobTypeFilter) {
            filtered = filtered.filter(seeker =>
                seeker.jobTypePreference === jobTypeFilter
            );
        }

        // Filter by specific skill
        if (skillFilter) {
            filtered = filtered.filter(seeker =>
                seeker.skills.some(skill =>
                    skill.toLowerCase().includes(skillFilter.toLowerCase())
                )
            );
        }

        setFilteredJobSeekers(filtered);
    }, [searchTerm, jobTypeFilter, skillFilter]);

    const handleContactCandidate = (candidateId) => {
        alert(`Contact initiated with candidate ID: ${candidateId}`);
    };

    // Remove loading state - dashboard is now accessible directly

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={() => navigate('/')}
                            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </button>

                        <motion.button
                            onClick={() => {
                                console.log('Post a Job button clicked');
                                navigate('/hiring-form');
                            }}
                            className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Plus className="h-4 w-4" />
                            <span>Post a Job</span>
                        </motion.button>
                    </div>

                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-4">
                            <Briefcase className="h-8 w-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Hiring Dashboard
                        </h1>
                        <p className="text-xl text-gray-600">
                            Welcome, {hiringData?.fullName || 'Employer'} from {hiringData?.organizationName || 'Your Company'}
                        </p>
                        {hiringData?.skillsRequired?.length > 0 && (
                            <div className="mt-4 inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Looking for: {hiringData.jobType} - {hiringData.skillsRequired.join(', ')}
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-8">
                    <nav className="flex space-x-8">
                        {[
                            { id: 'overview', label: 'Overview', icon: TrendingUp },
                            { id: 'jobs', label: 'Posted Jobs', icon: Briefcase },
                            { id: 'candidates', label: 'Find Candidates', icon: Users }
                        ].map((tab) => (
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
                    {activeTab === 'overview' && (
                        <div className="space-y-6">
                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="card p-6 text-center">
                                    <div className="text-3xl font-bold text-primary-600 mb-2">{postedJobs.length}</div>
                                    <div className="text-gray-600">Posted Jobs</div>
                                </div>
                                <div className="card p-6 text-center">
                                    <div className="text-3xl font-bold text-secondary-600 mb-2">
                                        {postedJobs.reduce((sum, job) => sum + job.applications, 0)}
                                    </div>
                                    <div className="text-gray-600">Total Applications</div>
                                </div>
                                <div className="card p-6 text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-2">
                                        {postedJobs.reduce((sum, job) => sum + job.views, 0)}
                                    </div>
                                    <div className="text-gray-600">Total Views</div>
                                </div>
                                <div className="card p-6 text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">₹{(postedJobs.length * 15000).toLocaleString()}</div>
                                    <div className="text-gray-600">Potential Savings</div>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="card p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                                <div className="space-y-4">
                                    {postedJobs.slice(0, 3).map((job) => (
                                        <div key={job.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                            <div>
                                                <h4 className="font-medium">{job.title}</h4>
                                                <p className="text-sm text-gray-600">{job.organization}</p>
                                                <p className="text-sm text-gray-500">{new Date(job.postedDate).toLocaleDateString()}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-gray-600">{job.applications} applications</div>
                                                <div className="text-sm text-gray-600">{job.views} views</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'jobs' && (
                        <div className="space-y-6">
                            {/* Posted Jobs */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900">Your Posted Jobs</h3>
                                <motion.button
                                    onClick={() => {
                                        console.log('Post New Job button clicked');
                                        navigate('/hiring-form');
                                    }}
                                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Plus className="h-4 w-4" />
                                    <span>Post New Job</span>
                                </motion.button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {postedJobs.map((job) => (
                                    <motion.div
                                        key={job.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="card p-6 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h4 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h4>
                                                <p className="text-gray-600">{job.organization}</p>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button className="p-1 text-gray-400 hover:text-gray-600">
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button className="p-1 text-gray-400 hover:text-red-600">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Clock className="h-4 w-4 text-gray-500" />
                                                <span className="text-sm text-gray-600">{job.jobType}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <MapPin className="h-4 w-4 text-gray-500" />
                                                <span className="text-sm text-gray-600">{job.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Calendar className="h-4 w-4 text-gray-500" />
                                                <span className="text-sm text-gray-600">{new Date(job.postedDate).toLocaleDateString()}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <p className="text-sm text-gray-600 mb-2">Required Skills:</p>
                                            <div className="flex flex-wrap gap-1">
                                                {job.skillsRequired.slice(0, 3).map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                                {job.skillsRequired.length > 3 && (
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                        +{job.skillsRequired.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
                                        </div>

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                <span className="flex items-center space-x-1">
                                                    <Users className="h-4 w-4" />
                                                    <span>{job.applications}</span>
                                                </span>
                                                <span className="flex items-center space-x-1">
                                                    <Eye className="h-4 w-4" />
                                                    <span>{job.views}</span>
                                                </span>
                                            </div>
                                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                {job.status}
                                            </div>
                                        </div>

                                        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                                            View Applications
                                        </button>
                                    </motion.div>
                                ))}
                            </div>

                            {postedJobs.length === 0 && (
                                <div className="text-center py-12">
                                    <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs posted yet</h3>
                                    <p className="text-gray-600 mb-4">Start by posting your first job opportunity</p>
                                    <motion.button
                                        onClick={() => {
                                            console.log('Post Your First Job button clicked');
                                            navigate('/hiring-form');
                                        }}
                                        className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Post Your First Job
                                    </motion.button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'candidates' && (
                        <div className="space-y-6">
                            {/* Find Candidates Section */}
                            <div className="card p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Candidates</h3>
                                <p className="text-gray-600 mb-6">
                                    Browse through skilled workers who are looking for job opportunities.
                                    You can filter by skills, location, and experience level.
                                </p>

                                {/* Filters */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <input
                                            type="text"
                                            placeholder="Search by name or skills..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div className="relative">
                                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <select
                                            value={jobTypeFilter}
                                            onChange={(e) => setJobTypeFilter(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                            <option value="">All Job Types</option>
                                            <option value="Full-Time">Full-Time</option>
                                            <option value="Part-Time">Part-Time</option>
                                            <option value="Daily Wage">Daily Wage</option>
                                            <option value="Seasonal">Seasonal</option>
                                            <option value="Contract">Contract</option>
                                            <option value="Temporary">Temporary</option>
                                        </select>
                                    </div>

                                    <div className="relative">
                                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <input
                                            type="text"
                                            placeholder="Filter by skill..."
                                            value={skillFilter}
                                            onChange={(e) => setSkillFilter(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="text-sm text-gray-600 mb-4">
                                    Showing {filteredJobSeekers.length} of {jobSeekers.length} candidates
                                </div>
                            </div>

                            {/* Candidates Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredJobSeekers.map((seeker, index) => (
                                    <motion.div
                                        key={seeker.id}
                                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        className="card p-6 card-hover group"
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02,
                                            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                                        }}
                                    >
                                        {/* Candidate Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                                    {seeker.name}
                                                </h3>
                                                <p className="text-gray-600 text-sm">{seeker.age} years old</p>
                                            </div>
                                            <div className="flex items-center text-yellow-500">
                                                <Star className="h-4 w-4 fill-current" />
                                                <span className="ml-1 text-sm font-medium">4.8</span>
                                            </div>
                                        </div>

                                        {/* Education */}
                                        <div className="mb-4">
                                            <p className="text-sm text-gray-600 mb-1">Education</p>
                                            <p className="text-gray-900 font-medium">{seeker.education}</p>
                                        </div>

                                        {/* Skills */}
                                        <div className="mb-4">
                                            <p className="text-sm text-gray-600 mb-2">Skills</p>
                                            <div className="flex flex-wrap gap-1">
                                                {seeker.skills.slice(0, 4).map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                                {seeker.skills.length > 4 && (
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                                        +{seeker.skills.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Job Preferences */}
                                        <div className="mb-4">
                                            <div className="flex items-center text-sm text-gray-600 mb-1">
                                                <Clock className="h-4 w-4 mr-1" />
                                                <span>{seeker.experience} experience</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600 mb-1">
                                                <MapPin className="h-4 w-4 mr-1" />
                                                <span>{seeker.location}</span>
                                            </div>
                                            <div className="text-sm">
                                                <span className="text-gray-600">Prefers: </span>
                                                <span className="font-medium text-primary-600">
                                                    {seeker.jobTypePreference}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <motion.button
                                            onClick={() => handleContactCandidate(seeker.id)}
                                            className="w-full btn-primary py-2 shimmer"
                                            whileHover={{
                                                scale: 1.05,
                                                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <motion.div
                                                animate={{ x: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                                className="inline-block mr-2"
                                            >
                                                Contact Candidate
                                            </motion.div>
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </div>

                            {/* No Results */}
                            {filteredJobSeekers.length === 0 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-center py-12"
                                >
                                    <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        No candidates found
                                    </h3>
                                    <p className="text-gray-600">
                                        Try adjusting your search criteria or filters.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default HiringDashboard;
