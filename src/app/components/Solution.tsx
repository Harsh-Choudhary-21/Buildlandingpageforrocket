import React from 'react';
import { Code, Scan, ShieldCheck, GitCommit } from 'lucide-react';

export function Solution() {
  const steps = [
    { icon: <Code className="w-8 h-8" />, label: 'Write Code' },
    { icon: <Scan className="w-8 h-8" />, label: 'Scan' },
    { icon: <ShieldCheck className="w-8 h-8" />, label: 'Block' },
    { icon: <GitCommit className="w-8 h-8" />, label: 'Commit' }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meet Your Solution
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Rocket is a secure Git wrapper that automatically scans your code and prevents sensitive data from being committed.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-2">Secure Git Wrapper</h3>
              <p className="text-gray-300">Works seamlessly with your existing Git workflow</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-2">Automatic Scanning</h3>
              <p className="text-gray-300">Real-time detection of secrets and credentials</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-600/20 to-pink-800/20 backdrop-blur-sm border border-pink-500/30">
              <h3 className="text-xl font-bold text-white mb-2">Prevents Leaks</h3>
              <p className="text-gray-300">Blocks commits before secrets reach your repo</p>
            </div>
          </div>
        </div>
        
        {/* Flow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/50">
                  {step.icon}
                </div>
                <span className="text-white font-medium">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              )}
              {index < steps.length - 1 && (
                <div className="md:hidden h-8 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
