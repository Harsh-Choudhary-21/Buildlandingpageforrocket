import React from 'react';
import { Github, Twitter, Linkedin, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

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
    <footer className="py-12 px-4 border-t-2 border-pink-200 relative bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Rocket className="w-6 h-6 text-pink-500" />
              <span className="text-2xl font-bold text-gray-900">Rocket</span>
            </div>
            <p className="text-gray-600">Secure Git commits by default. Never leak secrets again.</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="pt-8 border-t-2 border-pink-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Rocket Team. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 border-2 border-pink-200 hover:border-pink-300 flex items-center justify-center text-gray-600 hover:text-pink-500 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}