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
      {/* Skip to main content link - invisible but accessible to screen readers */}
      <a href="#main-content" className="absolute w-0 h-0 -m-px p-0 overflow-hidden whitespace-nowrap opacity-0 clip-rect focus:opacity-100 focus:fixed focus:top-4 focus:left-4 focus:w-auto focus:h-auto focus:m-0 focus:p-3 focus:overflow-visible focus:whitespace-normal focus:clip-auto focus:bg-maverick-orange focus:text-white focus:rounded focus:z-50 focus:shadow-lg">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow" role="main" aria-label="Main content">{children}</main>
      <FooterWrapper />
    </div>
  );
}
