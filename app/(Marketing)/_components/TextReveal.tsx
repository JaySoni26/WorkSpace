"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TextRevealProps {
  classname?: string;
  text: string;
}

const TextReveal: React.FC<TextRevealProps> = ({ classname = '', text }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = textRef.current?.querySelectorAll('span');
    if (words) {
      gsap.set(words, { autoAlpha: 0, y: -120, rotation: 120 }); // Set initial state
      gsap.fromTo(
        words,
        { y: 120, rotation: 20, autoAlpha: 0 },
        { y: 0, rotation: 0, autoAlpha: 1, duration: 1, stagger: 0.9}
      );
    }
  }, [text]);

  return (
    <div className={`overflow-hidden ${classname}`} ref={textRef}>
      {text.split(' ').map((word, index) => (
        <span key={index} style={{ display: 'inline-block', marginRight: '0.5rem' }}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextReveal;
