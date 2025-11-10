import React from 'react';

interface NeumorphicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const NeumorphicButton: React.FC<NeumorphicButtonProps> = ({ 
  text = "Click me", 
  className, 
  ...props 
}) => {
  return (
    <button
      className={`
        text-[#090909]
        py-[0.7em] px-[1.7em]
        text-lg
        rounded-lg
        bg-[#e8e8e8]
        cursor-pointer
        border border-[#e8e8e8]
        transition-all duration-300
        shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]
        active:text-[#666]
        active:shadow-[inset_4px_4px_12px_#c5c5c5,inset_-4px_-4px_12px_#ffffff]
        ${className || ''}
      `}
      {...props}
    >
      {text}
    </button>
  );
};

export default NeumorphicButton;

