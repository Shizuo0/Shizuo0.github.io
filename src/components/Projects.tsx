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
      title: t('projects.referral.title'),
      description: t('projects.referral.description'),
      technologies: ['NestJS', 'TypeORM', 'JWT', 'React', 'Vite', 'SQLite', 'TypeScript'],
    },
    {
      id: '2',
      title: t('projects.api-ecommerce.title'),
      description: t('projects.api-ecommerce.description'),
      technologies: ['Ruby on Rails', 'Docker', 'PostgreSQL', 'RSpec'],
    },
    {
      id: '3',
      title: t('projects.mobile.title'),
      description: t('projects.mobile.description'),
      technologies: ['Kotlin', 'AndroidStudio', 'Firebase'],
    },
    {
      id: '4',
      title: t('projects.game.title'),
      description: t('projects.game.description'),
      technologies: ['Godot', 'GDScript', 'Game Design', 'ESP-32'],
    },
  ];

  return (
    <section id="projetos" className="container reveal" ref={ref}>
      <h2>{t('projects.title')}</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <article 
            key={project.id} 
            className={`project-card animate-fadeInUp delay-${(index + 1) * 100}`}
          >
            <h3>{project.title}</h3>
            {project.period && <p className="text-muted">{project.period}</p>}
            <p>{t(project.description)}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={tech} 
                  className={`tech-tag animate-fadeInLeft delay-${techIndex * 100}`}
                >
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
