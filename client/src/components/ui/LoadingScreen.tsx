import React from 'react';

interface LoadingScreenProps {
  isLoading?: boolean;
  onLoadingComplete?: () => void;
  minDisplayTime?: number;
}

export default function LoadingScreen({ 
  isLoading, 
  onLoadingComplete, 
  minDisplayTime = 3000 
}: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Static background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-maverick-orange/10 to-transparent" />
      </div>

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Static logo display */}
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
          <img
            src="/assets/logo-transparent-thumb4x.png"
            alt="Mavericks Edge Logo"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(1.1) contrast(1.1)' }}
          />

          {/* Glow effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-maverick-orange/20 via-transparent to-transparent rounded-full" />
        </div>

        {/* Loading text */}
        <div className="mt-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
            Mavericks Edge
          </h1>

          <div className="w-64 h-1 bg-gray-800 rounded-full ml-auto mr-0 mb-4 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-maverick-orange to-orange-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}