"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, Layers, Zap, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Monitor size={40} className="text-accent" />,
    title: "Immersive Web Design",
    description: "Creating high-end, 3D-powered digital experiences that captivate and convert.",
  },
  {
    icon: <Layers size={40} className="text-accent" />,
    title: "Creative Direction",
    description: "Visionary aesthetic leadership that ensures your brand stands out in the luxury market.",
  },
  {
    icon: <Zap size={40} className="text-accent" />,
    title: "Technical Excellence",
    description: "Blazing fast performance combined with complex interactive animations.",
  },
  {
    icon: <Smartphone size={40} className="text-accent" />,
    title: "Mobile First Luxury",
    description: "Optimized premium experiences across all devices without compromising quality.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-item", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tightest leading-tight">
            ELEVATING <br /> THE <span className="text-accent">DIGITAL</span> STANDARDS.
          </h2>
          <div className="max-w-md">
            <p className="text-white/40 text-lg leading-relaxed mb-8">
              We specialize in the intersection of high-end aesthetics and technical mastery. Our approach is bespoke, cinematic, and uncompromising.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="service-item p-10 bg-white/5 border border-white/5 hover:border-accent/30 transition-all duration-500 group">
              <div className="mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
