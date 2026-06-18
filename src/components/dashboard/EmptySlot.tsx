'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function EmptySlot() {
  const { t } = useTranslation('common');

  return (
    <motion.div
      className="group relative p-8 border border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-500 hover:border-white/20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
          <Plus size={20} className="text-white/20 group-hover:text-white transition-colors" />
        </div>
        <span className="text-[10px] uppercase tracking-widest font-mono text-white/20 group-hover:text-white/60 transition-colors">
          {t('dashboard.empty_slot.coming_soon')}
        </span>
      </motion.div>
    </motion.div>
  );
}
