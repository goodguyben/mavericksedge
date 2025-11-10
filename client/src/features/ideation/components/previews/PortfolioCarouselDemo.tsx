import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1170&auto=format&fit=crop",
    title: 'Mountain Peak Adventure',
    desc: 'Experience breathtaking mountain views and thrilling hiking trails through pristine alpine landscapes.',
    sliderName: 'mountain',
    category: 'Adventure',
    features: ['Hiking Trails', 'Scenic Views', 'Wildlife Spotting'],
    liveUrl: 'https://example.com',
  },
  {
    img: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=1170&auto=format&fit=crop",
    title: 'Tropical Beach Paradise',
    desc: 'Relax on pristine white sand beaches with crystal-clear waters and swaying palm trees.',
    sliderName: 'beach',
    category: 'Relaxation',
    features: ['Beach Access', 'Water Sports', 'Sunset Views'],
    liveUrl: 'https://example.com',
  },
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1170&auto=format&fit=crop",
    title: 'Forest Canopy Exploration',
    desc: 'Walk among ancient trees and discover hidden waterfalls in untouched wilderness areas.',
    sliderName: 'forest',
    category: 'Nature',
    features: ['Forest Trails', 'Wildlife', 'Photography'],
    liveUrl: 'https://example.com',
  },
  {
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1170&auto=format&fit=crop",
    title: 'Desert Oasis Journey',
    desc: 'Explore vast desert landscapes with unique rock formations and stargazing opportunities.',
    sliderName: 'desert',
    category: 'Exploration',
    features: ['Guided Tours', 'Camping', 'Stargazing'],
    liveUrl: 'https://example.com',
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
        progressBarClass="bg-orange-500 h-full"
      >
        <h4 className="relative text-sm font-semibold mb-1 line-clamp-1 text-white">
          {activeItem.title}
        </h4>
        <p className="text-xs text-white line-clamp-2 leading-tight mb-2">
          {activeItem.desc}
        </p>
        <span className="inline-flex items-center gap-1 text-xs text-white hover:text-gray-300 transition-colors duration-200 font-medium">
          <ExternalLink className="h-3 w-3" />
          Learn More
        </span>
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
          progressBarClass="bg-orange-500 h-full"
        >
          <h4 className="relative text-sm font-semibold mb-1 line-clamp-1 text-white">
            {item.title}
          </h4>
          <p className="text-xs text-white line-clamp-2 leading-tight mb-2">
            {item.desc}
          </p>
          <span className="inline-flex items-center gap-1 text-xs text-white hover:text-gray-300 transition-colors duration-200 font-medium">
            <ExternalLink className="h-3 w-3" />
            Learn More
          </span>
        </SliderBtn>
      ))}
    </SliderBtnGroup>
  );
};

const PortfolioCarouselDemo = () => {
  return (
    <div className="w-full h-full bg-[#1E1E1E] p-6 flex flex-col">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
          Discover Amazing Destinations
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Explore breathtaking landscapes and unforgettable adventures around the world.
        </p>
      </motion.div>

      <div className="flex-1 max-w-6xl mx-auto w-full">
        <ProgressSlider vertical={false} activeSlider='mountain' duration={10000}>
          <SliderContent>
            {portfolioItems.map((item, index) => (
              <SliderWrapper key={index} value={item.sliderName}>
                <div className="relative group">
                  {/* Destination Preview */}
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white">
                    <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
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
    </div>
  );
};

export default PortfolioCarouselDemo;

