"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Work", href: "#work" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "circOut", delay: 1 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-8 md:px-12 md:py-10 flex justify-between items-center",
        isScrolled ? "bg-background/80 backdrop-blur-md py-6 md:py-6 border-b border-white/5" : "bg-transparent"
      )}
    >
      <Link href="/" className="group flex flex-col">
        <span className="text-xl md:text-2xl font-bold tracking-tightest uppercase">
          Dyadyami
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-mono">
          Studio
        </span>
      </Link>

      <div className="flex gap-8 md:gap-12">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative text-sm md:text-base font-medium tracking-tight group overflow-hidden"
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">
              {item.name}
            </span>
            <span className="absolute top-full left-0 block text-accent transition-transform duration-500 group-hover:-translate-y-full">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
