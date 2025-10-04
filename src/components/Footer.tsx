import React, { useEffect } from 'react';

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
        <div className="muted small">Portfólio inspirado em currículo</div>
      </div>
    </footer>
  );
};

export default Footer;
