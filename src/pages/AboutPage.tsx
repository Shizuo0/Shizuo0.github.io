import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';
import { useGitHub } from '../contexts/GitHubContext';
import GitHubStats from '../components/GitHubStats';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t } = useTranslation();
  const { user, stats } = useGitHub();

  const timeline = [
    {
      year: '2023',
      title: t('about.timeline.2023.title'),
      description: t('about.timeline.2023.description'),
    },
    {
      year: '2024',
      title: t('about.timeline.2024.title'),
      description: t('about.timeline.2024.description'),
    },
    {
      year: '2025',
      title: t('about.timeline.2025.title'),
      description: t('about.timeline.2025.description'),
    },
  ];

  const softSkills = [
    { icon: '🎯', skill: t('about.softSkills.problemSolving') },
    { icon: '🤝', skill: t('about.softSkills.teamwork') },
    { icon: '📚', skill: t('about.softSkills.continuousLearning') },
    { icon: '💬', skill: t('about.softSkills.communication') },
    { icon: '⏰', skill: t('about.softSkills.timeManagement') },
    { icon: '🔄', skill: t('about.softSkills.adaptability') },
  ];

  const interests = [
    { icon: '💻', interest: t('about.interests.coding') },
    { icon: '🎮', interest: t('about.interests.gaming') },
    { icon: '📖', interest: t('about.interests.learning') },
    { icon: '🎵', interest: t('about.interests.music') },
  ];

  return (
    <>
      <SEO 
        title="Sobre | Paulo Shizuo Vasconcelos Tatibana"
        description="Conheça Paulo Shizuo Vasconcelos Tatibana - Desenvolvedor Full Stack apaixonado por tecnologia e inovação."
      />
      <section className="about-page">
        <div className="container reveal" ref={ref}>
          <h1>{t('about.pageTitle')}</h1>
        
          {/* Bio Section */}
          <div className="about-bio-section">
            <div className="bio-card">
              <div className="bio-avatar">
                <img
                  src={user?.avatar_url || 'https://avatars.githubusercontent.com/u/209567232?v=4'}
                  alt="Avatar de Paulo Shizuo Vasconcelos Tatibana"
                  className="avatar-image"
                  style={{ width: 144, height: 144, borderRadius: '50%' }}
                />
              </div>
              <div className="bio-content">
                <h2>Paulo Shizuo Vasconcelos Tatibana</h2>
                <p className="bio-role">{t('about.role')}</p>
                <p className="bio-description">{user?.bio || t('about.bio')}</p>
                <p className="bio-description-secondary">{t('hero.description')}</p>
                <div className="bio-stats">
                  <div className="stat">
                    <span className="stat-number">{stats?.totalRepos || '5'}+</span>
                    <span className="stat-label">{t('about.stats.projects')}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{stats?.topLanguages.length || '10'}+</span>
                    <span className="stat-label">{t('about.stats.technologies')}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">2+</span>
                    <span className="stat-label">{t('about.stats.years')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Stats Section */}
          <div className="about-section">
            <h2>{t('github.title') || 'GitHub Stats'}</h2>
            <GitHubStats variant="full" showLanguages showActivity />
          </div>

          {/* Timeline Section */}
          <div className="about-section">
            <h2>{t('about.timeline.title')}</h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-year">{item.year}</span>
                  </div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="about-section">
            <h2>{t('about.softSkills.title')}</h2>
            <div className="skills-grid-about">
              {softSkills.map((item, index) => (
                <div key={index} className="soft-skill-card">
                  <span className="skill-icon">{item.icon}</span>
                  <span className="skill-name">{item.skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Section */}
          <div className="about-section">
            <h2>{t('about.interests.title')}</h2>
            <div className="interests-grid">
              {interests.map((item, index) => (
                <div key={index} className="interest-card">
                  <span className="interest-icon">{item.icon}</span>
                  <span className="interest-name">{item.interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
