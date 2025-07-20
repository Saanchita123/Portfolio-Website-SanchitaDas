import React from "react";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink, Eye } from "lucide-react";
import { motion } from "framer-motion";

const AllProjects = () => {
  const navigate = useNavigate();

  const allProjects = [
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
      liveLink:
        "https://www.loom.com/share/ece1e5c0a4ca4d1abb1c8e015fbfa6fe?sid=47961ff7-7b0a-4490-b518-9d5501693edb",
    },
    {
      id: 3,
      title: "Event Management System",
      description: "Manage events seamlessly with dedicated host and student logins.",
      image: "images/image2.png",
      githubLink: "https://github.com/Saanchita123/project-1.git",
      liveLink: "https://your-portfolio.com/green-strike-logo",
    },
     {
      id: 4,
      title: "Puppy addoption ",
      description: "Adopt puppies and contact the near by shelters.",
      image: "images/image.png",
      githubLink: "https://github.com/Saanchita123/puppies-adoption.git",
      liveLink: "https://saanchita123.github.io/puppies-adoption/",
    }

    // Add more as needed
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-zinc-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
      

        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white mb-3">
            🚀 All Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base">
            Here's a full collection of the projects I've worked on during my journey.
          </p>
        </div>
          <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium px-5 py-2 rounded-full transition duration-200"
          >
            ← Back
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-3xl p-5 shadow-lg dark:shadow-none border border-white dark:border-white/10 hover:shadow-2xl hover:-translate-y-1 hover:rotate-[-0.5deg] transition-all duration-300">
                <div
                  className="relative h-44 rounded-2xl overflow-hidden mb-4"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 z-10">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 p-2 rounded-full hover:bg-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="text-white" />
                    </motion.a>

                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} className="text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.description}
                  </p>

                  {project.liveLink && (
                    <motion.button
                      className="mt-3 w-full bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-700 transition-all duration-200 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <Eye size={14} />
                      <span>See Project</span>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
