import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

export function LoadingPage({ onLoadingComplete }: LoadingPageProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const petalsContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const leftTreeRef = useRef<HTMLDivElement>(null);
  const rightTreeRef = useRef<HTMLDivElement>(null);
  const topBranchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          gsap.to('.loading-page', {
            opacity: 0,
            duration: 0.8,
            onComplete: onLoadingComplete
          });
        }, 2000);
      }
    });

    // Animate logo
    tl.from(logoRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: 'elastic.out(1, 0.5)'
    });

    // Fade in trees with parallax
    tl.from([leftTreeRef.current, rightTreeRef.current, topBranchRef.current], {
      opacity: 0,
      duration: 1,
      stagger: 0.2
    }, '-=0.6');

    // Create falling petals animation
    const createFallingPetal = () => {
      if (!petalsContainerRef.current) return;
      
      const petal = document.createElement('div');
      petal.className = 'falling-petal';
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDelay = `${Math.random() * 2}s`;
      
      // Random petal shape (rotate for variety)
      const rotation = Math.random() * 360;
      petal.style.transform = `rotate(${rotation}deg)`;
      
      petalsContainerRef.current.appendChild(petal);

      gsap.to(petal, {
        y: window.innerHeight + 100,
        x: `+=${Math.random() * 200 - 100}`,
        rotation: rotation + (Math.random() * 360),
        duration: 5 + Math.random() * 4,
        ease: 'none',
        onComplete: () => petal.remove()
      });
    };

    // Create petals periodically
    const petalInterval = setInterval(createFallingPetal, 200);

    return () => {
      clearInterval(petalInterval);
      tl.kill();
    };
  }, [onLoadingComplete]);

  // Mouse move parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="loading-page fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black z-50 overflow-hidden">
      {/* Falling petals container */}
      <div ref={petalsContainerRef} className="absolute inset-0 pointer-events-none" />

      {/* Left Tree - Background Layer (slowest parallax) */}
      <div
        ref={leftTreeRef}
        className="absolute left-0 bottom-0 w-1/3 h-full opacity-70"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1682985798428-314a329abb52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tJTIwdHJlZSUyMHBpbmslMjBzcHJpbmd8ZW58MXx8fHwxNzc0MDg0OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sakura tree"
          className="w-full h-full object-cover object-right"
          style={{ filter: 'brightness(1.1) saturate(1.2)' }}
        />
      </div>

      {/* Right Tree - Background Layer (slowest parallax) */}
      <div
        ref={rightTreeRef}
        className="absolute right-0 bottom-0 w-1/3 h-full opacity-70"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1651070216681-22fe5a718c06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWt1cmElMjB0cmVlJTIwYnJhbmNoJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NzQwODQ5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sakura tree"
          className="w-full h-full object-cover object-left"
          style={{ filter: 'brightness(1.1) saturate(1.2)' }}
        />
      </div>

      {/* Top Branch - Foreground Layer (faster parallax) */}
      <div
        ref={topBranchRef}
        className="absolute top-0 left-0 w-full h-1/3 opacity-80"
        style={{
          transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -30}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1744205775076-8a5def2fdd43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwY2hlcnJ5JTIwYmxvc3NvbSUyMGJyYW5jaGVzfGVufDF8fHx8MTc3NDA4NDk2OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sakura branches"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(1.1)' }}
        />
      </div>

      {/* Center Logo - No parallax */}
      <div ref={logoRef} className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center bg-gray-950/80 backdrop-blur-md rounded-3xl px-12 py-8 shadow-2xl border border-white/10">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
            Rocket
          </h1>
          <p className="text-purple-500 text-xl font-medium">Secure Git Commits</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>

      {/* Gradient overlays for better blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none"></div>

      {/* CSS for falling petals */}
      <style>{`
        .falling-petal {
          position: absolute;
          top: -20px;
          width: 12px;
          height: 12px;
          background: radial-gradient(ellipse at center, #FFB6D9 0%, #FFC0E0 50%, transparent 100%);
          border-radius: 50% 0 50% 0;
          opacity: 0.8;
          pointer-events: none;
        }
        
        .falling-petal::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, #FF69B4 0%, transparent 70%);
          border-radius: 50%;
          transform: rotate(45deg);
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-100 {
          animation-delay: 0.2s;
        }

        .delay-200 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}