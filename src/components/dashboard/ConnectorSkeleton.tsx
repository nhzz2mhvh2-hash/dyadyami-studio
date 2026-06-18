'use client';

import React from 'react';

export default function ConnectorSkeleton() {
  return (
    <div className="p-8 border border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="flex justify-between items-start mb-12">
        <div className="w-16 h-16 bg-white/5 animate-pulse" />
        <div className="w-20 h-3 bg-white/5 animate-pulse" />
      </div>
      <div className="w-3/4 h-8 bg-white/5 animate-pulse mb-4" />
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-white/5 animate-pulse" />
        <div className="w-24 h-3 bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}
