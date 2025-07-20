import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpenText } from "lucide-react"; // ✅ Lucide icons

const skills = [
  {
    name: "Figma",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "border-orange-500",
  },
  {
    name: "Canva",
    image: "images/canva-icon.png",
    color: "border-blue-500",
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "border-yellow-400",
  },
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "border-cyan-400",
  },
  {
    name: "Tailwind",
    image: "images/tailwind-css-icon.png",
    color: "border-cyan-500",
  },
  {
    name: "Bootstrap",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    color: "border-purple-600",
  },
  {
    name: "Spring Boot",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    color: "border-green-500",
  },
  {
    name: "Hibernate",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-plain.svg",
    color: "border-yellow-700",
  },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "border-gray-700",
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "border-green-500",
  },
  {
    name: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "border-blue-700",
  },
  {
    name: "Next.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "border-black",
  },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "border-blue-500",
  },
  {
    name: "HTML5",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "border-orange-600",
  },
  {
    name: "CSS3",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "border-blue-600",
  },
  {
    name: "JUnit",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-plain.svg",
    color: "border-red-500",
  },
  {
    name: "Windows",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    color: "border-blue-600",
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          My Journey & Abilities
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Academic Path */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
              hidden: {},
            }}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-gray-800 dark:text-white"
            >
              Academic Path
            </motion.h2>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              <div className="space-y-8">
                {[
                  {
                    year: "2022 - 2026",
                    title: "B.Tech in Computer Science Engineering",
                    place: "University of Engineering & Management, Kolkata",
                    note: "CGPA: 8.57 (Till 6th Sem) | Coursework: DSA, OOPS, DBMS.",
                    icon: <GraduationCap size={22} />,
                  },
                  {
                    year: "2021",
                    title: "Higher Secondary (CBSE, 12th)",
                    place: "Burdwan Model School",
                    note: "71.33%",
                    icon: <BookOpenText size={22} />,
                  },
                  {
                    year: "2019",
                    title: "Secondary (ICSE, 10th)",
                    place: "St. Joseph's English Medium School",
                    note: "80.5%",
                    icon: <BookOpenText size={22} />,
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative flex items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white relative z-10 shadow-md">
                      {item.icon}
                    </div>
                    <div className="ml-6 bg-gray-50 dark:bg-zinc-800 rounded-lg p-6 shadow-md flex-1">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{item.place}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.note}</p>
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
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {},
            }}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-gray-800 dark:text-white"
            >
              My Tech Stack
            </motion.h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`border-2 ${skill.color} rounded-2xl p-5 bg-white/10 dark:bg-white/5 flex items-center justify-center text-white font-bold text-lg hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl aspect-square backdrop-blur-md group`}
                  title={skill.name}
                >
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
                    />
                  ) : (
                    <span className="text-2xl">{skill.icon}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
