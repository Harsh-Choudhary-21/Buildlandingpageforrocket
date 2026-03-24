import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Retro neon pixel-art style rocket SVG (inline hand-crafted)
function NeonRocketSprite() {
    return (
        <svg
            viewBox="0 0 64 96"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{ imageRendering: 'pixelated' }}
        >
            {/* Filters for neon glow effects */}
            <defs>
                <filter id="glow-body" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="glow-engine" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="glow-window" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                {/* Pixelated grid definition for retro look */}
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
                <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#4c1d95" />
                </linearGradient>
                <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fde68a" />
                    <stop offset="40%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* === ENGINE FLAME (bottom) === */}
            {/* Outer slow-pulsing flame */}
            <rect x="21" y="72" width="22" height="20" rx="4" fill="url(#flameGrad)" filter="url(#glow-engine)" opacity="0.85" className="flame-outer" />
            {/* Inner hot flame */}
            <rect x="26" y="72" width="12" height="14" rx="2" fill="#fef3c7" filter="url(#glow-engine)" opacity="0.95" className="flame-inner" />
            {/* Side thruster left */}
            <rect x="12" y="74" width="8" height="10" rx="2" fill="#f97316" filter="url(#glow-engine)" opacity="0.7" />
            {/* Side thruster right */}
            <rect x="44" y="74" width="8" height="10" rx="2" fill="#f97316" filter="url(#glow-engine)" opacity="0.7" />

            {/* === BODY === */}
            {/* Main body rectangle */}
            <rect x="20" y="24" width="24" height="52" rx="4" fill="url(#bodyGrad)" filter="url(#glow-body)" />
            {/* Body highlight stripe (retro effect) */}
            <rect x="22" y="26" width="4" height="48" rx="2" fill="#e9d5ff" opacity="0.3" />

            {/* === NOSE CONE === */}
            {/* Pixel-art-style nose: stairstepped polygon */}
            <polygon
                points="32,2 20,24 44,24"
                fill="#c084fc"
                filter="url(#glow-body)"
            />
            {/* Nose edge highlight */}
            <polygon
                points="32,4 21,24 27,24"
                fill="#f3e8ff"
                opacity="0.3"
            />

            {/* === WINGS === */}
            {/* Left wing */}
            <polygon
                points="20,55 4,76 20,76"
                fill="url(#wingGrad)"
                filter="url(#glow-body)"
            />
            {/* Left wing edge highlight */}
            <line x1="20" y1="55" x2="4" y2="76" stroke="#c084fc" strokeWidth="1.5" opacity="0.6" />
            {/* Right wing */}
            <polygon
                points="44,55 60,76 44,76"
                fill="url(#wingGrad)"
                filter="url(#glow-body)"
            />
            {/* Right wing edge highlight */}
            <line x1="44" y1="55" x2="60" y2="76" stroke="#c084fc" strokeWidth="1.5" opacity="0.6" />

            {/* === COCKPIT WINDOW === */}
            {/* Outer rim */}
            <circle cx="32" cy="36" r="8" fill="#1e0a3c" stroke="#a855f7" strokeWidth="2" filter="url(#glow-window)" />
            {/* Window glass */}
            <circle cx="32" cy="36" r="6" fill="#3b0764" />
            {/* Inner glow + star */}
            <circle cx="32" cy="36" r="4" fill="#7e22ce" opacity="0.8" filter="url(#glow-window)" />
            {/* Specular highlight */}
            <circle cx="29" cy="33" r="1.5" fill="#ffffff" opacity="0.7" />

            {/* === RETRO PIXEL PANEL LINES === */}
            {/* Horizontal band 1 */}
            <rect x="20" y="46" width="24" height="2" fill="#4c1d95" opacity="0.5" />
            {/* Horizontal band 2 */}
            <rect x="20" y="62" width="24" height="2" fill="#4c1d95" opacity="0.5" />

            {/* === NEON OUTLINE (border glow) === */}
            {/* Body outline */}
            <rect x="20" y="24" width="24" height="52" rx="4" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.9" filter="url(#glow-body)" />
        </svg>
    );
}

export function RocketParallax() {
    const rocketRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const flameRef = useRef<SVGRectElement | null>(null);

    useEffect(() => {
        if (!rocketRef.current) return;

        const rocket = rocketRef.current;

        // ── Flame pulsing animation (runs continuously) ──────────────────────
        const flameOuters = rocket.querySelectorAll<SVGRectElement>('.flame-outer');
        const flameInners = rocket.querySelectorAll<SVGRectElement>('.flame-inner');

        const flameTimeline = gsap.timeline({ repeat: -1, yoyo: true });
        flameTimeline
            .to(flameOuters, { scaleY: 1.3, transformOrigin: 'top center', duration: 0.25, ease: 'power1.inOut' })
            .to(flameOuters, { scaleY: 0.8, transformOrigin: 'top center', duration: 0.2, ease: 'power1.inOut' });

        gsap.to(flameInners, {
            scaleY: 1.4,
            transformOrigin: 'top center',
            duration: 0.18,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        // ── Subtle idle float (runs continuously) ────────────────────────────
        gsap.to(rocket, {
            y: '+=8',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        // ── Parallax scroll: rocket travels from bottom to top of page ────────
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        const scrollTween = gsap.to(rocket, {
            y: () => -(totalScrollHeight * 0.45), // moves at 45% scroll speed = parallax lag
            ease: 'none',
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5,
            },
        });

        // ── Rocket tilt on scroll direction change ────────────────────────────
        let lastY = window.scrollY;
        const handleScroll = () => {
            const delta = window.scrollY - lastY;
            const tilt = gsap.utils.clamp(-12, 12, delta * 0.5);
            gsap.to(rocket, { rotate: tilt, duration: 0.4, ease: 'power2.out' });
            lastY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            flameTimeline.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={rocketRef}
            className="fixed right-6 md:right-10 z-20 pointer-events-none select-none"
            style={{ bottom: '10vh', width: '52px', height: '80px' }}
        >
            {/* Neon glow halo behind the rocket */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.35) 0%, transparent 70%)',
                    transform: 'scale(2.2)',
                    filter: 'blur(8px)',
                }}
            />
            <NeonRocketSprite />
        </div>
    );
}
