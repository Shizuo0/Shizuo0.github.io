import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';
import GitHubIcon from '../components/GitHubIcon';
import LinkedInIcon from '../components/LinkedInIcon';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);

  const email = 'paulosvtatibana@gmail.com';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <>
      <SEO 
        title="Contato | Paulo Shizuo"
        description="Entre em contato com Paulo Shizuo - Desenvolvedor Full Stack disponível para projetos."
      />
      <section className="contact-page">
      <div className="container reveal" ref={ref}>
        <h1>{t('contactPage.title')}</h1>
        <p className="page-subtitle">{t('contactPage.subtitle')}</p>

        <div className="contact-content">
          {/* Formulário */}
          <div className="contact-form-section">
            <h2>{t('contactPage.form.title')}</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('contactPage.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contactPage.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{t('contactPage.form.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('contactPage.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"/>
                    <path d="M22 2 11 13"/>
                  </svg>
                  {t('contactPage.form.send')}
                </button>
                <button type="button" onClick={copyEmail} className="btn-outline">
                  {copied ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                      {t('contactPage.form.copied')}
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                      </svg>
                      {t('contactPage.form.copy')}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="contact-info-section">
            {/* Connect Card */}
            <div className="connect-card">
              <h2>{t('contactPage.connect.title')}</h2>
              <div className="social-links-grid">
                <a
                  href="https://github.com/Shizuo0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  <div className="social-icon">
                    <GitHubIcon className="w-6 h-6" />
                  </div>
                  <div className="social-label">
                    <span className="social-name">{t('contactPage.connect.github')}</span>
                    <span className="social-handle">@Shizuo0</span>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/paulo-shizuo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  <div className="social-icon">
                    <LinkedInIcon className="w-6 h-6" />
                  </div>
                  <div className="social-label">
                    <span className="social-name">{t('contactPage.connect.linkedin')}</span>
                    <span className="social-handle">Paulo Shizuo</span>
                  </div>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="social-link-item"
                >
                  <div className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div className="social-label">
                    <span className="social-name">{t('contactPage.connect.email')}</span>
                    <span className="social-handle">{email}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Card */}
            <div className="availability-card">
              <div className="availability-indicator">
                <span className="availability-dot"></span>
                <span className="availability-status">{t('contactPage.availability.status')}</span>
              </div>
              <p className="availability-text">{t('contactPage.availability.text')}</p>
            </div>

            {/* Response Time */}
            <div className="response-card">
              <span className="response-icon">⏱️</span>
              <div className="response-info">
                <span className="response-label">{t('contactPage.response.label')}</span>
                <span className="response-time">{t('contactPage.response.time')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactPage;
