import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Thrifty Voyage",
      description: "Go around the world affordably",
      image: "images/image1.png",
      githubLink: "https://github.com/Saanchita123/hack4bengal.git",
      liveLink: "https://hack4bengal-elitesquad.vercel.app",
    },
    {
      id: 2,
      title: "Guard Rail",
      description: "Crowd Management System",
      image: "images/GuardRail.png",
      githubLink: "https://github.com/your-username/green-strike-logo",
      liveLink: "https://www.loom.com/share/ece1e5c0a4ca4d1abb1c8e015fbfa6fe?sid=47961ff7-7b0a-4490-b518-9d5501693edb",
    },
    {
      id: 3,
      title: "Event Management System",
      description: "Manage events seamlessly with dedicated host and student logins.",
      image: "images/image2.png",
      githubLink: "https://github.com/Saanchita123/project-1.git",
      liveLink: "",
    },
    {
      id: 4,
      title: "Puppy Adoption",
      description: "Adopt puppies and contact the nearby shelters.",
      image: "images/ima1.jpg",
      githubLink: "https://github.com/Saanchita123/New-Puppy-website.git",
      liveLink: "https://new-puppy-website.vercel.app/",
    }
  ];

  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section className="bg-black min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden font-poppins">
      <div className="mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-8 sm:mb-12 md:mb-16 tracking-wide text-center">
          Featured Projects
        </h2>

        {/* Mobile: Vertical scrollable grid */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-zinc-950 rounded-sm border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-zinc-600 active:scale-98"
              >
                <div className="relative h-[180px] sm:h-[200px] overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-light text-white tracking-wide">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex gap-3 sm:gap-4 pt-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 text-xs sm:text-sm font-light hover:text-white active:text-zinc-300 transition-colors duration-300"
                    >
                      GitHub →
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 text-xs sm:text-sm font-light hover:text-white active:text-zinc-300 transition-colors duration-300"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Horizontal marquee */}
        <div className="hidden lg:block relative w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee hover:pause">
            {duplicatedProjects.map((project, index) => (
              <div
                key={index}
                className="group relative w-[300px] flex-shrink-0 bg-zinc-950 rounded-sm border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-zinc-600"
              >
                <div className="relative h-[200px] overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-light text-white tracking-wide">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 text-sm font-light hover:text-white transition-colors duration-300"
                    >
                      GitHub →
                    </a>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-500 text-sm font-light hover:text-white transition-colors duration-300"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .active\:scale-98:active {
          transform: scale(0.98);
        }
      `}</style>
    </section>
  );
};

export default Projects;