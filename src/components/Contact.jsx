import React, { useState } from 'react';
import {
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  X,
  Minus
} from 'lucide-react';

export default function Contact({ onToast }) {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    setIsSending(true);

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

    setTimeout(() => {
      window.location.href = `mailto:andriialrsyd@gmail.com?subject=${subject}&body=${body}`;
      setIsSending(false);
      setIsMessageModalOpen(false);
      if (onToast) onToast("Opening your email client...");
      setFormData({ name: '', email: '', message: '' });
    }, 400);
  };

  const contactCards = [
    {
      id: "01",
      label: "EMAIL",
      value: "andriialrsyd@gmail.com",
      href: "mailto:andriialrsyd@gmail.com",
      icon: <Mail className="w-5 h-5 text-slate-300" />,
      isExternal: false
    },
    {
      id: "02",
      label: "GITHUB",
      value: "github.com/Andrialrasyid",
      href: "https://github.com/Andrialrasyid",
      icon: <Github className="w-5 h-5 text-slate-300" />,
      isExternal: true
    },
    {
      id: "03",
      label: "LINKEDIN",
      value: "linkedin.com/in/andrialrasyid/",
      href: "https://linkedin.com/in/andrialrasyid/",
      icon: <Linkedin className="w-5 h-5 text-slate-300" />,
      isExternal: true
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen min-h-[100dvh] flex flex-col justify-center relative overflow-hidden bg-[#0c0d12] select-none pt-24 pb-12 sm:pt-28 sm:pb-16 scroll-mt-0"
    >

      {/* Background Flowing Wave Lines (Matching Reference Screenshot) */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        <svg className="w-full h-full min-w-[1200px] opacity-40" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200C240 80 500 340 820 180C1140 60 1340 320 1620 170" stroke="rgba(255,255,255,0.14)" strokeWidth="1.6" />
          <path d="M-100 320C280 160 540 420 880 260C1220 120 1400 380 1680 240" stroke="rgba(255,255,255,0.08)" strokeWidth="1.4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">

          {/* Left Column: Stacked Giant Typography + Description + White Download Resume Button (Shifted slightly right) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start text-left lg:pl-4 xl:pl-8">
            <span className="text-xs font-mono tracking-[0.25em] text-slate-400 uppercase font-semibold block mb-4 sm:mb-6">
              GET IN TOUCH
            </span>

            {/* Giant Stacked Title: LET'S WORK TOGETHER (Retains huge impact, scales cleanly on any screen) */}
            <h2 className="text-4xl xs:text-5xl sm:text-7xl lg:text-[7.25rem] xl:text-[8.25rem] 2xl:text-8xl font-display font-black text-white tracking-tight uppercase leading-[0.88] mb-6 sm:mb-8">
              LET'S <br />
              WORK <br />
              TOGETHER
            </h2>

            {/* Subheading */}
            <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-display font-bold text-white mb-4 leading-snug">
              Looking for the next problem worth solving.
            </h3>

            {/* Subtitle / Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed mb-9 max-w-lg">
              I'm open to opportunities where I can contribute to full-stack engineering, enterprise system integrations, backend architectures, and digital workflows.
            </p>

            {/* White Pill Button: DOWNLOAD RESUME → */}
            <a
              href="/CV - Muhammad Andri Abdullah Rosyid.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-download-resume-btn"
              className="inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono text-xs sm:text-base font-bold uppercase tracking-wider text-[#0c0d12] bg-white hover:bg-slate-200 transition-all duration-200 shadow-xl shadow-white/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>DOWNLOAD RESUME</span>
              <span className="text-base sm:text-lg transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right Column: Contact Cards Stack + SEND ME A MESSAGE Button (Shifted slightly left towards center) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col space-y-4 w-full max-w-[390px] sm:max-w-[420px] mx-auto lg:ml-auto lg:pr-4 xl:pr-8">

            {/* Contact Cards: 01 EMAIL, 02 GITHUB, 03 LINKEDIN */}
            {contactCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                target={card.isExternal ? "_blank" : undefined}
                rel={card.isExternal ? "noopener noreferrer" : undefined}
                className="group relative bg-[#13151f]/80 hover:bg-[#181a27] border border-white/10 hover:border-white/20 rounded-2xl p-4.5 sm:p-5 flex items-center justify-between transition-all duration-300 shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  {/* Rounded Square Dark Icon Container */}
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-white/20 transition-all flex-shrink-0">
                    {card.icon}
                  </div>

                  <div>
                    <div className="text-[11px] font-mono tracking-widest uppercase text-slate-400 font-semibold mb-0.5">
                      {card.label}
                    </div>
                    <div className="font-sans font-semibold text-sm sm:text-[15px] text-white group-hover:text-cyan-300 transition-colors break-all">
                      {card.value}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pl-3">
                  {card.isExternal && (
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  )}
                  <span className="font-mono text-sm font-bold text-slate-500">
                    {card.id}
                  </span>
                </div>
              </a>
            ))}

            {/* SEND ME A MESSAGE → Outline Pill Button */}
            <button
              onClick={() => setIsMessageModalOpen(true)}
              id="contact-send-message-btn"
              className="w-full mt-2 py-3.5 sm:py-4 px-6 rounded-full border border-white/25 hover:border-white bg-transparent hover:bg-white hover:text-[#0c0d12] text-white font-mono text-xs sm:text-base font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 group shadow-md"
            >
              <span>SEND ME A MESSAGE</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>

          </div>

        </div>

      </div>

      {/* Floating Bottom-Right "Send Me a Message" Dialog (Exact Match to User Reference Screenshot) */}
      {isMessageModalOpen && (
        <div
          id="floating-message-modal"
          className="floating-message-modal fixed bottom-3 right-3 sm:bottom-8 sm:right-8 z-50 w-[calc(100vw-1.5rem)] max-w-[390px] sm:w-[410px] rounded-3xl bg-[#161824] border border-white/15 p-5 sm:p-7 shadow-2xl shadow-black/80 animate-in slide-in-from-bottom-5 fade-in duration-300 text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
            <h3 className="floating-message-title font-display font-bold text-base sm:text-lg text-white">
              Send Me a Message
            </h3>

            <div className="flex items-center gap-2">
              {/* Minimize button */}
              <button
                type="button"
                onClick={() => setIsMessageModalOpen(false)}
                className="floating-message-icon-btn p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Minimize"
                aria-label="Minimize form"
              >
                <Minus className="w-4 h-4" />
              </button>

              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsMessageModalOpen(false)}
                className="floating-message-icon-btn p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Close"
                aria-label="Close form"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Underline Style Input Form */}
          <form onSubmit={handleSendMessage} className="space-y-5">
            <div>
              <label className="floating-message-label block text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold mb-1">
                FULL NAME
              </label>
              <input
                type="text"
                required
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="floating-message-input w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white transition-colors font-sans"
              />
            </div>

            <div>
              <label className="floating-message-label block text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="floating-message-input w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white transition-colors font-sans"
              />
            </div>

            <div>
              <label className="floating-message-label block text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold mb-1">
                MESSAGE
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="floating-message-input w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white transition-colors font-sans resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                id="floating-message-submit-btn"
                disabled={isSending}
                className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-200 text-[#0c0d12] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-white/10 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>{isSending ? "SENDING..." : "SEND MESSAGE →"}</span>
              </button>
            </div>
          </form>
        </div>
      )}

    </section>
  );
}
