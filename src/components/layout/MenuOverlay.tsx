"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typography from "@/components/ui/Typography";
import Link from "next/link";
import { X, ArrowRight, User, Package, Home, Mail } from "lucide-react";
import { premiumEasing } from "@/lib/motion";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "#work", icon: Package },
  { name: "Account", href: "#", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: premiumEasing }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            data-magnetic="true"
            className="absolute top-10 right-10 z-[110] w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-500 group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
          </button>

          {/* Left Side: Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-10 md:px-24 py-20 border-r border-white/5">
            <Typography variant="caption" className="mb-12 text-white/20 block">
              Menu Navigation
            </Typography>
            <nav className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.8, ease: premiumEasing }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (item.name !== "Account") onClose();
                      setActiveTab(item.name);
                    }}
                    onMouseEnter={() => setActiveTab(item.name)}
                    className="group flex items-center gap-6"
                  >
                    <Typography
                      variant="display"
                      className={activeTab === item.name ? "text-accent" : "text-white/40 group-hover:text-white transition-colors uppercase"}
                    >
                      {item.name}
                    </Typography>
                    {activeTab === item.name && (
                      <motion.div layoutId="arrow">
                        <ArrowRight className="text-accent" size={48} />
                      </motion.div>
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Right Side: Dynamic Content Panel */}
          <div className="flex-1 bg-surface/50 p-10 md:p-24 flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeTab === "Account" ? (
                <motion.div
                  key="account"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="max-w-md w-full"
                >
                  <Typography variant="h2" className="mb-8 uppercase">My Account</Typography>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Typography variant="caption" className="text-white/40">Email Address</Typography>
                      <input
                        type="text"
                        placeholder="username or email"
                        className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-accent transition-colors font-mono text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Typography variant="caption" className="text-white/40">Security Code</Typography>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-accent transition-colors font-mono text-sm"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full bg-accent text-background py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors duration-500"
                    >
                      Authenticate
                    </button>
                    <Typography variant="caption" className="text-center block text-white/20">
                      Don&apos;t have an account? <span className="text-white cursor-pointer hover:text-accent transition-colors">Join the collective</span>
                    </Typography>
                  </form>
                </motion.div>
              ) : activeTab === "Products" ? (
                <motion.div
                  key="products"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="space-y-8"
                >
                  <Typography variant="h2" className="uppercase">Curated <span className="text-accent italic">Works</span></Typography>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="aspect-video bg-white/5 border border-white/5 overflow-hidden group relative">
                        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
                        <div className="absolute bottom-4 left-4">
                          <Typography variant="caption" className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">Project 0{i}</Typography>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link href="#work" onClick={onClose} className="inline-flex items-center gap-2 group">
                    <Typography variant="body" className="group-hover:text-accent transition-colors">View All Projects</Typography>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <Typography variant="caption" className="text-accent">Dyadyami Studio</Typography>
                  <Typography variant="h2" className="uppercase leading-tight">
                    Crafting <br />Digital <br />Legends
                  </Typography>
                  <Typography variant="body" className="text-white/40 max-w-sm">
                    A cinematic approach to the web. We build more than websites; we build experiences.
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Background Texture */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
