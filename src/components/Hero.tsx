import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const ref = useIntersectionObserver();

  return (
    <section id="sobre" className="hero container reveal" ref={ref}>
      <div className="hero-content">
        <h2>Estudante de Ciências da Computação</h2>
        <p>
        Estudante de Ciências da Computação, com experiência prática em
        desenvolvimento de APIs, web e aplicações mobile. Busco
        oportunidades para crescer como desenvolvedor e contribuir em
        projetos inovadores.
        </p>
        <p className="contact-quick">
          <strong>Email:</strong>{' '}
          <a href="mailto:paulosvtatibana@gmail.com" aria-label="Enviar email para Paulo">
            paulosvtatibana@gmail.com
          </a>
          &nbsp;•&nbsp;
          <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/Shizuo0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir perfil do GitHub em nova aba"
          >
            github.com/Shizuo0
          </a>
        </p>
      </div>
      <div className="hero-card">
        <h3>Resumo rápido</h3>
        <ul>
          <li>Desenvolvimento Web e mobile (TypeScript, React, Ruby on Rails)</li>
          <li>Programação orientada a objetos, bancos (Postgres, MySQL)</li>
          <li>Docker, Git/GitHub, testes com cobertura</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
