import React from 'react';
import styled from 'styled-components';

interface LearnMoreButtonProps {
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  size?: 'small' | 'small-medium' | 'medium' | 'large';
}

const LearnMoreButton: React.FC<LearnMoreButtonProps> = ({ 
  href, 
  onClick, 
  children = "Learn More",
  className,
  size = 'medium'
}) => {
  const buttonContent = (
    <StyledWrapper className={className} size={size}>
      <button className="learn-more" onClick={onClick}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">{children}</span>
      </button>
    </StyledWrapper>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}

const StyledWrapper = styled.div<{ size: 'small' | 'small-medium' | 'medium' | 'large' }>`
  button {
   position: relative;
   display: inline-block;
   cursor: pointer;
   outline: none;
   border: 0;
   vertical-align: middle;
   text-decoration: none;
   background: transparent;
   padding: 0;
   font-size: inherit;
   font-family: inherit;
  }

  button.learn-more {
   width: ${props => {
     switch (props.size) {
       case 'small': return '8rem';
       case 'small-medium': return '10rem';
       case 'large': return '14rem';
       default: return '12rem';
     }
   }};
   height: auto;
  }

  button.learn-more .circle {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: relative;
   display: block;
   margin: 0;
   width: ${props => {
     switch (props.size) {
       case 'small': return '2rem';
       case 'small-medium': return '2.5rem';
       case 'large': return '3.5rem';
       default: return '3rem';
     }
   }};
   height: ${props => {
     switch (props.size) {
       case 'small': return '2rem';
       case 'small-medium': return '2.5rem';
       case 'large': return '3.5rem';
       default: return '3rem';
     }
   }};
   background: #F15A29;
   border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: absolute;
   top: 0;
   bottom: 0;
   margin: auto;
   background: #fff;
  }

  button.learn-more .circle .icon.arrow {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   left: ${props => {
     switch (props.size) {
       case 'small': return '0.375rem';
       case 'small-medium': return '0.5rem';
       case 'large': return '0.75rem';
       default: return '0.625rem';
     }
   }};
   width: ${props => {
     switch (props.size) {
       case 'small': return '0.75rem';
       case 'small-medium': return '0.875rem';
       case 'large': return '1.25rem';
       default: return '1.125rem';
     }
   }};
   height: 0.125rem;
   background: none;
  }

  button.learn-more .circle .icon.arrow::before {
   position: absolute;
   content: "";
   top: ${props => {
     switch (props.size) {
       case 'small': return '-0.2rem';
       case 'small-medium': return '-0.25rem';
       case 'large': return '-0.35rem';
       default: return '-0.29rem';
     }
   }};
   right: 0.0625rem;
   width: ${props => {
     switch (props.size) {
       case 'small': return '0.375rem';
       case 'small-medium': return '0.5rem';
       case 'large': return '0.75rem';
       default: return '0.625rem';
     }
   }};
   height: ${props => {
     switch (props.size) {
       case 'small': return '0.375rem';
       case 'small-medium': return '0.5rem';
       case 'large': return '0.75rem';
       default: return '0.625rem';
     }
   }};
   border-top: 0.125rem solid #fff;
   border-right: 0.125rem solid #fff;
   transform: rotate(45deg);
  }

  button.learn-more .button-text {
   transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   padding: ${props => {
     switch (props.size) {
       case 'small': return '0.5rem 0';
       case 'small-medium': return '0.625rem 0';
       case 'large': return '1rem 0';
       default: return '0.75rem 0';
     }
   }};
   margin: 0 0 0 ${props => {
     switch (props.size) {
       case 'small': return '1.25rem';
       case 'small-medium': return '1.55rem';
       case 'large': return '2.25rem';
       default: return '1.85rem';
     }
   }};
   color: #F15A29;
   font-weight: 700;
   line-height: 1.6;
   text-align: center;
   text-transform: uppercase;
   font-size: ${props => {
     switch (props.size) {
       case 'small': return '0.75rem';
       case 'small-medium': return '0.8125rem';
       case 'large': return '1.125rem';
       default: return '0.875rem';
     }
   }};
  }

  button:hover .circle {
   width: 100%;
  }

  button:hover .circle .icon.arrow {
   background: #fff;
   transform: translate(1rem, 0);
  }

  button:hover .button-text {
   color: #fff;
  }`;

export default LearnMoreButton; 