import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white h-auto py-10 px-5 md:p-10 ">
      <div className="bg-secondary-brand w-auto  h-auto flex flex-col justify-between items-center rounded-xl p-10 gap-14">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:gap-0 gap-10">
          <div className="flex items-center md:w-1/3">
            <Image
              src="/Vector.svg"
              width={100}
              height={100}
              alt="KuraBill Logo"
              className="mr-2 h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="text-lg sm:text-xl font-bold text-white">
              KuraBill
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-10 md:w-2/3">
            {/* For Patients */}
            <div className="flex flex-col justify-start items-start gap-4">
              <span className="text-white font-bold text-md">For Patients</span>
              <div className="flex flex-col jutify-start items-start gap-3">
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  Our Services
                </Link>
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  Testimonials
                </Link>
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  FAQs
                </Link>
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  About Us
                </Link>{" "}
              </div>
            </div>

            {/* For Pharmacists */}
            <div className="flex flex-col justify-start items-start gap-4">
              <span className="text-white font-bold text-md">
                For Pharmacists
              </span>
              <div className="flex flex-col jutify-start items-start gap-3">
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  Pricing
                </Link>
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  Testimonials
                </Link>
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  FAQs
                </Link>
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  About Us
                </Link>{" "}
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              {/* Company */}
              <span className="text-white font-bold text-md">Company</span>
              <div className="flex flex-col jutify-start items-start gap-3">
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  Privacy Policy
                </Link>
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  About Us
                </Link>{" "}
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              {/* Company */}
              <span className="text-white font-bold text-md">Contact</span>
              <div className="flex flex-col jutify-start items-start gap-3">
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  +233 123 456 789
                </Link>
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  info@kurabill.com
                </Link>
                <Link
                  href=""
                  className="text-sm text-white font-norma hover:text-primary-brand"
                >
                  GK-231 Arizona, US
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full justify-start items-start md:gap-0 gap-10">
            <div className="md:w-1/2 flex flex-row justify-start items-start gap-5" >
            <Link href="" className="text-white hover:text-primary-brand">
                    <Facebook size={24}/>
            </Link>         
            <Link href="" className="text-white hover:text-primary-brand">
                    <Twitter size={24}/>
            </Link>         
            <Link href="" className="text-white hover:text-primary-brand">
                    <Youtube size={24}/>
            </Link>         
            <Link href="" className="text-white hover:text-primary-brand">
                    <Instagram size={24}/>
            </Link>         
              </div>

              <div className="w-full md:w-auto">
              <div className='bg-white text-secondary-brand text-sm font-normal px-7 py-3 rounded-full text-center'>
      Join Waitlist
    </div>
              </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10">
    <span className="text-sm text-black">
Copyright 2025All Rights Reserved
    </span>

    <div className="hidden md:block  flex-col md:flex-row justify-between items-center space-x-10 gap-10">
    <Link
                  href=""
                  className="text-sm text-black font-norma hover:text-primary-brand"
                >
                  Privacy Policy
                </Link>
                <Link
                  href=""
                  className="text-sm text-black font-norma hover:text-primary-brand"
                >
                  Terms of Use
                </Link>
                <Link
                  href=""
                  className="text-sm text-black font-norma hover:text-primary-brand"
                >
                  Sales and Refund
                </Link>
                <Link
                  href=""
                  className="text-sm text-black font-norma hover:text-primary-brand"
                >
                  Legal
                </Link>
                <Link
                  href=""
                  className="text-sm text-black font-norma hover:text-primary-brand"
                >
                  Site Map
                </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
