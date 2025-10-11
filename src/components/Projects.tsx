import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';
import { Project } from '../types';
import { useFadeIn, useStaggerAnimation, useHoverAnimation, useScaleIn } from '../hooks/useGSAP';

const Projects: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t } = useTranslation();
  
  // Animações GSAP
  const titleRef = useFadeIn(0.5, 0.8);
  const projectsGridRef = useStaggerAnimation(0.2);

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
      <h2 
        ref={titleRef}
        className="hover-glow bg-gradient-to-r from-text-secondary via-accent to-accent-light bg-clip-text text-transparent"
      >
        {t('projects.title')}
      </h2>
      <div 
        ref={projectsGridRef}
        className="projects"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

// Componente individual para cada projeto
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const hoverRef = useHoverAnimation();
  const scaleRef = useScaleIn(index * 0.2, 0.9);
  
  return (
    <article 
      ref={hoverRef}
      className="project-card hover-lift hover-glow group"
    >
      <div ref={scaleRef} className="h-full">
        <h3 className="shimmer bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent group-hover:animate-pulse">
          {project.title}
        </h3>
        {project.period && (
          <p className="text-muted text-sm font-medium mb-2">
            {project.period}
          </p>
        )}
        <p className="mb-4 leading-relaxed">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <TechTag key={tech} tech={tech} index={techIndex} />
          ))}
        </div>
      </div>
    </article>
  );
};

// Componente para cada tag de tecnologia
const TechTag: React.FC<{ tech: string; index: number }> = ({ tech, index }) => {
  const hoverRef = useHoverAnimation();
  
  return (
    <span 
      ref={hoverRef}
      className="tech-tag hover-scale group/tech"
    >
      <span className="relative z-10">{tech}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 rounded-md"></div>
    </span>
  );
};

export default Projects;
