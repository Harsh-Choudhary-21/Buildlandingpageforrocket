import React from 'react';
import { AlertTriangle, DollarSign, Shield } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-pink-500" />,
      title: 'Accidental Leaks',
      description: 'Developers accidentally commit API keys, tokens, and credentials to repositories every day.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-pink-500" />,
      title: 'Financial Loss',
      description: 'Leaked secrets lead to unauthorized access, data breaches, and costly security incidents.'
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-500" />,
      title: 'Happens to Everyone',
      description: 'Even experienced developers make mistakes. One slip can compromise your entire system.'
    }
  ];

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            The Problem is Real
          </h2>
          <p className="text-xl text-gray-600">
            Secret leaks are the #1 cause of security breaches in modern development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}