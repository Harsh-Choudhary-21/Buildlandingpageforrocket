import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  command?: string;
  output: Array<{
    type: 'success' | 'warning' | 'error' | 'info';
    text: string;
  }>;
  className?: string;
  /** Show a blinking cursor at the end of the command line */
  showCursor?: boolean;
}

const typeColors = {
  success: 'text-emerald-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
  info: 'text-purple-400',
};

const typeIcons = {
  success: '✓',
  warning: '⚠',
  error: '✗',
  info: 'ℹ',
};

export function Terminal({ command, output, className = '', showCursor = false }: TerminalProps) {
  return (
    <div className={`bg-gray-950 rounded-xl border border-white/10 overflow-hidden shadow-xl shadow-purple-900/20 ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/60 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <TerminalIcon className="w-3.5 h-3.5 text-purple-400 ml-2" />
        <span className="text-purple-300/70 text-xs font-mono">rocket — terminal</span>
      </div>

      {/* Body */}
      <div className="p-5 font-mono text-sm leading-relaxed">
        {command && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-purple-400 select-none">$</span>
            <span className="text-gray-100">{command}</span>
            {showCursor && (
              <span
                className="inline-block w-2 h-4 bg-purple-400 ml-0.5 align-middle"
                style={{ animation: 'blink 1s step-end infinite' }}
              />
            )}
          </div>
        )}
        <div className="space-y-1.5">
          {output.map((line, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <span className={`${typeColors[line.type]} shrink-0 mt-px`}>
                {typeIcons[line.type]}
              </span>
              <span className={typeColors[line.type]}>{line.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}