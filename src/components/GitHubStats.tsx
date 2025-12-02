import React from 'react';
import { useGitHub } from '../contexts/GitHubContext';
import { useTranslation } from '../contexts/TranslationContext';

interface GitHubStatsProps {
  variant?: 'full' | 'compact' | 'inline';
  showLanguages?: boolean;
  showActivity?: boolean;
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ 
  variant = 'full', 
  showLanguages = true,
  showActivity = false 
}) => {
  const { stats, user, loading, error } = useGitHub();
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className="github-stats-loading">
        <div className="loading-spinner"></div>
        <span>{t('github.loading') || 'Carregando estatísticas...'}</span>
      </div>
    );
  }

  if (error || !stats || !user) {
    return null;
  }

  if (variant === 'inline') {
    return (
      <div className="github-stats-inline">
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-stat-item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
          <span>{stats.totalRepos} repos</span>
        </a>
        <span className="github-stat-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span>{stats.totalStars} stars</span>
        </span>
        <span className="github-stat-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="18" r="3"/>
            <circle cx="6" cy="6" r="3"/>
            <circle cx="18" cy="6" r="3"/>
            <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/>
            <path d="M12 12v3"/>
          </svg>
          <span>{stats.totalForks} forks</span>
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="github-stats-compact">
        <div className="github-stats-row">
          <div className="github-stat-box">
            <span className="stat-value">{stats.totalRepos}</span>
            <span className="stat-label">{t('github.repos') || 'Repositórios'}</span>
          </div>
          <div className="github-stat-box">
            <span className="stat-value">{stats.totalStars}</span>
            <span className="stat-label">{t('github.stars') || 'Stars'}</span>
          </div>
          <div className="github-stat-box">
            <span className="stat-value">{stats.followers}</span>
            <span className="stat-label">{t('github.followers') || 'Seguidores'}</span>
          </div>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div className="github-stats-full">
      <div className="github-stats-header">
        <div className="github-profile">
          <img src={user.avatar_url} alt={user.name} className="github-avatar" />
          <div className="github-info">
            <h3>{user.name}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              @{user.login}
            </a>
          </div>
        </div>
      </div>

      <div className="github-stats-grid">
        <div className="github-stat-card">
          <div className="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.totalRepos}</span>
            <span className="stat-label">{t('github.repos') || 'Repositórios'}</span>
          </div>
        </div>

        <div className="github-stat-card">
          <div className="stat-icon star">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.totalStars}</span>
            <span className="stat-label">{t('github.stars') || 'Stars'}</span>
          </div>
        </div>

        <div className="github-stat-card">
          <div className="stat-icon fork">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="18" r="3"/>
              <circle cx="6" cy="6" r="3"/>
              <circle cx="18" cy="6" r="3"/>
              <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/>
              <path d="M12 12v3"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.totalForks}</span>
            <span className="stat-label">{t('github.forks') || 'Forks'}</span>
          </div>
        </div>

        <div className="github-stat-card">
          <div className="stat-icon followers">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div className="stat-content">
            <span className="stat-value">{stats.followers}</span>
            <span className="stat-label">{t('github.followers') || 'Seguidores'}</span>
          </div>
        </div>
      </div>

      {showLanguages && stats.topLanguages.length > 0 && (
        <div className="github-languages">
          <h4>{t('github.topLanguages') || 'Linguagens mais usadas'}</h4>
          <div className="languages-bar">
            {stats.topLanguages.map((lang, index) => (
              <div 
                key={lang.name}
                className={`language-segment lang-${index}`}
                style={{ flex: lang.count }}
                title={`${lang.name}: ${lang.count} repos`}
              />
            ))}
          </div>
          <div className="languages-legend">
            {stats.topLanguages.map((lang, index) => (
              <span key={lang.name} className={`language-item lang-${index}`}>
                <span className="language-dot"></span>
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {showActivity && stats.recentActivity.length > 0 && (
        <div className="github-activity">
          <h4>{t('github.recentActivity') || 'Atividade Recente'}</h4>
          <div className="activity-list">
            {stats.recentActivity.slice(0, 3).map(repo => (
              <a 
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="activity-item"
              >
                <span className="activity-repo">{repo.name}</span>
                <span className="activity-date">
                  {new Date(repo.pushed_at).toLocaleDateString('pt-BR')}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubStats;
