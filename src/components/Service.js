import { motion } from "framer-motion";

const experiences = [
  {
    logo: "images/iepssols logo.webp",
    title: "Developer",
    company: "IEPPSOLS",
    period: "2023 - Present",
    description: "Building modern and performant web applications with React and Next.js.",
  },
  {
    logo: "images/1680441618153.jpeg",
    title: "UI/UX Designer",
    company: "ZIVAKA LLP",
    period: "July 2024 - Aug 2024",
    description: "Designed beautiful and user-friendly interfaces that enhance user experience.",
  },
];

export default function ServiceSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 font-poppins overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2 sm:mb-3 tracking-wide text-center"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-xs sm:text-sm md:text-base mb-8 sm:mb-10 md:mb-12 lg:mb-16 font-light text-center"
        >
          Professional journey and contributions
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1.5 sm:left-2 md:left-8 top-0 bottom-0 w-px bg-zinc-800"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-8 sm:mb-10 md:mb-12 flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[2px] sm:left-[3px] md:left-[29px] w-2 h-2 bg-zinc-700 rounded-full border-2 border-black z-10"></div>

              {/* Content card */}
              <div className="ml-6 sm:ml-8 md:ml-20 w-full">
                <motion.div
                  className="bg-zinc-950 border border-zinc-800 rounded-sm p-4 sm:p-5 md:p-6 text-white hover:border-zinc-700 active:border-zinc-600 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Company Logo */}
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-sm bg-zinc-900 border border-zinc-800 mb-3 sm:mb-4 p-1.5 sm:p-2">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Period */}
                  <div className="text-zinc-500 text-[11px] sm:text-xs md:text-sm mb-1.5 sm:mb-2 font-light">
                    {exp.period}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-normal text-white mb-1 leading-snug">
                    {exp.title}
                  </h3>

                  {/* Company */}
                  <div className="text-zinc-400 text-sm sm:text-base mb-2.5 sm:mb-3 font-light">
                    {exp.company}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}