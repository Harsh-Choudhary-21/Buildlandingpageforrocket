import React from 'react';
import { Zap, Brain, Workflow, GitBranch, Lock, Gauge } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-pink-500" />,
      title: 'Real-time Secret Detection',
      description: 'Instantly identifies API keys, tokens, passwords, and credentials across all file types.'
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-500" />,
      title: 'AI-Powered Scanning',
      description: 'Advanced pattern recognition and machine learning to catch even obfuscated secrets.'
    },
    {
      icon: <Workflow className="w-8 h-8 text-pink-500" />,
      title: 'Zero Workflow Disruption',
      description: 'Seamlessly integrates with your existing Git workflow. No configuration needed.'
    },
    {
      icon: <GitBranch className="w-8 h-8 text-pink-500" />,
      title: 'Works with Git Seamlessly',
      description: 'Drop-in replacement for git commit. Use all your favorite Git features.'
    },
    {
      icon: <Lock className="w-8 h-8 text-pink-500" />,
      title: 'Complete Privacy',
      description: 'All scanning happens locally. Your code never leaves your machine.'
    },
    {
      icon: <Gauge className="w-8 h-8 text-pink-500" />,
      title: 'Lightning Fast',
      description: 'Optimized scanning engine processes thousands of files in milliseconds.'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300/10 to-pink-400/10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to keep your secrets safe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(236,72,153,0.25)]"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 transform transition-transform duration-300"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}