"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./Scene";

gsap.registerPlugin(ScrollTrigger);

export default function ThreeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(canvasWrapperRef.current, {
        y: -150,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="three-section"
      aria-labelledby="three-heading"
    >
      <div className="three-section__content">
        <h2 id="three-heading" className="three-section__title">
          Experience Automation in 3D
        </h2>
        <p className="three-section__subtitle">
          Our intelligent engine adapts in real-time — visualized as a living,
          responsive system.
        </p>
      </div>

      <div ref={canvasWrapperRef} className="three-section__canvas">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Scene />
        </Canvas>
      </div>
    </section>
  );
}