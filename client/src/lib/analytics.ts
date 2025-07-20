// Google Analytics 4 Configuration and Utilities
const GA_MEASUREMENT_ID = 'G-ZKE1PD024S';

// Initialize Google Analytics
export function initializeGoogleAnalytics() {
  // Check if gtag is already loaded
  if (typeof window !== 'undefined' && !window.gtag) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    // Configure Google Analytics
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
}

// Track page view
export function trackPageView(pageTitle: string, pagePath: string, pageUrl?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: pageTitle,
      page_location: pageUrl || window.location.href,
      page_path: pagePath
    });
  }
}

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

// Track form submissions
export function trackFormSubmission(formName: string, formType: string = 'contact') {
  trackEvent('form_submit', {
    form_name: formName,
    form_type: formType,
    event_category: 'engagement',
    event_label: `${formType}_form`
  });
}

// Track button clicks
export function trackButtonClick(buttonName: string, buttonLocation: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    event_category: 'engagement',
    event_label: `${buttonLocation}_${buttonName}`
  });
}

// Track phone number clicks
export function trackPhoneClick(phoneNumber: string, location: string) {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
    location: location,
    event_category: 'engagement',
    event_label: `${location}_phone`
  });
}

// Track email clicks
export function trackEmailClick(emailAddress: string, location: string) {
  trackEvent('email_click', {
    email_address: emailAddress,
    location: location,
    event_category: 'engagement',
    event_label: `${location}_email`
  });
}

// Track social media clicks
export function trackSocialClick(platform: string, location: string) {
  trackEvent('social_click', {
    platform: platform,
    location: location,
    event_category: 'engagement',
    event_label: `${location}_${platform}`
  });
}

// Track service interest
export function trackServiceInterest(serviceName: string, location: string) {
  trackEvent('service_interest', {
    service_name: serviceName,
    location: location,
    event_category: 'engagement',
    event_label: `${location}_${serviceName}`
  });
}

// TypeScript declarations for global gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
} 