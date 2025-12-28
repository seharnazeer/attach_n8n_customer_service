import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 text-center">
            Trusted by Innovators
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative">
            <div className="absolute -top-4 -left-4 text-6xl text-slate-800 font-serif">"</div>
            <p className="text-lg text-slate-300 mb-6 relative z-10">
              The integration with n8n was flawless. We reduced our customer support response time by 80% within the first week. It's not just a bot; it's a team member.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/100/100?random=1" alt="User" className="w-12 h-12 rounded-full border-2 border-primary-500" />
              <div>
                <h4 className="text-white font-bold">Sarah Jenkins</h4>
                <p className="text-sm text-slate-500">CTO at TechFlow</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative">
            <div className="absolute -top-4 -left-4 text-6xl text-slate-800 font-serif">"</div>
            <p className="text-lg text-slate-300 mb-6 relative z-10">
              Finally, a chatbot that actually does things. The ability to trigger workflows directly from the chat window has been a game-changer for our internal ops.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/100/100?random=2" alt="User" className="w-12 h-12 rounded-full border-2 border-accent-500" />
              <div>
                <h4 className="text-white font-bold">Marcus Chen</h4>
                <p className="text-sm text-slate-500">Product Lead at OmniCorp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;