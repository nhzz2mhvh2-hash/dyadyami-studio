'use client';

import React, { useEffect, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ru from '@/lib/i18n/ru.json';
import en from '@/lib/i18n/en.json';

const resources = {
  ru: { common: ru },
  en: { common: en }
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ru',
      fallbackLng: 'en',
      ns: ['common'],
      defaultNS: 'common',
      interpolation: {
        escapeValue: false
      }
    });
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted asynchronously to avoid hydration mismatch and cascading render warnings
    const timeout = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#050505]" />;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
