"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./components/ui/Button";
import { useUserRoleStore } from "./store/store";
import localFont from "next/font/local"
import DigitalPharmacySection from "./components/ui/DigitalPharmacySection";

// Grifter font setup
const headerFont = localFont({
  src: "./fonts/grifterbold700.otf",
})


const mapElements = [
  { id: 1, icon: "🦷", label: "Tooth Ache", top: "30%", left: "48%", delay: 0.5 },
  { id: 2, icon: "❤️", label: "Antibiotics", top: "50%", left: "28%", delay: 1.0 },
  { id: 3, icon: "💊", label: "Pain Management", top: "45%", left: "68%", delay: 1.5 },
  { id: 4, icon: "💉", label: "Syrups", top: "73%", left: "52%", delay: 2.0 },
];

// Country flags and people 
const countryElements = [
  { id: 1, flag: "🇺🇸", image: "/usa-people.png", top: "42%", left: "20%", delay: 0.7 },
  { id: 2, flag: "🇨🇦", image: "/canada-people.png", top: "48%", left: "48%", delay: 1.2 },
  { id: 3, flag: "🇬🇭", image: "/ghana-people.png", top: "68%", left: "30%", delay: 1.7 },
  { id: 4, flag: "🇳🇬", image: "/nigeria-people.png", top: "45%", left: "70%", delay: 2.2 },
  { id: 5, flag: "🇫🇷", image: "/france-people.png", top: "50%", left: "86%", delay: 2.7 },
];

// Coin elements - 
const coinElements = [
  { id: 1, top: "38%", left: "12%", delay: 1.0, size: 80 },
  { id: 2, top: "62%", left: "16%", delay: 1.8, size: 100 },
  { id: 3, top: "38%", left: "85%", delay: 2.5, size: 70 },
];

export default function Home() {
  const { isPharmacist } = useUserRoleStore();
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    // Start animation sequence after a short delay
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    !isPharmacist ? (
      <main className="overflow-hidden space-y-20">
        <section className="flex flex-col items-center min-h-screen bg-[#F1FBFB] relative">
          {/* Header Content */}
          <div className="gap-5 flex flex-col items-center justify-center pt-20 pb-10 px-4 z-30 max-w-6xl mx-auto w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`${headerFont.className} text-[2.5rem] md:text-[3rem] leading-tight text-center`}
            >
              Send care across borders <br/>
              Buy medications from anywhere.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-subtext-gray leading-normal text-center w-full md:w-3/4 max-w-3xl"
            >
              Bridge the distance and show you care quickly and securely purchase medications 
              for your loved ones abroad using stable coin payments.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button />
            </motion.div>
          </div>
          
          {/* Map Area with Animations */}
          <div className="relative w-full flex-grow flex flex-col">
            {/* World map background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-10"
            >
              <Image 
                src="/Earth.png" 
                alt="World map" 
                fill  
                className="object-contain opacity-80"
                priority
              />
            </motion.div>
            
            {/* Map elements animation */}
            {showElements && mapElements.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="absolute z-20 bg-white rounded-full py-2 px-4 shadow-md flex items-center gap-2"
                style={{ top: item.top, left: item.left }}
              >
                <span>{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
            
            {/* Country people animation */}
            {showElements && countryElements.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="absolute z-20"
                style={{ top: item.top, left: item.left }}
              >
                <div className="relative">
                  <div className="absolute -top-8 -right-2">
                    <span className="text-2xl">{item.flag}</span>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-100 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder-person.png"}
                      alt="Person"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Coin animations */}
            {showElements && coinElements.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0.8], 
                  y: [50, 0, -20, -40],
                  rotate: 360
                }}
                transition={{ 
                  duration: 3, 
                  delay: item.delay,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="absolute z-20"
                style={{ top: item.top, left: item.left }}
              >
                <div className="relative w-12 h-12">
                  <Image
                    src="/stablecoin.png"
                    alt="Coin"
                    width={item.size}
                    height={item.size}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Mountain background - Positioned at the bottom */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 z-30 mt-auto"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/Mountain-bg.png" 
                  alt="Mountain background" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="">
            <h2 className={`${headerFont.className} text-3xl font-bold text-center mb-4`}>
              Trusted By
            </h2>
            <div className="flex justify-center items-center gap-4 flex-wrap">
  <div className="flex justify-center items-center w-32 h-32">
    <Image src="/logo1.svg" alt="Logo 1" width={80} height={80} className="object-contain" />
  </div>
  <div className="flex justify-center items-center w-32 h-32">
    <Image src="/logo2.svg" alt="Logo 2" width={80} height={80} className="object-contain" />
  </div>
  <div className="flex justify-center items-center w-32 h-32">
    <Image src="/logo3.svg" alt="Logo 3" width={80} height={80} className="object-contain" />
  </div>
  <div className="flex justify-center items-center w-32 h-32">
    <Image src="/logo4.svg" alt="Logo 4" width={80} height={80} className="object-contain" />
  </div>
  <div className="flex justify-center items-center w-32 h-32">
    <Image src="/logo5.svg" alt="Logo 5" width={80} height={80} className="object-contain" />
  </div>
  <div className="flex justify-center items-center w-32 h-32">
    <Image src="/logo6.svg" alt="Logo 6" width={80} height={80} className="object-contain" />
  </div>
</div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8  relative overflow-hidden">
        <div className="flex flex-col md:flex-row w-full">
      {/* Left side with mobile app and coin */}
      <div className="relative  md:w-1/2 p-8 flex justify-center items-center  ">
      <div className="w-96 h:auto bg-orange-50 mx-auto flex flex-col justify-center items-center">

     
        {/* Animated coin */}
        <motion.div
          className="absolute top-16 left-16"
          animate={{ 
            rotate: 360,
            y: [0, -10, 0]
          }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Image
            src="/stablecoin.png" 
            width= {150}
            height = {150}
            alt="Dollar coin" 
            className="w-24 h-24"
          />
        </motion.div>
        
        {/* Mobile app mockup */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Image 
            src="/image.svg"
             width = {250}
             height = {250}
            alt="Medication App Interface" 
            className="max-w-xs"
          />
        </motion.div>
        </div>
      </div>
      
      {/* Right side with text and button */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <motion.h2 
          className={`text-3xl ${headerFont.className} font-bold mb-6 text-gray-900`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Global Healthcare
        </motion.h2>
        
        <motion.p 
          className="text-md text-subtext-gray mb-8 max-w-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Payment used to be a restriction, we solved that! Buy medications for Yourself, family & Friends from anywhere in the world
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button 
            className="bg-primary text-white text-sm font-normal px-7 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Waitlist
          </motion.button>
        </motion.div>
      </div>
    </div>
    </section>
<section>
  <DigitalPharmacySection/>
  </section>
       

       <section className="flex flex-col justify-center items-center gap-3 bg-[#F4F6F5] p-20">
        <div className="px-4 py-2 rounded-full bg-white border border-primary">
          <span className="text-sm ">Our Services</span>
          </div>
          <div className="w-full">
  <Image 
    src="/services.svg" 
    alt="pharmacists"
    width={0}
    height={0}
    sizes="100vw"
    className="w-full h-[600px] object-contain"
  />
</div>
       </section>
      </main>
    ) : (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`${headerFont.className} text-3xl text-green-800`}
        >
          Hello Pharmacist Dashboard
        </motion.h1>
      </div>
    )
  );
}