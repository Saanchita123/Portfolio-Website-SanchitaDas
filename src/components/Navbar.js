import { Home, Briefcase, Github, FileText, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home", icon: Home },
    { 
      id: "github", 
      label: "Github", 
      icon: Github,
      isExternal: true,
      href: "https://github.com/Saanchita123"
    },
    { 
      id: "linkedin", 
      label: "LinkedIn", 
      icon: Linkedin,
      isExternal: true,
      href: "https://www.linkedin.com/in/sanchita-das-962b8028b/"
    },
    { id: "projects",
      label: "Work", 
      icon: Briefcase,
    },
    { id: "contact", label: "Contact", icon: FileText },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

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

    navLinks.forEach(({ id, isExternal }) => {
      if (!isExternal) {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full flex justify-center items-center fixed top-0 font-poppins z-50 px-4 py-4">
      <div className="w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-sm px-4 sm:px-6 py-3 flex items-center justify-between backdrop-blur-sm bg-opacity-95">
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col z-50"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`h-px w-5 my-1 rounded-full bg-zinc-400 transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-px w-5 my-1 rounded-full bg-zinc-400 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-5 my-1 rounded-full bg-zinc-400 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-1 flex-1">
          {navLinks.map(({ id, label, icon: Icon, isExternal, href }) => {
            if (isExternal) {
              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-sm transition-all text-zinc-400 hover:text-white hover:bg-zinc-900"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-light">{label}</span>
                </a>
              );
            }
            
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-sm transition-all ${
                  activeSection === id
                    ? "text-white bg-zinc-900"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs font-light">{label}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-4 right-4 top-16 bg-zinc-950 border border-zinc-800 rounded-sm shadow-2xl transition-all duration-300 ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-2">
            {navLinks.map(({ id, label, icon: Icon, isExternal, href }) => {
              if (isExternal) {
                return (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-sm transition-all text-zinc-400 hover:text-white hover:bg-zinc-900"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-light">{label}</span>
                  </a>
                );
              }
              
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-all ${
                    activeSection === id
                      ? "text-white bg-zinc-900"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-light">{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}