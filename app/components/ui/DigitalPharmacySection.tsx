import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import Image from "next/image";
import { useModalStore } from '@/app/store/store';
// Grifter font setup
const headerFont = localFont({
  src: "../../fonts/grifterbold700.otf",
})

export const DigitalPharmacySection = () => {
  const [animationState, setAnimationState] = useState(0);
  const {openModal} = useModalStore();
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
      
        <div className="w-full md:w-1/2 px-4">
          <div className="mb-6">
            <h2 className={`text-4xl font-bold text-gray-900 mb-4 ${headerFont.className}`}>Digital Pharmacy</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your trusted partner in delivering medications globally, with
              seamless digital solutions for easy access and secure payments
            </p>
            <motion.button 
            className="bg-primary-brand text-white text-sm font-normal px-7 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick = {openModal}
          >
            Join Waitlist
          </motion.button>
          </div>
        </div>

       
        <div className="w-full md:w-1/2">
          <Image src= "/digital.svg" width={450} height= {300}  alt=""/>
        </div>
      </div>
    </div>
  );
};

export default DigitalPharmacySection;