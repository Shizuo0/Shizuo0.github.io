import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="sobre" 
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Nome Completo */}
        <div className="mb-8 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-secondary mb-2 hover-glow">
            Paulo Shizuo Vasconcelos Tatibana
          </h1>
          <p className="text-lg sm:text-xl text-muted animate-fadeInUp delay-200">
            Computer Scientist • Developer
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-text max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp delay-300">
          {t('hero.description')}
        </p>

        {/* Card de Competências */}
        <div className="max-w-2xl mx-auto mb-12 animate-zoomIn delay-400">
          <div className="bg-glass backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover-lift hover-glow">
            <h3 className="text-xl font-bold text-text-secondary mb-4 animate-pulse">
              {t('hero.summary.title')}
            </h3>
            <ul className="text-left space-y-3 text-text">
              <li className="flex items-start gap-3 animate-fadeInLeft delay-100">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 animate-heartBeat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('hero.summary.item1')}</span>
              </li>
              <li className="flex items-start gap-3 animate-fadeInLeft delay-200">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 animate-heartBeat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('hero.summary.item2')}</span>
              </li>
              <li className="flex items-start gap-3 animate-fadeInLeft delay-300">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 animate-heartBeat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t('hero.summary.item3')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2 hover-glow">
            <div className="w-1 h-3 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
