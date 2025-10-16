import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, ArrowLeft, CheckCircle, Building, User, FileText, Target } from 'lucide-react';
import { jobTypes, commonSkills } from '../data/dummyData';

const HiringForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    organizationName: '',
    jobType: '',
    skillsRequired: [],
    description: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log('HiringForm component loaded');
  }, []);

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
        if (skill && !formData.skillsRequired.includes(skill)) {
            setFormData(prev => ({
                ...prev,
                skillsRequired: [...prev.skillsRequired, skill]
            }));
        }
    };

    const handleSkillRemove = (skillToRemove) => {
        setFormData(prev => ({
            ...prev,
            skillsRequired: prev.skillsRequired.filter(skill => skill !== skillToRemove)
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
        if (!formData.age || formData.age < 18) newErrors.age = 'Valid age is required';
        if (!formData.organizationName.trim()) newErrors.organizationName = 'Organization name is required';
        if (!formData.jobType) newErrors.jobType = 'Job type is required';
        if (formData.skillsRequired.length === 0) newErrors.skillsRequired = 'At least one skill is required';
        if (!formData.description.trim()) newErrors.description = 'Description is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    if (validateForm()) {
      console.log('Form validation passed');
      
      // Store form data in localStorage
      localStorage.setItem('hiringFormData', JSON.stringify(formData));
      
      // Create new job posting
      const newJob = {
        id: Date.now(),
        title: formData.jobType + ' Position',
        organization: formData.organizationName,
        jobType: formData.jobType,
        skillsRequired: formData.skillsRequired,
        description: formData.description,
        location: 'India', // Default location
        postedDate: new Date().toISOString(),
        applications: 0,
        views: 0,
        status: 'active',
        postedBy: formData.fullName
      };
      
      console.log('New job created:', newJob);
      
      // Get existing posted jobs and add new one
      const existingJobs = JSON.parse(localStorage.getItem('postedJobs') || '[]');
      const updatedJobs = [...existingJobs, newJob];
      localStorage.setItem('postedJobs', JSON.stringify(updatedJobs));
      
      console.log('Jobs updated in localStorage');
      
      // Navigate to hiring dashboard
      navigate('/hiring-dashboard');
    } else {
      console.log('Form validation failed');
    }
  };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
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
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors duration-200"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Home
                    </button>

                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-6">
                        <Briefcase className="h-8 w-8 text-white" />
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Post a Job Opportunity
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Fill out the form below to find the perfect candidates for your organization.
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
                                min="18"
                                max="100"
                            />
                            {errors.age && (
                                <p className="mt-1 text-sm text-red-600">{errors.age}</p>
                            )}
                        </div>

                        {/* Organization Name */}
                        <div>
                            <label className="form-label">
                                <Building className="h-4 w-4 inline mr-2" />
                                Organization Name *
                            </label>
                            <input
                                type="text"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleInputChange}
                                className={`form-input ${errors.organizationName ? 'border-red-500 focus:ring-red-500' : ''}`}
                                placeholder="Enter your organization name"
                            />
                            {errors.organizationName && (
                                <p className="mt-1 text-sm text-red-600">{errors.organizationName}</p>
                            )}
                        </div>

                        {/* Job Type */}
                        <div>
                            <label className="form-label">
                                <Target className="h-4 w-4 inline mr-2" />
                                Type of Job to Offer *
                            </label>
                            <select
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleInputChange}
                                className={`form-input ${errors.jobType ? 'border-red-500 focus:ring-red-500' : ''}`}
                            >
                                <option value="">Select job type</option>
                                {jobTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.jobType && (
                                <p className="mt-1 text-sm text-red-600">{errors.jobType}</p>
                            )}
                        </div>

                        {/* Skills Required */}
                        <div>
                            <label className="form-label">
                                <CheckCircle className="h-4 w-4 inline mr-2" />
                                Skills Required *
                            </label>

                            {/* Selected Skills */}
                            {formData.skillsRequired.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {formData.skillsRequired.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
                                        >
                                            {skill}
                                            <button
                                                type="button"
                                                onClick={() => handleSkillRemove(skill)}
                                                className="ml-2 text-primary-600 hover:text-primary-800"
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
                                {commonSkills.slice(0, 8).map((skill) => (
                                    <button
                                        key={skill}
                                        type="button"
                                        onClick={() => handleSkillAdd(skill)}
                                        disabled={formData.skillsRequired.includes(skill)}
                                        className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${formData.skillsRequired.includes(skill)
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                                            }`}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>

                            {errors.skillsRequired && (
                                <p className="mt-1 text-sm text-red-600">{errors.skillsRequired}</p>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="form-label">
                                <FileText className="h-4 w-4 inline mr-2" />
                                Description / Additional Requirements *
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows={5}
                                className={`form-input ${errors.description ? 'border-red-500 focus:ring-red-500' : ''}`}
                                placeholder="Describe the job role, responsibilities, and any additional requirements..."
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="w-full btn-primary text-lg py-4 shimmer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
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
                            Post Job Opportunity
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default HiringForm;
