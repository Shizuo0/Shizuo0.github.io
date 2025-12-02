import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';
import SEO from '../components/SEO';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const ref = useIntersectionObserver();
  const { t } = useTranslation();

  // Dados detalhados dos projetos
  const projectsData: Record<string, ProjectData> = {
    'delivery-system': {
      id: 'delivery-system',
      title: 'DeliverySystem',
      description: t('projects.delivery.description'),
      longDescription: t('projects.delivery.longDescription'),
      technologies: ['JavaScript', 'React', 'Node.js', 'MySQL', 'Express', 'REST API'],
      features: [
        t('projects.delivery.feature1'),
        t('projects.delivery.feature2'),
        t('projects.delivery.feature3'),
        t('projects.delivery.feature4'),
      ],
      githubUrl: 'https://github.com/Shizuo0/DeliverySystem',
      category: 'fullstack',
      status: 'completed',
    },
    'referral-system': {
      id: 'referral-system',
      title: 'ReferralSystem',
      description: t('projects.referral.description'),
      longDescription: t('projects.referral.longDescription'),
      technologies: ['TypeScript', 'React', 'NestJS', 'SQLite', 'AI', 'JWT', 'TypeORM'],
      features: [
        t('projects.referral.feature1'),
        t('projects.referral.feature2'),
        t('projects.referral.feature3'),
        t('projects.referral.feature4'),
      ],
      githubUrl: 'https://github.com/Shizuo0/ReferralSystem',
      category: 'fullstack',
      status: 'completed',
    },
    'academic-system': {
      id: 'academic-system',
      title: 'AcademicSystem',
      description: t('projects.academic.description'),
      longDescription: t('projects.academic.longDescription'),
      technologies: ['Java', 'MySQL', 'JDBC', 'Console', 'MVC'],
      features: [
        t('projects.academic.feature1'),
        t('projects.academic.feature2'),
        t('projects.academic.feature3'),
        t('projects.academic.feature4'),
      ],
      githubUrl: 'https://github.com/Shizuo0/AcademicSystem',
      category: 'backend',
      status: 'completed',
    },
    'gym-management': {
      id: 'gym-management',
      title: 'GymManagement',
      description: t('projects.gym.description'),
      longDescription: t('projects.gym.longDescription'),
      technologies: ['Java', 'Spring Boot', 'JavaSwing', 'MySQL', 'JPA', 'Hibernate'],
      features: [
        t('projects.gym.feature1'),
        t('projects.gym.feature2'),
        t('projects.gym.feature3'),
        t('projects.gym.feature4'),
      ],
      githubUrl: 'https://github.com/Shizuo0/GymManagement',
      category: 'fullstack',
      status: 'completed',
    },
    'portfolio': {
      id: 'portfolio',
      title: 'Portfolio',
      description: t('projects.portfolio.description'),
      longDescription: t('projects.portfolio.longDescription'),
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'CSS3', 'React Router'],
      features: [
        t('projects.portfolio.feature1'),
        t('projects.portfolio.feature2'),
        t('projects.portfolio.feature3'),
        t('projects.portfolio.feature4'),
      ],
      githubUrl: 'https://github.com/Shizuo0/Shizuo0.github.io',
      category: 'frontend',
      status: 'in-progress',
    },
  };

  const project = id ? projectsData[id] : null;

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return t('projects.status.completed');
      case 'in-progress': return t('projects.status.inProgress');
      case 'planned': return t('projects.status.planned');
      default: return status;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'completed': return 'status-completed';
      case 'in-progress': return 'status-progress';
      case 'planned': return 'status-planned';
      default: return '';
    }
  };

  return (
    <>
      <SEO 
        title={`${project.title} | Paulo Shizuo`}
        description={project.description}
      />
      <section className="project-detail-page">
        <div className="container reveal" ref={ref}>
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link to="/">{t('nav.home')}</Link>
            <span className="separator">/</span>
            <Link to="/projetos">{t('nav.projects')}</Link>
            <span className="separator">/</span>
            <span className="current">{project.title}</span>
          </nav>

          {/* Hero do Projeto */}
          <div className="project-hero">
            <div className="project-hero-content">
              <div className="project-meta">
                <span className={`project-status ${getStatusClass(project.status)}`}>
                  {getStatusLabel(project.status)}
                </span>
                <span className="project-category">{project.category}</span>
              </div>
              <h1>{project.title}</h1>
              <p className="project-description">{project.longDescription}</p>
            
              <div className="project-actions">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {t('projects.viewCode')}
                </a>
                <Link to="/projetos" className="btn-outline">
                  {t('projects.backToProjects')}
                </Link>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="project-section">
            <h2>{t('projects.techStack')}</h2>
            <div className="tech-stack-grid">
              {project.technologies.map((tech) => (
                <div key={tech} className="tech-stack-item">
                  <span className="tech-name">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="project-section">
            <h2>{t('projects.features')}</h2>
            <div className="features-grid">
              {project.features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
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
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
