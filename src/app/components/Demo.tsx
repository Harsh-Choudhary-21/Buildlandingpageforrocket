import React, { useState, useEffect } from 'react';
import { Terminal } from './Terminal';
import { Play } from 'lucide-react';

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
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            See It In Action
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Watch Rocket protect your repository in real-time
          </p>
        </div>
        
        <div className="relative">
          <Terminal
            command={demoSteps[step].command}
            output={demoSteps[step].output}
            className="shadow-2xl shadow-blue-500/20"
          />
          
          {step === demoSteps.length - 1 && (
            <div className="text-center mt-8">
              <button
                onClick={handleReplay}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Replay Demo
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
