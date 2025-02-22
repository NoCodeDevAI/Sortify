export type AnalyticsEvent = {
  download: {
    event_category: 'engagement';
    event_label: string;
  };
  feature_view: {
    event_category: 'engagement';
    event_label: string;
  };
  page_view: {
    page_path: string;
  };
};

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      action: keyof AnalyticsEvent,
      params: AnalyticsEvent[keyof AnalyticsEvent]
    ) => void;
  }
}