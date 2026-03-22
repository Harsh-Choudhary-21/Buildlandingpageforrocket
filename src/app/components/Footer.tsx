import React from 'react';
import { Github, Twitter, Linkedin, Rocket } from 'lucide-react';

export function Footer() {
  const links = [
    { name: 'Documentation', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Blog', href: '#' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="py-12 px-4 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Rocket className="w-6 h-6 text-blue-400" />
              <span className="text-2xl font-bold text-white">Rocket</span>
            </div>
            <p className="text-gray-400">Secure Git commits by default. Never leak secrets again.</p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Rocket Team. All rights reserved.
          </p>
          
          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
