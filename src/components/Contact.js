import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black text-white"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Get In Touch
      </motion.h2>

      {/* Contact Box */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 grid md:grid-cols-2 gap-10"
      >
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white">
            Contact Information
          </h3>

          <div className="space-y-4 text-zinc-300 text-base">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-purple-400 text-xl" />
              sanchitad648@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaLinkedin className="text-purple-400 text-xl" />
              Sanchita Das
            </p>
            <p className="flex items-center gap-3">
              <FaGithub className="text-purple-400 text-xl" />
              Saanchita123
            </p>
          </div>

          <p className="text-sm text-zinc-400 mt-8">
            I'm currently available for freelance projects and full-time
            opportunities.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-6">
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            whileFocus={{ scale: 1.01 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            whileFocus={{ scale: 1.01 }}
          />
          <motion.textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            whileFocus={{ scale: 1.01 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold py-3 rounded-lg shadow hover:opacity-90 transition"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
          >
            <FiSend className="text-xl" />
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
