# Project Context: Rocket Landing Page

## Tech Stack
- **Framework**: React 18, Vite 6
- **Styling**: Tailwind CSS v4, Radix UI Primitives
- **Animations**: Framer Motion (`motion/react`), GSAP (for complex continuous animations)
- **Icons**: Lucide React
- **Routing**: React Router v7

## Codebase Structure
- `src/main.tsx`: Entry point.
- `src/app/App.tsx`: Main application component nesting all landing page sections.
- `src/app/components/`: Contains all modular UI sections:
  - `Hero.tsx`: Main hero section with CTA.
  - `FallingPetals.tsx`: Background GSAP animation for petals.
  - `Problem.tsx` & `Solution.tsx`: Problem and solution statements.
  - `Demo.tsx`: Interactive/animated terminal demo.
  - `Features.tsx`, `HowItWorks.tsx`, `Installation.tsx`: Product details.
  - `Navbar.tsx`, `Footer.tsx`: Layout elements.
  - `Terminal.tsx`, `Button.tsx`: Reusable UI elements.
- `src/app/components/ui/`: Contains lower-level Radix UI based components.

## Known Architecture Details
- The landing page uses sequential section rendering.
- Animations trigger via Framer Motion's `whileInView`.
- Continuous background effects (e.g., FallingPetals) use GSAP inside `useEffect` mounted on the App.

## Development Guidelines
- Use modern React conventions (Hooks, functional components).
- Style strictly with Tailwind CSS utility classes.
- Handle complex interactive animations with Framer Motion natively where possible, fallback to GSAP for particle-like continuous effects.
