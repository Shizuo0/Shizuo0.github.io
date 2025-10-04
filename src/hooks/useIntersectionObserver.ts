import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (threshold = 0.1, rootMargin = '0px') => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add staggered delay based on element position
            const rect = entry.boundingClientRect;
            const delay = Math.min(rect.top / 100, 0.5) * 1000; // Max 500ms delay
            
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          } else {
            // Remove the visible class when element leaves viewport
            entry.target.classList.remove('visible');
          }
        });
      },
      { 
        threshold,
        rootMargin 
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return ref;
};
