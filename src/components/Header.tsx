import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <div>
            <h1>Paulo Shizuo Vasconcelos Tatibana</h1>
            <p className="muted">Cientista da Computação • Developer</p>
          </div>
        </div>
        <nav className="nav" role="navigation" aria-label="Menu principal">
          <a href="#sobre" aria-label="Ir para seção sobre">
            Sobre
          </a>
          <a href="#skills" aria-label="Ir para seção de habilidades">
            Skills
          </a>
          <a href="#projetos" aria-label="Ir para seção de projetos">
            Projetos
          </a>
          <a href="#contato" className="btn-outline" aria-label="Ir para seção de contato">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
