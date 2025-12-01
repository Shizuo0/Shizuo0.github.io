import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FormData } from '../types';

const CONTACT_EMAIL = 'paulosvtatibana@gmail.com';

// EmailJS Configuration
// Para configurar, crie uma conta em https://emailjs.com
// e substitua estes valores pelas suas credenciais
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copyButtonText, setCopyButtonText] = useState('Copiar email');
  const [sendStatus, setSendStatus] = useState<SendStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, subject, message } = formData;

    if (!name.trim() || !message.trim()) {
      setErrorMessage('Preencha seu nome e mensagem, por favor.');
      setSendStatus('error');
      setTimeout(() => {
        setSendStatus('idle');
        setErrorMessage('');
      }, 3000);
      return;
    }

    // Verificar se EmailJS está configurado
    console.log('EmailJS Debug:', {
      SERVICE_ID: EMAILJS_SERVICE_ID,
      TEMPLATE_ID: EMAILJS_TEMPLATE_ID,
      PUBLIC_KEY: EMAILJS_PUBLIC_KEY,
    });
    
    const isEmailJSConfigured = 
      EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && 
      EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' && 
      EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';
    
    console.log('isEmailJSConfigured:', isEmailJSConfigured);

    if (isEmailJSConfigured && formRef.current) {
      // Usar EmailJS
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
      const finalSubject = subject.trim() || 'Contato via portfólio';
      const body = encodeURIComponent(
        `Nome: ${name}\n\nMensagem:\n${message}\n\n---\nEnviado via portfólio`,
      );
      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(finalSubject)}&body=${body}`;
      window.location.href = mailto;
    }
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
    formRef,
    formData,
    copyButtonText,
    sendStatus,
    errorMessage,
    handleInputChange,
    handleSubmit,
    handleCopyEmail,
    updateCopyButtonText,
  };
};
