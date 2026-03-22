import React from 'react';
import { Zap, Brain, Workflow, GitBranch, Lock, Gauge } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Real-time Secret Detection',
      description: 'Instantly identifies API keys, tokens, passwords, and credentials across all file types.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI-Powered Scanning',
      description: 'Advanced pattern recognition and machine learning to catch even obfuscated secrets.'
    },
    {
      icon: <Workflow className="w-8 h-8 text-blue-400" />,
      title: 'Zero Workflow Disruption',
      description: 'Seamlessly integrates with your existing Git workflow. No configuration needed.'
    },
    {
      icon: <GitBranch className="w-8 h-8 text-green-400" />,
      title: 'Works with Git Seamlessly',
      description: 'Drop-in replacement for git commit. Use all your favorite Git features.'
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: 'Complete Privacy',
      description: 'All scanning happens locally. Your code never leaves your machine.'
    },
    {
      icon: <Gauge className="w-8 h-8 text-pink-400" />,
      title: 'Lightning Fast',
      description: 'Optimized scanning engine processes thousands of files in milliseconds.'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to keep your secrets safe
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-105"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
