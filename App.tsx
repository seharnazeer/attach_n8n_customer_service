import React from 'react';
import Hero from './components/Hero';
import N8nChatWidget from './components/N8nChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col overflow-x-hidden">
      <main className="flex-grow flex items-center justify-center">
        {/* Only the Hero section remains as requested */}
        <Hero />
      </main>
      
      {/* The Chat Widget is mounted globally */}
      <N8nChatWidget />
    </div>
  );
};

export default App;