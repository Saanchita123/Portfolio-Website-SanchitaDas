import { motion } from "framer-motion";
import { useState } from "react";

export default function AchievementsFlipGrid() {
  const [flippedCards, setFlippedCards] = useState({});

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

  const toggleFlip = (idx) => {
    setFlippedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className="font-poppins relative bg-black py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Subtle ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full w-1 h-1 bg-zinc-700 opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide mb-2 sm:mb-3">
            Achievements
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-light">
            Notable milestones from my journey
          </p>
        </motion.div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              {/* Mobile & Tablet: Click to flip */}
              <div className="block lg:hidden">
                <div
                  onClick={() => toggleFlip(idx)}
                  className="relative w-full h-64 sm:h-72 cursor-pointer active:scale-98 transition-transform"
                >
                  <div
                    className={`relative w-full h-full duration-700 preserve-3d transition-transform ${
                      flippedCards[idx] ? "rotate-y-180" : ""
                    }`}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 rounded-sm overflow-hidden bg-zinc-950 border border-zinc-800 backface-hidden shadow-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                      
                      {/* Tap indicator */}
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <p className="text-[10px] text-zinc-300 font-light">
                          Tap to read
                        </p>
                      </div>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 bg-zinc-900 border border-zinc-700 text-white rounded-sm p-5 sm:p-6 flex flex-col items-center justify-center text-center rotate-y-180 backface-hidden">
                      <p className="text-xs sm:text-sm font-light leading-relaxed text-zinc-300 mb-4">
                        {item.title}
                      </p>
                      <button className="text-[10px] text-zinc-500 font-light">
                        Tap to close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop: Hover to flip */}
              <div className="hidden lg:block group [perspective:1000px] w-full h-80">
                <div className="relative w-full h-full duration-700 preserve-3d group-hover:rotate-y-180 transition-transform">
                  {/* Front */}
                  <div className="absolute inset-0 rounded-sm overflow-hidden bg-zinc-950 border border-zinc-800 backface-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-zinc-900 border border-zinc-700 text-white rounded-sm p-6 flex items-center justify-center text-center rotate-y-180 backface-hidden">
                    <p className="text-sm font-light leading-relaxed text-zinc-300">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .active\:scale-98:active {
          transform: scale(0.98);
        }
      `}</style>
    </section>
  );
}