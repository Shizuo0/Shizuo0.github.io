import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';
import SEO from '../components/SEO';

const SkillsPage: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skillsPage.languages'),
      icon: '💻',
      skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'Ruby', 'Kotlin', 'GDScript'],
    },
    {
      title: t('skillsPage.frontend'),
      icon: '🎨',
      skills: ['React', 'Vite', 'Tailwind CSS', 'CSS3', 'HTML5'],
    },
    {
      title: t('skillsPage.backend'),
      icon: '⚙️',
      skills: ['Node.js', 'NestJS', 'Ruby on Rails', 'Spring Boot', 'Express'],
    },
    {
      title: t('skillsPage.databases'),
      icon: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
    },
    {
      title: t('skillsPage.tools'),
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Android Studio'],
    },
    {
      title: t('skillsPage.mobile'),
      icon: '📱',
      skills: ['Kotlin', 'Android', 'Firebase Auth'],
    },
  ];

  const stats = [
    { icon: '🎯', number: '7+', label: t('skillsPage.stats.languages') },
    { icon: '💡', number: '10+', label: t('skillsPage.stats.frameworks') },
    { icon: '📁', number: '5+', label: t('skillsPage.stats.projects') },
    { icon: '📚', number: '2+', label: t('skillsPage.stats.years') },
  ];

  const learningItems = [
    { icon: '⚛️', name: 'Next.js' },
    { icon: '☁️', name: 'AWS' },
    { icon: '📊', name: 'GraphQL' },
    { icon: '🤖', name: 'Machine Learning' },
  ];

  return (
    <>
      <SEO 
        title="Habilidades | Paulo Shizuo"
        description="Conheça as tecnologias e habilidades de Paulo Shizuo - TypeScript, React, Node.js e mais."
      />
      <section className="skills-page">
        <div className="container reveal" ref={ref}>
          <h1>{t('skillsPage.title')}</h1>
          <p className="page-subtitle">{t('skillsPage.subtitle')}</p>

          {/* Skills Categories Grid */}
          <div className="skills-categories-grid">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="skill-category-card"
              >
                <div className="skill-category-header">
                  <span className="skill-category-icon">{category.icon}</span>
                  <h2 className="skill-category-title">{category.title}</h2>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="skills-stats-section">
            <h2>{t('skillsPage.stats')}</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-icon">{stat.icon}</span>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Section */}
          <div className="skills-learning-section">
            <h2>{t('skillsPage.learning')}</h2>
            <div className="learning-grid">
              {learningItems.map((item, index) => (
                <div key={index} className="learning-item">
                  <span className="learning-icon">{item.icon}</span>
                  <span className="learning-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
