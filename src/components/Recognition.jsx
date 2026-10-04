import React from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Trophy,
  ExternalLink,
  Download,
  Building2,
  FileCheck2,
  Calendar
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Recognition() {
  const { recognition } = portfolioData;

  const getRecognitionIcon = (iconName) => {
    switch (iconName) {
      case 'Award':
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="recognition" className="py-24 sm:py-32 relative overflow-hidden bg-[#0c0d12] border-t border-white/[0.06] select-none">

      {/* Background Flowing Wave Lines (Matching Work & About Aesthetics) */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        <svg className="w-full h-full min-w-[1200px] opacity-35" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 240C280 120 540 400 860 240C1180 80 1380 340 1660 220" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <path d="M-100 400C320 220 600 500 940 340C1280 180 1440 460 1720 320" stroke="rgba(255,255,255,0.08)" strokeWidth="1.3" />
          <path d="M-100 580C360 400 660 640 1020 480C1340 320 1500 580 1780 440" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/[0.03] rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Tag */}
        <div className="mb-3">
          <span className="text-xs font-mono tracking-[0.25em] text-slate-400 uppercase font-semibold">
            RECOGNITION & CERTIFICATIONS
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
              Verified Credentials & Achievements.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md font-sans text-xs sm:text-sm leading-relaxed">
            Formal technical achievements validating network architecture, routing protocols, enterprise systems, and national competition milestones.
          </p>
        </div>

        {/* Elegant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {recognition.map((item) => (
            <div
              key={item.id}
              className="bg-[#12141c]/80 backdrop-blur-md rounded-3xl p-5 sm:p-8 border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:bg-white/[0.02] group relative overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              {/* Subtle top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Top Row: Icon + Type & Verified Badges */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:scale-105 transition-all duration-300">
                    {getRecognitionIcon(item.icon)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider text-slate-300 bg-white/[0.05] border border-white/10">
                      {item.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2.5 group-hover:text-cyan-200 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Issuer & Date Meta */}
                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-mono text-cyan-400/90 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    {item.issuer}
                  </span>
                  <span className="text-slate-600">&bull;</span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {item.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Credential Badge Tag */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06]">
                    <FileCheck2 className="w-3.5 h-3.5 text-cyan-400" />
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Action Buttons: View in New Tab & Download Certificate (Mobile Friendly) */}
              <div className="pt-4 sm:pt-5 border-t border-white/[0.08] flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3">
                <a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-mono font-medium tracking-wide transition-all duration-200 border border-white/10 hover:border-white/25 group/btn"
                  title="Buka sertifikat di tab baru"
                >
                  <span>Open Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white transition-colors" />
                </a>

                <a
                  href={item.certificateUrl}
                  download={item.certificateFileName}
                  className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 text-xs font-mono font-medium tracking-wide transition-all duration-200 border border-cyan-500/20 hover:border-cyan-500/40 group/dl"
                  title={`Download ${item.certificateFileName}`}
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400 group-hover/dl:translate-y-0.5 transition-transform" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
