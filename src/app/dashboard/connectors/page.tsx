'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import ConnectorCard from '@/components/dashboard/ConnectorCard';
import ConnectorSkeleton from '@/components/dashboard/ConnectorSkeleton';
import EmptySlot from '@/components/dashboard/EmptySlot';
import NewConnectorButton from '@/components/dashboard/NewConnectorButton';
import NewConnectorModal from '@/components/dashboard/NewConnectorModal';
import BackgroundBlurs from '@/components/dashboard/BackgroundBlurs';
import { motion } from 'framer-motion';

interface Connector {
  id: string;
  name: string;
  iconPath: string;
  status: 'connected' | 'not_connected' | 'syncing' | 'error';
  type: 'installed' | 'recommended';
}

const fetcher = (): Promise<Connector[]> => new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 'github',
        name: 'GitHub',
        iconPath: '/assets/icons/github.svg',
        status: 'connected',
        type: 'installed',
      },
      {
        id: 'gmail',
        name: 'Gmail',
        iconPath: '/assets/icons/gmail.svg',
        status: 'not_connected',
        type: 'recommended',
      },
      {
        id: 'notion',
        name: 'Notion',
        iconPath: '/assets/icons/notion.svg',
        status: 'not_connected',
        type: 'recommended',
      },
    ]);
  }, 1500);
});

export default function ConnectorsPage() {
  const { t } = useTranslation('common');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: connectors, isLoading } = useSWR<Connector[]>('api/connectors', fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white">
      <BackgroundBlurs />

      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl font-bold tracking-tightest mb-6 uppercase leading-none">
              {t('dashboard.connectors')}
            </h2>
            <p className="text-white/40 text-xl max-w-xl leading-relaxed font-light">
              Connect your essential tools to the Dyadyami ecosystem and automate your high-end workflow with AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <NewConnectorButton onClick={() => setIsModalOpen(true)} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/5 border border-white/5 overflow-hidden">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <ConnectorSkeleton key={i} />
            ))
          ) : (
            <>
              {connectors?.map((connector) => (
                <ConnectorCard
                  key={connector.id}
                  id={connector.id}
                  name={connector.name}
                  iconPath={connector.iconPath}
                  status={connector.status}
                  type={connector.type}
                />
              ))}
              <EmptySlot />
              <EmptySlot />
              <EmptySlot />
              <EmptySlot />
              <EmptySlot />
            </>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 flex justify-center"
        >
          <button className="text-xs font-mono uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors py-4 border-b border-white/5 hover:border-white/20">
            {t('dashboard.see_more')}
          </button>
        </motion.div>
      </div>

      <NewConnectorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
