import { Link } from "wouter";
import { Button } from "@/components/ui/custom-button";
import { Home, Search, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  return (
    <Layout>
      <SEOHead
        title="Page Not Found - 404 | Mavericks Edge"
        description="The page you're looking for doesn't exist. Return to Mavericks Edge homepage or explore our web development, marketing, and AI services."
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="text-center max-w-2xl mx-auto pt-[90px] pb-[90px]">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-maverick-cream mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-maverick-cream mb-4">Page Not Found</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track with our innovative web, marketing, and AI solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/">
              <Button variant="primary" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Back to Homepage
              </Button>
            </Link>
            
            <Link href="/services">
              <Button variant="outline" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Browse Services
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-maverick-charcoal/30 p-6 rounded-lg border border-maverick-charcoal/50">
              <h3 className="text-lg font-semibold text-maverick-cream mb-2">Web Development</h3>
              <p className="text-gray-400 text-sm mb-4">Custom websites and applications built with cutting-edge technology.</p>
              <Link href="/web-design-services-edmonton">
                <Button variant="ghost">Learn More</Button>
              </Link>
            </div>
            
            <div className="bg-maverick-charcoal/30 p-6 rounded-lg border border-maverick-charcoal/50">
              <h3 className="text-lg font-semibold text-maverick-cream mb-2">Digital Marketing</h3>
              <p className="text-gray-400 text-sm mb-4">Strategic marketing solutions to grow your online presence.</p>
              <Link href="/digital-marketing-services-edmonton">
                <Button variant="ghost">Learn More</Button>
              </Link>
            </div>
            
            <div className="bg-maverick-charcoal/30 p-6 rounded-lg border border-maverick-charcoal/50">
              <h3 className="text-lg font-semibold text-maverick-cream mb-2">AI Solutions</h3>
              <p className="text-gray-400 text-sm mb-4">Intelligent automation and AI-powered business solutions.</p>
              <Link href="/ai-automation-services-edmonton">
                <Button variant="ghost">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
