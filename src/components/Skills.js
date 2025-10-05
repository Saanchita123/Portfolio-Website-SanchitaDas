import { motion } from "framer-motion";
import { GraduationCap, BookOpenText } from "lucide-react";

const skills = [
  {
    name: "Figma",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Canva",
    image: "images/canva-icon.png",
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    image: "images/tailwind-css-icon.png",
  },
  {
    name: "Bootstrap",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Spring Boot",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Hibernate",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg",
  },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Next.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML5",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JUnit",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-plain.svg",
  },
  {
    name: "Windows",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-black py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-white tracking-wide"
        >
          Journey & Expertise
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Academic Path */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 md:mb-10 text-white"
            >
              Education
            </motion.h2>

            <div className="relative">
              <div className="absolute left-3.5 sm:left-4 md:left-5 top-0 bottom-0 w-px bg-zinc-800"></div>
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {[
                  {
                    year: "2022 - 2026",
                    title: "B.Tech in Computer Science Engineering",
                    place: "University of Engineering & Management, Kolkata",
                    note: "CGPA: 8.57 (Till 6th Sem)",
                    icon: <GraduationCap size={16} className="sm:w-[18px] sm:h-[18px]" />,
                  },
                  {
                    year: "2021",
                    title: "Higher Secondary (CBSE, 12th)",
                    place: "Burdwan Model School",
                    note: "71.33%",
                    icon: <BookOpenText size={16} className="sm:w-[18px] sm:h-[18px]" />,
                  },
                  {
                    year: "2019",
                    title: "Secondary (ICSE, 10th)",
                    place: "St. Joseph's English Medium School",
                    note: "80.5%",
                    icon: <BookOpenText size={16} className="sm:w-[18px] sm:h-[18px]" />,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.5 }}
                    className="relative flex items-start"
                  >
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-400 relative z-10">
                      {item.icon}
                    </div>
                    <div className="ml-3 sm:ml-4 md:ml-6 flex-1">
                      <div className="text-[11px] sm:text-xs md:text-sm text-zinc-500 mb-1 font-light">
                        {item.year}
                      </div>
                      <h3 className="text-sm sm:text-base md:text-lg font-normal text-white mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mb-1 font-light leading-relaxed">{item.place}</p>
                      <p className="text-[11px] sm:text-xs md:text-sm text-zinc-500 font-light">{item.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.03 } },
              hidden: {},
            }}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 md:mb-10 text-white"
            >
              Tech Stack
            </motion.h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square bg-zinc-950 border border-zinc-800 rounded-sm p-3 sm:p-4 md:p-5 flex items-center justify-center hover:border-zinc-600 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Tooltip - Hidden on mobile, visible on hover for desktop */}
                  <div className="hidden sm:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-zinc-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                    {skill.name}
                  </div>
                  
                  {/* Mobile: Show name on tap/active state */}
                  <div className="sm:hidden absolute inset-0 bg-zinc-900/95 rounded-sm flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity duration-200">
                    <p className="text-[10px] text-white font-light text-center px-2">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}