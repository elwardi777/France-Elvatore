
import React, { useEffect, useState, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  label: string;
  suffix?: string;
  className?: string;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  targetValue, 
  duration = 2000, 
  label, 
  suffix = "",
  className = "",
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.5, delay);
  const animationFired = useRef(false);

  useEffect(() => {
    if (isVisible && !animationFired.current) {
      animationFired.current = true;
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * targetValue));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isVisible, targetValue, duration]);

  // Reset if it becomes not visible again and we want to re-animate on scroll
  // For now, it fires once.
  // useEffect(() => {
  //  if (!isVisible) {
  //    setCount(0);
  //    animationFired.current = false;
  //  }
  // }, [isVisible]);


  return (
    <div ref={ref} className={`text-center p-6 bg-card rounded-xl shadow-lg transform transition-all duration-500 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-foreground/80 font-medium">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
