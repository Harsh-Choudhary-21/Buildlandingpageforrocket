import React from 'react';
import { Code, Scan, ShieldCheck, GitCommit } from 'lucide-react';
import { motion } from 'motion/react';

export function Solution() {
  const steps = [
    { icon: <Code className="w-8 h-8" />, label: 'Write Code' },
    { icon: <Scan className="w-8 h-8" />, label: 'Scan' },
    { icon: <ShieldCheck className="w-8 h-8" />, label: 'Block' },
    { icon: <GitCommit className="w-8 h-8" />, label: 'Commit' }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="w-full h-full bg-gradient-to-r from-purple-600/20 to-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meet Your Solution
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Rocket is a secure Git wrapper that automatically scans your code and prevents sensitive data from being committed.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gray-950 border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(168,85,247,0.25)]"
            >
              <h3 className="text-xl font-bold text-white mb-2">Secure Git Wrapper</h3>
              <p className="text-gray-400">Works seamlessly with your existing Git workflow</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gray-950 border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(168,85,247,0.25)]"
            >
              <h3 className="text-xl font-bold text-white mb-2">Automatic Scanning</h3>
              <p className="text-gray-400">Real-time detection of secrets and credentials</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gray-950 border-2 border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(168,85,247,0.25)]"
            >
              <h3 className="text-xl font-bold text-white mb-2">Prevents Leaks</h3>
              <p className="text-gray-400">Blocks commits before secrets reach your repo</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Flow Diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 to-purple-800 flex items-center justify-center text-white shadow-lg shadow-purple-400/50"
                >
                  {step.icon}
                </motion.div>
                <span className="text-white font-medium">{step.label}</span>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-purple-700 to-violet-500"
                ></motion.div>
              )}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="md:hidden h-8 w-0.5 bg-gradient-to-b from-purple-700 to-violet-500"
                ></motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}