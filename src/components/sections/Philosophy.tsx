"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "@/components/ui/Typography";

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll(".reveal-word");
      if (words) {
        gsap.to(words, {
          color: "white",
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const text = "We believe that digital experiences should be more than just functional. They should be immersive, cinematic, and deeply resonant. At Dyadyami, we merge art with technology to create lasting impressions for visionary brands that demand nothing but the absolute best.";

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="py-48 px-6 md:px-12 bg-background min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <Typography variant="caption" className="mb-16 block">
          Our Philosophy
        </Typography>

        <div ref={textRef} className="max-w-5xl">
          <Typography
            variant="h2"
            as="div"
            className="flex flex-wrap gap-x-[0.3em] gap-y-[0.2em] text-white/10"
          >
            {text.split(" ").map((word, i) => (
              <span key={i} className="reveal-word transition-colors duration-500">
                {word}
              </span>
            ))}
          </Typography>
        </div>
      </div>
    </section>
  );
}
