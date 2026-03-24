import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Number of particles — keep low for GPU efficiency
const PARTICLE_COUNT = 18;

// Each particle is a tiny CSS div with box-shadow glow — no emoji, pure CSS
// We use will-change: transform so the GPU composites them independently
export function FallingPetals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles: HTMLDivElement[] = [];
    const animations: gsap.core.Tween[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 3 + 2; // 2–5px
      const hue = Math.random() > 0.5 ? 270 : 240; // purple or violet hue
      const opacity = Math.random() * 0.4 + 0.15; // 0.15–0.55

      p.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: hsl(${hue}, 80%, 70%);
        box-shadow: 0 0 ${size * 3}px 1px hsl(${hue}, 90%, 60%);
        opacity: ${opacity};
        left: ${Math.random() * 100}%;
        top: -10px;
        will-change: transform;
        pointer-events: none;
      `;
      containerRef.current.appendChild(p);
      particles.push(p);
    }

    particles.forEach((p) => {
      const duration = Math.random() * 18 + 14; // 14–32s — very slow drift
      const delay = Math.random() * 6;
      const xDrift = Math.random() * 120 - 60; // ±60px

      const fall = gsap.to(p, {
        y: window.innerHeight + 20,
        x: xDrift,
        opacity: 0,
        duration,
        delay,
        ease: 'none',
        repeat: -1,
        onRepeat: () => {
          gsap.set(p, {
            x: 0,
            y: -10,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.4 + 0.15,
          });
        },
      });

      // Gentle horizontal sway — separate tween so it loops independently
      const sway = gsap.to(p, {
        x: `+=${Math.random() * 40 - 20}`,
        duration: Math.random() * 4 + 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      animations.push(fall, sway);
    });

    // Pause when out of viewport (performance)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          animations.forEach((a) => (e.isIntersecting ? a.play() : a.pause()));
        });
      },
      { threshold: 0 }
    );
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      animations.forEach((a) => a.kill());
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[5] overflow-hidden"
    />
  );
}
