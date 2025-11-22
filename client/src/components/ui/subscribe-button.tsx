import React, { useState } from 'react';

export function SubscribeButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <button
        className="relative cursor-pointer px-6 py-2.5 text-lg text-[#c1a362] border-2 border-[#c1a362] rounded-[34px] bg-transparent font-semibold transition-all duration-300 ease-&lsqb;cubic-bezier(0.23,1,0.32,1)&rsqb; overflow-hidden hover:text-[#212121] hover:scale-110 hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)] active:scale-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Subscribe
        <span
          className="absolute inset-0 m-auto w-[50px] h-[50px] rounded-[inherit] bg-[#c1a362] -z-10 transition-all duration-&lsqb;600ms&rsqb; ease-&lsqb;cubic-bezier(0.23,1,0.32,1)&rsqb;"
          style={{
            transform: isHovered ? 'scale(3)' : 'scale(0)',
          }}
        />
      </button>
    </div>
  );
}
