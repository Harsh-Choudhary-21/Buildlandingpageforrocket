import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  command?: string;
  output: Array<{
    type: 'success' | 'warning' | 'error' | 'info';
    text: string;
  }>;
  className?: string;
}

export function Terminal({ command, output, className = '' }: TerminalProps) {
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-lg border-2 border-pink-200 overflow-hidden shadow-xl ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 bg-pink-50 border-b-2 border-pink-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <TerminalIcon className="w-4 h-4 text-pink-400 ml-2" />
        <span className="text-pink-600 text-sm font-medium">terminal</span>
      </div>
      <div className="p-4 font-mono text-sm">
        {command && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-pink-500">$</span>
            <span className="text-gray-700">{command}</span>
          </div>
        )}
        <div className="space-y-1">
          {output.map((line, index) => (
            <div key={index} className="flex items-start gap-2">
              {line.type === 'success' && <span className="text-green-500">✓</span>}
              {line.type === 'warning' && <span className="text-yellow-500">⚠</span>}
              {line.type === 'error' && <span className="text-red-500">✗</span>}
              {line.type === 'info' && <span className="text-pink-500">ℹ</span>}
              <span className={
                line.type === 'success' ? 'text-green-600' :
                line.type === 'warning' ? 'text-yellow-600' :
                line.type === 'error' ? 'text-red-600' :
                'text-gray-700'
              }>
                {line.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}