import { ReactNode } from "react";
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
    <div className="min-h-screen flex flex-col">
      <PageTransition />
      {/* Skip to main content link for accessibility and SEO */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-2 focus:bg-white focus:text-black focus:z-50">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow" role="main" aria-label="Main content">{children}</main>
      <FooterWrapper />
    </div>
  );
}
