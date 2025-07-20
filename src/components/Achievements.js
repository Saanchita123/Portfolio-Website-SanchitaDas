import { motion } from "framer-motion";
import { Sparkles, Star, Zap } from "lucide-react";

export default function AchievementsFlipGrid() {
  const achievements = [
    {
      title:
        "Emerged as a national finalist at the electrifying Smart India Hackathon 2024, LNCT—where innovation meets impact!",
      image: "images/sih.png",
    },
    {
      title:
        "Thrilled to be part of an engaging session at the dynamic BSK Seminar—igniting ideas and inspiring minds!",
      image: "images/bsk.png",
    },
    {
      title:
        "Part of the dynamic 12th Seminar on AIML Technology in Thermal Power Stations—where innovation powers energy!",
      image: "/images/NEED.jpg",
    },
    {
      title:
        "Earned special recognition for outstanding innovation at the Project Competition, UEM!",
      image: "/images/WhatsApp Image 2024-12-18 at 12.41.23_74994b83.jpg",
    },
  ];

  return (
    <section className="relative bg-transparent py-24 overflow-hidden">

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
        className=""
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      /> */}
      
      {/* <motion.div
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

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white">
            🏆 Achievements
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">
           Few of my achievements in my college life
          </p>
        </motion.div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="group [perspective:1000px] w-full h-64"
            >
              <div className="relative w-full h-full duration-700 transform-style preserve-3d group-hover:rotate-y-180 transition-transform">
                {/* Front */}
                <div className="absolute inset-0 rounded-xl overflow-hidden bg-white/10 border border-white/10 backdrop-blur-md shadow-lg flip-card-front">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-pink-600 text-white rounded-xl p-4 flex items-center justify-center text-center transform rotate-y-180 flip-card-back">
                  <h3 className="text-sm md:text-base font-medium">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .transform-style {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}