import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Clock, Building, ArrowLeft, Briefcase, CheckCircle, Heart } from 'lucide-react';
import { jobListings } from '../data/dummyData';
import JobDetailsModal from '../components/JobDetailsModal';

const JobSeekerDashboard = () => {
    const navigate = useNavigate();
    const [jobSeekerData, setJobSeekerData] = useState(null);
    const [filteredJobs, setFilteredJobs] = useState(jobListings);
    const [searchTerm, setSearchTerm] = useState('');
    const [jobTypeFilter, setJobTypeFilter] = useState('');
    const [skillFilter, setSkillFilter] = useState('');
    const [likedJobs, setLikedJobs] = useState(new Set());
    const [selectedJob, setSelectedJob] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Get job seeker form data from localStorage (optional)
        const storedData = localStorage.getItem('jobSeekerFormData');
        if (storedData) {
            setJobSeekerData(JSON.parse(storedData));
        } else {
            // Set default data for dashboard access
            setJobSeekerData({
                fullName: 'Job Seeker',
                jobTypePreference: 'Any',
                skills: []
            });
        }
    }, [navigate]);

    useEffect(() => {
        let filtered = jobListings;

        // Filter by search term (title, organization, or skills)
        if (searchTerm) {
            filtered = filtered.filter(job =>
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                job.skillsRequired.some(skill =>
                    skill.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }

        // Filter by job type
        if (jobTypeFilter) {
            filtered = filtered.filter(job =>
                job.jobType === jobTypeFilter
            );
        }

        // Filter by specific skill
        if (skillFilter) {
            filtered = filtered.filter(job =>
                job.skillsRequired.some(skill =>
                    skill.toLowerCase().includes(skillFilter.toLowerCase())
                )
            );
        }

        setFilteredJobs(filtered);
    }, [searchTerm, jobTypeFilter, skillFilter]);

    const handleAcceptJob = (jobId) => {
        // Store the selected job data and navigate to form
        const job = jobListings.find(job => job.id === jobId);
        if (job) {
            localStorage.setItem('selectedJob', JSON.stringify(job));
            navigate('/jobseeker-form');
        }
    };

    const handleViewDetails = (jobId) => {
        const job = jobListings.find(job => job.id === jobId);
        if (job) {
            setSelectedJob(job);
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    const handleApplyFromModal = () => {
        if (selectedJob) {
            localStorage.setItem('selectedJob', JSON.stringify(selectedJob));
            setIsModalOpen(false);
            navigate('/jobseeker-form');
        }
    };

    const handleLikeJob = (jobId) => {
        setLikedJobs(prev => {
            const newLikedJobs = new Set(prev);
            if (newLikedJobs.has(jobId)) {
                newLikedJobs.delete(jobId);
            } else {
                newLikedJobs.add(jobId);
            }
            return newLikedJobs;
        });
    };

    // Remove loading state - dashboard is now accessible directly

    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center text-secondary-600 hover:text-secondary-700 mb-6 transition-colors duration-200"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </button>

                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-full mb-4">
                            <Briefcase className="h-8 w-8 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Job Opportunities
                        </h1>
                        <p className="text-xl text-gray-600">
                            {jobSeekerData?.fullName ? `Welcome, ${jobSeekerData.fullName}` : 'Discover Your Next Opportunity'}
                        </p>
                        {jobSeekerData?.skills?.length > 0 && (
                            <div className="mt-4 inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-800 rounded-full">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Looking for: {jobSeekerData.jobTypePreference} - {jobSeekerData.skills.join(', ')}
                            </div>
                        )}
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
                                placeholder="Search jobs, companies, or skills..."
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
                        Showing {filteredJobs.length} of {jobListings.length} job opportunities
                    </div>
                </motion.div>

                {/* Jobs Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredJobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="card p-6 card-hover group relative"
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                            }}
                        >
                            {/* Like Button */}
                            <motion.button
                                onClick={() => handleLikeJob(job.id)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.div
                                    animate={likedJobs.has(job.id) ? { scale: [1, 1.3, 1] } : {}}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Heart
                                        className={`h-5 w-5 ${likedJobs.has(job.id)
                                            ? 'text-red-500 fill-current'
                                            : 'text-gray-400 hover:text-red-500'
                                            }`}
                                    />
                                </motion.div>
                            </motion.button>

                            {/* Job Header */}
                            <div className="mb-4 pr-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {job.title}
                                </h3>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Building className="h-4 w-4 mr-2" />
                                    <span className="font-medium">{job.organization}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-500">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span>{job.location}</span>
                                </div>
                            </div>

                            {/* Job Type */}
                            <div className="mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {job.jobType}
                                </span>
                            </div>

                            {/* Required Skills */}
                            <div className="mb-4">
                                <p className="text-sm text-gray-600 mb-2">Required Skills</p>
                                <div className="flex flex-wrap gap-1">
                                    {job.skillsRequired.slice(0, 4).map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2 py-1 bg-secondary-100 text-secondary-800 text-xs rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {job.skillsRequired.length > 4 && (
                                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                            +{job.skillsRequired.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-sm text-gray-600 overflow-hidden" style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical'
                                }}>
                                    {job.description}
                                </p>
                            </div>

                            {/* Posted By */}
                            <div className="mb-4 text-sm text-gray-500">
                                Posted by: {job.postedBy}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2">
                                <motion.button
                                    onClick={() => handleAcceptJob(job.id)}
                                    className="flex-1 btn-secondary py-2 shimmer"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <motion.div
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                        className="inline-block mr-2"
                                    >
                                        Accept Job
                                    </motion.div>
                                </motion.button>
                                <motion.button
                                    onClick={() => handleViewDetails(job.id)}
                                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    whileHover={{
                                        scale: 1.05,
                                        backgroundColor: "#f3f4f6",
                                        borderColor: "#9ca3af"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    View Details
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* No Results */}
                {filteredJobs.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-12"
                    >
                        <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            No jobs found
                        </h3>
                        <p className="text-gray-600">
                            Try adjusting your search criteria or filters.
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Job Details Modal */}
            <JobDetailsModal
                job={selectedJob}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onApply={handleApplyFromModal}
            />
        </div>
    );
};

export default JobSeekerDashboard;
