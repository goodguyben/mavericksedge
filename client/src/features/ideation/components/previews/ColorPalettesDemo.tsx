import React, { useState } from 'react';
import { LandingAccordionItemPalette } from '@/components/ui/interactive-image-accordion-palette';
import { colorPalettes } from '@/features/ideation/color-palettes';
import type { ColorPalette } from '@/features/ideation/types';

export default function ColorPalettesDemo() {
  const [selectedPaletteId, setSelectedPaletteId] = useState(colorPalettes[0].id);
  const selectedPalette = colorPalettes.find(p => p.id === selectedPaletteId) || colorPalettes[0];

  const handlePaletteSelect = (paletteId: string) => {
    setSelectedPaletteId(paletteId);
  };

  return (
    <div className="w-full">
      {/* Palette Selection */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Choose Your Color Palette</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {colorPalettes.map((palette) => (
            <button
              key={palette.id}
              onClick={() => handlePaletteSelect(palette.id)}
              className={`
                p-3 rounded-lg border-2 transition-all duration-300 hover:scale-105
                ${selectedPaletteId === palette.id
                  ? 'border-gray-800 shadow-lg'
                  : 'border-gray-300 hover:border-gray-400'
                }
              `}
              title={palette.description}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-medium text-gray-700">{palette.name}</span>
                <div className="flex space-x-1">
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: palette.primary }}
                    title="Primary"
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: palette.secondary }}
                    title="Secondary"
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: palette.accent }}
                    title="Accent"
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: palette.neutral }}
                    title="Neutral"
                  ></div>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-3 text-sm text-gray-600">
          <p><strong>Selected:</strong> {selectedPalette.name}</p>
          <p className="mt-1">{selectedPalette.description}</p>
        </div>
      </div>

      {/* Interactive Accordion with Selected Palette */}
      <div className="transition-all duration-500 ease-in-out">
        <LandingAccordionItemPalette palette={selectedPalette} />
      </div>
    </div>
  );
}
