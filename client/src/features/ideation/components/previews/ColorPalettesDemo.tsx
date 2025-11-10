import React, { useState } from 'react';
import { LandingAccordionItemPalette } from '@/components/ui/interactive-image-accordion-palette';
import { colorPalettes } from '@/features/ideation/color-palettes';
import type { ColorPalette } from '@/features/ideation/types';

type ColorPalettesDemoProps = {
  selectedIds: string[];
  onToggle: (id: string) => void;
  onSkipChange: (skip: boolean) => void;
  skip: boolean;
  max?: number;
};

export default function ColorPalettesDemo({
  selectedIds,
  onToggle,
  onSkipChange,
  skip,
  max = 5
}: ColorPalettesDemoProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPalette = colorPalettes[currentIndex];
  const isSelected = selectedIds.includes(currentPalette.id);
  const selectedCount = selectedIds.length;

  const nextPalette = () => {
    setCurrentIndex((prev) => (prev + 1) % colorPalettes.length);
  };

  const prevPalette = () => {
    setCurrentIndex((prev) => (prev - 1 + colorPalettes.length) % colorPalettes.length);
  };

  const handleSelect = () => {
    if (!isSelected && selectedCount >= max) {
      return; // Don't allow selection if at max
    }
    onToggle(currentPalette.id);
  };

  return (
    <div className="w-full">
      {/* Selected Palettes Indicator */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-medium">{selectedCount} of {max} selected</span>
            {selectedCount > 0 && (
              <span className="ml-2 text-xs">
                ({selectedIds.map(id => colorPalettes.find(p => p.id === id)?.name).join(', ')})
              </span>
            )}
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={skip}
              onChange={(e) => onSkipChange(e.target.checked)}
              className="rounded border-gray-300"
            />
            <span>Skip color palettes</span>
          </label>
        </div>
      </div>

      {/* Palette Navigation and Controls */}
      <div className="mb-6 p-4 bg-white border border-gray-200 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevPalette}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            disabled={colorPalettes.length <= 1}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="text-center flex-1">
            <h3 className="text-xl font-bold text-gray-900">{currentPalette.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{currentPalette.description}</p>
          </div>

          <button
            onClick={nextPalette}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            disabled={colorPalettes.length <= 1}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Color Swatches */}
        <div className="flex justify-center items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <div
              className="w-6 h-6 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: currentPalette.primary }}
              title="Primary"
            ></div>
            <span className="text-xs text-gray-600">Primary</span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="w-6 h-6 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: currentPalette.secondary }}
              title="Secondary"
            ></div>
            <span className="text-xs text-gray-600">Secondary</span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="w-6 h-6 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: currentPalette.accent }}
              title="Accent"
            ></div>
            <span className="text-xs text-gray-600">Accent</span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="w-6 h-6 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: currentPalette.neutral }}
              title="Neutral"
            ></div>
            <span className="text-xs text-gray-600">Neutral</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSelect}
            disabled={skip}
            className={`
              px-6 py-2 rounded-lg font-medium transition-all
              ${isSelected
                ? 'bg-green-500 text-white hover:bg-green-600'
                : selectedCount >= max
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }
            `}
          >
            {isSelected ? '✓ Selected' : 'Select Palette'}
          </button>
        </div>

        {/* Palette Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {colorPalettes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                w-2 h-2 rounded-full transition-all
                ${index === currentIndex
                  ? 'bg-orange-500'
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Interactive Accordion with Current Palette */}
      <div className="transition-all duration-500 ease-in-out">
        <LandingAccordionItemPalette palette={currentPalette} />
      </div>
    </div>
  );
}
