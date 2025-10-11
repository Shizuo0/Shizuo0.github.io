import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return elementRef;
};

// Hook para animações de entrada
export const useFadeIn = (delay = 0, duration = 1) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [delay, duration]);

  return elementRef;
};

// Hook para animações de slide
export const useSlideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'up', delay = 0) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const directions = {
        left: { x: -100, y: 0 },
        right: { x: 100, y: 0 },
        up: { x: 0, y: -100 },
        down: { x: 0, y: 100 },
      };

      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          ...directions[direction],
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [direction, delay]);

  return elementRef;
};

// Hook para animações de escala
export const useScaleIn = (delay = 0, scale = 0.8) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          scale,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [delay, scale]);

  return elementRef;
};

// Hook para animações de rotação
export const useRotateIn = (delay = 0, rotation = 180) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          rotation,
        },
        {
          opacity: 1,
          rotation: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [delay, rotation]);

  return elementRef;
};

// Hook para animações de texto
export const useTextReveal = (delay = 0) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const text = elementRef.current.textContent || '';
      elementRef.current.textContent = '';

      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay,
          onComplete: () => {
            // Animar cada caractere
            const chars = text.split('');
            elementRef.current!.innerHTML = chars
              .map(char => `<span style="display: inline-block; opacity: 0;">${char}</span>`)
              .join('');

            gsap.to(elementRef.current!.children, {
              opacity: 1,
              duration: 0.05,
              stagger: 0.02,
              ease: 'power2.out',
            });
          },
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [delay]);

  return elementRef;
};

// Hook para animações de hover
export const useHoverAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;

      const handleMouseEnter = () => {
        gsap.to(element, {
          scale: 1.05,
          y: -5,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return elementRef;
};

// Hook para animações de parallax
export const useParallax = (speed = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.to(elementRef.current, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, [speed]);

  return elementRef;
};

// Hook para animações de timeline
export const useTimeline = () => {
  const timelineRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    timelineRef.current = gsap.timeline();
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  return timelineRef.current;
};

// Hook para animações de stagger
export const useStaggerAnimation = (stagger = 0.1) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const children = containerRef.current.children;
      
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, [stagger]);

  return containerRef;
};

// Hook para animações de loading
export const useLoadingAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const tl = gsap.timeline({ repeat: -1 });
      
      tl.to(elementRef.current, {
        rotation: 360,
        duration: 1,
        ease: 'none',
      });

      return () => {
        tl.kill();
      };
    }
  }, []);

  return elementRef;
};

// Hook para animações de typing
export const useTypingAnimation = (text: string, speed = 0.05) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.textContent = '';
      
      const chars = text.split('');
      let index = 0;

      const typeChar = () => {
        if (index < chars.length) {
          elementRef.current!.textContent += chars[index];
          index++;
          setTimeout(typeChar, speed * 1000);
        }
      };

      typeChar();
    }
  }, [text, speed]);

  return elementRef;
};

// Hook para animações de morphing
export const useMorphAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;

      const handleMouseEnter = () => {
        gsap.to(element, {
          borderRadius: '50%',
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          borderRadius: '12px',
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return elementRef;
};

// Hook para animações de wave
export const useWaveAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;
      
      gsap.to(element, {
        y: -10,
        duration: 1,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return elementRef;
};

// Hook para animações de glow
export const useGlowAnimation = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const element = elementRef.current;
      
      gsap.to(element, {
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return elementRef;
};