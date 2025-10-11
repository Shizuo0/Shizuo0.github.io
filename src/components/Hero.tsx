import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { useFadeIn, useSlideIn, useScaleIn, useTextReveal, useHoverAnimation } from '../hooks/useGSAP';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  // Animações GSAP
  const titleRef = useTextReveal(0.5);
  const subtitleRef = useFadeIn(1, 0.8);
  const descriptionRef = useFadeIn(1.5, 0.8);
  const cardRef = useScaleIn(2, 0.9);
  const scrollRef = useHoverAnimation();

  return (
    <section 
      id="sobre" 
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Nome Completo */}
        <div className="mb-8">
          <h1 
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-secondary mb-2 hover-glow bg-gradient-to-r from-text-secondary via-accent to-accent-light bg-clip-text text-transparent"
          >
            Paulo Shizuo Vasconcelos Tatibana
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg sm:text-xl text-muted"
          >
            Computer Scientist • Developer
          </p>
        </div>

        {/* Description */}
        <p 
          ref={descriptionRef}
          className="text-base sm:text-lg text-text max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t('hero.description')}
        </p>

        {/* Card de Competências */}
        <div className="max-w-2xl mx-auto mb-12">
          <div 
            ref={cardRef}
            className="bg-glass backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover-lift hover-glow group"
          >
            <h3 className="text-xl font-bold text-text-secondary mb-4 animate-pulse bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              {t('hero.summary.title')}
            </h3>
            <ul className="text-left space-y-3 text-text">
              <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 animate-heart-beat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('hero.summary.item1')}</span>
              </li>
              <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 animate-heart-beat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('hero.summary.item2')}</span>
              </li>
              <li className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 animate-heart-beat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('hero.summary.item3')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div 
            ref={scrollRef}
            className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2 hover-glow group cursor-pointer"
          >
            <div className="w-1 h-3 bg-gradient-to-b from-accent to-accent-light rounded-full animate-pulse group-hover:animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
