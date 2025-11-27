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
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
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
    'projects.pageTitle': 'Meus Projetos',
    'projects.pageSubtitle': 'Confira alguns dos projetos que desenvolvi, desde sistemas fullstack até aplicações mobile e jogos.',
    'projects.filters.all': 'Todos',
    'projects.viewDetails': 'Ver detalhes',
    'projects.viewCode': 'Ver código',
    'projects.backToProjects': 'Voltar aos projetos',
    'projects.techStack': 'Tecnologias Utilizadas',
    'projects.features': 'Funcionalidades',
    'projects.status.completed': 'Concluído',
    'projects.status.inProgress': 'Em Desenvolvimento',
    'projects.status.planned': 'Planejado',
    
    // Project: Delivery System
    'projects.delivery.description': 'Sistema completo de delivery com gerenciamento de pedidos, clientes e entregas. Frontend React com backend Node.js e MySQL.',
    'projects.delivery.longDescription': 'Sistema de delivery completo desenvolvido com React no frontend e Node.js no backend. Permite gerenciar pedidos, clientes, produtos e entregas de forma eficiente. Interface responsiva e intuitiva.',
    'projects.delivery.feature1': 'Gerenciamento completo de pedidos em tempo real',
    'projects.delivery.feature2': 'Cadastro e gestão de clientes',
    'projects.delivery.feature3': 'Controle de produtos e estoque',
    'projects.delivery.feature4': 'Sistema de rastreamento de entregas',
    
    // Project: Referral System
    'projects.referral.title': 'Sistema de Indicação',
    'projects.referral.description': 'Sistema de pontos por indicação com autenticação JWT, frontend React e backend NestJS.',
    'projects.referral.longDescription': 'Aplicação web que implementa um sistema de pontos por indicação. Usuários podem se cadastrar, fazer login e ganhar pontos ao convidar amigos. Backend modular com NestJS, TypeORM e autenticação JWT. Frontend React + Vite com Context API, lazy loading e validação sem libs externas. CSS puro, design system próprio e glassmorphism. Banco SQLite para rápida configuração local e versionamento simples.',
    'projects.referral.feature1': 'Sistema de autenticação JWT seguro',
    'projects.referral.feature2': 'Geração de links de indicação únicos',
    'projects.referral.feature3': 'Dashboard com histórico de pontos',
    'projects.referral.feature4': 'Integração com IA para sugestões',
    
    // Project: Academic System
    'projects.academic.description': 'Sistema acadêmico em Java para gerenciamento de alunos, professores, disciplinas e notas.',
    'projects.academic.longDescription': 'Sistema completo de gerenciamento acadêmico desenvolvido em Java com interface Swing. Permite cadastro de alunos, professores, disciplinas, turmas e lançamento de notas. Utiliza MySQL como banco de dados e segue o padrão MVC.',
    'projects.academic.feature1': 'Cadastro completo de alunos e professores',
    'projects.academic.feature2': 'Gerenciamento de disciplinas e turmas',
    'projects.academic.feature3': 'Sistema de lançamento de notas',
    'projects.academic.feature4': 'Relatórios acadêmicos',
    
    // Project: Gym Management
    'projects.gym.description': 'Sistema de gestão de academia com Spring Boot, interface JavaSwing e banco MySQL.',
    'projects.gym.longDescription': 'Aplicação desktop para gerenciamento de academias desenvolvida com Java Spring Boot e interface gráfica JavaSwing. Permite controle de alunos, planos, pagamentos e treinos. Banco de dados MySQL com JPA/Hibernate.',
    'projects.gym.feature1': 'Cadastro e gestão de alunos',
    'projects.gym.feature2': 'Controle de planos e mensalidades',
    'projects.gym.feature3': 'Montagem de fichas de treino',
    'projects.gym.feature4': 'Controle de acesso',
    
    // Project: Portfolio
    'projects.portfolio.description': 'Este portfolio, desenvolvido com React, TypeScript, Vite e Tailwind CSS.',
    'projects.portfolio.longDescription': 'Portfolio pessoal desenvolvido com as tecnologias mais modernas do mercado. Design responsivo com glassmorphism, suporte multilíngue (PT/EN), animações suaves e código limpo seguindo boas práticas.',
    'projects.portfolio.feature1': 'Design responsivo e moderno',
    'projects.portfolio.feature2': 'Suporte multilíngue (PT/EN)',
    'projects.portfolio.feature3': 'Animações e transições suaves',
    'projects.portfolio.feature4': 'Código limpo e bem documentado',

    'projects.api-ecommerce.title': 'API para site e-commerce',
    'projects.api-ecommerce.description': 'Implementei autenticação e controle de estoque usando o framework Ruby on Rails. Aplicação conteinerizada com Docker. Banco de dados em postgreSQL. Cobertura de testes: 100%',
    'projects.mobile.title': 'App Mobile — Academia (Kotlin)',
    'projects.mobile.description': 'Aplicativo mobile em Kotlin – app para academia universitária com cadastro de treinos e notificações. Login e cadastro de usuários com Firebase Authentication.',
    'projects.game.title': 'Jogo 2D — Godot',
    'projects.game.description': 'Jogo 2D em Godot Engine – foco em narrativa interativa. Programei um ESP-32 para servir como controle para o jogo.',

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
    'contact.sending': 'Enviando...',
    'contact.sent': 'Enviado!',
    'contact.successMessage': 'Mensagem enviada com sucesso! Responderei em breve.',
    'contact.copy': 'Copiar email',
    'contact.copied': 'Copiado!',

    // Footer
    'footer.copyright': '© {year} Paulo Shizuo Vasconcelos Tatibana',
    'footer.social': 'Redes Sociais: ',

    // 404 Page
    'notFound.title': 'Página não encontrada',
    'notFound.description': 'Ops! A página que você procura não existe ou foi movida.',
    'notFound.backHome': 'Voltar ao início',
    'notFound.viewProjects': 'Ver projetos',

    // About Page
    'about.pageTitle': 'Sobre Mim',
    'about.name': 'Paulo Shizuo Vasconcelos Tatibana',
    'about.role': 'Desenvolvedor Full Stack',
    'about.bio': 'Sou um estudante apaixonado por tecnologia e desenvolvimento de software. Atualmente cursando Ciências da Computação na UNIFOR, busco constantemente aprender novas tecnologias e aplicá-las em projetos práticos que resolvam problemas reais.',
    'about.stats.projects': 'Projetos',
    'about.stats.technologies': 'Tecnologias',
    'about.stats.years': 'Anos estudando',
    'about.timeline.title': 'Jornada',
    'about.timeline.2023.title': 'Descoberta da Programação',
    'about.timeline.2023.description': 'Tive meu primeiro contato com programação e me apaixonei por criar soluções através de código.',
    'about.timeline.2024.title': 'Início da Graduação',
    'about.timeline.2024.description': 'Comecei o Bacharelado em Ciências da Computação na UNIFOR, mergulhando em programação, algoritmos e estruturas de dados.',
    'about.timeline.2025.title': 'Primeiros Projetos',
    'about.timeline.2025.description': 'Desenvolvi meus primeiros projetos pessoais, aprendendo React, Node.js e bancos de dados relacionais.',
    'about.softSkills.title': 'Soft Skills',
    'about.softSkills.problemSolving': 'Resolução de Problemas',
    'about.softSkills.teamwork': 'Trabalho em Equipe',
    'about.softSkills.continuousLearning': 'Aprendizado Contínuo',
    'about.softSkills.communication': 'Comunicação',
    'about.softSkills.timeManagement': 'Gestão de Tempo',
    'about.softSkills.adaptability': 'Adaptabilidade',
    'about.interests.title': 'Interesses',
    'about.interests.coding': 'Programação',
    'about.interests.gaming': 'Games',
    'about.interests.learning': 'Aprender',
    'about.interests.music': 'Música',

    // Skills Page
    'skillsPage.title': 'Minhas Habilidades',
    'skillsPage.subtitle': 'Tecnologias e ferramentas que domino, organizadas por categoria.',
    'skillsPage.languages': 'Linguagens',
    'skillsPage.frontend': 'Frontend',
    'skillsPage.backend': 'Backend',
    'skillsPage.databases': 'Banco de Dados',
    'skillsPage.tools': 'Ferramentas & DevOps',
    'skillsPage.mobile': 'Mobile & Outros',
    'skillsPage.stats': 'Números',
    'skillsPage.stats.languages': 'Linguagens',
    'skillsPage.stats.frameworks': 'Frameworks',
    'skillsPage.stats.projects': 'Projetos',
    'skillsPage.stats.years': 'Anos de Estudo',
    'skillsPage.learning': 'Aprendendo Agora',

    // Contact Page
    'contactPage.title': 'Entre em Contato',
    'contactPage.subtitle': 'Quer conversar sobre oportunidades, projetos ou apenas trocar uma ideia? Manda uma mensagem!',
    'contactPage.form.title': 'Envie uma Mensagem',
    'contactPage.form.name': 'Seu Nome',
    'contactPage.form.email': 'Seu Email',
    'contactPage.form.subject': 'Assunto',
    'contactPage.form.message': 'Sua Mensagem',
    'contactPage.form.send': 'Enviar Mensagem',
    'contactPage.form.copy': 'Copiar Email',
    'contactPage.form.copied': 'Copiado!',
    'contactPage.connect.title': 'Conecte-se Comigo',
    'contactPage.connect.github': 'GitHub',
    'contactPage.connect.linkedin': 'LinkedIn',
    'contactPage.connect.email': 'Email',
    'contactPage.availability.status': 'Disponível para Oportunidades',
    'contactPage.availability.text': 'Estou aberto a novas oportunidades de trabalho, estágios e projetos interessantes. Não hesite em entrar em contato!',
    'contactPage.response.label': 'Tempo de Resposta',
    'contactPage.response.time': 'Geralmente em 24h',
  },
  en: {
    // Header
    'header.title': 'Paulo Shizuo Vasconcelos Tatibana',
    'header.subtitle': 'Computer Scientist • Developer',
    'nav.home': 'Home',
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
    'projects.pageTitle': 'My Projects',
    'projects.pageSubtitle': 'Check out some of the projects I\'ve developed, from fullstack systems to mobile apps and games.',
    'projects.filters.all': 'All',
    'projects.viewDetails': 'View details',
    'projects.viewCode': 'View code',
    'projects.backToProjects': 'Back to projects',
    'projects.techStack': 'Technologies Used',
    'projects.features': 'Features',
    'projects.status.completed': 'Completed',
    'projects.status.inProgress': 'In Progress',
    'projects.status.planned': 'Planned',
    
    // Project: Delivery System
    'projects.delivery.description': 'Complete delivery system with order, customer and delivery management. React frontend with Node.js backend and MySQL.',
    'projects.delivery.longDescription': 'Complete delivery system developed with React on frontend and Node.js on backend. Allows efficient management of orders, customers, products and deliveries. Responsive and intuitive interface.',
    'projects.delivery.feature1': 'Complete real-time order management',
    'projects.delivery.feature2': 'Customer registration and management',
    'projects.delivery.feature3': 'Product and inventory control',
    'projects.delivery.feature4': 'Delivery tracking system',
    
    // Project: Referral System
    'projects.referral.title': 'Referral System',
    'projects.referral.description': 'Points-based referral system with JWT authentication, React frontend and NestJS backend.',
    'projects.referral.longDescription': 'Web application implementing a points-based referral system. Users can register, login, and earn points by inviting friends. Modular backend with NestJS, TypeORM and JWT authentication. React + Vite frontend with Context API, lazy loading and validation without external libraries. Pure CSS, custom design system and glassmorphism. SQLite database for quick local setup and simple versioning.',
    'projects.referral.feature1': 'Secure JWT authentication system',
    'projects.referral.feature2': 'Unique referral link generation',
    'projects.referral.feature3': 'Dashboard with points history',
    'projects.referral.feature4': 'AI integration for suggestions',
    
    // Project: Academic System
    'projects.academic.description': 'Academic system in Java for managing students, teachers, subjects and grades.',
    'projects.academic.longDescription': 'Complete academic management system developed in Java with Swing interface. Allows registration of students, teachers, subjects, classes and grade entry. Uses MySQL as database and follows MVC pattern.',
    'projects.academic.feature1': 'Complete student and teacher registration',
    'projects.academic.feature2': 'Subject and class management',
    'projects.academic.feature3': 'Grade entry system',
    'projects.academic.feature4': 'Academic reports',
    
    // Project: Gym Management
    'projects.gym.description': 'Gym management system with Spring Boot, JavaSwing interface and MySQL database.',
    'projects.gym.longDescription': 'Desktop application for gym management developed with Java Spring Boot and JavaSwing graphical interface. Allows control of students, plans, payments and workouts. MySQL database with JPA/Hibernate.',
    'projects.gym.feature1': 'Student registration and management',
    'projects.gym.feature2': 'Plan and membership fee control',
    'projects.gym.feature3': 'Workout sheet creation',
    'projects.gym.feature4': 'Access control',
    
    // Project: Portfolio
    'projects.portfolio.description': 'This portfolio, developed with React, TypeScript, Vite and Tailwind CSS.',
    'projects.portfolio.longDescription': 'Personal portfolio developed with the most modern technologies in the market. Responsive design with glassmorphism, multilingual support (PT/EN), smooth animations and clean code following best practices.',
    'projects.portfolio.feature1': 'Responsive and modern design',
    'projects.portfolio.feature2': 'Multilingual support (PT/EN)',
    'projects.portfolio.feature3': 'Smooth animations and transitions',
    'projects.portfolio.feature4': 'Clean and well-documented code',

    'projects.api-ecommerce.title': 'E-commerce Website API',
    'projects.api-ecommerce.description': 'Implemented authentication and inventory control using Ruby on Rails framework. Containerized application with Docker. PostgreSQL database. Test coverage: 100%',
    'projects.mobile.title': 'Mobile App — Gym (Kotlin)',
    'projects.mobile.description': 'Mobile application in Kotlin – university gym app with workout registration and notifications. Login and user registration with Firebase Authentication.',
    'projects.game.title': '2D Game — Godot',
    'projects.game.description': '2D game in Godot Engine – focused on interactive narrative. Programmed an ESP-32 to serve as a game controller.',

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
    'contact.sending': 'Sending...',
    'contact.sent': 'Sent!',
    'contact.successMessage': 'Message sent successfully! I\'ll reply soon.',
    'contact.copy': 'Copy email',
    'contact.copied': 'Copied!',

    // Footer
    'footer.copyright': '© {year} Paulo Shizuo Vasconcelos Tatibana',
    'footer.social': 'Social Media: ',

    // 404 Page
    'notFound.title': 'Page not found',
    'notFound.description': 'Oops! The page you\'re looking for doesn\'t exist or has been moved.',
    'notFound.backHome': 'Back to home',
    'notFound.viewProjects': 'View projects',

    // About Page
    'about.pageTitle': 'About Me',
    'about.name': 'Paulo Shizuo Vasconcelos Tatibana',
    'about.role': 'Full Stack Developer',
    'about.bio': 'I\'m a student passionate about technology and software development. Currently studying Computer Science at UNIFOR, I constantly seek to learn new technologies and apply them to practical projects that solve real problems.',
    'about.stats.projects': 'Projects',
    'about.stats.technologies': 'Technologies',
    'about.stats.years': 'Years studying',
    'about.timeline.title': 'Journey',
    'about.timeline.2023.title': 'Discovered Programming',
    'about.timeline.2023.description': 'Had my first contact with programming and fell in love with creating solutions through code.',
    'about.timeline.2024.title': 'Started University',
    'about.timeline.2024.description': 'Started my Bachelor\'s in Computer Science at UNIFOR, diving into programming, algorithms and data structures.',
    'about.timeline.2025.title': 'First Projects',
    'about.timeline.2025.description': 'Developed my first personal projects, learning React, Node.js and relational databases.',
    'about.softSkills.title': 'Soft Skills',
    'about.softSkills.problemSolving': 'Problem Solving',
    'about.softSkills.teamwork': 'Teamwork',
    'about.softSkills.continuousLearning': 'Continuous Learning',
    'about.softSkills.communication': 'Communication',
    'about.softSkills.timeManagement': 'Time Management',
    'about.softSkills.adaptability': 'Adaptability',
    'about.interests.title': 'Interests',
    'about.interests.coding': 'Coding',
    'about.interests.gaming': 'Gaming',
    'about.interests.learning': 'Learning',
    'about.interests.music': 'Music',

    // Skills Page
    'skillsPage.title': 'My Skills',
    'skillsPage.subtitle': 'Technologies and tools I master, organized by category.',
    'skillsPage.languages': 'Languages',
    'skillsPage.frontend': 'Frontend',
    'skillsPage.backend': 'Backend',
    'skillsPage.databases': 'Databases',
    'skillsPage.tools': 'Tools & DevOps',
    'skillsPage.mobile': 'Mobile & Others',
    'skillsPage.stats': 'Numbers',
    'skillsPage.stats.languages': 'Languages',
    'skillsPage.stats.frameworks': 'Frameworks',
    'skillsPage.stats.projects': 'Projects',
    'skillsPage.stats.years': 'Years Studying',
    'skillsPage.learning': 'Currently Learning',

    // Contact Page
    'contactPage.title': 'Get in Touch',
    'contactPage.subtitle': 'Want to talk about opportunities, projects or just exchange ideas? Send me a message!',
    'contactPage.form.title': 'Send a Message',
    'contactPage.form.name': 'Your Name',
    'contactPage.form.email': 'Your Email',
    'contactPage.form.subject': 'Subject',
    'contactPage.form.message': 'Your Message',
    'contactPage.form.send': 'Send Message',
    'contactPage.form.copy': 'Copy Email',
    'contactPage.form.copied': 'Copied!',
    'contactPage.connect.title': 'Connect With Me',
    'contactPage.connect.github': 'GitHub',
    'contactPage.connect.linkedin': 'LinkedIn',
    'contactPage.connect.email': 'Email',
    'contactPage.availability.status': 'Available for Opportunities',
    'contactPage.availability.text': 'I\'m open to new job opportunities, internships and interesting projects. Don\'t hesitate to reach out!',
    'contactPage.response.label': 'Response Time',
    'contactPage.response.time': 'Usually within 24h',
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
