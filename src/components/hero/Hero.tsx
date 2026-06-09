"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      });
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.8,
      });
      gsap.from(".scroll-indicator", {
        opacity: 0,
        duration: 1,
        delay: 1.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          <h1
            ref={titleRef}
            className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tightest leading-[0.9] mb-8"
          >
            IMMERSIVE WEBSITES <br />
            FOR <span className="text-accent italic">PREMIUM</span> BRANDS
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Dyadyami Studio crafts high-end digital experiences that blend cinematic storytelling with cutting-edge technology.
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 scroll-indicator flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-mono">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
