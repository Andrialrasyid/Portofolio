import React from 'react';
import {
  Layout,
  Server,
  Database,
  Cpu,
  Layers,
  Network,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getCategoryIcon = (iconName) => {
  switch (iconName) {
    case 'Layout': return <Layout className="w-5 h-5 text-slate-200" />;
    case 'Server': return <Server className="w-5 h-5 text-slate-200" />;
    case 'Database': return <Database className="w-5 h-5 text-slate-200" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-slate-200" />;
    default: return <Code2 className="w-5 h-5 text-slate-200" />;
  }
};

export default function Capabilities() {
  const { categories, detailedCards, overview } = portfolioData.capabilities;

  return (
    <section id="capabilities" className="py-24 sm:py-32 relative overflow-hidden bg-[#0c0d12] border-t border-white/[0.06] select-none">

      {/* Background Flowing Wave Lines (Matching Work, About, Recognition) */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        <svg className="w-full h-full min-w-[1200px] opacity-35" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200C240 80 500 340 820 180C1140 60 1340 320 1620 170" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <path d="M-100 360C280 200 540 460 880 300C1220 140 1400 420 1680 280" stroke="rgba(255,255,255,0.08)" strokeWidth="1.3" />
          <path d="M-100 540C320 380 620 600 960 440C1280 280 1460 520 1740 380" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Tag */}
        <div className="mb-3">
          <span className="text-xs font-mono tracking-[0.25em] text-slate-400 uppercase font-semibold">
            CAPABILITIES &amp; TECHNICAL STACK
          </span>
        </div>

        {/* Split Layout: Header & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16 sm:mb-20">

          {/* Left Side: Section Description & Architectural Rigor */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Bussines Logic. <br className="hidden sm:inline" />
              Full-Stack Delivery.
            </h2>
            <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed mb-8">
              {overview}
            </p>

            {/* Quick architectural strengths (User requested white font) */}
            <div className="space-y-3 w-full">
              {[
                "Full-Stack Architecture with C# .NET Core, Java Spring Boot & Node.js",
                "High-Reliability Relational Data Modeling (SQL Server, MySql, Oracle)",
                "AI-Augmented Workflows with Antigravity & LLM Pair-Programming",
                "Industrial IoT Telemetry & Hardware Sensor Driver Integration",
                "Network Infrastructure & Security Fundamentals (MikroTik MTCNA, Firewall, LAN/WLAN)"
              ].map((item, i) => (
                <div
                  key={i}
                  className="capability-arch-pill flex items-start gap-3 p-3 rounded-2xl bg-[#1e2230] border border-white/[0.08] shadow-md transition-all hover:translate-x-1"
                >
                  <div className="w-5 h-5 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-sans text-white font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Categorized Tech Stack Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="bg-[#12141c]/80 backdrop-blur-md p-6 rounded-3xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/[0.08]">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:border-white/20 transition-all">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm tracking-wide text-white">
                        {cat.name}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">
                        {cat.skills.length} Core Technologies
                      </span>
                    </div>
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:text-white hover:bg-white/[0.08] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Two Featured Detailed Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* Card 1: Enterprise System Architecture */}
          <div className="relative rounded-3xl bg-[#12141c]/80 backdrop-blur-md border border-white/[0.08] hover:border-white/20 p-7 sm:p-9 transition-all duration-300 shadow-2xl group overflow-hidden">
            {/* Subtle top hover accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-all">
                <Layers className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider text-slate-300 bg-white/[0.05] border border-white/10">
                DOMAIN MASTERY
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1.5 group-hover:text-slate-100 transition-colors">
              {detailedCards[0].title}
            </h3>
            <p className="text-xs font-mono text-cyan-400/90 mb-4 uppercase tracking-wider">
              {detailedCards[0].subtitle}
            </p>
            <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mb-6">
              {detailedCards[0].description}
            </p>

            {/* Tags */}
            <div className="pt-5 border-t border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                Architectural Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {detailedCards[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Infrastructure Reliability */}
          <div className="relative rounded-3xl bg-[#12141c]/80 backdrop-blur-md border border-white/[0.08] hover:border-white/20 p-7 sm:p-9 transition-all duration-300 shadow-2xl group overflow-hidden">
            {/* Subtle top hover accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-all">
                <Network className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                NETWORK & INFRASTRUCTURE
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1.5 group-hover:text-cyan-200 transition-colors">
              {detailedCards[1].title}
            </h3>
            <p className="text-xs font-mono text-cyan-400/90 mb-4 uppercase tracking-wider">
              {detailedCards[1].subtitle}
            </p>
            <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mb-6">
              {detailedCards[1].description}
            </p>

            {/* Tags */}
            <div className="pt-5 border-t border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                NETWORK COMPETENCIES
              </span>
              <div className="flex flex-wrap gap-2">
                {detailedCards[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-white/[0.04] border border-white/[0.08]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
