import React, { useState } from 'react';
import type { ColorPalette } from '@/features/ideation/types';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Voice Assistant',
    imageUrl: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'AI Image Generation',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'AI Chatbot + Local RAG',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'AI Agent',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Visual Understanding',
    imageUrl: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop',
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter, colors }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom, for all screen sizes
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
        style={{ color: colors?.surface?.[0] || '#ffffff' }}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main App Component ---
export function LandingAccordionItem({ colors }: { colors?: ColorPalette }) {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index) => {
    setActiveIndex(index);
  };

  // Apply colors from palette or use defaults
  const primaryColor = colors?.primary || '#f68634';
  const secondaryColor = colors?.secondary?.[0] || '#e67e22';
  const accentColor = colors?.accent?.[0] || '#3498db';
  const surfaceColor = colors?.surface?.[0] || '#ffffff';
  const neutralColor = colors?.neutral?.[0] || '#2c3e50';

  return (
    <div className="font-sans" style={{ backgroundColor: surfaceColor }}>
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter" style={{ color: neutralColor }}>
              Accelerate Gen-AI Tasks on Any Device
            </h1>
            <p className="mt-6 text-lg max-w-xl mx-auto md:mx-0" style={{ color: colors?.neutral?.[3] || '#7f8c8d' }}>
              Build high-performance AI apps on-device without the hassle of model compression or edge deployment.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
                style={{
                  backgroundColor: primaryColor,
                  color: surfaceColor,
                  border: `2px solid ${secondaryColor}`
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            {/* Changed flex-col to flex-row to keep the layout consistent */}
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                  colors={colors}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

