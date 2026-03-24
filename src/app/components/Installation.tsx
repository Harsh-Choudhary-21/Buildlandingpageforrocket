import React, { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';
import { motion } from 'motion/react';

export function Installation() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const installMethods = [
    {
      title: 'Install via pip',
      command: 'pip install rocket-cli',
      description: 'Recommended for Python developers'
    },
    {
      title: 'Install via npm',
      command: 'npm install -g rocket-cli',
      description: 'For Node.js developers'
    },
    {
      title: 'Clone from GitHub',
      command: 'git clone https://github.com/rocket-cli/rocket.git',
      description: 'Build from source'
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-white via-pink-50 to-pink-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Download className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Get Started in Seconds
          </h2>
          <p className="text-xl text-gray-600">
            Choose your preferred installation method
          </p>
        </motion.div>

        <div className="space-y-6">
          {installMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(236,72,153,0.25)]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </div>
                <button
                  onClick={() => handleCopy(method.command, index)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-pink-50 hover:bg-pink-100 text-gray-900 border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 self-start md:self-auto"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-4 h-4 text-pink-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-pink-500" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 rounded-lg bg-gray-900 border-2 border-gray-700 font-mono text-sm">
                <code className="text-pink-300">{method.command}</code>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-pink-100 to-pink-50 border-2 border-pink-200"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Start</h3>
          <div className="space-y-2 text-gray-700">
            <p>1. Install Rocket using your preferred method above</p>
            <p>2. Navigate to your project directory</p>
            <p>3. Replace <code className="px-2 py-1 rounded bg-white border border-pink-200 text-pink-600">git commit</code> with <code className="px-2 py-1 rounded bg-white border border-pink-200 text-pink-600">rocket commit secure</code></p>
            <p>4. That's it! Rocket will now protect your commits automatically</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}