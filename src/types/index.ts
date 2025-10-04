export interface FormData {
  name: string;
  subject: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  period?: string;
  company?: string;
  githubUrl?: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface ContactInfo {
  email: string;
  github: string;
}
