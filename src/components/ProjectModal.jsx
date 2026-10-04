import React from 'react';
import { X, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  // Handle ESC key press
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="project-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="project-modal-dialog relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl glass-panel border border-white/15 p-5 sm:p-10 bg-[#0e101a] shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className={`project-modal-glow absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.accentColor} rounded-full blur-3xl pointer-events-none`} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="project-modal-close absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Meta */}
        <div className="flex flex-wrap items-center gap-2 mb-4 pr-10">
          <span className={`text-xs font-mono px-3 py-1 rounded-full border ${project.badgeColor} font-semibold uppercase tracking-wider`}>
            {project.client}
          </span>
          <span className="project-modal-badge text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h2 className="project-modal-title text-xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-snug">
          {project.title}
        </h2>

        {/* Summary */}
        <p className="project-modal-summary text-slate-300 text-xs sm:text-base font-sans leading-relaxed mb-6 sm:mb-8">
          {project.summary}
        </p>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 sm:mb-8">
          <div className="project-modal-problem p-4 sm:p-5 rounded-2xl bg-red-500/[0.04] border border-red-500/20">
            <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span>●</span> The Operational Problem
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="project-modal-solution p-4 sm:p-5 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20">
            <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <span>●</span> Engineered Solution
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mb-6 sm:mb-8">
          <h4 className="project-modal-section-title text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            Key Technical Implementations
          </h4>
          <div className="space-y-2.5">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="project-modal-highlight-item flex items-start gap-2.5 sm:gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6 sm:mb-8">
          <h4 className="project-modal-tech-heading text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
            Core Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="project-modal-tech-tag px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-mono text-cyan-200 bg-cyan-500/10 border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Impact Callout */}
        <div className="project-modal-impact p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-mono text-emerald-300">
              Impact: {project.impact}
            </span>
          </div>
          <button
            onClick={onClose}
            className="project-modal-done-btn px-5 py-2 rounded-xl text-xs font-mono font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors text-center"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
