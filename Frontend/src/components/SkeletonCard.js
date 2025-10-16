import React from 'react';
import { motion } from 'framer-motion';

const SkeletonCard = ({ type = 'default' }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    if (type === 'job-seeker') {
        return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="card p-6"
            >
                <motion.div variants={itemVariants} className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    </div>
                    <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-4">
                    <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse"></div>
                    <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-4">
                    <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="flex gap-1 mb-2">
                        <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded-full w-14 animate-pulse"></div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-4">
                    <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                </motion.div>
            </motion.div>
        );
    }

    if (type === 'job-listing') {
        return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="card p-6 relative"
            >
                <motion.div variants={itemVariants} className="absolute top-4 right-4">
                    <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-4 pr-8">
                    <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-4">
                    <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-4">
                    <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="flex gap-1 mb-2">
                        <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
                        <div className="h-6 bg-gray-200 rounded-full w-14 animate-pulse"></div>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-4">
                    <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded mb-1 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-4">
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-2">
                    <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-24 h-10 bg-gray-200 rounded animate-pulse"></div>
                </motion.div>
            </motion.div>
        );
    }

    // Default skeleton
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="card p-6"
        >
            <motion.div variants={itemVariants} className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></motion.div>
            <motion.div variants={itemVariants} className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></motion.div>
            <motion.div variants={itemVariants} className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></motion.div>
        </motion.div>
    );
};

export default SkeletonCard;
