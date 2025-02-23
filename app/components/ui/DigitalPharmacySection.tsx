import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import Button from "./Button";

// Grifter font setup
const headerFont = localFont({
  src: "../../fonts/grifterbold700.otf",
})

export const DigitalPharmacySection = () => {
  const [animationState, setAnimationState] = useState(0);
  
  // Start animation automatically when component mounts
  useEffect(() => {
    startAnimation();
    
    // Set up repeating animation
    const intervalId = setInterval(() => {
      startAnimation();
    }, 6000); // Restart animation every 6 seconds
    
    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);
  
  const startAnimation = () => {
    // Reset animation state
    setAnimationState(0);
    
    // Begin animation sequence
    setTimeout(() => setAnimationState(1), 300);
    setTimeout(() => setAnimationState(2), 1500);
    setTimeout(() => setAnimationState(3), 2700);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Column - Digital Pharmacy Text Content */}
        <div className="w-full md:w-1/2 px-4">
          <div className="mb-6">
            <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${headerFont.className}`}>Digital Pharmacy</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your trusted partner in delivering medications globally, with
              seamless digital solutions for easy access and secure payments
            </p>
            <motion.button 
            className="bg-primary text-white text-sm font-normal px-7 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Waitlist
          </motion.button>
          </div>
        </div>

        {/* Right Column - Autonomous Animation */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-96 bg-green-50 rounded-lg overflow-hidden p-4">
            {/* Global Healthcare Label - as an image */}
            <motion.div 
              className="absolute top-4 left-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: animationState >= 1 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <img src="/cursor.svg" alt="Global Healthcare" className="rounded-full" />
            </motion.div>
            
            {/* Hi Temidayo message - as an image */}
            <motion.div 
              className="absolute top-16 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ 
                opacity: animationState >= 1 ? 1 : 0,
                y: animationState >= 1 ? 0 : -20
              }}
              transition={{ duration: 0.5 }}
            >
              <img src="/temidayo.svg" alt="Hi Temidayo Message" className="rounded-lg shadow-md" />
            </motion.div>
            
            {/* Arrow pointing down - as an SVG */}
            <motion.div 
              className="absolute top-36 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: animationState >= 2 ? 1 : 0, 
                y: animationState >= 2 ? 0 : -10
              }}
              transition={{ duration: 0.5 }}
            >
              <svg width="24" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            
            {/* Transactions Component with Alerts - as a single image */}
            <motion.div 
              className="absolute top-48 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: animationState >= 3 ? 1 : 0,
                scale: animationState >= 3 ? 1 : 0.95
              }}
              transition={{ duration: 0.7 }}
            >
              <img src="/transactionCard.svg" alt="Transactions Component with Alerts" className="rounded-lg shadow-md" />
            </motion.div>
            
            {/* Character on bottom right - as an image */}
            <motion.div 
              className="absolute bottom-2 right-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: animationState >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img src="/api/placeholder/48/48" alt="Character" className="rounded-full" />
            </motion.div>
            
            {/* Character on bottom left - as an image */}
            <motion.div 
              className="absolute bottom-8 left-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: animationState >= 3 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="/api/placeholder/48/64" alt="Character" className="rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPharmacySection;