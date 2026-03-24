import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Demo } from './components/Demo';
import { Features } from './components/Features';
import { Installation } from './components/Installation';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { FallingPetals } from './components/FallingPetals';
import { RocketParallax } from './components/RocketParallax';
import { useScroll, useTransform, motion } from 'motion/react';

function ScrollBackground() {
  const { scrollYProgress } = useScroll();
  // Pulse a very subtle purple tint across the whole page based on scroll position
  // It peaks in the middle of the page (0.5 progress) and fades at the edges
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.06, 0.12, 0.06, 0]
  );

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[3]"
      style={{
        opacity,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,1) 0%, transparent 70%)',
      }}
    />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <FallingPetals />
      <ScrollBackground />
      <RocketParallax />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Demo />
      <Features />
      <Installation />
      <CTA />
      <Footer />
    </div>
  );
}
