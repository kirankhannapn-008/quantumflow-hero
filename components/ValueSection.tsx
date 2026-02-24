"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ValueSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".value-left", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".value-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    id="value"
      ref={sectionRef}
      className="value-section"
      aria-labelledby="value-heading"
    >
      <div className="value-container">
        <div className="value-left">
          <h2 id="value-heading" className="value-title">
            Built for Scale. Designed for Impact.
          </h2>

          <p className="value-description">
            QuantumFlow helps organizations eliminate manual complexity,
            accelerate decision cycles, and unlock intelligent automation —
            without disrupting existing systems.
          </p>

          <ul className="value-list">
            <li>✔ Reduce operational overhead by up to 40%</li>
            <li>✔ Deploy in days, not months</li>
            <li>✔ Enterprise-grade compliance & security</li>
          </ul>
        </div>

        <div className="value-right">
          <div className="value-card">
            <h3>40%</h3>
            <p>Faster Workflow Execution</p>
          </div>

          <div className="value-card">
            <h3>99.99%</h3>
            <p>System Reliability</p>
          </div>

          <div className="value-card">
            <h3>3x</h3>
            <p>Team Productivity Boost</p>
          </div>

          <div className="value-card">
            <h3>24/7</h3>
            <p>AI Monitoring & Optimization</p>
          </div>
        </div>
      </div>
    </section>
  );
}