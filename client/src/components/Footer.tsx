import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-5 md:px-10 bg-[#1E1E1E] border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-semibold mb-4">Mavericks Edge</h4>
            <p className="text-[#AAAAAA] mb-4">
              Digital solutions that elevate your business
            </p>
            <p className="text-[#AAAAAA]">
              © {currentYear} Mavericks Edge. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pricing#web-pricing"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing#marketing-pricing"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  Marketing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing#ai-pricing"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  AI Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#AAAAAA] hover:text-white transition duration-300"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-[#AAAAAA]">
          <p>Designed with passion by the Mavericks Edge team</p>
        </div>
      </div>
    </footer>
  );
}
