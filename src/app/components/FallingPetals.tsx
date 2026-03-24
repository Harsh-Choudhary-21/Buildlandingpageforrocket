import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function FallingPetals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const petalCount = 15; // Reduced for subtlety
    const petals: HTMLDivElement[] = [];
    const animations: gsap.core.Tween[] = [];

    // Create petals
    for (let i = 0; i < petalCount; i++) {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.innerHTML = '🌸';
      petal.style.position = 'absolute';
      petal.style.fontSize = `${Math.random() * 10 + 8}px`; // Smaller petals
      petal.style.opacity = '0.3'; // More subtle
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.top = `-50px`;
      containerRef.current.appendChild(petal);
      petals.push(petal);
    }

    // Animate each petal
    petals.forEach((petal, index) => {
      const duration = Math.random() * 15 + 20; // Slower fall
      const delay = Math.random() * 5;
      const xMovement = Math.random() * 100 - 50;

      const mainAnim = gsap.to(petal, {
        y: window.innerHeight + 100,
        x: xMovement,
        rotation: Math.random() * 360,
        opacity: 0.1,
        duration: duration,
        delay: delay,
        ease: 'none',
        repeat: -1,
        onRepeat: () => {
          gsap.set(petal, {
            x: 0,
            y: -50,
            left: `${Math.random() * 100}%`,
            opacity: 0.3,
          });
        },
      });

      // Add subtle horizontal sway
      const swayAnim = gsap.to(petal, {
        x: `+=${Math.random() * 30 - 15}`,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      animations.push(mainAnim, swayAnim);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animations.forEach((anim) => anim.play());
          } else {
            animations.forEach((anim) => anim.pause());
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      animations.forEach((anim) => anim.kill());
      petals.forEach((petal) => petal.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[5]"
      style={{ overflow: 'hidden' }}
    />
  );
}
