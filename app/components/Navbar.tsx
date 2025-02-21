"use client"
import React, { useState } from 'react';
import { useUserRoleStore } from '../store/store';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { isPharmacist, toggleRole } = useUserRoleStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <motion.nav 
      className="w-full p-2 shadow-md"
      animate={{
        backgroundColor: isPharmacist ? 'rgb(219, 234, 254)' : 'rgb(220, 252, 231)'
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        {/* Desktop and Mobile Header Row */}
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img 
              src="/api/placeholder/40/40" 
              alt="KuraBill Logo" 
              className="mr-2 h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="text-lg sm:text-xl font-bold">KuraBill</span>
            <div className="ml-2 px-2 py-1 bg-purple-500 text-white text-xs rounded">BETA</div>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-1 relative">
              {/* Background Pill that Slides */}
              <motion.div 
                className="absolute inset-0 rounded-md"
                animate={{
                  backgroundColor: isPharmacist ? 'rgb(59, 130, 246)' : 'rgb(34, 197, 94)',
                  x: isPharmacist ? '100%' : '0%'
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                style={{ width: '50%' }}
              />
              
              {/* Patient Button */}
              <motion.button 
                onClick={() => !isPharmacist ? null : toggleRole()}
                className="px-3 py-2 rounded-md text-sm font-medium z-10 relative"
                animate={{
                  color: !isPharmacist ? 'rgb(255, 255, 255)' : 'rgb(55, 65, 81)'
                }}
                whileHover={isPharmacist ? { backgroundColor: 'rgba(229, 231, 235, 0.5)' } : {}}
                transition={{ duration: 0.3 }}
              >
                For Patients
              </motion.button>
              
              {/* Pharmacist Button */}
              <motion.button 
                onClick={() => isPharmacist ? null : toggleRole()}
                className="px-3 py-2 rounded-md text-sm font-medium z-10 relative"
                animate={{
                  color: isPharmacist ? 'rgb(255, 255, 255)' : 'rgb(55, 65, 81)'
                }}
                whileHover={!isPharmacist ? { backgroundColor: 'rgba(229, 231, 235, 0.5)' } : {}}
                transition={{ duration: 0.3 }}
              >
                For Pharmacists
              </motion.button>
            </div>
            
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">
              Our Services
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">
              Testimonials
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">
              FAQs
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">
              About Us
            </a>
            
            {/* Join Waitlist Button */}
            <motion.button 
              className="px-4 py-2 rounded-md bg-purple-600 text-white text-sm font-medium"
              whileHover={{ backgroundColor: 'rgb(126, 34, 206)', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Join Waitlist
            </motion.button>
          </div>
          
          {/* Mobile menu button - Visible only on mobile */}
          <div className="flex items-center md:hidden">
            <motion.button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 focus:outline-none"
              whileHover={{ backgroundColor: 'rgba(229, 231, 235, 0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu - Toggleable with animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-2 space-y-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Role Toggle Buttons */}
              <div className="flex space-x-2 mb-3 relative">
                {/* Sliding Background for Mobile Toggle */}
                <motion.div 
                  className="absolute inset-y-0 rounded-md"
                  animate={{
                    backgroundColor: isPharmacist ? 'rgb(59, 130, 246)' : 'rgb(34, 197, 94)',
                    x: isPharmacist ? '50%' : '0%'
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  style={{ width: '50%' }}
                />
                
                <motion.button 
                  onClick={() => {
                    if (isPharmacist) toggleRole();
                  }}
                  className="flex-1 px-3 py-2 rounded-md text-sm font-medium z-10 relative"
                  animate={{
                    color: !isPharmacist ? 'rgb(255, 255, 255)' : 'rgb(55, 65, 81)'
                  }}
                >
                  For Patients
                </motion.button>
                
                <motion.button 
                  onClick={() => {
                    if (!isPharmacist) toggleRole();
                  }}
                  className="flex-1 px-3 py-2 rounded-md text-sm font-medium z-10 relative"
                  animate={{
                    color: isPharmacist ? 'rgb(255, 255, 255)' : 'rgb(55, 65, 81)'
                  }}
                >
                  For Pharmacists
                </motion.button>
              </div>
              
              {/* Other Navigation Links with staggered animation */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.07
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {['Our Services', 'Testimonials', 'FAQs', 'About Us'].map((item, index) => (
                  <motion.a 
                    key={index}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
              
              {/* Join Waitlist Button - Full Width on Mobile with animation */}
              <motion.button 
                className="w-full mt-3 px-4 py-2 rounded-md bg-purple-600 text-white font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                whileHover={{ backgroundColor: 'rgb(126, 34, 206)' }}
                whileTap={{ scale: 0.98 }}
              >
                Join Waitlist
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;