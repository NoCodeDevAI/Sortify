'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import type { AnalyticsEvent } from '../types/analytics';

const GA_MEASUREMENT_ID = 'G-M3BCZXFS12';

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    window.gtag?.('event', 'page_view', {
      page_path: pathname,
    });
  }, [pathname]);

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}

export const trackDownload = () => {
  window.gtag?.('event', 'download', {
    event_category: 'engagement',
    event_label: 'Sortify.exe',
  } satisfies AnalyticsEvent['download']);
};

export const trackFeatureView = (feature: string) => {
  window.gtag?.('event', 'feature_view', {
    event_category: 'engagement',
    event_label: feature,
  } satisfies AnalyticsEvent['feature_view']);
};