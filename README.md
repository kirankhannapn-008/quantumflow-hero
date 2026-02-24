# QuantumFlow Hero Section

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Run development server:

   ```
   npm run dev
   ```

3. Build for production:

   ```
   npm run build
   npm start
   ```

---

## Architecture

* Built using **Next.js 14 App Router**
* Hero component isolated under `/components`
* Animation logic encapsulated inside `useEffect` using `gsap.context()`
* Proper animation cleanup using `ctx.revert()` to prevent memory leaks
* Component-driven architecture with clear separation of concerns
* Tailwind CSS used for scalable utility-based styling

### Why This Architecture?

* Ensures animation logic does not leak outside component scope
* Keeps rendering predictable and React lifecycle-compliant
* Makes the Hero reusable and maintainable

---

## GSAP Usage

* GSAP Timeline for orchestrated entrance animations
* ScrollTrigger for scroll-based parallax effect
* Headline movement tied to scroll position
* Animation values optimized to avoid layout thrashing
* GPU-friendly transforms used (`transform`, `opacity`) for performance

### Why GSAP Instead of CSS?

* Better sequencing control
* Scroll-based animation precision
* Easier orchestration of complex motion timelines

---

## SEO

* Semantic `<header>` and `<main>` structure
* Single `<h1>` with proper hierarchy
* Metadata configured via Next.js metadata API
* Descriptive page title and meta description
* No heading level skipping

---

## Accessibility

* Interactive elements use semantic `<button>`
* Keyboard navigable
* Focus states preserved
* Color contrast considered
* Structure compatible with screen readers

---

## Performance Considerations

* Animations initialized only on client side
* Proper cleanup to avoid memory leaks
* No unnecessary re-renders
* Lightweight animation footprint

---

## Improvements (With More Time)

* Add background animated canvas layer
* Improve accessibility focus states
* Add reduced motion support (`prefers-reduced-motion`)
* Enhance scroll storytelling transitions
* Implement Lighthouse optimization pass
* Add structured data (JSON-LD)
