import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Terminal } from './Terminal';
import { Play, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ─────────────────────────────────────────────
//  CLI story: each "step" represents one line
//  appearing in the terminal with a delay.
// ─────────────────────────────────────────────
interface CLILine {
  type: 'command' | 'info' | 'warning' | 'success' | 'error';
  text: string;
  delay: number; // ms before this line appears
}

const CLI_STORY: CLILine[] = [
  { type: 'command', text: '$ rocket commit -m "add user auth"', delay: 400 },
  { type: 'info', text: 'Scanning staged files...', delay: 700 },
  { type: 'info', text: 'Checking 4 files for secrets...', delay: 500 },
  { type: 'warning', text: 'SECRET FOUND  ·  .env  →  AWS_SECRET_KEY', delay: 600 },
  { type: 'error', text: 'Commit blocked — sensitive data detected', delay: 400 },
  { type: 'info', text: 'Suggested fix: add .env to .gitignore', delay: 700 },
  { type: 'command', text: '$ rocket commit -m "add user auth"  # after fix', delay: 900 },
  { type: 'info', text: 'Scanning staged files...', delay: 600 },
  { type: 'success', text: 'auth.ts  ✓ clean', delay: 300 },
  { type: 'success', text: 'utils.ts  ✓ clean', delay: 300 },
  { type: 'success', text: 'index.ts  ✓ clean', delay: 300 },
  { type: 'success', text: 'Commit successful — no secrets leaked 🔒', delay: 500 },
];

const TYPE_COLORS: Record<string, string> = {
  command: 'text-gray-100',
  info: 'text-purple-300',
  warning: 'text-yellow-400',
  success: 'text-emerald-400',
  error: 'text-red-400',
};
const TYPE_PREFIX: Record<string, string> = {
  command: '',
  info: 'ℹ ',
  warning: '⚠ ',
  success: '✓ ',
  error: '✗ ',
};

export function Demo() {
  const [visibleLines, setVisibleLines] = useState<CLILine[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const runAnimation = useCallback(() => {
    clearTimeouts();
    setVisibleLines([]);
    setIsRunning(true);
    setIsDone(false);
    setHasStarted(true);

    let cumulativeDelay = 0;
    CLI_STORY.forEach((line, i) => {
      cumulativeDelay += line.delay;
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        // Auto-scroll terminal
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        if (i === CLI_STORY.length - 1) {
          setIsRunning(false);
          setIsDone(true);
        }
      }, cumulativeDelay);
      timeoutsRef.current.push(t);
    });
  }, []);

  // Auto-start when section scrolls into view
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          runAnimation();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearTimeouts();
    };
  }, [hasStarted, runAnimation]);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 relative bg-gradient-to-b from-black via-purple-950/20 to-black"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            See It In Action
          </h2>
          <p className="text-xl text-gray-400">
            Watch Rocket catch a real secret leak — in milliseconds
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-px rounded-xl bg-purple-500/10 blur-xl pointer-events-none" />

          <div className="relative bg-gray-950 rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-purple-900/30">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-black/60 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-purple-300/60 text-xs font-mono ml-auto">
                {isRunning ? 'running…' : isDone ? 'done' : 'ready'}
              </span>
            </div>

            {/* Output */}
            <div
              ref={terminalRef}
              className="p-5 font-mono text-sm leading-relaxed min-h-[260px] max-h-[340px] overflow-y-auto"
              style={{ scrollBehavior: 'smooth' }}
            >
              <AnimatePresence initial={false}>
                {visibleLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex gap-2 mb-1.5 ${TYPE_COLORS[line.type]}`}
                  >
                    <span className="shrink-0 select-none opacity-70">
                      {TYPE_PREFIX[line.type]}
                    </span>
                    <span>{line.type === 'command' ? line.text : line.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Blinking cursor while running */}
              {isRunning && (
                <span
                  className="inline-block w-2 h-4 bg-purple-400 align-middle"
                  style={{ animation: 'blink 1s step-end infinite' }}
                />
              )}

              {/* Prompt if idle and not started */}
              {!hasStarted && (
                <div className="flex gap-2 text-gray-600">
                  <span>$</span>
                  <span
                    className="inline-block w-2 h-4 bg-gray-600 align-middle"
                    style={{ animation: 'blink 1s step-end infinite' }}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Replay control */}
        {isDone && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={runAnimation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-gray-300 border border-white/10 hover:border-purple-500/50 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4" />
              Replay
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}