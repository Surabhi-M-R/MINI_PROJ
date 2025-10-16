import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'medium', color = 'primary' }) => {
    const sizeClasses = {
        small: 'h-6 w-6',
        medium: 'h-12 w-12',
        large: 'h-16 w-16'
    };

    const colorClasses = {
        primary: 'border-primary-600',
        secondary: 'border-secondary-600',
        white: 'border-white'
    };

    return (
        <div className="flex items-center justify-center">
            <motion.div
                className={`${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full`}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default LoadingSpinner;
