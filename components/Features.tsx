import React from 'react';
import { Bot, Zap, Shield, Globe, Cpu, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Intelligent Conversations',
    description: 'Powered by advanced LLMs to understand context, intent, and nuance in every customer interaction.'
  },
  {
    icon: Zap,
    title: 'Instant Integration',
    description: 'Connect seamlessly with your existing tech stack using n8n workflows. No complex coding required.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Your data is encrypted and handled with the highest standards of security and compliance.'
  },
  {
    icon: Globe,
    title: 'Multi-language Support',
    description: 'Communicate with your global audience in over 30 languages instantly and accurately.'
  },
  {
    icon: Cpu,
    title: 'Automated Actions',
    description: 'Don’t just chat—act. The bot can trigger workflows, update databases, and send emails.'
  },
  {
    icon: BarChart3,
    title: 'Insightful Analytics',
    description: 'Gain deep insights into customer queries and bot performance with detailed reporting dashboards.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-48 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
            Advanced Capabilities
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed">
            Nexus AI isn't just a conversational interface; it's a fully integrated automation engine designed to scale your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-primary-500/50 transition-all hover:bg-slate-900 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-500 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;