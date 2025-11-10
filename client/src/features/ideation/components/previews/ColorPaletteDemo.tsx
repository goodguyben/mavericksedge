import React from 'react';
import type { ColorPalette } from '../../types';

interface ColorPaletteDemoProps {
  colors: ColorPalette;
}

export default function ColorPaletteDemo({ colors }: ColorPaletteDemoProps) {
  return (
    <div className="w-full p-4 space-y-4">
      {/* Color Palette Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Primary */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700">Primary</h4>
          <div className="flex flex-col space-y-1">
            <div
              className="w-full h-12 rounded-lg border-2 border-gray-200"
              style={{ backgroundColor: colors.primary }}
            ></div>
            <span className="text-xs text-gray-500 font-mono">{colors.primary}</span>
          </div>
        </div>

        {/* Secondary */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700">Secondary</h4>
          <div className="flex flex-col space-y-1">
            {colors.secondary.map((color, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-8 h-8 rounded border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-xs text-gray-500 font-mono">{color}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accent */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700">Accent</h4>
          <div className="flex flex-col space-y-1">
            {colors.accent.map((color, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-8 h-8 rounded border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-xs text-gray-500 font-mono">{color}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Neutral */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700">Neutral</h4>
          <div className="flex flex-col space-y-1">
            {colors.neutral.slice(0, 4).map((color, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-8 h-8 rounded border border-gray-200 flex-shrink-0"
                  style={{ backgroundColor: color }}
                ></div>
                <span className="text-xs text-gray-500 font-mono">{color}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Surface colors */}
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-gray-700">Surface</h4>
        <div className="flex space-x-2">
          {colors.surface.map((color, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-12 h-12 rounded border border-gray-200"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-xs text-gray-500 font-mono">{color}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
