import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    delay = 0,
    direction = 'up',
    distance = 20,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';

    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  return {
    ref,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: getTransform(),
      transition: 'opacity 600ms ease-out, transform 600ms ease-out',
    },
  };
};
