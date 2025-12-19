'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-HYSCLTPMY9', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
