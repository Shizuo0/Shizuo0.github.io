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
      technologies: ['Kotlin', 'AndroidStudio', 'Firebase'],
    },
  ];

  return (
    <section id="projetos" className="container reveal" ref={ref}>
      <h2 className="animate-fadeInDown">{t('projects.title')}</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <article 
            key={project.id} 
            className={`project-card hover-lift hover-glow animate-fadeInUp delay-${(index + 1) * 100}`}
          >
            <h3 className="shimmer">{project.title}</h3>
            {project.period && <p className="text-muted animate-fadeIn">{project.period}</p>}
            <p className="animate-fadeInUp delay-200">{t(project.description)}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={tech} 
                  className={`tech-tag hover-scale animate-fadeInLeft delay-${techIndex * 100}`}
                >
                  {tech}
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
