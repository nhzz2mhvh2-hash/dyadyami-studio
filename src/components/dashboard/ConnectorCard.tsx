'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ConnectorCardProps {
  id: string;
  name: string;
  iconPath: string;
  status: 'connected' | 'not_connected' | 'syncing' | 'error';
  type: 'installed' | 'recommended';
}

export default function ConnectorCard({ name, iconPath, status, type }: ConnectorCardProps) {
  const { t } = useTranslation('common');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-8 border border-white/5 bg-white/[0.02] transition-all duration-700 hover:bg-white/[0.04] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12">
          <div className="w-16 h-16 rounded-none bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-accent/40 transition-colors duration-500 p-4">
            <Image
              src={iconPath}
              alt={name}
              width={32}
              height={32}
              loading="lazy"
              className="opacity-80 group-hover:opacity-100 transition-opacity duration-500 invert"
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
            {t(`dashboard.type.${type}`)}
          </span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-accent transition-colors duration-500 uppercase">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <div className={cn(
            "w-1.5 h-1.5 rounded-full transition-all duration-500",
            status === 'connected' ? "bg-accent shadow-[0_0_8px_rgba(var(--accent-rgb),0.6)]" :
            status === 'syncing' ? "bg-blue-400 animate-pulse" :
            status === 'error' ? "bg-red-500" : "bg-white/20"
          )} />
          <span className={cn(
            "text-[10px] uppercase tracking-widest font-mono transition-colors duration-500",
            status === 'connected' ? "text-accent" : "text-white/40"
          )}>
            {t(`dashboard.status.${status}`)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
