import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  pt: Record<string, string>;
  en: Record<string, string>;
}

const translations: Translations = {
  pt: {
    // Header
    'header.title': 'Paulo Shizuo Vasconcelos Tatibana',
    'header.subtitle': 'Cientista da Computação • Developer',
    'nav.about': 'Sobre',
    'nav.skills': 'Skills',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'nav.translate': 'English',

    // Hero
    'hero.title': 'Estudante de Ciências da Computação',
    'hero.description': 'Estudante de Ciências da Computação, com experiência prática em desenvolvimento de APIs, web e aplicações mobile. Busco oportunidades para crescer como desenvolvedor e contribuir em projetos inovadores.',
    'hero.summary.title': 'Resumo rápido',
    'hero.summary.item1': 'Desenvolvimento Web e mobile (TypeScript, React, Ruby on Rails)',
    'hero.summary.item2': 'Programação orientada a objetos, bancos (Postgres, MySQL)',
    'hero.summary.item3': 'Docker, Git/GitHub, testes com cobertura',

    // Skills
    'skills.title': 'Habilidades',

    // Projects
    'projects.title': 'Projetos',
    'projects.startup.title': 'Startup - API para site e-commerce',
    'projects.startup.description': 'Implementei autenticação e controle de estoque usando o framework Ruby on Rails. Resolvendo issues no GitHub abrindo Pull Requests. Aplicação conteinerizada com Docker. Banco de dados em postgreSQL. Cobertura de testes: 100%',
    'projects.startup.period': '07/2025 ~ 08/2025',
    'projects.game.title': 'Jogo 2D — Godot',
    'projects.game.description': 'Jogo 2D em Godot Engine – foco em narrativa interativa. Programei um ESP-32 para servir como controle para o jogo.',
    'projects.mobile.title': 'App Mobile — Academia (Kotlin)',
    'projects.mobile.description': 'Aplicativo mobile em Kotlin – app para academia universitária com cadastro de treinos e notificações.',

    // Education
    'education.title': 'Formação',
    'education.degree': 'Bacharelado em Ciências da Computação',
    'education.institution': 'Universidade de Fortaleza (UNIFOR) — 01/2024 ~ 12/2027',

    // Contact
    'contact.title': 'Contato',
    'contact.description': 'Quer conversar sobre vagas, projetos ou café virtual? Manda mensagem aqui:',
    'contact.name': 'Nome',
    'contact.subject': 'Assunto',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar por email',
    'contact.copy': 'Copiar email',
    'contact.copied': 'Copiado!',

    // Footer
    'footer.copyright': '© {year} Paulo Shizuo Vasconcelos Tatibana',
    'footer.social': 'Redes Sociais: ',
  },
  en: {
    // Header
    'header.title': 'Paulo Shizuo Vasconcelos Tatibana',
    'header.subtitle': 'Computer Scientist • Developer',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.translate': 'Português',

    // Hero
    'hero.title': 'Computer Science Student',
    'hero.description': 'Computer Science student with practical experience in API development, web and mobile applications. Seeking opportunities to grow as a developer and contribute to innovative projects.',
    'hero.summary.title': 'Quick summary',
    'hero.summary.item1': 'Web and mobile development (TypeScript, React, Ruby on Rails)',
    'hero.summary.item2': 'Object-oriented programming, databases (Postgres, MySQL)',
    'hero.summary.item3': 'Docker, Git/GitHub, test coverage',

    // Skills
    'skills.title': 'Skills',

    // Projects
    'projects.title': 'Projects',
    'projects.startup.title': 'Startup - E-commerce API',
    'projects.startup.description': 'Implemented authentication and inventory control using Ruby on Rails framework. Solving GitHub issues by opening Pull Requests. Containerized application with Docker. PostgreSQL database. Test coverage: 100%',
    'projects.startup.period': '07/2025 ~ 08/2025',
    'projects.game.title': '2D Game — Godot',
    'projects.game.description': '2D game in Godot Engine – focused on interactive narrative. Programmed an ESP-32 to serve as a game controller.',
    'projects.mobile.title': 'Mobile App — Gym (Kotlin)',
    'projects.mobile.description': 'Mobile application in Kotlin – university gym app with workout registration and notifications.',

    // Education
    'education.title': 'Education',
    'education.degree': 'Bachelor in Computer Science',
    'education.institution': 'University of Fortaleza (UNIFOR) — 01/2024 ~ 12/2027',

    // Contact
    'contact.title': 'Contact',
    'contact.description': 'Want to talk about jobs, projects or virtual coffee? Send a message here:',
    'contact.name': 'Name',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send by email',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied!',

    // Footer
    'footer.copyright': '© {year} Paulo Shizuo Vasconcelos Tatibana',
    'footer.social': 'Social Media: ',
  },
};

interface TranslationContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    let text = translations[language][key] || translations.pt[key] || key;
    
    if (params) {
      Object.entries(params).forEach(([paramKey, value]) => {
        text = text.replace(`{${paramKey}}`, String(value));
      });
    }
    
    return text;
  };

  const value: TranslationContextType = {
    language,
    toggleLanguage,
    t,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
