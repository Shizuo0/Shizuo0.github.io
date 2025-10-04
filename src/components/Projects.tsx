import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Project } from '../types';

const Projects: React.FC = () => {
  const ref = useIntersectionObserver();

  const projects: Project[] = [
    {
      id: '1',
      title: 'Startup - API para site e-commerce',
      description:
        'Implementei autenticação e controle de estoque usando o framework Ruby on Rails. Resolvendo issues no GitHub abrindo Pull Requests. Aplicação conteinerizada com Docker. Banco de dados em postgreSQL. Cobertura de testes: 100%',
      period: '07/2025 ~ 08/2025',
      technologies: ['Ruby on Rails', 'Docker', 'PostgreSQL', 'RSpec'],
    },
    {
      id: '2',
      title: 'Jogo 2D — Godot',
      description:
        'Jogo 2D em Godot Engine – foco em narrativa interativa. Programei um ESP-32 para servir como controle para o jogo.',
      technologies: ['Godot', 'GDScript', 'Game Design', 'ESP-32'],
    },
    {
      id: '3',
      title: 'App Mobile — Academia (Kotlin)',
      description:
        'Aplicativo mobile em Kotlin – app para academia universitária com cadastro de treinos e notificações.',
      technologies: ['Kotlin', 'AndroidStudio', 'SQLite'],
    },
  ];

  return (
    <section id="projetos" className="container reveal" ref={ref}>
      <h2>Projetos</h2>
      <div className="projects">
        {projects.map(project => (
          <article key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.period && project.company && (
              <p className="muted small">
                {project.company} • {project.period}
              </p>
            )}
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="small-link"
                aria-label={`Ver projeto ${project.title} no GitHub`}
              >
                Ver no GitHub
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
