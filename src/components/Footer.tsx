import React, { useEffect } from 'react';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';

const Footer: React.FC = () => {
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
          © <span id="year"></span> Paulo Shizuo Vasconcelos Tatibana
        </div>
        <div className="footer-right">
          <div className="footer-social-links">
            <span className="footer-social-text">Redes Sociais: </span>
            
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