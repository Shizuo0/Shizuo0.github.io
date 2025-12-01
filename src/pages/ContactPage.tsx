import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../contexts/TranslationContext';
import GitHubIcon from '../components/GitHubIcon';
import LinkedInIcon from '../components/LinkedInIcon';
import SEO from '../components/SEO';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const ref = useIntersectionObserver();
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [sendStatus, setSendStatus] = useState<SendStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showEmailNotice, setShowEmailNotice] = useState(false);

  const email = 'paulosvtatibana@gmail.com';

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailNotice(true);
    setTimeout(() => setShowEmailNotice(false), 4000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      setErrorMessage('Preencha seu nome e mensagem, por favor.');
      setSendStatus('error');
      setTimeout(() => {
        setSendStatus('idle');
        setErrorMessage('');
      }, 3000);
      return;
    }

    // Verificar se EmailJS está configurado
    const isEmailJSConfigured = 
      EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && 
      EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' && 
      EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

    if (isEmailJSConfigured && formRef.current) {
      setSendStatus('sending');
      
      try {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
        
        setSendStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSendStatus('idle');
        }, 3000);
      } catch (error) {
        console.error('EmailJS error:', error);
        setSendStatus('error');
        setErrorMessage('Erro ao enviar. Tente novamente ou use o email direto.');
        
        setTimeout(() => {
          setSendStatus('idle');
          setErrorMessage('');
        }, 5000);
      }
    } else {
      // Fallback para mailto
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    }
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
      
      {/* Toast Notification */}
      {showEmailNotice && (
        <div className="toast-container">
          <div className="toast toast-info">
            <div className="toast-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
            </div>
            <div className="toast-content">
              <span className="toast-title">{t('contactPage.emailNotice.title') || 'Dica'}</span>
              <span className="toast-message">{t('contactPage.emailNotice') || 'Use o formulário ao lado para enviar sua mensagem!'}</span>
            </div>
            <button 
              className="toast-close"
              onClick={() => setShowEmailNotice(false)}
              aria-label="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <section className="contact-page">
      <div className="container reveal" ref={ref}>
        <h1>{t('contactPage.title')}</h1>
        <p className="page-subtitle">{t('contactPage.subtitle')}</p>

        <div className="contact-content">
          {/* Formulário */}
          <div className="contact-form-section">
            <h2>{t('contactPage.form.title')}</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('contactPage.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={sendStatus === 'sending'}
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
                  disabled={sendStatus === 'sending'}
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
                  disabled={sendStatus === 'sending'}
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
                  disabled={sendStatus === 'sending'}
                />
              </div>

              {/* Status feedback */}
              {sendStatus === 'error' && errorMessage && (
                <div className="form-error-message" style={{ color: '#ef4444', marginBottom: '1rem' }}>
                  {errorMessage}
                </div>
              )}
              
              {sendStatus === 'success' && (
                <div className="form-success-message" style={{ color: '#22c55e', marginBottom: '1rem' }}>
                  ✓ Mensagem enviada com sucesso!
                </div>
              )}

              <div className="form-actions">
                <button type="submit" className="btn-primary" disabled={sendStatus === 'sending'}>
                  {sendStatus === 'sending' ? (
                    <>
                      <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" opacity="0.25"/>
                        <path d="M4 12a8 8 0 018-8" opacity="0.75"/>
                      </svg>
                      Enviando...
                    </>
                  ) : sendStatus === 'success' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                      Enviado!
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4Z"/>
                        <path d="M22 2 11 13"/>
                      </svg>
                      {t('contactPage.form.send')}
                    </>
                  )}
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
                  onClick={handleEmailClick}
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
