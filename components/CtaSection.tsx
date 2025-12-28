import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-48 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-slate-950 z-0"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-10 leading-tight">
          Ready to Start <br />Automating?
        </h2>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 font-light">
          Join forward-thinking companies using Nexus AI to bridge the gap between human conversation and backend automation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="px-10 py-5 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-full transition-all transform hover:-translate-y-1 shadow-2xl text-lg">
            Get Started Free
          </button>
          <button className="px-10 py-5 bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold rounded-full transition-all text-lg">
            Speak with Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;