import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../contexts/TranslationContext';
import { useTheme } from '../contexts/ThemeContext';
import LanguageSelector from './LanguageSelector';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import ThemeToggleIcon from './ThemeToggleIcon';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-bg/90 backdrop-blur-md border-b border-white/10 animate-slideInDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`transition-colors duration-300 font-medium ${isActive('/') ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/sobre"
              className={`transition-colors duration-300 font-medium ${isActive('/sobre') ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/habilidades"
              className={`transition-colors duration-300 font-medium ${isActive('/habilidades') ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}
            >
              {t('nav.skills')}
            </Link>
            <Link 
              to="/projetos"
              className={`transition-colors duration-300 font-medium ${isActive('/projetos') ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}
            >
              {t('nav.projects')}
            </Link>
            <Link 
              to="/contato"
              className={`transition-colors duration-300 font-medium ${isActive('/contato') ? 'text-accent' : 'text-gray-300 hover:text-accent'}`}
            >
              {t('nav.contact')}
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              <ThemeToggleIcon className="w-6 h-6" isDark={isDark} />
            </button>
            <a
              href="https://github.com/Shizuo0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/paulo-shizuo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6" />
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
              <Link 
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-center ${isActive('/') ? 'text-accent' : 'text-text hover:text-accent'}`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/sobre"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-center ${isActive('/sobre') ? 'text-accent' : 'text-text hover:text-accent'}`}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/habilidades"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-center ${isActive('/habilidades') ? 'text-accent' : 'text-text hover:text-accent'}`}
              >
                {t('nav.skills')}
              </Link>
              <Link 
                to="/projetos"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-center ${isActive('/projetos') ? 'text-accent' : 'text-text hover:text-accent'}`}
              >
                {t('nav.projects')}
              </Link>
              <Link 
                to="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 text-center ${isActive('/contato') ? 'text-accent' : 'text-text hover:text-accent'}`}
              >
                {t('nav.contact')}
              </Link>
              <div className="flex items-center justify-center gap-4 pt-3 border-t border-white/10 mt-2">
                <button
                  onClick={toggleTheme}
                  className="text-text hover:text-accent transition-colors duration-300"
                  aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
                >
                  <ThemeToggleIcon className="w-6 h-6" isDark={isDark} />
                </button>
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
