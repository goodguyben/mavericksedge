import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/queryClient";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import { PerformanceMonitor } from "@/components/performance";
import { WebVitalsMonitor } from "@/components/performance/WebVitalsMonitor";
import { initializeGoogleAnalytics, trackPageView } from "@/lib/analytics";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { CriticalPathLoader } from "@/lib/criticalPath";
import { getDeviceCapabilities } from "@/lib/performance";

// Regular lazy loading for now to fix crash
const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const WebServices = lazy(() => import("@/pages/WebServices"));
const MarketingServices = lazy(() => import("@/pages/MarketingServices"));
const AIServices = lazy(() => import("@/pages/AIServices"));
const SEOServices = lazy(() => import("@/pages/SEOServices"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const WebPricing = lazy(() => import("@/pages/WebPricing"));
const MarketingPricing = lazy(() => import("@/pages/MarketingPricing"));
const AIPricing = lazy(() => import("@/pages/AIPricing"));
const Work = lazy(() => import("@/pages/Work"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const PaymentConfirmed = lazy(() => import("@/pages/PaymentConfirmed"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const GDPRCompliance = lazy(() => import("@/pages/GDPRCompliance"));
const Compliance = lazy(() => import("@/pages/Compliance"));
const Accessibility = lazy(() => import("@/pages/Accessibility"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const NotFound = lazy(() => import("@/pages/not-found"));

export default function App() {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [hasSeenLoading, setHasSeenLoading] = useState(false);

  // Show loading screen every time (removed localStorage check)
  useEffect(() => {
    // Always show loading screen on page load
    setIsLoading(true);
    setHasSeenLoading(false);
  }, []);

  // Initialize Google Analytics on app mount
  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Track page views when location changes
  useEffect(() => {
    if (!isLoading) {
      trackPageView(document.title, location, window.location.href);
    }
  }, [location, isLoading]);

  // Preload components based on route and device capabilities
  useEffect(() => {
    if (!isLoading) {
      const capabilities = getDeviceCapabilities();
      CriticalPathLoader.preloadBasedOnRoute(location);
      
      // Load non-critical components based on device capabilities
      if (!capabilities.isLowEnd) {
        CriticalPathLoader.loadNonCritical();
      }
    }
  }, [location, isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasSeenLoading(true);
    // Removed localStorage setting since we want it to show every time
  };

  return (
    <div className="min-h-screen">
      <QueryClientProvider client={queryClient}>
        <WebVitalsMonitor />
        
        {/* Loading Screen - only show on first visit */}
        {isLoading && !hasSeenLoading && (
          <LoadingScreen
            onLoadingComplete={handleLoadingComplete}
            logoVideoSrc="https://mavericksedge.ca/videos/logo_animation.webm"
            companyName="Mavericks Edge"
            loadingDuration={4000}
          />
        )}
        
        <PageTransition />
        <Layout>
          <Suspense fallback={<div />}>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/services-edmonton-alberta">
                <Services />
              </Route>
              <Route path="/web-design-services-edmonton">
                <WebServices />
              </Route>
              <Route path="/digital-marketing-services-edmonton">
                <MarketingServices />
              </Route>
              <Route path="/ai-automation-services-edmonton">
                <AIServices />
              </Route>
              <Route path="/seo-services-edmonton">
                <SEOServices />
              </Route>
              <Route path="/pricing-edmonton-web-design-marketing">
                <Pricing />
              </Route>
              <Route path="/web-design-pricing-edmonton">
                <WebPricing />
              </Route>
              <Route path="/digital-marketing-pricing-edmonton">
                <MarketingPricing />
              </Route>
              <Route path="/ai-automation-pricing-edmonton">
                <AIPricing />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
              <Route path="/portfolio-edmonton-web-design">
                <Work />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/about-edmonton-web-design-company">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/contact-edmonton-web-design">
                <Contact />
              </Route>
              {/* Private route without header/footer */}
              <Route path="/payment-confirmed">
                <PaymentConfirmed />
              </Route>
              <Route path="/privacy">
                <Privacy />
              </Route>
              <Route path="/terms">
                <Terms />
              </Route>
              <Route path="/cookie-policy">
                <CookiePolicy />
              </Route>
              <Route path="/gdpr">
                <GDPRCompliance />
              </Route>
              <Route path="/gdpr-compliance">
                <GDPRCompliance />
              </Route>
              <Route path="/compliance">
                <Compliance />
              </Route>
              <Route path="/accessibility">
                <Accessibility />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/blog/:slug">
                <BlogPost />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </Layout>
        <Toaster />
        <PerformanceMonitor />
      </QueryClientProvider>
    </div>
  );
}