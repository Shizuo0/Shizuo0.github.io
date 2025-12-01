import React, { useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useContactForm } from '../hooks/useContactForm';
import { useTranslation } from '../contexts/TranslationContext';

const Contact: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t, language } = useTranslation();
  const { 
    formRef,
    formData, 
    copyButtonText, 
    sendStatus,
    errorMessage,
    handleInputChange, 
    handleSubmit, 
    handleCopyEmail, 
    updateCopyButtonText 
  } = useContactForm();

  useEffect(() => {
    updateCopyButtonText(t('contact.copy'));
  }, [language, t, updateCopyButtonText]);

  const getButtonContent = () => {
    switch (sendStatus) {
      case 'sending':
        return (
          <>
            <svg className="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('contact.sending') || 'Enviando...'}
          </>
        );
      case 'success':
        return (
          <>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
            {t('contact.sent') || 'Enviado!'}
          </>
        );
      case 'error':
        return t('contact.send');
      default:
        return t('contact.send');
    }
  };

  return (
    <section id="contato" className="container contact-section reveal" ref={ref}>
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.description')}</p>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
        <label htmlFor="name">
          {t('contact.name')}
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            aria-describedby="name-error"
            disabled={sendStatus === 'sending'}
          />
        </label>

        <label htmlFor="email">
          {t('contact.email') || 'Email'}
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-describedby="email-error"
            disabled={sendStatus === 'sending'}
          />
        </label>

        <label htmlFor="subject">
          {t('contact.subject')}
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            aria-describedby="subject-error"
            disabled={sendStatus === 'sending'}
          />
        </label>

        <label htmlFor="message">
          {t('contact.message')}
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            required
            aria-describedby="message-error"
            disabled={sendStatus === 'sending'}
          />
        </label>

        {/* Status feedback */}
        {sendStatus === 'error' && errorMessage && (
          <div className="form-error-message">
            {errorMessage}
          </div>
        )}
        
        {sendStatus === 'success' && (
          <div className="form-success-message">
            {t('contact.successMessage') || 'Mensagem enviada com sucesso!'}
          </div>
        )}

        <div className="form-actions">
          <button 
            type="submit" 
            className={`btn ${sendStatus === 'sending' ? 'btn-loading' : ''} ${sendStatus === 'success' ? 'btn-success' : ''}`}
            disabled={sendStatus === 'sending'}
          >
            {getButtonContent()}
          </button>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="btn-outline"
            aria-label="Copiar endereço de email"
          >
            {copyButtonText}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
