import React, { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';

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
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Download className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get Started in Seconds
          </h2>
          <p className="text-xl text-gray-400">
            Choose your preferred installation method
          </p>
        </div>
        
        <div className="space-y-6">
          {installMethods.map((method, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{method.title}</h3>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </div>
                <button
                  onClick={() => handleCopy(method.command, index)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300 self-start md:self-auto"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 rounded-lg bg-gray-900/80 border border-gray-700/50 font-mono text-sm">
                <code className="text-blue-300">{method.command}</code>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30">
          <h3 className="text-xl font-bold text-white mb-3">Quick Start</h3>
          <div className="space-y-2 text-gray-300">
            <p>1. Install Rocket using your preferred method above</p>
            <p>2. Navigate to your project directory</p>
            <p>3. Replace <code className="px-2 py-1 rounded bg-gray-800 text-blue-300">git commit</code> with <code className="px-2 py-1 rounded bg-gray-800 text-blue-300">rocket commit secure</code></p>
            <p>4. That's it! Rocket will now protect your commits automatically</p>
          </div>
        </div>
      </div>
    </section>
  );
}
