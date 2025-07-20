// ServiceSection.tsx
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={30} />,
    title: "Website Development",
    description: "Modern and performant web apps tailored to your business.",
  },
  {
    icon: <FaPaintBrush size={30} />,
    title: "UI/UX Design",
    description: "Beautiful and user-friendly interfaces that convert.",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Mobile Apps Design",
    description: "Cross-platform mobile apps responsive interfaces",
  },
];

export default function ServiceSection() {
  return (
    <section className="relative py-20 px-6  overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80  opacity-20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      {/* <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      /> */}

      <div className="max-w-6xl mx-auto text-center z-10 relative">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-400 mb-12">
          We deliver high-quality digital solutions that scale.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left text-white shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="mb-4 text-pink-400">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
