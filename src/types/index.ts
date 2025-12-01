export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  period?: string;
  company?: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  features?: string[];
  category?: 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'game';
  status?: 'completed' | 'in-progress' | 'planned';
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
