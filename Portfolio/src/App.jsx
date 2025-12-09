import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VantaBackground from './components/VantaBackground';

function App() {
  return (
    <div className="min-h-screen text-slate-100 dark:text-slate-100 transition-colors duration-300">
      <VantaBackground />
      <Navbar />
      <main className="relative z-10 max-w-7xl mx-auto bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl shadow-2xl min-h-screen border-x border-white/10 dark:border-slate-700/20">
        <Hero />
        <About />
        <Certifications />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
