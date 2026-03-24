import React from 'react';
import { Terminal, ScanSearch, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: <Terminal className="w-10 h-10 text-pink-500" />,
      title: 'Run rocket commit secure',
      description: 'Use Rocket instead of standard git commit. It\'s that simple.'
    },
    {
      number: '02',
      icon: <ScanSearch className="w-10 h-10 text-pink-500" />,
      title: 'Rocket scans files',
      description: 'AI-powered scanning detects API keys, tokens, and sensitive data in real-time.'
    },
    {
      number: '03',
      icon: <ShieldAlert className="w-10 h-10 text-pink-500" />,
      title: 'Blocks sensitive data',
      description: 'Files with secrets are automatically blocked from being committed.'
    },
    {
      number: '04',
      icon: <CheckCircle2 className="w-10 h-10 text-pink-500" />,
      title: 'Commits safe files',
      description: 'Only clean, safe files make it to your repository. Your secrets stay local.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Protection in 4 simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-8 rounded-2xl bg-white border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(236,72,153,0.25)]"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-pink-400/50">
                {step.number}
              </div>
              <div className="mb-4 mt-2">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}