import React, { useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import LanguageSelector from './LanguageSelector';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const smoothScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg/90 backdrop-blur-md border-b border-white/10 animate-slideInDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#sobre"
              onClick={(e) => { e.preventDefault(); smoothScroll('#sobre'); }}
              className="text-text hover:text-accent transition-colors duration-300 font-medium"
            >
              {t('nav.about')}
            </a>
            <a 
              href="#skills"
              onClick={(e) => { e.preventDefault(); smoothScroll('#skills'); }}
              className="text-text hover:text-accent transition-colors duration-300 font-medium"
            >
              {t('nav.skills')}
            </a>
            <a 
              href="#projetos"
              onClick={(e) => { e.preventDefault(); smoothScroll('#projetos'); }}
              className="text-text hover:text-accent transition-colors duration-300 font-medium"
            >
              {t('nav.projects')}
            </a>
            <a 
              href="#contato"
              onClick={(e) => { e.preventDefault(); smoothScroll('#contato'); }}
              className="text-text hover:text-accent transition-colors duration-300 font-medium"
            >
              {t('nav.contact')}
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://github.com/Shizuo0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/paulo-shizuo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <LanguageSelector />
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-text hover:text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#sobre"
                onClick={(e) => { e.preventDefault(); smoothScroll('#sobre'); }}
                className="text-text hover:text-accent py-2 text-center"
              >
                {t('nav.about')}
              </a>
              <a 
                href="#skills"
                onClick={(e) => { e.preventDefault(); smoothScroll('#skills'); }}
                className="text-text hover:text-accent py-2 text-center"
              >
                {t('nav.skills')}
              </a>
              <a 
                href="#projetos"
                onClick={(e) => { e.preventDefault(); smoothScroll('#projetos'); }}
                className="text-text hover:text-accent py-2 text-center"
              >
                {t('nav.projects')}
              </a>
              <a 
                href="#contato"
                onClick={(e) => { e.preventDefault(); smoothScroll('#contato'); }}
                className="text-text hover:text-accent py-2 text-center"
              >
                {t('nav.contact')}
              </a>
              <div className="flex items-center justify-center gap-4 pt-3 border-t border-white/10 mt-2">
                <a
                  href="https://github.com/Shizuo0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-accent transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/paulo-vasconcelos-tatibana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-accent transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-6 h-6" />
                </a>
                <LanguageSelector />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
