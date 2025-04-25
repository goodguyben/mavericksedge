
import { motion } from "framer-motion";
import { Link } from "wouter";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0D0D0D] py-16 px-5 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="mb-4 flex justify-center">
            <Logo size="large" showText={false} noLink={true} />
            <span className="font-logo font-bold text-2xl text-maverick-orange ml-1 self-center">Mavericks Edge</span>
          </div>
          <div className="h-px w-32 bg-maverick-orange mx-auto opacity-30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto mt-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">About</Link></li>
              <li><Link href="/services" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-[#888888]">
          <p>© {currentYear} Mavericks Edge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
