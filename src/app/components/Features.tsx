import React from 'react';
import { Zap, Brain, Workflow, GitBranch, Lock, Gauge } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Real-time Secret Detection',
      description: 'Instantly identifies API keys, tokens, passwords, and credentials across all file types.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI-Powered Scanning',
      description: 'Advanced pattern recognition and machine learning to catch even obfuscated secrets.'
    },
    {
      icon: <Workflow className="w-8 h-8 text-purple-400" />,
      title: 'Zero Workflow Disruption',
      description: 'Seamlessly integrates with your existing Git workflow. No configuration needed.'
    },
    {
      icon: <GitBranch className="w-8 h-8 text-purple-400" />,
      title: 'Works with Git Seamlessly',
      description: 'Drop-in replacement for git commit. Use all your favorite Git features.'
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      title: 'Complete Privacy',
      description: 'All scanning happens locally. Your code never leaves your machine.'
    },
    {
      icon: <Gauge className="w-8 h-8 text-purple-400" />,
      title: 'Lightning Fast',
      description: 'Optimized scanning engine processes thousands of files in milliseconds.'
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-purple-900/10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400">
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
              className="p-6 rounded-2xl bg-gray-950 border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(168,85,247,0.25)]"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4 transform transition-transform duration-300"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}