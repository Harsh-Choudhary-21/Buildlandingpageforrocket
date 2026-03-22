import React from 'react';
import { AlertTriangle, DollarSign, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Problem() {
  const { scrollYProgress } = useScroll();
  
  // Blur effects for top and bottom
  const topBlur = useTransform(scrollYProgress, [0, 0.1], [10, 0]);
  const bottomBlur = useTransform(scrollYProgress, [0.9, 1], [0, 10]);

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
    <section className="py-20 px-4 relative bg-gradient-to-b from-pink-100 to-pink-50">
      {/* Top Blur Effect */}
      <motion.div
        style={{ filter: `blur(${topBlur}px)` }}
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-100/50 to-transparent pointer-events-none z-10"
      />
      
      {/* Bottom Blur Effect */}
      <motion.div
        style={{ filter: `blur(${bottomBlur}px)` }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-50/50 to-transparent pointer-events-none z-10"
      />
      
      <div className="max-w-6xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            The Problem is Real
          </h2>
          <p className="text-xl text-gray-600">
            Secret leaks are the #1 cause of security breaches in modern development
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(236,72,153,0.3)]"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}