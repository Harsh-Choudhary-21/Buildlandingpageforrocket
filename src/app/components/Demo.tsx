import React, { useState, useEffect } from 'react';
import { Terminal } from './Terminal';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

const demoSteps = [
  {
    command: 'rocket commit secure -m "demo"',
    output: []
  },
  {
    command: 'rocket commit secure -m "demo"',
    output: [
      { type: 'info' as const, text: 'Scanning files...' }
    ]
  },
  {
    command: 'rocket commit secure -m "demo"',
    output: [
      { type: 'info' as const, text: 'Scanning files...' },
      { type: 'info' as const, text: 'Found 3 files to commit' }
    ]
  },
  {
    command: 'rocket commit secure -m "demo"',
    output: [
      { type: 'info' as const, text: 'Scanning files...' },
      { type: 'info' as const, text: 'Found 3 files to commit' },
      { type: 'warning' as const, text: '.env blocked (AWS_SECRET_KEY detected)' }
    ]
  },
  {
    command: 'rocket commit secure -m "demo"',
    output: [
      { type: 'info' as const, text: 'Scanning files...' },
      { type: 'info' as const, text: 'Found 3 files to commit' },
      { type: 'warning' as const, text: '.env blocked (AWS_SECRET_KEY detected)' },
      { type: 'success' as const, text: 'main.py committed' }
    ]
  },
  {
    command: 'rocket commit secure -m "demo"',
    output: [
      { type: 'info' as const, text: 'Scanning files...' },
      { type: 'info' as const, text: 'Found 3 files to commit' },
      { type: 'warning' as const, text: '.env blocked (AWS_SECRET_KEY detected)' },
      { type: 'success' as const, text: 'main.py committed' },
      { type: 'success' as const, text: 'utils.js committed' }
    ]
  },
  {
    command: 'rocket commit secure -m "demo"',
    output: [
      { type: 'info' as const, text: 'Scanning files...' },
      { type: 'info' as const, text: 'Found 3 files to commit' },
      { type: 'warning' as const, text: '.env blocked (AWS_SECRET_KEY detected)' },
      { type: 'success' as const, text: 'main.py committed' },
      { type: 'success' as const, text: 'utils.js committed' },
      { type: 'success' as const, text: '✨ Secure commit completed! Your secrets are safe.' }
    ]
  }
];

export function Demo() {
  const [step, setStep] = useState(0);
  const demoSteps = [
    {
      command: 'rocket commit secure -m "demo"',
      output: []
    },
    {
      command: 'rocket commit secure -m "demo"',
      output: [
        { type: 'info' as const, text: 'Scanning files...' }
      ]
    },
    {
      command: 'rocket commit secure -m "demo"',
      output: [
        { type: 'info' as const, text: 'Scanning files...' },
        { type: 'info' as const, text: 'Found 3 files to commit' }
      ]
    },
    {
      command: 'rocket commit secure -m "demo"',
      output: [
        { type: 'info' as const, text: 'Scanning files...' },
        { type: 'info' as const, text: 'Found 3 files to commit' },
        { type: 'warning' as const, text: '.env blocked (AWS_SECRET_KEY detected)' }
      ]
    },
    {
      command: 'rocket commit secure -m "demo"',
      output: [
        { type: 'info' as const, text: 'Scanning files...' },
        { type: 'info' as const, text: 'Found 3 files to commit' },
        { type: 'warning' as const, text: '.env blocked (AWS_SECRET_KEY detected)' },
        { type: 'success' as const, text: 'main.py committed' }
      ]
    },
    {
      command: 'rocket commit secure -m "demo"',
      output: [
        { type: 'info' as const, text: 'Scanning files...' },
        { type: 'info' as const, text: 'Found 3 files to commit' },
        { type: 'warning' as const, text: '.env blocked (AWS_SECRET_KEY detected)' },
        { type: 'success' as const, text: 'main.py committed' },
        { type: 'success' as const, text: 'utils.js committed' }
      ]
    },
    {
      command: 'rocket commit secure -m "demo"',
      output: [
        { type: 'info' as const, text: 'Scanning files...' },
        { type: 'info' as const, text: 'Found 3 files to commit' },
        { type: 'warning' as const, text: '.env blocked (AWS_SECRET_KEY detected)' },
        { type: 'success' as const, text: 'main.py committed' },
        { type: 'success' as const, text: 'utils.js committed' },
        { type: 'success' as const, text: '✨ Secure commit completed! Your secrets are safe.' }
      ]
    }
  ];

  useEffect(() => {
    if (step < demoSteps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleReplay = () => {
    setStep(0);
  };

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Watch Rocket protect your repository in real-time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Terminal
            command={demoSteps[step].command}
            output={demoSteps[step].output}
            className="shadow-2xl shadow-pink-500/20"
          />

          {step === demoSteps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center mt-8"
            >
              <button
                onClick={handleReplay}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-pink-50 text-gray-900 border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 shadow-lg hover:shadow-[0_10px_40px_rgba(236,72,153,0.25)]"
              >
                <Play className="w-4 h-4" />
                Replay Demo
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}