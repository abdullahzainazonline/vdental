export const GA_TRACKING_ID = 'AW-17596332154';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// https://developers.google.com/tag-platform/gtagjs/reference
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({ action, category, label, value }: { action: string, category?: string, label?: string, value?: number }) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackConversion = (send_to: string, additionalParams: any = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to,
      value: 1.0,
      currency: 'MYR',
      ...additionalParams
    });
  }
};

export const trackGetDirections = (e?: React.MouseEvent) => {
  trackConversion(`${GA_TRACKING_ID}/K8qrCLLamqUbEPrwysZB`);
};

export const trackCall = (e?: React.MouseEvent) => {
  trackConversion(`${GA_TRACKING_ID}/b8IQCO6M9bocEPrwysZB`);
};

export const trackBooking = () => {
  trackConversion(`${GA_TRACKING_ID}/Rd_XCLSbibscEPrwysZB`);
};

export const trackWhatsApp = (e?: React.MouseEvent) => {
  trackConversion(`${GA_TRACKING_ID}/<WHATSAPP_LABEL>`);
};

// SHA-256 hashing for Enhanced Conversions
export async function hashData(data: string) {
  const msgBuffer = new TextEncoder().encode(data.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
