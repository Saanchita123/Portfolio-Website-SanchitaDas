import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Custom Typewriter Hook
function useTypewriter(
  words,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseBetweenWords = 2000,
  pauseAfterDeleting = 500
) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const current = words[index];
    if (!isDeleting && displayed !== current) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        typingSpeed
      );
    } else if (isDeleting && displayed) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        deletingSpeed
      );
    } else if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBetweenWords);
    } else if (isDeleting && !displayed) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((index + 1) % words.length);
      }, pauseAfterDeleting);
    }
    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    index,
    words,
    typingSpeed,
    deletingSpeed,
    pauseBetweenWords,
    pauseAfterDeleting,
  ]);

  return displayed;
}

const textStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const textFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

const imageAnimation = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
};

export default function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const typewriterText = useTypewriter([
    "UI/UX Designer",
    "Frontend Developer",
    "Creative Designer",
  ]);

  return (
    <motion.section
      id="home"
      className="relative font-poppins flex flex-col items-center justify-center bg-black min-h-screen w-full px-4 sm:px-6 lg:px-8 py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ opacity }}
    >
      {/* Subtle ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full w-1 h-1 bg-zinc-700 opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full"
        variants={textStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image - Draggable */}
        <motion.div 
          className="mb-8 sm:mb-10" 
          variants={imageAnimation}
          drag
          dragConstraints={{
            top: -400,
            left: -600,
            right: 600,
            bottom: 400,
          }}
          dragElastic={0.1}
          whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        >
          <motion.div
            className="relative rounded-full p-[2px] bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-700 cursor-grab active:cursor-grabbing"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="images/portfolio.jpg"
              alt="Sanchita - Software Developer and UI/UX Designer"
              className="rounded-full object-cover w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-black pointer-events-none"
            />
          </motion.div>
        </motion.div>

        {/* Greeting Text */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 font-light tracking-wide"
          variants={textFadeUp}
        >
          Hey, I'm Sanchita
        </motion.h1>

        {/* Main Title with Typewriter */}
        <motion.div className="mb-6 sm:mb-8" variants={textFadeUp}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-400">
            <span className="text-white">
              {typewriterText}
              <span className="ml-1 inline-block w-0.5 h-6 sm:h-7 md:h-8 bg-white animate-pulse"></span>
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-md sm:max-w-lg mb-8 sm:mb-10 font-light leading-relaxed"
          variants={textFadeUp}
        >
          Creating beautiful digital experiences with code and design
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          variants={textFadeUp}
        >
          <a
            href="https://drive.google.com/file/d/1h8ghHg8o9Gw8Qhdlm9Q23qeAHEEtgm4H/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-sm py-2.5 px-8 hover:bg-zinc-200 transition-colors font-normal text-sm sm:text-base w-full sm:w-auto"
          >
            Resume
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sanchitad648@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 text-white rounded-sm py-2.5 px-8 hover:border-zinc-500 hover:bg-zinc-900 transition-all font-normal text-sm sm:text-base w-full sm:w-auto"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-5 h-8 border border-zinc-700 rounded-full flex justify-center"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-zinc-600 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}