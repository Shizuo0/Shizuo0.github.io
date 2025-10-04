import { useState } from 'react';
import { FormData } from '../types';

const CONTACT_EMAIL = 'paulosvtatibana@gmail.com';

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    subject: '',
    message: '',
  });
  const [copyButtonText, setCopyButtonText] = useState('Copiar email');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    if (!name.trim() || !message.trim()) {
      alert('Preencha seu nome e mensagem, por favor.');
      return;
    }

    const finalSubject = subject.trim() || 'Contato via portfólio';
    const body = encodeURIComponent(
      `Nome: ${name}\n\nMensagem:\n${message}\n\n---\nEnviado via portfólio`,
    );
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(finalSubject)}&body=${body}`;
    window.location.href = mailto;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyButtonText('Copiado!');
      setTimeout(() => setCopyButtonText('Copiar email'), 1400);
    } catch {
      prompt('Copie este e-mail:', CONTACT_EMAIL);
    }
  };

  const updateCopyButtonText = (text: string) => {
    setCopyButtonText(text);
  };

  return {
    formData,
    copyButtonText,
    handleInputChange,
    handleSubmit,
    handleCopyEmail,
    updateCopyButtonText,
  };
};
