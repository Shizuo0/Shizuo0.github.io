import React from 'react';
import { gsap } from 'gsap';
import { useTranslation } from '../contexts/TranslationContext';
import { useGSAPAnimation, useGSAPHover } from '../hooks/useGSAP';
import { Project } from '../types';

const ProjectsWithGSAP: React.FC = () => {
  const { t } = useTranslation();

  // Animação para o título da seção
  const titleRef = useGSAPAnimation({
    animation: 'slideUp',
    duration: 0.8,
    ease: 'power2.out'
  });

  // Animação para os cards com stagger
  const projectsRef = useGSAPAnimation({
    animation: 'slideUp',
    stagger: 0.2,
    delay: 0.3,
    duration: 1,
    ease: 'power3.out'
  });

  // Hook de hover para cada card individualmente
  const useProjectHover = () => useGSAPHover(
    (element) => {
      gsap.to(element, {
        y: -15,
        scale: 1.03,
        rotationY: 5,
        boxShadow: '0 25px 50px rgba(56, 189, 248, 0.25)',
        duration: 0.5,
        ease: 'power2.out'
      });
      
      // Animar tech tags
      gsap.to(element.querySelectorAll('.tech-tag'), {
        scale: 1.1,
        stagger: 0.05,
        duration: 0.3,
        ease: 'back.out(1.7)'
      });
    },
    (element) => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        rotationY: 0,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        duration: 0.5,
        ease: 'power2.out'
      });

      // Voltar tech tags ao normal
      gsap.to(element.querySelectorAll('.tech-tag'), {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  );

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
    <section id="projetos" className="container">
      <h2 ref={titleRef}>{t('projects.title')}</h2>
      <div className="projects" ref={projectsRef}>
        {projects.map((project) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const hoverRef = useProjectHover();
          
          return (
            <article 
              key={project.id} 
              className="project-card"
              ref={hoverRef}
              style={{
                // Adicionar propriedades CSS para melhor performance de animação
                willChange: 'transform, box-shadow',
                transformStyle: 'preserve-3d'
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.period && project.company && (
                <p className="muted small">
                  {project.company} • {project.period}
                </p>
              )}
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="tech-tag"
                    style={{
                      willChange: 'transform'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsWithGSAP;