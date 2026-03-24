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

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />
      <FallingPetals />
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