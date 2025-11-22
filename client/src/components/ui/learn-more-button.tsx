import React, { useState } from 'react';

export function LearnMoreButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <button
        className="relative inline-block cursor-pointer outline-none border-0 align-middle no-underline bg-transparent p-0 text-inherit font-inherit w-48 h-auto learn-more-btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={`transition-all duration-&lsqb;450ms&rsqb; ease-&lsqb;cubic-bezier(0.65,0,0.076,1)&rsqb; relative block m-0 h-12 bg-orange-500 rounded-[1.625rem] ${isHovered ? 'w-full' : 'w-12'}`}>
          <span className={`absolute top-0 bottom-0 my-auto left-2.5 w-[1.125rem] h-0.5 transition-all duration-&lsqb;450ms&rsqb; ease-&lsqb;cubic-bezier(0.65,0,0.076,1)&rsqb; ${isHovered ? 'bg-white translate-x-4' : 'bg-none'}`}>
            <span className="absolute top-[-0.29rem] right-[0.0625rem] w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-45"></span>
          </span>
        </span>
        <span className={`transition-all duration-&lsqb;450ms&rsqb; ease-&lsqb;cubic-bezier(0.65,0,0.076,1)&rsqb; absolute top-0 left-0 right-0 bottom-0 py-3 ml-[1.85rem] font-bold leading-[1.6] text-center uppercase ${isHovered ? 'text-white' : 'text-orange-500'}`}>
          Learn More
        </span>
      </button>
    </div>
  );
}
