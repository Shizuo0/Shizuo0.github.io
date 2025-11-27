import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';
import SEO from '../components/SEO';
import { Project } from '../types';

const ProjectsPage: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Projetos reais do GitHub
  const projects: Project[] = [
    {
      id: 'delivery-system',
      title: 'DeliverySystem',
      description: t('projects.delivery.description'),
      technologies: ['JavaScript', 'React', 'Node.js', 'MySQL', 'Express'],
      githubUrl: 'https://github.com/Shizuo0/DeliverySystem',
      category: 'fullstack',
    },
    {
      id: 'referral-system',
      title: 'ReferralSystem',
      description: t('projects.referral.description'),
      technologies: ['TypeScript', 'React', 'NestJS', 'SQLite', 'AI', 'JWT'],
      githubUrl: 'https://github.com/Shizuo0/ReferralSystem',
      category: 'fullstack',
    },
    {
      id: 'academic-system',
      title: 'AcademicSystem',
      description: t('projects.academic.description'),
      technologies: ['Java', 'MySQL', 'JDBC', 'Swing'],
      githubUrl: 'https://github.com/Shizuo0/AcademicSystem',
      category: 'backend',
    },
    {
      id: 'gym-management',
      title: 'GymManagement',
      description: t('projects.gym.description'),
      technologies: ['Java', 'Spring Boot', 'JavaSwing', 'MySQL'],
      githubUrl: 'https://github.com/Shizuo0/GymManagement',
      category: 'fullstack',
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: t('projects.portfolio.description'),
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Shizuo0/Shizuo0.github.io',
      category: 'frontend',
    },
  ];

  // Filtrar projetos
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => 
      p.technologies.some(tech => tech.toLowerCase() === activeFilter.toLowerCase()) ||
      p.category === activeFilter
    );
  }, [activeFilter, projects]);

  const filters = [
    { key: 'all', label: t('projects.filters.all') },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
  ];

  return (
    <>
      <SEO 
        title="Projetos | Paulo Shizuo"
        description="Portfólio de projetos desenvolvidos por Paulo Shizuo - Full Stack, Frontend e Backend."
      />
      <section id="projetos-page" className="projects-page">
      <div className="container reveal" ref={ref}>
        <h1>{t('projects.pageTitle')}</h1>
        <p className="page-subtitle">{t('projects.pageSubtitle')}</p>

        {/* Filtros */}
        <div className="filter-bar">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id} 
              className={`project-card-large animate-fadeInUp delay-${(index + 1) * 100}`}
            >
              <div className="project-card-header">
                <div className="project-icon">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="tech-tag"
                    onClick={() => setActiveFilter(tech)}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link to={`/projeto/${project.id}`} className="project-detail-link">
                {t('projects.viewDetails')}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ProjectsPage;
