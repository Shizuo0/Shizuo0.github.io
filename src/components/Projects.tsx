import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';
import { Project } from '../types';

const Projects: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: '1',
      title: t('projects.startup.title'),
      description: t('projects.startup.description'),
      period: t('projects.startup.period'),
      technologies: ['Ruby on Rails', 'Docker', 'PostgreSQL', 'RSpec'],
    },
    {
      id: '2',
      title: t('projects.game.title'),
      description: t('projects.game.description'),
      technologies: ['Godot', 'GDScript', 'Game Design', 'ESP-32'],
    },
    {
      id: '3',
      title: t('projects.mobile.title'),
      description: t('projects.mobile.description'),
      technologies: ['Kotlin', 'AndroidStudio', 'SQLite'],
    },
  ];

  return (
    <section id="projetos" className="container reveal" ref={ref}>
      <h2>{t('projects.title')}</h2>
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
            )
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
