import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';
import { useGitHub } from '../contexts/GitHubContext';
import SEO from '../components/SEO';
import { Project } from '../types';

const ProjectsPage: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t } = useTranslation();
  const { getRepoByName } = useGitHub();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Projetos reais do GitHub com mapeamento para nomes de repos
  const projectsData: (Project & { repoName?: string })[] = [
    {
      id: 'delivery-system',
      title: 'DeliverySystem',
      repoName: 'DeliverySystem',
      description: t('projects.delivery.description'),
      technologies: ['JavaScript', 'React', 'Node.js', 'MySQL', 'Express'],
      githubUrl: 'https://github.com/Shizuo0/DeliverySystem',
      category: 'fullstack',
    },
    {
      id: 'referral-system',
      title: 'ReferralSystem',
      repoName: 'ReferralSystem',
      description: t('projects.referral.description'),
      technologies: ['TypeScript', 'React', 'NestJS', 'SQLite', 'AI', 'JWT'],
      githubUrl: 'https://github.com/Shizuo0/ReferralSystem',
      category: 'fullstack',
    },
    {
      id: 'academic-system',
      title: 'AcademicSystem',
      repoName: 'AcademicSystem',
      description: t('projects.academic.description'),
      technologies: ['Java', 'MySQL', 'JDBC', 'Console'],
      githubUrl: 'https://github.com/Shizuo0/AcademicSystem',
      category: 'backend',
    },
    {
      id: 'gym-management',
      title: 'GymManagement',
      repoName: 'GymManagement',
      description: t('projects.gym.description'),
      technologies: ['Java', 'Spring Boot', 'JavaSwing', 'MySQL'],
      githubUrl: 'https://github.com/Shizuo0/GymManagement',
      category: 'fullstack',
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      repoName: 'Shizuo0.github.io',
      description: t('projects.portfolio.description'),
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Shizuo0/Shizuo0.github.io',
      category: 'frontend',
    },
  ];

  // Enriquecer projetos com dados do GitHub
  const projects = projectsData.map(project => {
    const repoData = project.repoName ? getRepoByName(project.repoName) : undefined;
    return {
      ...project,
      stars: repoData?.stargazers_count || 0,
      forks: repoData?.forks_count || 0,
      updatedAt: repoData?.pushed_at || null,
      language: repoData?.language || null,
    };
  });

  // Filtrar projetos
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => 
      p.technologies.some(tech => tech.toLowerCase() === activeFilter.toLowerCase()) ||
      p.category === activeFilter,
    );
  }, [activeFilter, projects]);

  const filters = [
    { key: 'all', label: t('projects.filters.all') },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
  ];

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric', 
    });
  };

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
                <span>{filter.label}</span>
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
              
                {/* GitHub Stats */}
                <div className="project-github-stats">
                  <span className="project-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    {project.stars}
                  </span>
                  <span className="project-stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="18" r="3"/>
                      <circle cx="6" cy="6" r="3"/>
                      <circle cx="18" cy="6" r="3"/>
                      <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/>
                      <path d="M12 12v3"/>
                    </svg>
                    {project.forks}
                  </span>
                  {project.updatedAt && (
                    <span className="project-stat project-date">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {formatDate(project.updatedAt)}
                    </span>
                  )}
                </div>
              
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="tech-tag"
                      onClick={() => setActiveFilter(tech)}
                    >
                      <span>{tech}</span>
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
