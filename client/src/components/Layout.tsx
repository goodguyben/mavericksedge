import { ReactNode, useState } from "react";
import Header from "./Header";
import FooterWrapper from "./FooterWrapper";
import PageTransition from "./PageTransition";
import { useLocation } from "wouter";
import { useEffect } from "react";

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
    <div className="min-h-screen flex flex-col bg-[#000000]">
      <PageTransition />
      <Header />
      <main
        id="main-content"
        className="flex-grow relative"
        role="main"
        aria-label="Main content"
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        {children}
      </main>
      <FooterWrapper />
    </div>
  );
}
