"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Philosophy() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll(".reveal-word");
      if (words) {
        gsap.from(words, {
          opacity: 0.1,
          y: 20,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const text = "We believe that digital experiences should be more than just functional. They should be immersive, cinematic, and deeply resonant. At Dyadyami, we merge art with technology to create lasting impressions for visionary brands that demand nothing but the absolute best.";

  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 bg-[#0a0a0a] min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <span className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-12 block">Our Philosophy</span>
        <div ref={textRef} className="max-w-5xl">
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tightest leading-[1.1] flex flex-wrap gap-x-[0.3em] gap-y-[0.1em]">
            {text.split(" ").map((word, i) => (
              <span key={i} className="reveal-word">{word}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
