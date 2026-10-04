import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  FlaskConical,
  Rocket
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, projects, recognition } = portfolioData;

  const traits = [
    "Problem Solver",
    "Detail-Oriented",
    "Reliable",
    "Organized",
    "Curious",
    "Quick Learner",
    "Creative",
    "Adaptable",
    "User-Focused",
    "Open to Feedback"
  ];

  const [currentTraitIndex, setCurrentTraitIndex] = useState(0);
  const [exitingTraitIndex, setExitingTraitIndex] = useState(null);
  const isAnimatingRef = useRef(false);

  const slideToNextTrait = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    // Current card slides out to the right
    setExitingTraitIndex(currentTraitIndex);

    // New active card is immediately ready underneath
    setCurrentTraitIndex((prev) => (prev + 1) % traits.length);

    // Clean up exiting card after slide animation finishes (350ms)
    setTimeout(() => {
      setExitingTraitIndex(null);
      isAnimatingRef.current = false;
    }, 350);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      slideToNextTrait();
    }, 2200);
    return () => clearInterval(timer);
  }, [traits.length, currentTraitIndex]);

  const upcomingTraitIndex = (currentTraitIndex + 1) % traits.length;

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-[#0c0d12] select-none">

      {/* Background Flowing Wave Lines (Matching Screenshot) */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        <svg className="w-full h-full min-w-[1200px] opacity-40" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle curved wave 1 */}
          <path d="M-100 220C260 100 520 380 840 220C1160 80 1360 340 1650 200" stroke="rgba(255,255,255,0.14)" strokeWidth="1.6" />
          {/* Subtle curved wave 2 */}
          <path d="M-100 360C300 200 580 480 920 320C1260 160 1420 440 1700 300" stroke="rgba(255,255,255,0.09)" strokeWidth="1.4" />
          {/* Subtle curved wave 3 */}
          <path d="M-100 540C340 380 640 620 1000 460C1320 300 1480 560 1750 420" stroke="rgba(255,255,255,0.07)" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Tag */}
        <div className="mb-3">
          <span className="text-xs font-mono tracking-[0.25em] text-slate-400 uppercase font-semibold">
            ABOUT ME
          </span>
        </div>

        {/* Main Heading: Matching Reference Screenshot */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-12 sm:mb-16">
          Problem Solver. System Builder.
        </h2>

        {/* Profile Avatar + Info Header + Bio Row */}
        <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-10 mb-10 sm:mb-12">

          {/* Circular Profile Avatar (Enlarged for stronger presence) */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-white/25 bg-[#161824] shadow-2xl p-1.5 relative group">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0e1017]">
                <img
                  src={personal.profileImage}
                  alt={personal.fullName}
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = './Profile.png';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Information & Bio */}
          <div className="flex-1">

            {/* Name + Verified Badge */}
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wider uppercase">
                {personal.fullName}
              </h3>
              {/* Blue Verified Badge */}
              <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm" title="Verified Developer">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Quick Stats in Clean Horizontal Row */}
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 mb-6 text-left">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  PROJECTS
                </div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">
                  {projects.length}+
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  CERTIFICATES
                </div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">
                  {recognition.length}+
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  GRADUATED
                </div>
                <div className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">
                  2026
                </div>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-200 text-sm sm:text-base font-sans leading-relaxed mb-6">
              I'm a Full Stack Developer &amp; System Integrator who turns complex business processes into working software, from enterprise systems and real-time industrial monitoring to standalone client products. I've independently delivered a complete HRIS end-to-end for a freelance client, built automated payroll and discount-style calculation engines, and integrated IoT machine monitoring (Banner QM30VT2 & Elfin EW11 over Wi-Fi) into live manufacturing dashboards for Astra Group companies. Beyond writing code, I apply AI guardrails and prompt engineering to keep systems safe and predictable, and I hold a MikroTik Certified Network Associate (MTCNA) for the infrastructure side of the stack.
            </p>

            {/* Call to Action: Download my resume */}
            <p className="text-sm font-sans text-slate-400">
              Want to know more about my experience?{' '}
              <a
                href="/CV - Muhammad Andri Abdullah Rosyid.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="about-resume-cta"
                className="font-bold text-white hover:text-cyan-300 underline underline-offset-4 transition-colors"
              >
                Download my resume
              </a>
              .
            </p>

          </div>

        </div>

        {/* Bottom Section: CURRENTLY (Left) shifted closer to the line and TRAIT Tilted Cards (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-3 sm:pt-3.5 border-t border-white/[0.08]">

          {/* Left: CURRENTLY with 3 icons and text */}
          <div className="lg:col-span-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 font-semibold mb-2.5">
              CURRENTLY
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    Building
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                    Enterprise &amp; freelance web systems
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 mt-0.5">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    Exploring
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                    AI-assisted engineering &amp; IoT
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 flex-shrink-0 mt-0.5">
                  <Rocket className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    Learning
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                    LLM Integration &amp; RAG Systems
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tilted Interactive TRAIT Card Stack with Stacked Slide-Only-To-Right Animation */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div
              className="relative w-56 sm:w-64 h-36 cursor-pointer group select-none"
              onClick={slideToNextTrait}
              title="Click to slide next trait"
            >
              {/* Background Card 2 (Deepest Tilt) */}
              <div
                className="absolute inset-0 rounded-2xl bg-[#141620] border border-white/[0.05] shadow-xl transform rotate-6 scale-95 origin-bottom-right transition-transform duration-500 group-hover:rotate-12"
              />

              {/* Middle Layer Card 1 (Upcoming Next Trait Underneath) */}
              <div
                className="absolute inset-0 rounded-2xl bg-[#1a1d2b] border border-white/[0.08] shadow-2xl transform -rotate-3 scale-[0.98] origin-bottom-left p-5 flex flex-col justify-between"
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 font-semibold">
                  TRAIT
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xl sm:text-2xl text-slate-300 tracking-tight">
                    {traits[upcomingTraitIndex]}
                  </h4>
                </div>
              </div>

              {/* Active Foreground Card (In place, revealed when top card peels right) */}
              <div
                className="relative w-full h-full rounded-2xl bg-[#1d202d] border border-white/15 p-5 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 group-hover:-translate-y-1 z-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 font-semibold">
                    TRAIT
                  </span>
                  <span className="text-[9px] font-mono text-cyan-400/80">
                    {currentTraitIndex + 1}/{traits.length}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                    {traits[currentTraitIndex]}
                  </h4>
                </div>
              </div>

              {/* Exiting Card (Flies off strictly to the right, peeling away from the deck) */}
              {exitingTraitIndex !== null && (
                <div
                  key={`exiting-${exitingTraitIndex}`}
                  className="absolute inset-0 rounded-2xl bg-[#1d202d] border border-white/15 p-5 shadow-2xl flex flex-col justify-between pointer-events-none animate-slide-out-right z-30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 font-semibold">
                      TRAIT
                    </span>
                    <span className="text-[9px] font-mono text-cyan-400/80">
                      {exitingTraitIndex + 1}/{traits.length}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                      {traits[exitingTraitIndex]}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
