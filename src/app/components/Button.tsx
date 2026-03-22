import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, variant = 'primary', icon, onClick, className = '' }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 hover:scale-105',
    secondary: 'bg-white hover:bg-pink-50 text-pink-600 border-2 border-pink-300 hover:border-pink-400',
    ghost: 'bg-transparent hover:bg-pink-50 text-pink-600 hover:text-pink-700'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}