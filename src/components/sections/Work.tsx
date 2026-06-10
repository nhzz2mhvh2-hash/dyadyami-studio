"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Typography from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "AETHERIS",
    category: "Immersive Web Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "NOIR",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2532&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "KINETIC",
    category: "3D Motion",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2533&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    title: "LUMINA",
    category: "Digital Exp",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-48 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <Typography variant="caption" className="mb-6 block">
              Selected Projects
            </Typography>
            <Typography variant="display" as="h2" className="uppercase">
              Crafting <br /> the <span className="text-white/20">Future.</span>
            </Typography>
          </div>
          <Typography variant="body" className="max-w-xs text-white/40 italic">
            A collection of our most ambitious work, pushing the boundaries of cinematic digital art.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="#"
              data-magnetic="true"
              className={cn(
                "project-card group relative block overflow-hidden bg-surface border border-white/5",
                project.className
              )}
            >
              <div className="h-full w-full overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div>
                    <Typography variant="caption" className="text-white/40 mb-1">
                      {project.category}
                    </Typography>
                    <Typography variant="h3" className="uppercase tracking-tightest">
                      {project.title}
                    </Typography>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <ArrowUpRight className="text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
