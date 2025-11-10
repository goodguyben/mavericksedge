import React, { useState } from 'react';

interface SubscribeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ text = "Subscribe", className, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex items-center gap-2 font-semibold text-xl p-0 m-0 border-none bg-transparent cursor-pointer ${className || ''}`}
      {...props}
    >
      <p className="relative m-0 text-xl">
        <span className={`block text-white transition-all duration-300 ease-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          {text}
        </span>
        <span 
          className={`absolute inset-0 text-orange-500 overflow-hidden transition-all duration-300 ease-out ${isHovered ? 'w-full' : 'w-0'}`}
        >
          {text}
        </span>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 transition-all relative ${isHovered ? 'text-orange-500 translate-x-1' : 'text-white'}`}
        style={{ width: '15px', transitionDelay: '0.2s', transitionDuration: '0.2s' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={4}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
      <span className={`absolute left-0 bottom-[-7px] h-0.5 bg-orange-500 transition-all duration-300 ease-out ${isHovered ? 'w-full' : 'w-0'}`}></span>
    </button>
  );
};

export default SubscribeButton;
