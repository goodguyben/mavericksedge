import { Link } from "wouter";

// Logo component
const Logo = ({ size }: { size: "medium" | "small" }) => (
  <img
    src="/attached_assets/logo_dyn-transparent-thumb2x.png"
    alt="Mavericks Edge Logo"
    className={`h-${size === "medium" ? "10" : "6"} w-auto`}
  />
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maverick-slate text-maverick-cream py-16 border-t border-maverick-orange/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo size="medium" />
            <p className="text-maverick-orange mb-4 mt-4 font-medium">
              Digital solutions that elevate your business
            </p>
            <p className="text-maverick-cream/80">
              © {currentYear} Mavericks Edge. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-maverick-orange">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pricing#web-pricing"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing#marketing-pricing"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  Marketing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing#ai-pricing"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  AI Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-maverick-orange">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-maverick-orange">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-maverick-cream/80 hover:text-maverick-orange transition duration-300"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-maverick-orange/20 text-center">
          <p className="text-maverick-cream/70 text-sm">Designed with passion by the Mavericks Edge team</p>
        </div>
      </div>
    </footer>
  );
}