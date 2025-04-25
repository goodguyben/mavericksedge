import { Link } from "wouter"; // Removed unused motion import
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Added text-white as a base for the footer text
    <footer className="bg-[#0D0D0D] text-white py-16 px-5 md:px-10">
      <div className="container mx-auto">
        {/* Logo Section - Stays Centered */}
        <div className="text-center mb-12"> {/* Increased bottom margin */}
          <div className="mb-4 flex justify-center items-center"> {/* Vertically center items */}
            <Logo size="large" showText={false} noLink={true} />
            {/* Added margin-left for spacing between logo and text */}
            <span className="font-logo font-bold text-2xl text-maverick-orange ml-2">
              Mavericks Edge
            </span>
          </div>
          {/* You can keep or remove this divider */}
          {/* <div className="h-px w-32 bg-maverick-orange mx-auto opacity-30"></div> */}
        </div>

        {/* Navigation & Legal Sections Wrapper */}
        {/*
          - max-w-lg: Constrains the width of this block. Adjust as needed.
          - mx-auto: Centers this block horizontally.
          - grid grid-cols-1 md:grid-cols-2: Stacks on mobile, side-by-side on desktop.
          - gap-x-10 gap-y-8: Provides spacing between/below columns.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-lg mx-auto">

          {/* Navigation Section Column */}
          {/*
            - text-center md:text-left: Centers text when stacked (mobile), left-aligns when side-by-side (desktop).
          */}
          <div className="text-center md:text-left">
            {/* Use inline-block so underline only spans the text width */}
            <h3 className="text-xl font-semibold mb-2 inline-block">Navigation</h3>
            {/* Underline styled like the image - centered on mobile (mx-auto), left on desktop (md:mx-0) */}
            <div className="h-0.5 w-12 bg-maverick-orange mb-4 mx-auto md:mx-0"></div>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">About</Link></li>
              <li><Link href="/services" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Contact</Link></li>
              {/* Add other links as needed */}
            </ul>
          </div>

          {/* Legal Section Column */}
          {/* Applying same alignment logic as Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2 inline-block">Legal</h3>
            <div className="h-0.5 w-12 bg-maverick-orange mb-4 mx-auto md:mx-0"></div>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-[#AAAAAA] hover:text-maverick-orange transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Copyright Section - Stays Centered */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-[#888888]">
          <p>© {currentYear} Mavericks Edge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}