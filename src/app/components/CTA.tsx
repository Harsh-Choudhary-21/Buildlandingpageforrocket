import React from 'react';
import { Rocket, Star, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export function CTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Secure Your Commits?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who never worry about leaked secrets. Start protecting your code today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="primary" icon={<Rocket className="w-5 h-5" />} className="text-lg px-8 py-4">
              Start Using Rocket
            </Button>
            <Button variant="secondary" icon={<Star className="w-5 h-5" />} className="text-lg px-8 py-4">
              Star on GitHub
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Free forever</span>
            <span>•</span>
            <span>Open source</span>
            <span>•</span>
            <span>No sign up required</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100K+</div>
            <div className="text-gray-400">Protected Commits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5K+</div>
            <div className="text-gray-400">Secrets Blocked</div>
          </div>
        </div>
      </div>
    </section>
  );
}
