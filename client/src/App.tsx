import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/queryClient";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/ui/LoadingScreen"; // Assuming LoadingScreen is in this path
import { PerformanceMonitor } from "@/components/performance";
import { WebVitalsMonitor } from "@/components/performance/WebVitalsMonitor";
import { initializeGoogleAnalytics, trackPageView } from "@/lib/analytics";


// Lazy load pages
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
const NotFound = lazy(() => import("@/pages/not-found"));


export default function App() {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Further reduced for faster app start

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isLoading ? (
      <LoadingScreen 
        isLoading={isLoading} 
        onLoadingComplete={() => setIsLoading(false)} 
      />
    ) : (
    <div className="min-h-screen">
      <QueryClientProvider client={queryClient}>
        <WebVitalsMonitor />
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
      )}
      </>
  );
}