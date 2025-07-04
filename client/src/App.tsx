import { lazy, Suspense, useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/queryClient";
import Layout from "@/components/Layout";
import PageTransition from "@/components/PageTransition";


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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen">
      <QueryClientProvider client={queryClient}>
        <PageTransition />
        <Layout>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          </div>}>
            <Switch>
              <Route path="/">
                <Home />
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
              <Route path="/portfolio-edmonton-web-design">
                <Work />
              </Route>
              <Route path="/about-edmonton-web-design-company">
                <About />
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
      </QueryClientProvider>
    </div>
  );
}