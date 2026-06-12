"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Typography from "@/components/ui/Typography";
import MenuOverlay from "./MenuOverlay";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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

        <div className="flex items-center gap-8 md:gap-12">
          <button
            onClick={() => setIsMenuOpen(true)}
            data-magnetic="true"
            className="flex items-center gap-3 group"
          >
            <Typography
              variant="caption"
              className="hidden md:block text-white/40 group-hover:text-accent transition-colors"
            >
              Experience Menu
            </Typography>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
              <Menu size={20} className="group-hover:text-background transition-colors" />
            </div>
          </button>
        </div>
      </motion.nav>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
