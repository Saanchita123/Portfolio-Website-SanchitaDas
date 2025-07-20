import "./App.css";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Education from "./components/Achievements";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ServicesSection from "./components/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjects from "./components/AllProjects"; // Make sure this exists

function App() {
  return (
    <Router>
      <div className="App dark:bg-zinc-900 relative overflow-hidden">
        {/* Moving Color Background */}
        <motion.div
          className="fixed inset-0 opacity-5 dark:opacity-10 pointer-events-none z-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #ec4899 0%, transparent 50%)",
              "radial-gradient(circle at 80% 60%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)",
              "radial-gradient(circle at 70% 30%, #f59e0b 0%, transparent 50%)",
              "radial-gradient(circle at 30% 70%, #ef4444 0%, transparent 50%)",
              "radial-gradient(circle at 60% 20%, #10b981 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, #ec4899 0%, transparent 50%)"
            ]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            {/* Home Page (with sections) */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />

                  <section id="home">
                    <Hero />
                  </section>

                  <section id="projects">
                    <Projects />
                  </section>

                  <section id="achievements">
                    <Education />
                  </section>

                  <section id="skills" className="scroll-mt-24">
                    <Skills />
                  </section>

                  <section id="services">
                    <ServicesSection />
                  </section>

                  <section id="contact">
                    <Contact />
                  </section>

                  <Footer />
                </>
              }
            />

            {/* All Projects Page */}
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
