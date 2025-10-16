import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import HiringForm from './pages/HiringForm';
import JobSeekerForm from './pages/JobSeekerForm';
import HiringDashboard from './pages/HiringDashboard';
import JobSeekerDashboard from './pages/JobSeekerDashboard';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
                <Navbar />
                <motion.main
                    className="flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/hiring-form" element={<HiringForm />} />
                        <Route path="/jobseeker-form" element={<JobSeekerForm />} />
                        <Route path="/hiring-dashboard" element={<HiringDashboard />} />
                        <Route path="/jobseeker-dashboard" element={<JobSeekerDashboard />} />
                    </Routes>
                </motion.main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
