import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="sobre" 
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Grid Layout: Nome/Descrição à esquerda, Quick Summary à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Coluna Esquerda: Nome e Descrição (2/3 do espaço) */}
          <div className="lg:col-span-2 text-center lg:text-left">
            {/* Nome Completo */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-secondary mb-2 break-words">
                Paulo Shizuo Vasconcelos Tatibana
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted">
                {t('header.subtitle')}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-text leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* Coluna Direita: Card de Competências (1/3 do espaço) */}
          <div className="animate-zoomIn delay-400 w-full">
            <div className="bg-glass backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:border-accent/50 transition-all duration-300 lg:sticky lg:top-24">
              <h3 className="text-lg sm:text-xl font-bold text-text-secondary mb-3 sm:mb-4">
                {t('hero.summary.title')}
              </h3>
              <ul className="text-left space-y-2 sm:space-y-3 text-text">
                <li className="flex items-start gap-2 sm:gap-3 animate-fadeInLeft delay-100">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0 animate-heartBeat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">{t('hero.summary.item1')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 animate-fadeInLeft delay-200">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0 animate-heartBeat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">{t('hero.summary.item2')}</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 animate-fadeInLeft delay-300">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent mt-0.5 flex-shrink-0 animate-heartBeat" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">{t('hero.summary.item3')}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
