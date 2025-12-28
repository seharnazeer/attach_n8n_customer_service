import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Bot, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-60 pb-32 lg:pt-72 lg:pb-48 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-600 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob"></div>
        <div className="absolute top-20 -right-4 w-96 h-96 bg-accent-600 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md mb-10 shadow-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-200 uppercase tracking-widest">System Access Enabled</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[1.05] mb-10 tracking-tight">
          Intelligent Logic <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary-500 to-accent-500 font-display">Redefined</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Experience the power of n8n-driven conversational agents. 
          The chatbot below is connected to your custom logic engine.
        </p>

        {/* Credentials Info Box */}
        <div className="max-w-md mx-auto mb-12 p-4 rounded-2xl bg-slate-900/40 border border-primary-500/20 backdrop-blur-sm flex items-center justify-center gap-6 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
           <div className="flex items-center gap-2">
             <ShieldCheck className="w-5 h-5 text-primary-400" />
             <span className="text-sm font-medium text-slate-300">User: <span className="text-white font-mono">nexus</span></span>
           </div>
           <div className="h-4 w-px bg-slate-700"></div>
           <div className="flex items-center gap-2">
             <span className="text-sm font-medium text-slate-300">Pass: <span className="text-white font-mono">nexus</span></span>
           </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => {
              const chatButton = document.querySelector('.n8n-chat-button') as HTMLElement;
              if (chatButton) chatButton.click();
            }}
            className="group relative px-10 py-5 bg-white text-slate-950 font-bold rounded-full transition-all shadow-[0_0_40px_rgba(14,165,233,0.3)] hover:shadow-[0_0_60px_rgba(14,165,233,0.5)] hover:bg-slate-50 text-lg"
          >
            <span className="flex items-center gap-3">
              Open Assistant
              <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Hero Image / Visualization */}
        <div className="mt-32 relative mx-auto max-w-5xl group perspective-1000">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
          
          <div className="relative rounded-2xl bg-[#0B1121] border border-slate-800/80 shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[2/1] flex items-center justify-center transform transition-transform duration-700 hover:scale-[1.01]">
             
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

             <div className="w-full max-w-3xl p-6 relative">
                <div className="flex flex-col gap-4">
                  
                  <div className="flex gap-4 items-start">
                     <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 flex-shrink-0">
                       <span className="text-sm font-bold text-slate-400">U</span>
                     </div>
                     <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl rounded-tl-none max-w-md">
                        <p className="text-slate-300 text-sm text-left font-sans">How do I access the portal?</p>
                     </div>
                  </div>

                  <div className="flex gap-4 items-start flex-row-reverse">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-500/20 flex-shrink-0">
                       <Bot className="w-5 h-5 text-white" />
                     </div>
                     <div className="bg-primary-950/40 border border-primary-500/30 p-4 rounded-2xl rounded-tr-none max-w-md backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-3 h-3 text-primary-400" />
                          <span className="text-xs font-semibold text-primary-400 uppercase">System Ready</span>
                        </div>
                        <p className="text-slate-200 text-sm mb-3 text-left font-sans">Use 'nexus' for both username and password when prompted by the system.</p>
                     </div>
                  </div>

                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;