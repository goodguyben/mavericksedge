import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ExternalLink, Maximize2 } from 'lucide-react';
import {
  SliderBtnGroup,
  ProgressSlider,
  SliderBtn,
  SliderContent,
  SliderWrapper,
  useProgressSliderContext,
} from '@/components/ui/progressive-carousel';

const portfolioItems = [
  {
    img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop",
    title: 'Deville Coffee',
    desc: 'Multi-location coffee chain website with online ordering, location finder, and direct trade coffee showcase.',
    sliderName: 'deville-coffee',
    category: 'Food & Beverage',
    technologies: ['Custom CMS', 'E-commerce', 'Responsive Design'],
    liveUrl: 'https://www.devillecoffee.ca/',
  },
  {
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1170&auto=format&fit=crop",
    title: 'Next Architecture',
    desc: '87-year legacy architecture firm with modern portfolio showcase, project galleries, and career portal.',
    sliderName: 'next-architecture',
    category: 'Architecture',
    technologies: ['React', 'Portfolio System', 'Modern Design'],
    liveUrl: 'https://www.nextarchitecture.ca/',
  },
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1170&auto=format&fit=crop",
    title: 'Pixel Blue College',
    desc: 'Edmonton\'s leading digital arts post-secondary institution with program showcases, admissions portal, and student resources.',
    sliderName: 'pixel-blue',
    category: 'Education',
    technologies: ['Custom CMS', 'Student Portal', 'Responsive Design'],
    liveUrl: 'https://www.pixelblue.ca/',
  },
  {
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1170&auto=format&fit=crop",
    title: 'Tailored Interior',
    desc: 'Award-winning interior design firm with project showcase, e-design services, and online shop integration.',
    sliderName: 'tailored-interior',
    category: 'Interior Design',
    technologies: ['Wix Custom', 'E-commerce', 'Portfolio Gallery'],
    liveUrl: 'https://www.tailoredinterior.ca/',
  },
];

// Mobile Component - Shows only active progress bar with animation
const MobileProgressBar: React.FC = () => {
  const { active } = useProgressSliderContext();
  const activeItem = portfolioItems.find(item => item.sliderName === active);
  
  if (!activeItem) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-fit text-white bg-black/40 backdrop-blur-md overflow-hidden rounded-b-xl">
      <SliderBtn
        value={activeItem.sliderName}
        className="text-left cursor-pointer p-3 w-full"
        progressBarClass="bg-maverick-orange h-full"
      >
        <h4 className="relative text-sm font-semibold mb-1 line-clamp-1 text-white">
          {activeItem.title}
        </h4>
        <p className="text-xs text-[#AAAAAA] line-clamp-2 leading-tight mb-2">
          {activeItem.desc}
        </p>
        <Link
          href={
            activeItem.sliderName === 'deville-coffee' ? '/case-studies/deville-coffee'
            : activeItem.sliderName === 'next-architecture' ? '/case-studies/next-architecture'
            : activeItem.sliderName === 'pixel-blue' ? '/case-studies/pixel-blue-college'
            : activeItem.sliderName === 'tailored-interior' ? '/case-studies/tailored-interior'
            : '#'
          }
        >
          <span
            className="inline-flex items-center gap-1 text-xs !text-white hover:!text-gray-300 transition-colors duration-200 font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-3 w-3" />
            View Case Study
          </span>
        </Link>
      </SliderBtn>
    </div>
  );
};

// Desktop Component - Shows all 4 progress bars
const DesktopProgressBars: React.FC = () => {
  return (
    <SliderBtnGroup className="absolute bottom-0 left-0 right-0 h-fit text-white bg-black/40 backdrop-blur-md overflow-hidden grid grid-cols-4 rounded-b-xl">
      {portfolioItems.map((item, index) => (
        <SliderBtn
          key={index}
          value={item.sliderName}
          className="text-left cursor-pointer p-3 border-r border-gray-700 hover:bg-black/20 transition-colors duration-200"
          progressBarClass="bg-maverick-orange h-full"
        >
          <h4 className="relative text-sm font-semibold mb-1 line-clamp-1 text-white">
            {item.title}
          </h4>
          <p className="text-xs text-[#AAAAAA] line-clamp-2 leading-tight mb-2">
            {item.desc}
          </p>
          <Link
            href={
              item.sliderName === 'deville-coffee' ? '/case-studies/deville-coffee'
              : item.sliderName === 'next-architecture' ? '/case-studies/next-architecture'
              : item.sliderName === 'pixel-blue' ? '/case-studies/pixel-blue-college'
              : item.sliderName === 'tailored-interior' ? '/case-studies/tailored-interior'
              : '#'
            }
          >
            <span
              className="inline-flex items-center gap-1 text-xs !text-white hover:!text-gray-300 transition-colors duration-200 font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-3 w-3" />
              View Case Study
            </span>
          </Link>
        </SliderBtn>
      ))}
    </SliderBtnGroup>
  );
};

export const PortfolioSection: React.FC = () => {
  return (
    <section className="py-24 px-5 md:px-10 bg-[#1E1E1E]">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">
            Web Design Portfolio of Edmonton Businesses
          </h2>
          <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
            See Our Success Stories – Interact with live websites we've built for Edmonton businesses. 
            Click, scroll, and explore real client projects.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <ProgressSlider vertical={false} activeSlider='deville-coffee' duration={10000}>
            <SliderContent>
          {portfolioItems.map((item, index) => (
                <SliderWrapper key={index} value={item.sliderName}>
                  <div className="relative group">
                    {/* Interactive Live Mode */}
                    <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white">
                      {/* Browser Chrome */}
                      <div className="bg-[#E8E8E8] px-4 py-3 flex items-center gap-2 border-b border-gray-300">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                        </div>
                        <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-600 flex items-center gap-2">
                          <ExternalLink className="h-3 w-3" />
                          {item.liveUrl}
                        </div>
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900"
                          title="Open in new tab"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </a>
                </div>
                
                      {/* Live Website Iframe */}
                      <div className="relative w-full 2xl:h-[700px] h-[650px] bg-white">
                        <iframe
                          src={item.liveUrl}
                          className="w-full h-full border-0"
                          title={item.title}
                          loading="lazy"
                          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                        />
                  </div>
                </div>
              </div>
                </SliderWrapper>
          ))}
            </SliderContent>

            {/* Mobile: Show only active progress bar with animation */}
            <div className="block lg:hidden">
              <MobileProgressBar />
        </div>
        
            {/* Desktop: Show all 4 progress bars */}
            <div className="hidden lg:block">
              <DesktopProgressBars />
            </div>
          </ProgressSlider>
        </div>

        {/* Info Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-lg mx-auto mt-8"
        >
          <div className="relative bg-gradient-to-r from-maverick-orange/5 to-maverick-orange/10 border border-maverick-orange/20 rounded-lg px-3 py-1.5 text-center backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 pt-2">
              <motion.span 
                className="text-lg -mt-2"
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 0px rgba(255, 86, 48, 0))",
                    "drop-shadow(0 0 6px rgba(255, 86, 48, 0.4))",
                    "drop-shadow(0 0 0px rgba(255, 86, 48, 0))"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                💡
              </motion.span>
              <p className="text-[#CCCCCC] text-sm font-medium">
                <span className="text-maverick-orange font-semibold">Interactive Portfolio:</span> Live websites you can click, scroll, and explore
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[#AAAAAA] mb-6">
            Ready to join our success stories? Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a className="maverick-button maverick-button-primary inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium">
                Start Your Project
              </a>
            </Link>
            <Link href="/services">
              <a className="maverick-button maverick-button-outline inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium">
                View All Services
              </a>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};