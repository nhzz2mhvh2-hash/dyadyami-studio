'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NewConnectorButtonProps {
  onClick: () => void;
}

export default function NewConnectorButton({ onClick }: NewConnectorButtonProps) {
  const { t } = useTranslation('common');

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="group relative px-8 py-4 border border-white/10 bg-transparent overflow-hidden transition-all duration-300 hover:border-white/30"
    >
      {/* Inner Glow on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ boxShadow: 'inset 0 0 12px rgba(255, 255, 255, 0.05)' }} />

      <div className="relative z-10 flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors duration-500">
        <Plus size={18} className="text-white/40 group-hover:text-white transition-colors duration-500" />
        {t('dashboard.new_connector')}
      </div>
    </motion.button>
  );
}
