import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import TranslationIcon from './TranslationIcon';

const LanguageSelector: React.FC = () => {
  const { language, toggleLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: '🇺🇸',
      label: 'United States'
    },
    {
      code: 'pt',
      name: 'Português',
      flag: '🇧🇷',
      label: 'Brasil'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    if (langCode !== language) {
      toggleLanguage();
    }
    setIsOpen(false);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Selecionar idioma"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="language-button-content">
          <span className="language-flag">{currentLanguage?.flag}</span>
          <span className="language-name">{currentLanguage?.name}</span>
          <TranslationIcon className="language-icon" />
        </div>
        <div className={`language-arrow ${isOpen ? 'open' : ''}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div className={`language-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="language-dropdown-content">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(lang.code)}
              aria-label={`Selecionar ${lang.name}`}
            >
              <span className="language-option-flag">{lang.flag}</span>
              <div className="language-option-text">
                <span className="language-option-name">{lang.name}</span>
                <span className="language-option-label">{lang.label}</span>
              </div>
              {language === lang.code && (
                <div className="language-option-check">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.5 4.5L6 12L2.5 8.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
