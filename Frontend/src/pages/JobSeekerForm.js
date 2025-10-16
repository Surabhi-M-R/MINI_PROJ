import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, ArrowLeft, CheckCircle, GraduationCap, Target, Clock, User } from 'lucide-react';
import { jobTypes, commonSkills } from '../data/dummyData';

const JobSeekerForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        education: '',
        skills: [],
        jobTypePreference: '',
        experience: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSkillAdd = (skill) => {
        if (skill && !formData.skills.includes(skill)) {
            setFormData(prev => ({
                ...prev,
                skills: [...prev.skills, skill]
            }));
        }
    };

    const handleSkillRemove = (skillToRemove) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.filter(skill => skill !== skillToRemove)
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.age || formData.age < 16) newErrors.age = 'Valid age is required';
        if (!formData.education.trim()) newErrors.education = 'Education is required';
        if (formData.skills.length === 0) newErrors.skills = 'At least one skill is required';
        if (!formData.jobTypePreference) newErrors.jobTypePreference = 'Job type preference is required';
        if (!formData.experience.trim()) newErrors.experience = 'Experience is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Store form data in localStorage
            localStorage.setItem('jobSeekerFormData', JSON.stringify(formData));
            // Navigate to job seeker dashboard
            navigate('/jobseeker-dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-white to-primary-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center text-secondary-600 hover:text-secondary-700 mb-6 transition-colors duration-200"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </button>

                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-full mb-6">
                        <Users className="h-8 w-8 text-white" />
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Find Your Dream Job
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tell us about yourself and your preferences to find the perfect job opportunity.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="card p-8 glass-effect"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className="form-label">
                                <User className="h-4 w-4 inline mr-2" />
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`form-input ${errors.fullName ? 'border-red-500 focus:ring-red-500' : ''}`}
                                placeholder="Enter your full name"
                            />
                            {errors.fullName && (
                                <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                            )}
                        </div>

                        {/* Age */}
                        <div>
                            <label className="form-label">
                                <User className="h-4 w-4 inline mr-2" />
                                Age *
                            </label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                className={`form-input ${errors.age ? 'border-red-500 focus:ring-red-500' : ''}`}
                                placeholder="Enter your age"
                                min="16"
                                max="100"
                            />
                            {errors.age && (
                                <p className="mt-1 text-sm text-red-600">{errors.age}</p>
                            )}
                        </div>

                        {/* Education */}
                        <div>
                            <label className="form-label">
                                <GraduationCap className="h-4 w-4 inline mr-2" />
                                Highest Education / Class Completed *
                            </label>
                            <input
                                type="text"
                                name="education"
                                value={formData.education}
                                onChange={handleInputChange}
                                className={`form-input ${errors.education ? 'border-red-500 focus:ring-red-500' : ''}`}
                                placeholder="e.g., Bachelor's in Computer Science, High School Diploma, etc."
                            />
                            {errors.education && (
                                <p className="mt-1 text-sm text-red-600">{errors.education}</p>
                            )}
                        </div>

                        {/* Skills */}
                        <div>
                            <label className="form-label">
                                <CheckCircle className="h-4 w-4 inline mr-2" />
                                Skills *
                            </label>

                            {/* Selected Skills */}
                            {formData.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {formData.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary-100 text-secondary-800"
                                        >
                                            {skill}
                                            <button
                                                type="button"
                                                onClick={() => handleSkillRemove(skill)}
                                                className="ml-2 text-secondary-600 hover:text-secondary-800"
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Skill Input */}
                            <div className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    placeholder="Type a skill and press Enter"
                                    className="form-input flex-1"
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleSkillAdd(e.target.value.trim());
                                            e.target.value = '';
                                        }
                                    }}
                                />
                            </div>

                            {/* Common Skills Suggestions */}
                            <div className="text-sm text-gray-600 mb-2">Suggested skills:</div>
                            <div className="flex flex-wrap gap-2">
                                {commonSkills.slice(0, 10).map((skill) => (
                                    <button
                                        key={skill}
                                        type="button"
                                        onClick={() => handleSkillAdd(skill)}
                                        disabled={formData.skills.includes(skill)}
                                        className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${formData.skills.includes(skill)
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-gray-100 text-gray-700 hover:bg-secondary-100 hover:text-secondary-700'
                                            }`}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>

                            {errors.skills && (
                                <p className="mt-1 text-sm text-red-600">{errors.skills}</p>
                            )}
                        </div>

                        {/* Job Type Preference */}
                        <div>
                            <label className="form-label">
                                <Target className="h-4 w-4 inline mr-2" />
                                Job Type Preference *
                            </label>
                            <select
                                name="jobTypePreference"
                                value={formData.jobTypePreference}
                                onChange={handleInputChange}
                                className={`form-input ${errors.jobTypePreference ? 'border-red-500 focus:ring-red-500' : ''}`}
                            >
                                <option value="">Select preferred job type</option>
                                {jobTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.jobTypePreference && (
                                <p className="mt-1 text-sm text-red-600">{errors.jobTypePreference}</p>
                            )}
                        </div>

                        {/* Experience */}
                        <div>
                            <label className="form-label">
                                <Clock className="h-4 w-4 inline mr-2" />
                                Experience (in years or months) *
                            </label>
                            <input
                                type="text"
                                name="experience"
                                value={formData.experience}
                                onChange={handleInputChange}
                                className={`form-input ${errors.experience ? 'border-red-500 focus:ring-red-500' : ''}`}
                                placeholder="e.g., 2 years, 6 months, Fresh graduate, etc."
                            />
                            {errors.experience && (
                                <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="w-full btn-secondary text-lg py-4 shimmer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                className="inline-block mr-2"
                            >
                                <CheckCircle className="h-5 w-5" />
                            </motion.div>
                            Find My Dream Job
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default JobSeekerForm;
