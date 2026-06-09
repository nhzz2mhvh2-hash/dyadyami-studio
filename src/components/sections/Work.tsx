"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AETHERIS",
    category: "Immersive Web Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "NOIR STUDIO",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2532&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "KINETIC",
    category: "3D Motion Design",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2533&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "LUMINA",
    category: "Digital Experience",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4 block">Selected Projects</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tightest">
              CRAFTING <br /> THE <span className="text-white/40">FUTURE.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-lg leading-relaxed">
            A collection of our most ambitious work, pushing the boundaries of what&apos;s possible in the digital realm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="#"
              className="project-card group relative block overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                {/* Color bleed overlay */}
                <div className="absolute inset-0 z-10 bg-accent/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center bg-black/50 backdrop-blur-md">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/40 font-medium uppercase tracking-wider text-xs">
                    {project.category}
                  </p>
                </div>
                <span className="font-mono text-xs text-white/20">0{project.id}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
