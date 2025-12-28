import React from 'react';
import { Bot, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Bot className="text-primary-500 w-8 h-8" />
              <span className="text-xl font-display font-bold text-white">Nexus<span className="text-primary-500">AI</span></span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Empowering businesses with intelligent automation and conversational AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Nexus AI Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;