import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/queryClient";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/cursor/CustomCursor";

// Lazy load pages
const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const WebServices = lazy(() => import("@/pages/WebServices"));
const MarketingServices = lazy(() => import("@/pages/MarketingServices"));
const AIServices = lazy(() => import("@/pages/AIServices"));
const Work = lazy(() => import("@/pages/Work"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const NotFound = lazy(() => import("@/pages/not-found"));
const PaymentConfirmed = lazy(() => import("@/pages/PaymentConfirmed"));
const WebPricing = lazy(() => import("@/pages/WebPricing"));
const MarketingPricing = lazy(() => import("@/pages/MarketingPricing"));
const AIPricing = lazy(() => import("@/pages/AIPricing"));
const PricingComparison = lazy(() => import("@/pages/PricingComparison"));


export default function App() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <PageTransition />
      <Layout>
        <Suspense fallback={<div className="h-screen w-full bg-[#121212] flex items-center justify-center">Loading...</div>}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/services/web" component={WebServices} />
            <Route path="/services/marketing" component={MarketingServices} />
            <Route path="/services/ai" component={AIServices} />
            <Route path="/web-pricing" component={WebPricing} />
            <Route path="/marketing-pricing" component={MarketingPricing} />
            <Route path="/ai-pricing" component={AIPricing} />
            <Route path="/pricing-comparison" component={PricingComparison} />
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* Private route without header/footer */}
            <Route path="/payment-confirmed" component={PaymentConfirmed} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
      <Toaster />
    </QueryClientProvider>
  );
}