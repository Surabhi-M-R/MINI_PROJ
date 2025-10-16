import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Clock, Star, ArrowLeft, Users, CheckCircle } from 'lucide-react';
import { jobSeekers } from '../data/dummyData';
import LoadingSpinner from '../components/LoadingSpinner';

const HiringDashboard = () => {
    const navigate = useNavigate();
    const [hiringData, setHiringData] = useState(null);
    const [filteredJobSeekers, setFilteredJobSeekers] = useState(jobSeekers);
    const [searchTerm, setSearchTerm] = useState('');
    const [jobTypeFilter, setJobTypeFilter] = useState('');
    const [skillFilter, setSkillFilter] = useState('');

    useEffect(() => {
        // Get hiring form data from localStorage
        const storedData = localStorage.getItem('hiringFormData');
        if (storedData) {
            setHiringData(JSON.parse(storedData));
        } else {
            // If no data, redirect back to form
            navigate('/hiring-form');
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

    if (!hiringData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <LoadingSpinner size="large" color="primary" />
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600 font-medium"
                    >
                        Loading your dashboard...
                    </motion.p>
                </motion.div>
            </div>
        );
    }

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
                    <button
                        onClick={() => navigate('/hiring-form')}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors duration-200"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Form
                    </button>

                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-4">
                            <Users className="h-8 w-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Hiring Dashboard
                        </h1>
                        <p className="text-xl text-gray-600">
                            Welcome, {hiringData.fullName} from {hiringData.organizationName}
                        </p>
                        <div className="mt-4 inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Looking for: {hiringData.jobType} - {hiringData.skillsRequired.join(', ')}
                        </div>
                    </div>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="card p-6 mb-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search by name or skills..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="form-input pl-10"
                            />
                        </div>

                        {/* Job Type Filter */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <select
                                value={jobTypeFilter}
                                onChange={(e) => setJobTypeFilter(e.target.value)}
                                className="form-input pl-10"
                            >
                                <option value="">All Job Types</option>
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                                <option value="Contract">Contract</option>
                                <option value="Freelance">Freelance</option>
                            </select>
                        </div>

                        {/* Skill Filter */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Filter by skill..."
                                value={skillFilter}
                                onChange={(e) => setSkillFilter(e.target.value)}
                                className="form-input pl-10"
                            />
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-600">
                        Showing {filteredJobSeekers.length} of {jobSeekers.length} candidates
                    </div>
                </motion.div>

                {/* Job Seekers Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
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
                </motion.div>

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
        </div>
    );
};

export default HiringDashboard;
