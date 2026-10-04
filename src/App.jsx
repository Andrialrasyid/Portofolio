import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Capabilities from './components/Capabilities';
import About from './components/About';
import Recognition from './components/Recognition';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { CheckCircle2, ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#0c0d12] text-slate-100 relative selection:bg-white/20 selection:text-white">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        
        <Work 
          onSelectProject={(proj) => setSelectedProject(proj)} 
        />
        
        <Capabilities />
        
        <About />
        
        <Recognition />
        
        <Contact 
          onToast={showToast}
        />
      </main>

      {/* Floating Back-to-Top Button (as in reference screenshot) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#181a24]/90 border border-white/15 text-slate-300 hover:text-white hover:border-white/30 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-in fade-in"
          title="Scroll to Top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Modals */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={Boolean(selectedProject)} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Interactive Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom duration-300 pointer-events-none">
          <div className="px-5 py-3 rounded-2xl bg-[#161926]/95 border border-white/20 text-white font-mono text-xs shadow-2xl backdrop-blur-md flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}
