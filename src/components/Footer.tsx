import React, { useEffect } from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>
        <div className="footer-right">
          <div className="footer-social-links">
            <span className="footer-social-text">{t('footer.social')}</span>
            
            <a
              href="https://github.com/Shizuo0"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Abrir perfil do GitHub em nova aba"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/paulo-shizuo"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Abrir perfil do LinkedIn em nova aba"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;