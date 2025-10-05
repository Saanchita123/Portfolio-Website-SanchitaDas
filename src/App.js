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
import AllProjects from "./components/AllProjects";
import React, { useState } from "react";
import PageLoader from "./components/pageLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <Router>
      <div className="App bg-black relative overflow-x-hidden min-h-screen">
        {/* Page Loader */}
        {isLoading && (
          <PageLoader onLoadingComplete={() => setIsLoading(false)} />
        )}

        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            {/* Home Page (with sections) */}
            <Route
              path="/"
              element={
                <div className="w-full">
                  {/* Navbar - Fixed positioning with proper z-index */}
                  <div className="fixed top-0 left-0 right-0 z-50">
                    <Navbar />
                  </div>

                  {/* Main Content - Add top padding to account for fixed navbar */}
                  <main className="w-full pt-16 sm:pt-20 md:pt-24">
                    {/* Hero Section */}
                    <section 
                      id="home" 
                      className="w-full min-h-screen"
                    >
                      <Hero />
                    </section>

                    {/* Projects Section */}
                    <section 
                      id="projects" 
                      className="w-full scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
                    >
                      <Projects />
                    </section>

                    {/* Achievements Section */}
                    <section 
                      id="achievements" 
                      className="w-full scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
                    >
                      <Education />
                    </section>

                    {/* Skills Section */}
                    <section 
                      id="skills" 
                      className="w-full scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
                    >
                      <Skills />
                    </section>

                    {/* Services Section */}
                    <section 
                      id="services" 
                      className="w-full scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
                    >
                      <ServicesSection />
                    </section>

                    {/* Contact Section */}
                    <section 
                      id="contact" 
                      className="w-full scroll-mt-16 sm:scroll-mt-20 md:scroll-mt-24"
                    >
                      <Contact />
                    </section>

                    {/* Footer */}
                    <footer className="w-full">
                      <Footer />
                    </footer>
                  </main>
                </div>
              }
            />

            {/* All Projects Page */}
            <Route 
              path="/projects" 
              element={
                <div className="w-full min-h-screen">
                  <AllProjects />
                </div>
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;