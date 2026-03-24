import React from 'react';
import { Rocket, Star, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-white via-pink-50 to-pink-100">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-pink-400/20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-12 rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-pink-200 shadow-2xl shadow-pink-400/30"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Secure Your Commits?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who never worry about leaked secrets. Start protecting your code today.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button variant="primary" icon={<Rocket className="w-5 h-5" />} className="text-lg px-8 py-4">
              Start Using Rocket
            </Button>
            <Button variant="secondary" icon={<Star className="w-5 h-5" />} className="text-lg px-8 py-4">
              Star on GitHub
            </Button>
          </motion.div>
          
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span>Free forever</span>
            <span>•</span>
            <span>Open source</span>
            <span>•</span>
            <span>No sign up required</span>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">10K+</div>
            <div className="text-gray-600">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">100K+</div>
            <div className="text-gray-600">Protected Commits</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">5K+</div>
            <div className="text-gray-600">Secrets Blocked</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}