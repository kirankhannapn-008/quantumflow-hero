"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subTextRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
          duration: 1
        }
      });

      tl.from(headingRef.current, {
        y: 80,
        opacity: 0
      })
        .from(
          subTextRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8
          },
          "-=0.6"
        )
        .from(
          buttonsRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6
          },
          "-=0.5"
        );

      // Scroll-based parallax tied to layout
   gsap.to(".hero__content", {
  scrollTrigger: {
    trigger: containerRef.current,
    start: "top top",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      const direction = self.direction;

      if (direction === 1) {
        gsap.to(".hero__content", {
          scale: 0.95,
          opacity: 0.8,
          duration: 0.3,
          overwrite: "auto"
        });
      } else {
        gsap.to(".hero__content", {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          overwrite: "auto"
        });
      }
    }
  }
});
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
    id="home"
      ref={containerRef}
      className="hero"
      role="banner"
      aria-label="Hero section"
    >
      <div className="hero__content">
        <h1 ref={headingRef} className="hero__title">
          Automate Workflows with{" "}
          <span className="gradient-text">Intelligent Precision</span>
        </h1>

        <p ref={subTextRef} className="hero__subtitle">
          QuantumFlow transforms complex operations into seamless,
          AI-orchestrated automation systems built for modern teams.
        </p>

        <div ref={buttonsRef} className="hero__actions">
          <button className="btn btn--primary">
            Get Started
          </button>
          <button className="btn btn--secondary">
            View Demo
          </button>
        </div>
      </div>
    </header>
  );
}