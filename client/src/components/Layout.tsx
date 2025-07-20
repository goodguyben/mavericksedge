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
  const [contentMounted, setContentMounted] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Ensure content is mounted before showing footer
  useEffect(() => {
    setContentMounted(false);
    const timer = setTimeout(() => {
      setContentMounted(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [children, location]);

  return (
    <div className="min-h-screen flex flex-col">
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
      <div 
        className={`transition-opacity duration-300 ${contentMounted ? 'opacity-100' : 'opacity-0'}`}
        style={{ visibility: contentMounted ? 'visible' : 'hidden' }}
      >
        <FooterWrapper />
      </div>
    </div>
  );
}
