import React from 'react';
import { Terminal, ScanSearch, ShieldAlert, CheckCircle2 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <Terminal className="w-10 h-10 text-blue-400" />,
      title: 'Run rocket commit secure',
      description: 'Use Rocket instead of standard git commit. It\'s that simple.'
    },
    {
      number: '02',
      icon: <ScanSearch className="w-10 h-10 text-purple-400" />,
      title: 'Rocket scans files',
      description: 'AI-powered scanning detects API keys, tokens, and sensitive data in real-time.'
    },
    {
      number: '03',
      icon: <ShieldAlert className="w-10 h-10 text-pink-400" />,
      title: 'Blocks sensitive data',
      description: 'Files with secrets are automatically blocked from being committed.'
    },
    {
      number: '04',
      icon: <CheckCircle2 className="w-10 h-10 text-green-400" />,
      title: 'Commits safe files',
      description: 'Only clean, safe files make it to your repository. Your secrets stay local.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-400">
            Protection in 4 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {step.number}
              </div>
              <div className="mb-4 mt-2">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
