import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/TranslationContext';
import { useGitHub } from '../contexts/GitHubContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import GitHubStats from '../components/GitHubStats';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { user, stats } = useGitHub();
  const ref = useIntersectionObserver();

  const sectionCards = [
    {
      id: 'sobre',
      icon: '👤',
      title: t('nav.about'),
      description: t('home.about.description') || 'Conheça minha jornada, formação e o que me motiva como desenvolvedor.',
      stat: '2+ anos',
      link: '/sobre',
    },
    {
      id: 'habilidades',
      icon: '⚡',
      title: t('nav.skills'),
      description: t('home.skills.description') || 'Tecnologias e ferramentas que utilizo no dia a dia do desenvolvimento.',
      stat: stats ? `${stats.topLanguages.length}+ linguagens` : '...',
      link: '/habilidades',
    },
    {
      id: 'projetos',
      icon: '🚀',
      title: t('nav.projects'),
      description: t('home.projects.description') || 'Explore meus projetos de desenvolvimento web, mobile e sistemas completos.',
      stat: stats ? `${stats.totalRepos} repos` : '...',
      link: '/projetos',
    },
    {
      id: 'contato',
      icon: '✉️',
      title: t('nav.contact'),
      description: t('home.contact.description') || 'Vamos conversar! Estou disponível para oportunidades e projetos.',
      stat: t('contactPage.availability.status') || 'Disponível',
      link: '/contato',
    },
  ];

  return (
    <>
      <SEO />
      <section className="home-intro">
        <div className="container reveal" ref={ref}>
          {/* Hero Section */}
          <div className="intro-hero">
            <img 
              src={user?.avatar_url || 'https://avatars.githubusercontent.com/u/209567232?v=4'}
              alt="Paulo Shizuo Vasconcelos Tatibana"
              className="intro-avatar"
            />
            <h1>{t('header.title')}</h1>
            <p className="intro-role">{t('hero.title')}</p>
            <p className="intro-bio">
              {t('hero.description')}
            </p>
            
            {/* GitHub Stats Inline */}
            <div className="intro-github-stats">
              <GitHubStats variant="inline" />
            </div>

            {/* Quick Links */}
            <div className="quick-links">
              <a 
                href="https://github.com/Shizuo0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="quick-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/paulo-shizuo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="quick-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <Link to="/contato" className="quick-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>{t('nav.contact')}</span>
              </Link>
            </div>
          </div>

          {/* Section Cards */}
          <div className="section-cards">
            {sectionCards.map((card) => (
              <Link key={card.id} to={card.link} className="section-card">
                <div className="section-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="section-card-footer">
                  <span className="section-card-stat">
                    {card.stat}
                  </span>
                  <span className="section-card-link">
                    <span>{t('projects.viewDetails') || 'Ver mais'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* GitHub Stats Full (opcional - pode descomentar) */}
          {/* 
          <div style={{ marginTop: 'var(--spacing-3xl)' }}>
            <GitHubStats variant="full" showLanguages showActivity />
          </div>
          */}
        </div>
      </section>
    </>
  );
};

export default HomePage;
