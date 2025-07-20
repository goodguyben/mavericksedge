# Google Analytics Setup - Mavericks Edge

## Overview
Google Analytics 4 (GA4) has been configured across the entire application with the measurement ID: `G-ZKE1PD024S`

## Implementation Details

### 1. Main HTML Configuration
- **File**: `client/index.html`
- **Location**: Lines 189-194
- **Purpose**: Initializes GA4 with the correct measurement ID

### 2. Analytics Utility Library
- **File**: `client/src/lib/analytics.ts`
- **Purpose**: Provides utility functions for tracking events and page views
- **Features**:
  - Page view tracking
  - Custom event tracking
  - Form submission tracking
  - Button click tracking
  - Phone/email click tracking
  - Social media click tracking
  - Service interest tracking

### 3. SEOHead Component Integration
- **File**: `client/src/components/SEOHead.tsx`
- **Purpose**: Automatically tracks page views for all pages using this component
- **Implementation**: Includes GA4 page view tracking script

### 4. App-Level Initialization
- **File**: `client/src/App.tsx`
- **Purpose**: Initializes GA4 on app mount and tracks route changes
- **Features**:
  - Automatic initialization on app load
  - Page view tracking on route changes
  - Integration with React Router

### 5. Page Template
- **File**: `client/src/templates/PageTemplate.tsx`
- **Purpose**: Template for new pages to ensure consistent GA4 tracking
- **Usage**: Import and use for all new pages

## Usage for New Pages

### Option 1: Use PageTemplate (Recommended)
```tsx
import PageTemplate from '@/templates/PageTemplate';

export default function MyNewPage() {
  return (
    <PageTemplate
      title="My New Page - Mavericks Edge"
      description="Description of my new page for SEO purposes."
      canonicalUrl="https://mavericksedge.ca/my-new-page"
      keywords="keyword1, keyword2, keyword3"
    >
      <div className="max-w-4xl mx-auto">
        <h1>My New Page</h1>
        <p>Your content here...</p>
      </div>
    </PageTemplate>
  );
}
```

### Option 2: Manual Implementation
```tsx
import { useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import { trackPageView } from '@/lib/analytics';

export default function MyNewPage() {
  useEffect(() => {
    trackPageView('My New Page', window.location.pathname, 'https://mavericksedge.ca/my-new-page');
  }, []);

  return (
    <>
      <SEOHead
        title="My New Page - Mavericks Edge"
        description="Description of my new page"
        canonicalUrl="https://mavericksedge.ca/my-new-page"
      />
      <div>Your content here...</div>
    </>
  );
}
```

## Tracking Custom Events

### Form Submissions
```tsx
import { trackFormSubmission } from '@/lib/analytics';

const handleSubmit = () => {
  trackFormSubmission('contact_form', 'contact');
  // Your form submission logic
};
```

### Button Clicks
```tsx
import { trackButtonClick } from '@/lib/analytics';

const handleClick = () => {
  trackButtonClick('get_quote', 'hero_section');
  // Your button click logic
};
```

### Phone/Email Clicks
```tsx
import { trackPhoneClick, trackEmailClick } from '@/lib/analytics';

const handlePhoneClick = () => {
  trackPhoneClick('+1-250-883-8849', 'header');
};

const handleEmailClick = () => {
  trackEmailClick('info@mavericksedge.ca', 'footer');
};
```

### Social Media Clicks
```tsx
import { trackSocialClick } from '@/lib/analytics';

const handleSocialClick = (platform: string) => {
  trackSocialClick(platform, 'footer');
};
```

## Verification

### 1. Check GA4 Real-Time Reports
- Visit Google Analytics dashboard
- Check Real-Time reports to confirm page views are being tracked
- Verify events are appearing in real-time

### 2. Browser Developer Tools
- Open browser developer tools
- Check Network tab for requests to `google-analytics.com`
- Verify `gtag` function is available in console

### 3. Google Tag Assistant
- Install Google Tag Assistant browser extension
- Verify GA4 tag is firing correctly on all pages

## Important Notes

1. **Measurement ID**: Always use `G-ZKE1PD024S` for all tracking
2. **Privacy Compliance**: Ensure GDPR compliance for EU visitors
3. **Performance**: Analytics script is loaded asynchronously to avoid blocking page load
4. **Error Handling**: All tracking functions include error handling for when GA4 is not available

## Troubleshooting

### GA4 Not Tracking
1. Check if `gtag` function is available in browser console
2. Verify measurement ID is correct
3. Check for ad blockers or privacy extensions
4. Ensure page is not in development mode with analytics disabled

### Missing Page Views
1. Verify `trackPageView` is called on page load
2. Check if route changes are being detected
3. Ensure SEOHead component is being used

### Missing Events
1. Verify event tracking functions are being called
2. Check browser console for errors
3. Ensure parameters are correctly formatted

## Future Updates

When creating new pages or components that need tracking:
1. Always use the PageTemplate for new pages
2. Import tracking functions from `@/lib/analytics`
3. Follow the established naming conventions
4. Test tracking in development and production environments 