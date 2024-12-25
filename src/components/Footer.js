import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-14">
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          
          {/* Logo Section - Left */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-40 h-40">
              <img src="images/logo.png" alt="Logo" />
            </div>
          </div>

          {/* Text and Button - Centered */}
          <div className="text-center flex flex-col items-center">
            <p className="text-2xl font-bold mb-4 leading-tight">Partner with us</p>
            <Link to = "demo" className="bg-blue-600 text-white text-lg px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200 transform hover:scale-105">
              Book a Demo
            </Link>
          </div>

          {/* Get In Touch Section - Right */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">Get In Touch</h3>
            <p className="text-sm md:text-base mb-1">86-90 Paul Street, London, England, EC2A 4NE</p>
            <p className="text-sm md:text-base mb-1">Email: hello@uniqheights.com</p>
            <p className="text-sm md:text-base">Hours: Mon-Thurs 9:00AM - 5:00PM</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center border-t border-blue-800 pt-4 text-sm">
          <p>&copy; 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
