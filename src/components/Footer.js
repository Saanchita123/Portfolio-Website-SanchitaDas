import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 md:py-20 px-4 sm:px-6 font-poppins border-t border-zinc-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Call-to-Action */}
        <h2 className="text-2xl md:text-3xl font-light mb-3 text-center tracking-wide">
          Ready to Collaborate?
        </h2>
        <p className="mb-8 text-center text-zinc-400 max-w-xl text-sm md:text-base font-light leading-relaxed">
          Let's create something remarkable together. Reach out to discuss your project.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sanchitad648@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-8 py-2.5 rounded-sm font-normal hover:bg-zinc-200 transition-colors mb-12 text-sm md:text-base"
        >
          Get in Touch
        </a>
        
        {/* Copyright */}
        <div className="text-xs md:text-sm text-zinc-500 text-center font-light">
          <span className="text-white font-normal">Sanchita</span> © 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;