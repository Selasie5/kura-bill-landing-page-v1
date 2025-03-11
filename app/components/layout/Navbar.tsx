"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useUserRoleStore } from '../../store/store';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModalStore } from '../../store/store';


const Navbar = () => {

  const { openModal } = useModalStore();
  const { isPharmacist, toggleRole } = useUserRoleStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (

   
    <motion.nav 
      className="w-full p-4"
      animate={{
        backgroundColor: isPharmacist ? '#202F26' : '#F1FBFB'
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        {/* Desktop and Mobile Header Row */}
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Image
              src="/Vector.svg" 
              width= {100}
              height= {100}
              alt="KuraBill Logo" 
              className="mr-2 h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className={`text-lg sm:text-xl font-bold ${isPharmacist? "text-white": "text-black"}`}>KuraBill</span>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className={`hidden md:flex items-center space-x-4 ${isPharmacist? "text-white": "text-[#808082]"
          }`}>
            <div className="flex items-center p-1 bg-[#e8f1ee] rounded-full w-fit">
              {/* Background Pill that Slides */}
              <motion.div 
                 className="absolute rounded-full"
                 animate={{
                   x: isPharmacist ? "100%" : "0%"
                 }}
                 transition={{
                   type: "spring",
                   stiffness: 300,
                   damping: 30
                 }}
                 style={{ 
                   width: '50%', 
                   height: '100%',
                   top: 0,
                   left: 0,
                   position: 'absolute',
                   zIndex: 0 
                 }}
              />
              
              {/* Patient */}
              <motion.button
        onClick={() => toggleRole()}
        className={`px-4 py-2 rounded-full text-sm font-medium relative z-10 whitespace-nowrap ${!isPharmacist ? "bg-[#3A8046] text-white" : "bg-transparent text-gray-600"}`}
      >
      For  Patients
      </motion.button>
      
      <motion.button
        onClick={() => toggleRole()}
        className={`px-4 py-2 rounded-full text-sm font-medium relative z-10 whitespace-nowrap ${isPharmacist? "bg-[#3A8046] text-white" : "bg-transparent text-gray-600"}`}
      >
       For  Pharmacists
      </motion.button>
            </div>
            
            <Link href="#" className={`px-3 py-2 rounded-md text-sm font-medium ${isPharmacist ? "text-white hover:text-primary-brand hover:font-bold" : "text-[#808082] hover:text-primary-brand"}`}>
              Our Services
            </Link>
            <Link href="#" className={`px-3 py-2 rounded-md text-sm font-medium ${isPharmacist ? "text-white hover:text-primary-brand hover:font-bold" : "text-[#808082] hover:text-primary-brand"}`}>
              Testimonials
            </Link>
            <Link href="#" className={`px-3 py-2 rounded-md text-sm font-medium ${isPharmacist ? "text-white hover:text-primary-brand hover:font-bold" : "text-[#808082] hover:text-primary-brand"}`}>
              FAQs
            </Link>
            <Link href="#" className={`px-3 py-2 rounded-md text-sm font-medium ${isPharmacist ? "text-white hover:text-primary-brand hover:font-bold" : "text-[#808082] hover:text-primary-brand"}`}>
              About Us
            </Link>
            
            {/* Join Waitlist Button */}
            <motion.button 
              className={`px-5 py-2 rounded-full border border-[#808082] text-gray-700 text-sm font-medium hover:text-white hover:border-none hover:font-bold  ${isPharmacist ? "text-white" : "text-[#808082]"}`}
              whileHover={{ backgroundColor: '#336e2e', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick = {openModal}
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
              <div className="flex justify-center items-center w-full space-x-2 mb-3 relative">
                {/* Sliding Background for Mobile Toggle */}
                <motion.div 
                 className="absolute rounded-full"
                 animate={{
                   x: isPharmacist ? "100%" : "0%"
                 }}
                 transition={{
                   type: "spring",
                   stiffness: 300,
                   damping: 30
                 }}
                 style={{ 
                   width: '50%', 
                   height: '100%',
                   top: 0,
                   left: 0,
                   position: 'absolute',
                   zIndex: 0 
                 }}
              />
              
              {/* Patient */}
              <motion.button
        onClick={() => toggleRole()}
        className={`px-4 py-2 rounded-full text-sm font-medium relative z-10 whitespace-nowrap ${!isPharmacist ? "bg-[#3A8046] text-white" : "bg-transparent text-gray-600"}`}
      >
        Patients
      </motion.button>
      
      <motion.button
        onClick={() => toggleRole()}
        className={`px-4 py-2 rounded-full text-sm font-medium relative z-10 whitespace-nowrap ${isPharmacist? "bg-[#3A8046] text-white" : "bg-transparent text-gray-600"}`}
      >
        Pharmacists
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
                className="bg-primary-brand w-full text-white text-sm font-normal px-7 py-3 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                whileHover={{ backgroundColor: 'rgb(126, 34, 206)' }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}
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