import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/queryClient";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/ui/LoadingScreen"; // Assuming LoadingScreen is in this path
import { ErrorBoundary } from "react";


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
const NotFound = lazy(() => import("@/pages/not-found"));
const PaymentConfirmed = lazy(() => import("@/pages/PaymentConfirmed"));


export default function App() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Simple fallback component for suspense
  const SimpleFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Loading...</h2>
        <div className="w-32 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full w-full bg-maverick-orange rounded-full" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <QueryClientProvider client={queryClient}>
        <PageTransition />
        <Layout>
          <Suspense fallback={<SimpleFallback />}>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/services/web" component={WebServices} />
              <Route path="/services/marketing" component={MarketingServices} />
              <Route path="/services/ai" component={AIServices} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/pricing/web" component={WebPricing} />
              <Route path="/pricing/marketing" component={MarketingPricing} />
              <Route path="/pricing/ai" component={AIPricing} />
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
    </div>
  );
}