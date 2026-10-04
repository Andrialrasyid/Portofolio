import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'capabilities', 'about', 'recognition', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'CAPABILITY', href: '#capabilities', id: 'capabilities' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'RECOGNITION', href: '#recognition', id: 'recognition' },
  ];

  const isLight = theme === 'light';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-8 pt-3 sm:pt-6 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <div 
          className={`backdrop-blur-xl border rounded-2xl sm:rounded-full px-4 sm:px-8 py-2.5 sm:py-4 flex items-center justify-between shadow-2xl transition-all duration-300 ${
            isLight
              ? 'bg-white/95 border-black/10 shadow-black/8 text-slate-900'
              : 'bg-[#12141c]/85 border-white/[0.08] shadow-black/60 text-white'
          }`}
        >

          {/* Left: Monogram Badge + Name (Light Mode: Black background with White text) */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none"
            id="navbar-logo"
          >
            <div 
              className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center font-display font-black text-base sm:text-xl shadow-sm group-hover:scale-105 transition-all duration-300 ${
                isLight 
                  ? 'bg-black text-white shadow-black/20' 
                  : 'bg-white text-slate-950 shadow-white/10'
              }`}
            >
              <span 
                id="navbar-logo-letter" 
                className="font-serif italic font-bold text-white"
                style={{ color: isLight ? '#ffffff' : '#020617' }}
              >
                A
              </span>
            </div>
            <span 
              className={`font-display font-extrabold text-xs sm:text-base tracking-wider sm:tracking-widest uppercase transition-colors ${
                isLight 
                  ? 'text-slate-900 group-hover:text-black' 
                  : 'text-white group-hover:text-slate-300'
              }`}
            >
              ANDRI
            </span>
          </a>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-[13px] font-mono tracking-widest font-semibold transition-colors duration-200 ${
                  activeSection === link.id
                    ? (isLight ? 'text-black font-bold' : 'text-white')
                    : (isLight ? 'text-slate-600 hover:text-black' : 'text-slate-400 hover:text-white')
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Theme Toggle Icon + Hire Me Button */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Theme Toggle Icon Button (Moon in Dark Mode -> Sun in Light Mode) */}
            <button
              type="button"
              onClick={toggleTheme}
              id="theme-toggle-btn"
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                isLight
                  ? 'bg-black/[0.05] border-black/10 text-amber-500 hover:bg-black/10'
                  : 'bg-white/[0.04] border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.08]'
              }`}
              title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
              aria-label="Toggle theme"
            >
              {isLight ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Hire Me Button with Cube Border */}
            <a
              href="#contact"
              id="navbar-hire-me"
              className={`inline-flex items-center justify-center px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border-[1.5px] font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                isLight
                  ? 'text-black border-black hover:bg-black hover:text-white'
                  : 'text-white border-white hover:bg-white hover:text-slate-950'
              }`}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-1.5 xs:gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-xl border flex items-center justify-center ${
                isLight
                  ? 'bg-black/5 border-black/15 text-amber-500'
                  : 'bg-white/5 border-white/10 text-slate-300'
              }`}
              aria-label="Toggle theme"
            >
              {isLight ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              className={`px-3 py-1.5 rounded-xl border-[1.5px] font-mono text-[11px] font-semibold tracking-wider uppercase transition-colors ${
                isLight
                  ? 'text-black border-black/80 hover:bg-black hover:text-white'
                  : 'text-white border-white/80 hover:bg-white hover:text-slate-950'
              }`}
            >
              Hire Me
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                isLight
                  ? 'text-slate-800 bg-black/5 border-black/10'
                  : 'text-slate-300 hover:text-white bg-white/5 border-white/10'
              }`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div 
            className={`md:hidden mt-2 backdrop-blur-xl border rounded-2xl p-3 sm:p-4 space-y-1 sm:space-y-2 shadow-2xl ${
              isLight
                ? 'bg-white/95 border-black/10'
                : 'bg-[#12141c]/95 border-white/10'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-xs font-mono tracking-widest ${
                  isLight
                    ? 'text-slate-700 hover:text-black hover:bg-black/5'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
