import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const marqueeText = ["Andri Rasyid", "Andri Rasyid", "Andri Rasyid", "Andri Rasyid"];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-end items-center overflow-hidden bg-[#0c0d12] select-none pt-24"
    >
      {/* 1. Subtle Center Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Concentric Orbital Rings (thin circles as in the reference screenshot) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center -z-0">
        <div className="w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-white/[0.05] absolute" />
        <div className="w-[560px] h-[560px] sm:w-[700px] sm:h-[700px] rounded-full border border-white/[0.05] absolute" />
        <div className="w-[800px] h-[800px] sm:w-[960px] sm:h-[960px] rounded-full border border-white/[0.04] absolute" />
        <div className="w-[1060px] h-[1060px] sm:w-[1240px] sm:h-[1240px] rounded-full border border-white/[0.025] absolute" />
      </div>

      {/* 3. Massive Outline Typography Behind Subject */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-0">
        <div className="animate-marquee-outline flex items-center gap-16 sm:gap-24 whitespace-nowrap">
          {marqueeText.concat(marqueeText).map((text, idx) => (
            <span
              key={idx}
              className="text-[22vw] sm:text-[19vw] lg:text-[18vw] font-display font-black tracking-tight text-outline-hero uppercase leading-none"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Center Foreground Subject (Profile.png enlarged) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex items-end justify-center pointer-events-none">
        <div className="relative max-h-[82vh] sm:max-h-[92vh] flex items-end justify-center transform scale-100 xs:scale-105 sm:scale-110 lg:scale-115 origin-bottom transition-transform duration-300">
          <img
            src="/Profile.png"
            alt={portfolioData.personal.fullName}
            className="h-[64vh] xs:h-[70vh] sm:h-[84vh] lg:h-[90vh] max-h-[620px] sm:max-h-none w-auto object-contain object-bottom filter contrast-[1.03] brightness-[1.01] pointer-events-auto"
            onError={(e) => {
              e.currentTarget.src = './Profile.png';
            }}
          />
          {/* Subtle bottom fade to blend smoothly into the section below */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/50 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 5. Right Side: Vertical "SCROLL DOWN" Indicator with Animated Travelling Beam */}
      <div className="absolute right-3 sm:right-10 bottom-6 sm:bottom-12 z-20 flex flex-col items-center gap-2.5 sm:gap-3.5 select-none">
        {/* Track Line with moving beam */}
        <div className="hero-scroll-track w-[2px] h-12 sm:h-20 bg-white/20 rounded-full relative overflow-hidden">
          <div className="hero-scroll-beam w-full h-6 sm:h-8 bg-gradient-to-b from-transparent via-white to-transparent rounded-full animate-scroll-beam" />
        </div>
        <a
          href="#work"
          aria-label="Scroll to work"
          className="hero-scroll-text text-[10px] sm:text-[11px] font-mono tracking-[0.25em] sm:tracking-[0.3em] font-semibold text-slate-400 hover:text-white uppercase transition-colors"
          style={{ writingMode: 'vertical-rl' }}
        >
          SCROLL DOWN
        </a>
      </div>
    </section>
  );
}
