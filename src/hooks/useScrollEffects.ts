import { useEffect } from 'react';

export const useScrollEffects = () => {
  useEffect(() => {
    // Create scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    // Header scroll effect
    const header = document.querySelector('.site-header');
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      // Update progress bar
      progressBar.style.width = `${scrollPercent}%`;
      
      // Update header
      if (header) {
        if (scrollTop > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    // Parallax effect for background
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('body::before, body::after');
      
      parallaxElements.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Throttled scroll handler
    let ticking = false;
    const updateScrollEffects = () => {
      handleScroll();
      handleParallax();
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });

    return () => {
      window.removeEventListener('scroll', requestTick);
      if (progressBar.parentNode) {
        progressBar.parentNode.removeChild(progressBar);
      }
    };
  }, []);
};
