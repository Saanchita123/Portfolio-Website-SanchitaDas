import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Navigation Links */}
        <div className="w-full flex justify-between items-center mb-6">
        </div>
        {/* Main Call-to-Action */}
        <h2 className="text-2xl font-semibold mb-2 text-center">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="mb-4 text-center text-gray-300 max-w-xl">
          Let’s make something incredible together! Reach out to discuss your project, 
          and let’s create designs that resonate and inspire.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition mb-8">
          Hire Me!
        </button>
        {/* Copyright */}
        <div className="text-sm text-gray-400 text-left w-full">
          <span className="font-semibold text-white">Sanchita</span> &copy; all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
