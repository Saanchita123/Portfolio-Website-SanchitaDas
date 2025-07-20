import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Custom Hook
function useTypewriter(words, typingSpeed = 100, deletingSpeed = 50, pauseBetweenWords = 2000, pauseAfterDeleting = 500) {
  const [index, setIndex] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timeout;
    const current = words[index];
    if (!isDeleting && displayed !== current) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), typingSpeed);
    } else if (isDeleting && displayed) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), deletingSpeed);
    } else if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetweenWords);
    } else if (isDeleting && !displayed) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((index + 1) % words.length);
      }, pauseAfterDeleting);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index]);

  return displayed;
}
const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
const textStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const textFadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSection() {
  const profession = useTypewriter(["Software Engineer","UI/UX Designer", "Full Stack Developer"]);

  return (
    <motion.section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between bg-transparent  min-h-screen w-full px-6 py-12 md:py-24 overflow-hidden transition-colors duration-500"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Decorative Sparkles */}
      <motion.div className="absolute top-10 left-10 text-purple-300 opacity-20 dark:opacity-40 z-0"
        animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
        <Sparkles size={60} />
      </motion.div>

      <motion.div className="absolute bottom-10  right-10 text-pink-300 opacity-20 dark:opacity-40 z-0"
        animate={{ rotate: [0, -360], scale: [1, 1.4, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
        <Sparkles size={50} />
      </motion.div>

      {/* Floating Bubbles */}
      {[...Array(6)].map((_, i) => {
        const colors = [
          'bg-purple-200 dark:bg-purple-600',
          'bg-blue-200 dark:bg-blue-600',
          'bg-cyan-200 dark:bg-cyan-600',
          'bg-emerald-200 dark:bg-emerald-600',
          'bg-yellow-200 dark:bg-yellow-500',
          'bg-orange-200 dark:bg-orange-500'
        ];

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${colors[i]} opacity-40 z-0`}
            style={{
              width: `${12 + i * 4}px`,
              height: `${12 + i * 4}px`,
              left: `${10 + i * 12}%`,
              top: `${80 + i * 10}%`,
            }}
            animate={{
              y: [0, -800],
              opacity: [0.4, 0.8, 0.4, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          />
        );
      })}

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex-1 mx-5   flex flex-col items-start md:pr-10 text-left"
        variants={textStagger}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-2  text-white border-2 border-100-gray rounded-full px-3 py-2 my-1 text-sm font-medium shadow">
  <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
  Available for work
</div>

        <motion.span className="text-lg text-gray-700 dark:text-gray-300 mb-1" variants={textFadeUp}>
          Hello, I'm
        </motion.span>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-tight"
          variants={textFadeUp}
        >
          <span className="block text-black dark:text-white">Sanchita Das</span>
          <span className="block text-pink-600 dark:text-pink-400 text-2xl mt-2 h-9">
            {profession}
            <span className="ml-1 inline-block w-2 h-6 bg-pink-400 animate-pulse rounded-sm"></span>
          </span>
        </motion.h1>

        <motion.p
          className="text-base text-gray-700 dark:text-gray-400 max-w-xl mt-3"
          variants={textFadeUp}
        >
          I'm a UI/UX designer and front-end developer who transforms ideas into intuitive,
          visually compelling digital experiences. I build user-focused interfaces that
          bring creativity and functionality together.
        </motion.p>

        <motion.div className="flex gap-4 mt-6" variants={textFadeUp}>
          <a
            href="https://drive.google.com/file/d/16x2XyLDN4KpV8i8UGiJ4izc1aPPEBlT7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black dark:bg-white text-white dark:text-black rounded-full py-2 px-5 shadow hover:opacity-90 transition font-semibold"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-black dark:border-white text-black dark:text-white rounded-full py-2 px-5 hover:bg-gray-100 dark:hover:bg-white/10 transition font-semibold"
          >
            Get In Touch
          </a> 
         
        </motion.div>
      <div className="flex gap-3 flex-wrap my-5">
  <div className="inline-flex items-center px-3 py-1.5 bg-gray-800 text-white text-sm font-medium rounded-full shadow-sm">
    SIH Finalist
  </div>
  <div className="inline-flex items-center px-3 py-1.5 bg-gray-800 text-white text-sm font-medium rounded-full shadow-sm">
    Hack4Bengal
  </div>
</div>

      </motion.div>
      

      {/* Image Section */}
      <motion.div
        className="relative z-10 flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <motion.div
          className="relative"
          whileHover={{ y: -8, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 180 }}
        >
           <motion.div
          className="flex-1 flex justify-center mb-8 md:mb-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="relative"
            animate={floatAnimation}
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"
              animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            {/* Main Image Container */}
            <motion.div
              className="relative p-1 rounded-[2rem] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 rounded-[1.8rem] bg-white dark:bg-slate-800 shadow-2xl">
                <img
                  src="images/portfolio.jpg"
                  alt="Sanchita Das - UI/UX Designer"
                  className="rounded-[1.5rem] object-cover w-[280px] h-[350px] sm:w-[320px] sm:h-[380px] md:w-[350px] md:h-[400px] filter grayscale-0 hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Floating Sparkles around image */}
                <motion.div
                  className="absolute -top-2 -right-2 text-yellow-400"
                  animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles size={24} />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 -left-2 text-purple-400"
                  animate={{ rotate: [360, 0], scale: [1.2, 1, 1.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles size={20} />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
