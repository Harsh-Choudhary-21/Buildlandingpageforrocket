import React from 'react';
import { Rocket, Star } from 'lucide-react';
import { Button } from './Button';
import { Terminal } from './Terminal';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 relative overflow-hidden bg-gradient-to-b from-white via-pink-50 to-pink-100">
      {/* Gradient Background Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 mb-8 shadow-sm">
            <Rocket className="w-4 h-4 text-pink-500" />
            <span className="text-sm text-pink-600 font-medium">Introducing Rocket CLI</span>
          </div>
          
          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 bg-clip-text text-transparent">
            Rocket
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Secure Git Commits by Default
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Prevent secret leaks before they happen. Never accidentally commit API keys, tokens, or credentials again.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary" icon={<Rocket className="w-5 h-5" />}>
              Get Started
            </Button>
            <Button variant="secondary" icon={<Star className="w-5 h-5" />}>
              Star on GitHub
            </Button>
          </div>
        </div>
        
        {/* Terminal Demo */}
        <div className="max-w-3xl mx-auto">
          <Terminal
            command="rocket commit secure -m 'init'"
            output={[
              { type: 'info', text: 'Scanning files for secrets...' },
              { type: 'warning', text: '.env blocked (secret detected)' },
              { type: 'success', text: 'main.py committed' },
              { type: 'success', text: 'Safe commit completed!' }
            ]}
          />
        </div>
      </div>
    </section>
  );
}