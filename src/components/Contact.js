import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { useForm } from '@formspree/react';

export default function ContactSection() {
  // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
  const [state, handleSubmit] = useForm("mwprqqlg");

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 md:py-24 bg-black text-white font-poppins"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-light mb-3 tracking-wide"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-zinc-400 text-sm md:text-base mb-12 md:mb-16 font-light"
      >
        Let's connect and create something amazing
      </motion.p>

      {/* Contact Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full bg-zinc-950 border border-zinc-800 rounded-sm p-6 sm:p-8 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12"
      >
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-normal text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-4 text-zinc-400 text-sm md:text-base">
            <a 
              href="mailto:sanchitad648@gmail.com"
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <FaEnvelope className="text-zinc-600 text-lg group-hover:text-zinc-400 transition-colors" />
              sanchitad648@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/sanchita-das-962b8028b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <FaLinkedin className="text-zinc-600 text-lg group-hover:text-zinc-400 transition-colors" />
              Sanchita Das
            </a>
            <a 
              href="https://github.com/Saanchita123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <FaGithub className="text-zinc-600 text-lg group-hover:text-zinc-400 transition-colors" />
              Saanchita123
            </a>
          </div>

          <p className="text-xs md:text-sm text-zinc-500 mt-8 font-light leading-relaxed">
            Available for freelance projects and full-time opportunities
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full text-center space-y-4"
            >
              <div className="w-16 h-16 bg-green-950 border border-green-900 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white">Message Sent!</h3>
              <p className="text-zinc-400 text-sm">Thank you for reaching out. I'll get back to you soon!</p>
            </motion.div>
          ) : (
            <>
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-sm bg-black border border-zinc-800 placeholder-zinc-600 text-white focus:outline-none focus:border-zinc-600 transition-colors text-sm md:text-base font-light"
                required
                disabled={state.submitting}
                whileFocus={{ borderColor: "#52525b" }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-sm bg-black border border-zinc-800 placeholder-zinc-600 text-white focus:outline-none focus:border-zinc-600 transition-colors text-sm md:text-base font-light"
                required
                disabled={state.submitting}
                whileFocus={{ borderColor: "#52525b" }}
              />
              <motion.textarea
                rows={4}
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-sm bg-black border border-zinc-800 placeholder-zinc-600 text-white focus:outline-none focus:border-zinc-600 transition-colors text-sm md:text-base font-light resize-none"
                required
                disabled={state.submitting}
                whileFocus={{ borderColor: "#52525b" }}
              ></motion.textarea>

              {/* Error Message */}
              {state.errors && state.errors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-light p-3 rounded-sm bg-red-950 text-red-400 border border-red-900"
                >
                  Oops! There was a problem sending your message. Please try again.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={state.submitting}
                className={`w-full flex items-center justify-center gap-2 bg-white text-black font-normal py-3 rounded-sm transition-colors text-sm md:text-base ${
                  state.submitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-zinc-200'
                }`}
                whileTap={state.submitting ? {} : { scale: 0.98 }}
              >
                {state.submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="text-base md:text-lg" />
                    Send Message
                  </>
                )}
              </motion.button>
            </>
          )}
        </form>
      </motion.div>
    </section>
  );
}