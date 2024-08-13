"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ExpandFromCenterProps {
  text: string;
  classname?: string;
}

const ExpandFromCenter: React.FC<ExpandFromCenterProps> = ({ text, classname = '' }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { scale: 0, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${classname}`}
    >
      {text}
    </div>
  );
};

export default ExpandFromCenter;
