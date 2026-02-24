"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCard from "./FeatureCard";


gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    id="features"
      ref={sectionRef}
      className="features"
      aria-labelledby="features-heading"
    >
      <div className="features__container">
        <h2
          id="features-heading"
          ref={headingRef}
          className="features__title"
        >
          Powerful Features Built for Modern Teams
        </h2>

        <div ref={cardsRef} className="features__grid">
          <FeatureCard
            title="AI Workflow Automation"
            description="Automate complex multi-step processes with intelligent orchestration and real-time adaptation."
          />
          <FeatureCard
            title="Real-Time Analytics"
            description="Monitor performance, optimize efficiency, and gain actionable insights instantly."
          />
          <FeatureCard
            title="Seamless Integrations"
            description="Connect your existing tools and platforms without disrupting your workflow."
          />
          <FeatureCard
            title="Enterprise Security"
            description="End-to-end encryption, role-based access, and compliance-ready infrastructure."
          />
        </div>
      </div>
    </section>
  );
}