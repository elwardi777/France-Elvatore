
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold: number = 0.1, delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once an element becomes visible, it stays visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Once visible, no need to observe anymore
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;

    // Use setTimeout to create a delay effect if needed
    const timer = setTimeout(() => {
      if (currentRef) {
        observer.observe(currentRef);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return { ref, isVisible };
};
