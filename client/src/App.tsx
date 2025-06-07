import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/queryClient";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/ui/LoadingScreen"; // Assuming LoadingScreen is in this path


// Lazy load pages
const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const WebServices = lazy(() => import("@/pages/WebServices"));
const MarketingServices = lazy(() => import("@/pages/MarketingServices"));
const AIServices = lazy(() => import("@/pages/AIServices"));
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isLoading ? (
      <LoadingScreen />
    ) : (
    <div className="min-h-screen opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards]">
      <QueryClientProvider client={queryClient}>
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
              <Route path="/services/web">
                <WebServices />
              </Route>
              <Route path="/services/marketing">
                <MarketingServices />
              </Route>
              <Route path="/services/ai">
                <AIServices />
              </Route>
              <Route path="/pricing">
                <Pricing />
              </Route>
              <Route path="/pricing/web">
                <WebPricing />
              </Route>
              <Route path="/pricing/marketing">
                <MarketingPricing />
              </Route>
              <Route path="/pricing/ai">
                <AIPricing />
              </Route>
              <Route path="/work">
                <Work />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
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
      </QueryClientProvider>
    </div>
      )}
      </>
  );
}