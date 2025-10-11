import React from 'react';
import { gsap } from 'gsap';
import { useTranslation } from '../contexts/TranslationContext';
import { useGSAPAnimation, useGSAPHover } from '../hooks/useGSAP';

const HeroWithGSAP: React.FC = () => {
  const { t } = useTranslation();

  // Animações diferentes para cada elemento
  const titleRef = useGSAPAnimation({
    animation: 'slideUp',
    duration: 1,
    ease: 'power3.out'
  });

  const descriptionRef = useGSAPAnimation({
    animation: 'fadeIn',
    delay: 0.3,
    duration: 0.8
  });

  const cardRef = useGSAPAnimation({
    animation: 'slideInRight',
    delay: 0.6,
    duration: 1,
    ease: 'back.out(1.7)'
  });

  const listRef = useGSAPAnimation<HTMLUListElement>({
    animation: 'fadeIn',
    stagger: 0.15,
    delay: 1
  });

  // Hover effect para o card
  const hoverCardRef = useGSAPHover(
    (element) => {
      gsap.to(element, {
        y: -10,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(56, 189, 248, 0.2)',
        duration: 0.4,
        ease: 'power2.out'
      });
    },
    (element) => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  );

  return (
    <section id="sobre" className="hero container">
      <div className="hero-content">
        <h2 ref={titleRef}>{t('hero.title')}</h2>
        <p ref={descriptionRef}>
          {t('hero.description')}
        </p>
      </div>
      <div 
        className="hero-card"
        ref={(node) => {
          // Combinar refs para card e hover
          if (cardRef.current !== node) {
            (cardRef as any).current = node;
          }
          if (hoverCardRef.current !== node) {
            (hoverCardRef as any).current = node;
          }
        }}
      >
        <h3>{t('hero.summary.title')}</h3>
        <ul ref={listRef}>
          <li>{t('hero.summary.item1')}</li>
          <li>{t('hero.summary.item2')}</li>
          <li>{t('hero.summary.item3')}</li>
        </ul>
      </div>
    </section>
  );
};

export default HeroWithGSAP;