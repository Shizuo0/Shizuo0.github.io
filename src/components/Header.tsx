import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div>
            <h1>{t('header.title')}</h1>
            <p className="muted">{t('header.subtitle')}</p>
          </div>
        </div>
        <nav className="nav" role="navigation" aria-label="Menu principal">
          <a href="#sobre" aria-label="Ir para seção sobre">
            {t('nav.about')}
          </a>
          <a href="#skills" aria-label="Ir para seção de habilidades">
            {t('nav.skills')}
          </a>
          <a href="#projetos" aria-label="Ir para seção de projetos">
            {t('nav.projects')}
          </a>
          <a href="#contato" className="btn-outline" aria-label="Ir para seção de contato">
            {t('nav.contact')}
          </a>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
};

export default Header;
