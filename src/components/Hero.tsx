import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';

const Hero: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t } = useTranslation();

  return (
    <section id="sobre" className="hero container reveal" ref={ref}>
      <div className="hero-content">
        <h2>{t('hero.title')}</h2>
        <p>
          {t('hero.description')}
        </p>
      </div>
      <div className="hero-card">
        <h3>{t('hero.summary.title')}</h3>
        <ul>
          <li>{t('hero.summary.item1')}</li>
          <li>{t('hero.summary.item2')}</li>
          <li>{t('hero.summary.item3')}</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
