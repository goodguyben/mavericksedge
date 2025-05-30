import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "./Header";
import FooterWrapper from "./FooterWrapper";
import { Toaster } from "./ui/toaster";
import PageTransition from "./PageTransition";
import TabletOptimizer from "./TabletOptimizer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-maverick-charcoal text-maverick-cream overflow-x-hidden">
      <PageTransition />
      <TabletOptimizer />
      <Header />
      <main className="relative z-10">{children}</main>
      <FooterWrapper />
      <Toaster />
    </div>
  );
}