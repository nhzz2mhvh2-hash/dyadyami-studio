'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface NewConnectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewConnectorModal({ isOpen, onClose }: NewConnectorModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight">Request New Integration</h2>
            <p className="text-white/40 mb-8 font-mono text-sm">
              We&apos;re constantly expanding our ecosystem. Tell us what you need.
            </p>
            <div className="space-y-4">
               <div className="h-12 border border-white/5 bg-white/[0.02] w-full" />
               <div className="h-12 border border-white/5 bg-white/[0.02] w-full" />
               <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs">
                  Submit Request
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
