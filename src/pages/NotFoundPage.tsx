import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/TranslationContext';
import SEO from '../components/SEO';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title="Página não encontrada | Paulo Shizuo"
        description="A página que você está procurando não existe ou foi movida."
      />
      <section className="not-found-section">
        <div className="container">
          <div className="not-found-content reveal active">
            <div className="not-found-code">404</div>
            <h1>{t('notFound.title')}</h1>
            <p>{t('notFound.description')}</p>
            <div className="not-found-actions">
              <Link to="/" className="btn-primary">
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
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
                {t('notFound.backHome')}
              </Link>
              <Link to="/projetos" className="btn-outline">
                {t('notFound.viewProjects')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
