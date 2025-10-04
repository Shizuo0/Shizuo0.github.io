import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useContactForm } from '../hooks/useContactForm';

const Contact: React.FC = () => {
  const ref = useIntersectionObserver();
  const { formData, copyButtonText, handleInputChange, handleSubmit, handleCopyEmail } =
    useContactForm();

  return (
    <section id="contato" className="container contact-section reveal" ref={ref}>
      <h2>Contato</h2>
      <p>Quer conversar sobre vagas, projetos ou café virtual? Manda mensagem aqui:</p>

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <label htmlFor="name">
          Nome
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
          Assunto
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
          Mensagem
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
            Enviar por email
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
