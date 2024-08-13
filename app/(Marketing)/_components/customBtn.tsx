// CustomButton.tsx
import React from 'react';
import { gsap } from 'gsap';
import { Icon } from 'lucide-react'; // Import lucide-react

interface CustomButtonProps {
  text: string;
  className?: string;
  href?: string; // Optional href parameter for navigation
  icon?: React.ReactNode; // Optional icon parameter
  textClassName?: string; // Optional class for text
  circleClassName?: string; // Optional class for circle
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, className = '', href, icon, textClassName = '', circleClassName = '' }) => {
  const buttonRef = React.useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to('.circle', {
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
      const textElement = buttonRef.current.querySelector('.text-container');
      if (textElement) {
        gsap.to(textElement, {
          color: '#ffffff',
          duration: 0.5,
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to('.circle', {
        scale: 0,
        y: '100%',
        duration: 0.5,
        ease: 'power2.out',
      });
      const textElement = buttonRef.current.querySelector('.text-container');
      if (textElement) {
        gsap.to(textElement, {
          color: '#FF8125', // Match your initial text color
          duration: 0.5,
        });
      }
    }
  };

  const buttonContent = (
    <div className={`relative z-10 flex items-center justify-center space-x-2 text-container ${textClassName}`}>
        <span>{text}</span>
      {icon && <span>{icon}</span>} {/* Render icon if provided */}
      
    </div>
  );

  return href ? (
    <a
      href={href}
      ref={buttonRef as React.RefObject<HTMLAnchorElement>}
      className={`relative inline-flex items-center overflow-hidden border border-orange/25 rounded-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonContent}
      <div className={`circle absolute inset-0 bg-orange rounded-full scale-0 -translate-y-full z-0 ${circleClassName}`}></div>
    </a>
  ) : (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={`relative overflow-hidden border border-orange rounded-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonContent}
      <div className={`circle absolute inset-0 bg-orange rounded-full scale-0 -translate-y-full z-0 ${circleClassName}`}></div>
    </button>
  );
};

export default CustomButton;
