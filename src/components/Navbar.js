import { GithubIcon, Linkedin } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = ["home", "projects", "achievements", "skills", "services", "contact"];
  const [activeSection, setActiveSection] = useState("home");

  // Scroll Spy with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navLinks.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-full shadow-md max-w-5xl mx-auto mt-4 py-3 px-6 flex items-center justify-between transition-all duration-500 backdrop-blur-md">
      {/* Brand */}
      <div className="flex items-center">
        <span className="bg-pink-200 dark:bg-pink-500 text-pink-800 dark:text-white font-semibold px-3 py-1 rounded-full text-sm tracking-wide">
          Sanchita
        </span>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col items-center ml-2 z-50"
        onClick={() => setOpen(!open)}
      >
        <span className={`h-1 w-6 my-0.5 rounded-full bg-pink-500 dark:bg-pink-300 transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-1.5" : ""}`} />
        <span className={`h-1 w-6 my-0.5 rounded-full bg-pink-500 dark:bg-pink-300 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`h-1 w-6 my-0.5 rounded-full bg-pink-500 dark:bg-pink-300 transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
      </button>

      {/* Links */}
      <div
        className={`absolute md:static left-0 right-0 bg-white bg-zinc-800 md:bg-zinc-900 rounded-2xl md:rounded-full mx-4 md:mx-0 top-20 md:top-0 shadow-lg md:shadow-none transition-all duration-300 z-40 transform ${
          open
            ? "scale-100 opacity-100 flex flex-col md:flex-row"
            : "scale-95 opacity-0 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto hidden md:flex"
        } items-center justify-between gap-6 md:gap-8 py-5 md:py-0 px-6 md:px-0`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className={`relative font-medium transition-all ${
                activeSection === link
                  ? "text-pink-500 dark:text-pink-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <span className="relative group">
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-400 transition-all group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>

        {/* Socials + CTA */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {[{
              icon: <GithubIcon />,
              label: "GitHub",
              href: "https://github.com/Saanchita123",
            },
            {
              icon: <Linkedin />,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/sanchita-das-962b8028b/",
            },
            {
              icon: <MailIcon />,
              label: "Mail",
              href: "mailto:sanchitad648@gmail.com",
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              aria-label={social.label}
              className="text-gray-400 dark:text-gray-500 hover:text-pink-500 dark:hover:text-pink-400 transition-transform transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
          <a href="#contact">
            <button className="ml-2 bg-pink-500 dark:bg-white text-white dark:text-pink-500 px-5 py-2 rounded-full font-semibold transition hover:scale-105">
              Hire Me!
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" d="M3 8l9 6 9-6" />
      <rect width="18" height="13" x="3" y="5" rx="2" />
    </svg>
  );
}
