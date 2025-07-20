import { motion } from "framer-motion";
import { Github, ExternalLink, Eye, Sparkles, Star, Zap } from "lucide-react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

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
      githubLink: "https://github.com/Saanchita123/SIH.git",
      liveLink: "https://www.loom.com/share/ece1e5c0a4ca4d1abb1c8e015fbfa6fe?sid=47961ff7-7b0a-4490-b518-9d5501693edb",
    },
    {
      id: 3,
      title: "Event Management System",
      description: "Manage events seamlessly with dedicated host and student logins.",
      image: "images/image2.png",
      githubLink: "https://github.com/Saanchita123/project-1.git",
      liveLink: "https://your-portfolio.com/green-strike-logo",
    },
  ];

  return (
    <section className="relative bg-transparent py-24 overflow-hidden transition-colors duration-500">
      {/* Multiple sparkle elements */}
      <motion.div
        className="absolute top-10 left-10 text-purple-400 opacity-60 dark:opacity-80 z-0"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={60} />
      </motion.div>

      <motion.div
        className="absolute top-32 right-20 text-pink-400 opacity-50 dark:opacity-70 z-0"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -20, 0],
          rotate: [0, -180, -360],
          scale: [0.8, 1.3, 1, 0.8],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <Star size={45} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/4 text-cyan-400 opacity-40 dark:opacity-60 z-0"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          rotate: [0, 270, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      >
        <Zap size={50} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-16 text-purple-300 opacity-50 dark:opacity-70 z-0"
        animate={{
          x: [0, -25, 45, 0],
          y: [0, 25, -35, 0],
          rotate: [0, 90, 180],
          scale: [1, 0.7, 1.1, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      >
        <Sparkles size={40} />
      </motion.div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 
                ? "w-3 h-3 bg-pink-400 dark:bg-pink-500 opacity-70" 
                : i % 3 === 1 
                ? "w-2 h-2 bg-purple-400 dark:bg-purple-500 opacity-60"
                : "w-4 h-4 bg-cyan-400 dark:bg-cyan-500 opacity-50"
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 120 - 60, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.5, 0.3],
              scale: [1, 1.5, 0.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Animated border lines */}
      {/* <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-30"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-400 to-transparent opacity-30"
        animate={{
          x: ["100%", "-100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      /> */}

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            🌟 Featured Projects
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">
            A glimpse of some creative work
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-3xl p-5 shadow-lg dark:shadow-none border border-white dark:border-white/10 hover:shadow-2xl hover:-translate-y-1 hover:rotate-[-0.5deg] transition-all duration-300">
                {/* Project Thumbnail */}
                <div
                  className="relative h-44 rounded-2xl overflow-hidden mb-4 group"
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

                {/* Info Section */}
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.description}
                  </p>

                  {/* CTA Button */}
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
      <div className="mt-12 flex justify-center">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate("/projects")}
    className="bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center space-x-2"
  >
    <Star size={16} />
    <span>View All Projects</span>
  </motion.button>
</div>


      </div>
    </section>
  );
};

export default Projects;