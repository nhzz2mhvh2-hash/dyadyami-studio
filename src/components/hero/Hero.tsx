"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import gsap from "gsap";
import Typography from "@/components/ui/Typography";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".canvas-container", {
        opacity: 0,
        duration: 2,
        ease: "power2.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 canvas-container">
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <div className="max-w-6xl">
          <motion.div variants={fadeIn}>
            <Typography
              as="h1"
              variant="display"
              className="leading-[0.85] mb-8 uppercase"
            >
              Immersive <br />
              <span className="text-accent italic font-serif">Cinematic</span> <br />
              Digital Art
            </Typography>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Typography
              variant="body"
              className="max-w-2xl mx-auto text-white/50"
            >
              Dyadyami Studio crafts high-end digital experiences that blend cinematic storytelling with cutting-edge technology for visionary brands.
            </Typography>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        data-magnetic="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 cursor-pointer group"
      >
        <Typography variant="caption" className="text-[10px] text-white/20 group-hover:text-accent transition-colors">
          Scroll to explore
        </Typography>
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent origin-top group-hover:scale-y-125 transition-transform duration-500" />
      </motion.div>
    </section>
  );
}
