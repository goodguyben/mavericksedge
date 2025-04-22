import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import Work from "@/pages/Work";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import { useState, useEffect } from "react";
import CustomCursor from "@/components/cursor/CustomCursor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/work" component={Work} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {!isMobile && <CustomCursor />}
        <Layout>
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
