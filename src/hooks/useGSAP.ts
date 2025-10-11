import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registrar plugins do GSAP
gsap.registerPlugin(ScrollTrigger);

interface UseGSAPAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scale' | 'rotate' | 'custom';
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  customAnimation?: (element: Element, tl: gsap.core.Timeline) => void;
}

export const useGSAPAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: UseGSAPAnimationOptions = {}
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      trigger = element,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
      pin = false,
      markers = false,
      animation = 'fadeIn',
      duration = 1,
      delay = 0,
      ease = 'power2.out',
      stagger = 0,
      customAnimation
    } = options;

    // Timeline para a animação
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration,
        ease
      }
    });

    // Definir animações pré-configuradas
    const animations = {
      fadeIn: () => {
        gsap.set(element, { opacity: 0 });
        tl.to(element, { opacity: 1, delay });
      },
      slideUp: () => {
        gsap.set(element, { y: 50, opacity: 0 });
        tl.to(element, { y: 0, opacity: 1, delay });
      },
      slideInLeft: () => {
        gsap.set(element, { x: -50, opacity: 0 });
        tl.to(element, { x: 0, opacity: 1, delay });
      },
      slideInRight: () => {
        gsap.set(element, { x: 50, opacity: 0 });
        tl.to(element, { x: 0, opacity: 1, delay });
      },
      scale: () => {
        gsap.set(element, { scale: 0.8, opacity: 0 });
        tl.to(element, { scale: 1, opacity: 1, delay });
      },
      rotate: () => {
        gsap.set(element, { rotation: -10, opacity: 0 });
        tl.to(element, { rotation: 0, opacity: 1, delay });
      },
      custom: () => {
        if (customAnimation) {
          customAnimation(element, tl);
        }
      }
    };

    // Aplicar stagger para elementos filhos se especificado
    if (stagger > 0) {
      const children = element.children;
      if (children.length > 0) {
        gsap.set(children, { opacity: 0, y: 30 });
        tl.to(children, {
          opacity: 1,
          y: 0,
          stagger,
          delay
        });
      }
    } else {
      // Executar animação escolhida
      animations[animation]();
    }

    // Configurar ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger,
      start,
      end,
      scrub,
      pin,
      markers,
      animation: tl,
      toggleActions: 'play none none reverse',
      onEnter: () => tl.play(),
      onLeave: () => tl.reverse(),
      onEnterBack: () => tl.play(),
      onLeaveBack: () => tl.reverse()
    });

    return () => {
      scrollTrigger.kill();
      tl.kill();
    };
  }, [options]);

  return ref;
};

// Hook para animações de hover
export const useGSAPHover = <T extends HTMLElement = HTMLDivElement>(
  hoverAnimation?: (element: Element) => void,
  leaveAnimation?: (element: Element) => void
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const defaultHover = (el: Element) => {
      gsap.to(el, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const defaultLeave = (el: Element) => {
      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseEnter = () => {
      (hoverAnimation || defaultHover)(element);
    };

    const handleMouseLeave = () => {
      (leaveAnimation || defaultLeave)(element);
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverAnimation, leaveAnimation]);

  return ref;
};

// Hook para animações de loading/entrada da página
export const usePageLoadAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Animar header
    tl.from('.site-header', {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    // Animar hero section
    tl.from('.hero h2', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.4');

    tl.from('.hero p', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.6');

    // Animar elementos com stagger
    tl.from('.reveal', {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.4');

    return () => {
      tl.kill();
    };
  }, []);
};

// Hook para scroll smoothing
export const useGSAPScrollSmoothing = () => {
  useEffect(() => {
    // Configurar scroll suave
    gsap.registerPlugin(ScrollTrigger);
    
    // Refresh ScrollTrigger quando necessário
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};