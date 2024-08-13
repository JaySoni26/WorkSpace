import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
  text: string;
  textSizeClass: string; // Prop for text size
}

const Marquee: React.FC<MarqueeProps> = ({ text, textSizeClass }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(300); // Default width
  const [containerHeight, setContainerHeight] = useState<number>(50); // Default height
  const [animation, setAnimation] = useState<gsap.core.Tween | gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeElement = marqueeRef.current;
      const width = marqueeElement.scrollWidth; // Get the width of the content
      const height = marqueeElement.clientHeight; // Get the height of the content

      setContainerWidth(width);
      setContainerHeight(height);

      // Create and store the GSAP animation
      const tl = gsap.fromTo(
        marqueeElement,
        { x: width }, // Start from the right side of the container
        {
          x: -width, // End at the left side of the container
          repeat: -1,
          duration: 10, // Adjust duration as needed
          ease: 'linear',
          paused: false, // Start the animation immediately
        }
      );

      setAnimation(tl);

      // Clean up animation on component unmount
      return () => {
        tl.kill();
      };
    }
  }, [text]);

  return (
    <div
      className="relative overflow-hidden rounded-full bg-gradient-to-r from-fuchsia-600/10 to-pink-600/20 text-fuchsia-600 px-6 py-3 flex items-center justify-center"
      style={{ width: containerWidth + 24, height: containerHeight + 20 }}
      onMouseEnter={() => {
        if (animation) {
            gsap.to(marqueeRef.current, {
                x: 0,
                duration: 0.3,
                ease: 'power2.inOut'
              });
          animation.pause(); // Pause the animation on hover
        }
      }}
      onMouseLeave={() => {
        if (animation) {
            gsap.to(marqueeRef.current, {
                x: containerWidth-10,
                duration: 0.3,
                ease: 'power1.inOut'
              });
          animation.play(); // Resume the animation when hover ends
        }
      }}
    >
      <div
        ref={marqueeRef}
        className={`absolute whitespace-nowrap ${textSizeClass}`}
        style={{ whiteSpace: 'nowrap' }}
      >
        {text}
      </div>
    </div>
  );
};

export default Marquee;
