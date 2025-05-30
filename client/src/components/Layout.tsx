import { ReactNode } from "react";
import NewHeader from "./NewHeader";
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
      <NewHeader />
      <main id="main-content" className="flex-grow" role="main" aria-label="Main content">{children}</main>
      <FooterWrapper />
    </div>
  );
}
