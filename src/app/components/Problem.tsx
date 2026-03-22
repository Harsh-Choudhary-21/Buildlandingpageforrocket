import React from 'react';
import { AlertTriangle, DollarSign, Shield } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: 'Accidental Leaks',
      description: 'Developers accidentally commit API keys, tokens, and credentials to repositories every day.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: 'Financial Loss',
      description: 'Leaked secrets lead to unauthorized access, data breaches, and costly security incidents.'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: 'Happens to Everyone',
      description: 'Even experienced developers make mistakes. One slip can compromise your entire system.'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            The Problem is Real
          </h2>
          <p className="text-xl text-gray-400">
            Secret leaks are the #1 cause of security breaches in modern development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
