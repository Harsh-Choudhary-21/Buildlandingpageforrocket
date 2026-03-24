# Agent Summary — Rocket CLI Landing Page

> Use this file to onboard a new agent with full context about the project state.

## Project Overview
A React + Vite landing page for **Rocket CLI**, a tool that prevents accidental secret leaks in Git commits. The aesthetic is **dark black + purple neon**.

## Stack
| Layer | Technology |
|---|---|
| Framework | React 18, Vite 6 |
| Styling | Tailwind CSS v4 |
| UI Primitives | Radix UI |
| Animations | Framer Motion (`motion/react`), GSAP + ScrollTrigger |
| Icons | Lucide React |
| Routing | React Router v7 |

## File Structure
```
src/
  main.tsx              # Entry point
  app/
    App.tsx             # Root: mounts all sections + ScrollBackground + RocketParallax
    components/
      Navbar.tsx        # Fixed top nav — black bg, purple border on scroll
      FallingPetals.tsx # GSAP confetti animation (✨ emoji), IntersectionObserver paused
      RocketParallax.tsx# NEW: GSAP ScrollTrigger parallax rocket (neon SVG sprite)
      Hero.tsx          # Hero section with terminal demo
      Problem.tsx       # Problem statement cards
      Solution.tsx      # Solution feature list
      HowItWorks.tsx    # Step-by-step how it works
      Demo.tsx          # Interactive terminal typing demo
      Features.tsx      # Feature cards grid
      Installation.tsx  # Code install instructions
      CTA.tsx           # Call to action
      Footer.tsx        # Links + social
      Terminal.tsx      # Reusable terminal UI component
      Button.tsx        # Reusable button component
      ui/               # 48 Radix-based UI primitives (shadcn-style)
  styles/
    index.css           # Global styles + Tailwind imports
```

## Colour Palette (Current — Black/Purple)
| Token | Value |
|---|---|
| Background base | `#000000` (black) |
| Background mid | `gray-950` (`#030712`) |
| Primary accent | `purple-500` (`#a855f7`) |
| Bright accent | `violet-400` (`#a78bfa`) |
| Text primary | `white` |
| Text muted | `gray-400` |
| Border | `white/10` or `purple-500/30` |

## Section Layout & Gradient Chain
Each section uses `bg-gradient-to-b from-black via-[midpoint] to-black` so all seams are invisible (black→black transitions). Alternating midpoints:
- Purple accent sections (Hero, Solution, Demo, Installation): `via-purple-950/20` or `via-purple-950/30`
- Neutral sections (Problem, HowItWorks, Features, CTA, Footer): `via-gray-950`

## Key Completed Work
1. **Performance fixes**: `FallingPetals` pauses via IntersectionObserver. `demoSteps` array moved outside `Demo` component. `overflow-x-hidden` on root.
2. **Gradient seam fix**: All section endpoints are pure `black`, eliminating visible lines between sections.
3. **Theme switch**: Migrated from pink/white to black/purple via `theme-switcher.mjs` script.
4. **Navbar**: Transparent black → opaque black on scroll, purple border appears, white text.
5. **RocketParallax**: GSAP-powered neon SVG rocket that floats idly, tilts on scroll direction changes, and travels upward at 45% of scroll speed. Flame pulses with `gsap.timeline`.
6. **Framer Motion scroll overlay** (`ScrollBackground` in `App.tsx`): A fixed radial purple gradient overlay that subtly pulses opacity (0 → 0.12 → 0) as user scrolls to the middle of the page.

## Known Issues / Open TODOs
- The `theme-switcher.mjs` script left a stray `shadow-pink-400/50` in `HowItWorks.tsx` and `Solution.tsx` (inside step circle classes). A follow-up agent should replace these with `shadow-purple-400/50`.
- The `FallingPetals` currently uses `✨` emoji (was `🌸` before theme switch). Consider replacing with a proper CSS particle instead for better performance.
- Mobile responsiveness of `RocketParallax` could be improved — the rocket is hidden on very small viewports (`w-[52px]` fixed on right edge).

## Development Commands
```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # TypeScript compile + Vite production build
node theme-switcher.mjs  # Re-run the color token replacement script
```

## agents.md
A shorter version of this file lives at `agents.md` in the project root, maintained as a living design guide. This `agent_summary.md` is the comprehensive hand-off document.
