"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Typography from "@/components/ui/Typography";

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
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 py-8 md:px-12 md:py-10 flex justify-between items-center",
        isScrolled ? "bg-background/80 backdrop-blur-xl py-6 md:py-6 border-b border-white/10" : "bg-transparent"
      )}
    >
      <Link href="/" className="group flex flex-col" data-magnetic="true">
        <Typography variant="h4" className="uppercase leading-none tracking-tightest">
          Dyadyami
        </Typography>
        <Typography variant="caption" className="text-[9px] text-accent font-mono leading-none mt-1">
          Studio
        </Typography>
      </Link>

      <div className="flex gap-10 md:gap-16">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            data-magnetic="true"
            className="relative group overflow-hidden"
          >
            <Typography
              variant="caption"
              className="block transition-transform duration-700 ease-out group-hover:-translate-y-full text-white/60 group-hover:text-white"
            >
              {item.name}
            </Typography>
            <Typography
              variant="caption"
              className="absolute top-full left-0 block text-accent transition-transform duration-700 ease-out group-hover:-translate-y-full"
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
