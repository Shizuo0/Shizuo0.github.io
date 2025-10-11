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
    <header className="fixed top-0 left-0 w-full z-50 bg-bg/90 backdrop-blur-md border-b border-white/10 animate-slide-in-down shadow-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#sobre"
              onClick={(e) => { e.preventDefault(); smoothScroll('#sobre'); }}
              className="text-text hover:text-accent transition-all duration-300 font-medium hover-lift relative group"
            >
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-light transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#skills"
              onClick={(e) => { e.preventDefault(); smoothScroll('#skills'); }}
              className="text-text hover:text-accent transition-all duration-300 font-medium hover-lift relative group"
            >
              {t('nav.skills')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-light transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#projetos"
              onClick={(e) => { e.preventDefault(); smoothScroll('#projetos'); }}
              className="text-text hover:text-accent transition-all duration-300 font-medium hover-lift relative group"
            >
              {t('nav.projects')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-light transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contato"
              onClick={(e) => { e.preventDefault(); smoothScroll('#contato'); }}
              className="text-text hover:text-accent transition-all duration-300 font-medium hover-lift relative group"
            >
              {t('nav.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent-light transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://github.com/Shizuo0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-all duration-300 hover-scale hover-glow p-2 rounded-lg hover:bg-glass group"
            >
              <GitHubIcon className="w-7 h-7 group-hover:animate-pulse" />
            </a>
            <a
              href="https://www.linkedin.com/in/paulo-vasconcelos-tatibana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition-all duration-300 hover-scale hover-glow p-2 rounded-lg hover:bg-glass group"
            >
              <LinkedInIcon className="w-7 h-7 group-hover:animate-pulse" />
            </a>
            <LanguageSelector />
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-text hover:text-accent hover-scale p-2 rounded-lg hover:bg-glass transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-slide-in-down">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#sobre"
                onClick={(e) => { e.preventDefault(); smoothScroll('#sobre'); }}
                className="text-text hover:text-accent transition-all duration-300 py-2 px-4 rounded-lg hover:bg-glass group"
              >
                {t('nav.about')}
              </a>
              <a 
                href="#skills"
                onClick={(e) => { e.preventDefault(); smoothScroll('#skills'); }}
                className="text-text hover:text-accent transition-all duration-300 py-2 px-4 rounded-lg hover:bg-glass group"
              >
                {t('nav.skills')}
              </a>
              <a 
                href="#projetos"
                onClick={(e) => { e.preventDefault(); smoothScroll('#projetos'); }}
                className="text-text hover:text-accent transition-all duration-300 py-2 px-4 rounded-lg hover:bg-glass group"
              >
                {t('nav.projects')}
              </a>
              <a 
                href="#contato"
                onClick={(e) => { e.preventDefault(); smoothScroll('#contato'); }}
                className="text-text hover:text-accent transition-all duration-300 py-2 px-4 rounded-lg hover:bg-glass group"
              >
                {t('nav.contact')}
              </a>
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/Shizuo0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-accent p-2 rounded-lg hover:bg-glass transition-all duration-300"
                >
                  <GitHubIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/paulo-vasconcelos-tatibana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text hover:text-accent p-2 rounded-lg hover:bg-glass transition-all duration-300"
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
