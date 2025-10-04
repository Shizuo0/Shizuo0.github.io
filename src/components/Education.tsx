import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';

const Education: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t } = useTranslation();

  return (
    <section id="formacao" className="container reveal" ref={ref}>
      <h2>{t('education.title')}</h2>
      <div className="card">
        <h3>{t('education.degree')}</h3>
        <p>{t('education.institution')}</p>
      </div>
    </section>
  );
};

export default Education;
