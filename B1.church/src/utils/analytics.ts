declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_MEASUREMENT_ID = "G-3RQGLEE47Y";

export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, { send_to: GA_MEASUREMENT_ID, ...parameters });
};

export const trackPageView = (pagePath?: string) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    send_to: GA_MEASUREMENT_ID,
    page_location: window.location.href,
    page_path: pagePath || window.location.pathname
  });
};

// Custom event tracking for B1 Church specific actions
export const trackChurchSignup = (method: string = "unknown") => {
  trackEvent("sign_up", {
    method: method,
    event_category: "church_platform",
    event_label: "free_signup"
  });
};

export const trackFeatureClick = (feature: string) => {
  trackEvent("select_content", {
    content_type: "feature",
    content_id: feature,
    event_category: "engagement",
    event_label: feature
  });
};

export const trackWebsiteBuilderClick = () => {
  trackEvent("select_content", {
    content_type: "website_builder",
    content_id: "start_building",
    event_category: "website_builder",
    event_label: "get_started"
  });
};

export const trackAppDownload = (platform: "ios" | "android") => {
  trackEvent("select_content", {
    content_type: "app_download",
    content_id: platform,
    event_category: "mobile_app",
    event_label: `${platform}_download`
  });
};

export const trackContactFormSubmission = () => {
  trackEvent("form_submit", {
    form_name: "contact_form",
    event_category: "lead_generation",
    event_label: "contact_inquiry"
  });
};

