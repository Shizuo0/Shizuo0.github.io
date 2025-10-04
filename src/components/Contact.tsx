import React, { useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useContactForm } from '../hooks/useContactForm';
import { useTranslation } from '../contexts/TranslationContext';

const Contact: React.FC = () => {
  const ref = useIntersectionObserver();
  const { t, language } = useTranslation();
  const { formData, copyButtonText, handleInputChange, handleSubmit, handleCopyEmail, updateCopyButtonText } =
    useContactForm();

  useEffect(() => {
    updateCopyButtonText(t('contact.copy'));
  }, [language, t, updateCopyButtonText]);

  return (
    <section id="contato" className="container contact-section reveal" ref={ref}>
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.description')}</p>

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
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
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="btn">
            {t('contact.send')}
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
