"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import Button from "./components/ui/Button";
import { useUserRoleStore } from "./store/store";
import localFont from "next/font/local";
import DigitalPharmacySection from "./components/ui/DigitalPharmacySection";
import ServiceCard from "./components/ui/ServiceCard";
import TestimonialSection from "./components/layout/TestimonialSection";
import FAQ from "./components/ui/FAQ";
import { motion, useScroll, useTransform } from "framer-motion";
import { Tag, Check } from "lucide-react";
import { useModalStore } from "./store/store";

// Grifter font setup
const headerFont = localFont({
  src: "../app/fonts/grifterbold700.otf",
});

const mapElements =  [
  { id: 1, icon: "❤️", label: "Antibiotics", top: 42, left: 22, delay: 1.2 },
  { id: 2, icon: "🦷", label: "Tooth Ache", top: 28, left: 50, delay: 1.4 },
  { id: 3, icon: "💊", label: "Pain Management", top: 38, left: 70, delay: 1.6 }, // Moved further right
  { id: 4, icon: "🧪", label: "Syrups", top: 70, left: 55, delay: 1.8 }
];

// Country flags and people
const countryElements =  [
  { id: 1, flag: "🇺🇸", image: "/usa-people.png", top: 30, left: 20, delay: 2.0 },
  { id: 2, flag: "🇨🇦", image: "/canada-people.png", top: 40, left: 40, delay: 2.2 },
  { id: 3, flag: "🇳🇬", image: "/nigeria-people.png", top: 55, left: 46, delay: 2.4 },
  { id: 4, flag: "🇬🇭", image: "/ghana-people.png", top: 62, left: 25, delay: 2.6 },
  { id: 5, flag: "🇫🇷", image: "/france-people.png", top: 30, left: 60, delay: 2.8 } // Moved further left
];

// Coin elements -
const coinElements =  [
  { id: 1, size: 80, top: 50, left: 8, delay: 1.0 },  // Left side of the map
  { id: 2, size: 80, top: 50, left: 92, delay: 1.5 }  // Right side of the map
]

const servicesData = {
  title: "Global Medication Management and Payment System",
  features: [
    {
      title: "Medication Management",
      description:
        "Easily manage your prescriptions and discover trusted pharmacies near you, ensuring a convenient healthcare experience every time.",
    },
    {
      title: "Effortless Payments",
      description:
        "Make secure payments for medications from anywhere in the world, with fast, easy, and reliable transactions using stablecoins.",
    },
    {
      title: "Global Healthcare",
      description:
        "Send essential medications to your loved ones, no matter where they are, with just a few clicks and secure payment options.",
    },
  ],
};

//FAQ Questions
const faqData = [
  {
    question: "How long does my order take?",
    answer:
      "Orders typically take 3-5 business days to process and ship, but delivery times may vary based on your location and selected shipping method. You'll receive a tracking number as soon as your order is on its way!",
  },
  {
    question: "How can I track my order?",
    answer:
      "You can track your order by logging into your account and visiting the 'Order History' section. Alternatively, click the tracking link in your shipping confirmation email. Our system updates tracking information every 24 hours.",
  },
  {
    question: "How do I buy medications for my family?",
    answer:
      "To purchase medications for family members, you'll need to create separate profiles for each person under your account. Each profile should include their full name, date of birth, and any allergies or current medications. For prescription medications, valid prescriptions must be uploaded for each individual.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple Pay. For orders over $200, we also offer financing options through Affirm and Klarna with approval.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee on most products. If you're not completely satisfied, you can return unused items in their original packaging for a full refund. Please note that certain health products and medications cannot be returned once opened due to safety regulations.",
  },
];
export default function Home() {
  const { isPharmacist } = useUserRoleStore();
  const [showElements, setShowElements] = useState(false);
  // const [openIndex, setOpenIndex] = useState(0);


  const { openModal } = useModalStore();

  const dashboardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: dashboardRef,
    offset: ["start end", "end start"],
  });

  // Transform values for the dashboard perspective animation
  const perspective = useTransform(scrollYProgress, [0, 0.5], [1000, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  useEffect(() => {
    // Start animation sequence after a short delay
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return !isPharmacist ? (
    <main className="overflow-hidden space-y-20">
 {/* Map Area with Animations */}
<section className="flex flex-col items-center min-h-screen bg-[#F1FBFB] relative">
  {/* Header Content */}
  <div className="gap-5 flex flex-col items-center justify-center pt-20 pb-10 px-4 z-30 max-w-6xl mx-auto w-full">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`${headerFont.className} text-[2.5rem] md:text-[3rem] leading-tight text-center`}
    >
      Send care across borders <br />
      Buy medications from anywhere.
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-subtext-gray leading-normal text-center w-full md:w-3/4 max-w-3xl"
    >
      Bridge the distance and show you care quickly and securely purchase
      medications for your loved ones abroad using stable coin payments.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Button onclick={openModal} />
    </motion.div>
  </div>

  {/* Map Area with Animations */}
  <div className="relative w-full h-[90vh] flex-grow flex flex-col overflow-hidden">
    {/* World map background */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-10 flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        <Image
          src="/Earth.png"
          alt="World map"
          fill
          className="object-contain opacity-90"
          priority
        />
      </div>
    </motion.div>

    {/* Map elements - medication categories - better spaced */}
    {showElements && mapElements.map((item) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: item.delay }}
        className="absolute z-20 bg-white rounded-full py-2 px-4 shadow-md flex items-center gap-2"
        style={{ 
          top: `${item.top}%`, 
          left: `${item.left}%`,
          transform: 'translate(-50%, -50%)' 
        }}
      >
        <span>{item.icon}</span>
        <span className="text-sm font-medium">{item.label}</span>
      </motion.div>
    ))}

    {/* Country people with flags - better spaced */}
    {showElements && countryElements.map((item) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: item.delay }}
        className="absolute z-20"
        style={{ 
          top: `${item.top}%`, 
          left: `${item.left}%`,
          transform: 'translate(-50%, -50%)' 
        }}
      >
        <div className="relative">
          {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <span className="text-2xl">{item.flag}</span>
          </div> */}
          <div className="w-16 h-16 rounded-full bg-blue-100 overflow-hidden border-2 border-white">
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

    {/* Coin animations - only two coins at extreme ends */}
    {showElements && coinElements.map((item) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: item.delay }}
        className="absolute z-20"
        style={{ 
          top: `${item.top}%`, 
          left: `${item.left}%`,
          transform: 'translate(-50%, -50%)' 
        }}
      >
        <motion.div
          className="relative"
          animate={{ rotateY: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          <Image
            src="/stablecoin.png"
            alt="Coin"
            width={item.size}
            height={item.size}
            className="object-contain"
          />
        </motion.div>
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
          <h2
            className={`${headerFont.className} text-3xl font-bold text-center mb-4`}
          >
            Trusted By
          </h2>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo1.svg"
                alt="Logo 1"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo2.svg"
                alt="Logo 2"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo3.svg"
                alt="Logo 3"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo4.svg"
                alt="Logo 4"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo5.svg"
                alt="Logo 5"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo6.svg"
                alt="Logo 6"
                width={80}
                height={80}
                className="object-contain"
              />
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
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <Image
                  src="/stablecoin.png"
                  width={150}
                  height={150}
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
                  width={250}
                  height={250}
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
              Payment used to be a restriction, we solved that! Buy medications
              for Yourself, family & Friends from anywhere in the world
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.button
                className="bg-primary-brand text-white text-sm font-normal px-7 py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick ={openModal}
              >
                Join Waitlist
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <DigitalPharmacySection />
      </section>

      <section className="flex flex-col justify-center items-center md:gap-3 bg-[#F4F6F5] md:p-20 p-5">
        <div className="px-4 py-2 rounded-full bg-white border border-primary-brand">
          <span className="text-sm ">Our Services</span>
        </div>
        <div className="w-full">
          <Image
            src="/services.svg"
            alt="pharmacists"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full md:h-[600px] h-[300px] object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          {servicesData.features.map((service, index) => (
            <ServiceCard
              key={index}
              serviceTitle={service.title}
              serviceDesc={service.description}
            />
          ))}
        </div>
      </section>
      <TestimonialSection />

      <section className="flex flex-col justify-center items-center">
        <h2
          className={`${headerFont.className}
            text-3xl font-bold
            `}
        >
          Frequently Aksed Questions
        </h2>
        <div className=" w-full flex flex-col justify-center items-center gap-4 md:px-24 px-5 py-5">
          {faqData.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </main>
  ) : (
    <main className="space-y-36 ">
      <div className="bg overflow-hidden">
        {/* Hero section with text content */}
        <div className="h-auto flex flex-col justify-center items-center gap-4 bg-[#202F26] pt-24 md:pt-48 md:px-0 px-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${headerFont.className} text-[2.5rem] md:text-[3rem] leading-tight text-center text-white`}
          >
            Setup A Digital Pharmacy with KuraBill
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white leading-normal text-center w-full md:w-3/4 max-w-3xl px-4"
          >
            Transform your pharmacy into a digital hub with Kurabill streamline
            orders, manage prescriptions, and offer secure online payments, all
            in one platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <Button onclick={openModal} />
          </motion.div>

          {/* Map visualization with overlapping dashboard */}
          <div className="relative w-full">
            {/* World Map */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-full flex justify-center px-4"
            >
              <div className="relative w-full max-w-5xl">
                <Image
                  width={600}
                  height={600}
                  src="/map.svg"
                  alt="World map showing pharmacy connections"
                  className="w-full object-contain rounded-lg"
                />
              </div>
            </motion.div>

            {/* Dashboard overlaying the map */}
            <div
              ref={dashboardRef}
              className="w-full flex justify-center"
              style={{ marginTop: "-25%" }}
            >
              <motion.div
                style={{
                  perspective: perspective,
                  rotateX: rotateX,
                  opacity: opacity,
                }}
                className="w-full max-w-4xl px-4"
              >
                <Image
                  src="/dashboard.svg"
                  width={600}
                  height={600}
                  alt="KuraBill dashboard interface"
                  className="w-full rounded-lg shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <section className="px-5">
        <div className="">
          <h2
            className={`${headerFont.className} text-3xl font-bold text-center mb-1 mt-2`}
          >
            Join 2K+ pharmacies boosting profits with Kura Bill
          </h2>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo1.svg"
                alt="Logo 1"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo2.svg"
                alt="Logo 2"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo3.svg"
                alt="Logo 3"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo4.svg"
                alt="Logo 4"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo5.svg"
                alt="Logo 5"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex justify-center items-center w-32 h-32">
              <Image
                src="/logo6.svg"
                alt="Logo 6"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5"> 
        {/* Hero Section */}
        <div className="px-6 md:px-12 lg:px-16 py-12 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <p className="text-gray-700 mb-2 font-medium">
                Go Digital & Sell to the world
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                X10 your Revenue with Kurabill
              </h1>
              <p className="text-gray-600 mb-6">
                Whatever you need, Kurabill is built with solutions in mind.
                Need to customize further - no problem.
              </p>
            </div>
            <div>
              <Image src="/Background.svg" width={500} height={500} alt="dashboard-components"/>
            </div>
          </div>
          {/* Features Section */}
          <div className="px-6 md:px-12 lg:px-16 py-12 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Feature 1 */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" y1="19" x2="12" y2="22"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Sales Analytics
                  </h3>
                  <p className="text-gray-600">
                    pharmacy&apos;s sales
                    performance with Kurabill&apos;s powerful analytics tools.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="M20 12h2"></path>
                      <path d="M2 12h2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                  <p className="text-gray-600">
                    Clear insights and open communication for seamless pharmacy
                    management.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                  <p className="text-gray-600">
                    Putting your customers at the heart of every solution we
                    provide.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Market Expansion
                  </h3>
                  <p className="text-gray-600">
                    Unlock new opportunities and reach more customers across
                    borders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
Pricing */}
      <section className="flex flex-col items-center justify-center gap-4 px-5">
        {/* Tag */}
        <span className="flex justify-center items-center text-sm bg-gray-200 border border-gray-400 px-3 py-2 gap-3 rounded-full">
          <Tag size={12} />
          Pricing
        </span>
        <h2 className={`${headerFont.className} text-2xl`}>
          Find the right plan
        </h2>
        <p className="text-gray-400 text-sm md:w-1/2 text-center">
        Invest in your Business&apos;s future with our comprehensive pharmacy
          solution. Contact us for pricing details and see how we can help you
          streamline your finances and reach your business goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10">
          {/* Basic */}
          <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-500 rounded-xl gap-12 h-[650px] w-[350px] px-6 py-3 hover:shadow-lg hover:scale-105">
            <div></div>

            <h3 className="text-2xl font-medium text-primary-brand">Basic</h3>
            <p className="text-md font-normal text-gray-300">
              Sell Digitally and Track Your Inventories
            </p>

            <p className="text-2xl font-medium">
              $ 0/<span className="text-xl">month</span>
            </p>

            <div className="flex flex-col justify-start items-start gap-5">
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Get a fully designed Admin Office</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Make money in USD & withdraw to your local bank</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Limited support</span>
              </div>
              <div className="flex justify-start items-center gap-2 text-gray-100">
                <Check size={12} />
                <span>Get a fully designed Admin Office</span>
              </div>
            </div>
            <button className=" bg-white rounded-full w-full px-4 py-2 border border-gray-300 text-gray-700 hover:bg-secondary-brand hover:text-white mt-5" 
            onClick={openModal}>
              Join the Waitlist
            </button>
          </div>
          {/* Pro */}
          <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-500 rounded-xl gap-12 h-[650px] w-[350px] px-6 py-3 hover:shadow-lg hover:scale-105">
            <h3 className="text-2xl font-medium text-primary-brand">Pro</h3>
            <p className="text-md font-normal text-gray-300">
              Sell Digitally and Track Your Inventories
            </p>

            <p className="text-2xl font-medium">
              $ 12/<span className="text-xl">month</span>
            </p>

            <div className="flex flex-col justify-start items-start gap-5">
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Get a fully designed Admin Office</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Make money in USD & withdraw to your local bank</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Limited support</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Add other employees</span>
              </div>
            </div>
            <button className=" bg-black rounded-full w-full px-4 py-2 border border-gray-300 text-white hover:bg-secondary-brand hover:text-white mt-5"
             onClick ={openModal}
            >
              Join the Waitlist
            </button>
          </div>
          {/* Pro */}
          <div className="flex flex-col justify-center items-center bg-gray-100 border border-gray-500 rounded-xl gap-12 h-[650px] w-[350px] px-6 py-3 hover:shadow-lg hover:scale-105">
            <h3 className="text-2xl font-medium text-primary-brand">
              Enterprise
            </h3>
            <p className="text-md font-normal text-gray-300">
              Sell Digitally and Track Your Inventories
            </p>

            <p className="text-2xl font-medium">
              $ 20/<span className="text-xl">month</span>
            </p>

            <div className="flex flex-col justify-start items-start gap-5">
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Get a fully designed Admin Office</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Make money in USD & withdraw to your local bank</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Get Full Support</span>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Check size={12} />
                <span>Add other employees</span>
              </div>
            </div>
            <button className=" bg-primary-brand rounded-full w-full px-4 py-2 border border-gray-300 text-white hover:bg-secondary-brand hover:text-white mt-5"
             onClick ={openModal}
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <section className="flex flex-col justify-center items-center px-5">
        <h2
          className={`${headerFont.className}
            text-3xl font-bold
            `}
        >
          Frequently Aksed Questions
        </h2>
        <div className=" w-full flex flex-col justify-center items-center gap-4 md:px-24 px-5 py-5">
          {faqData.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </main>
  );
}
