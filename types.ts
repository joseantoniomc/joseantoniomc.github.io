export interface ProjectLink {
  label: string;
  url: string;
  type: 'video' | 'play' | 'github' | 'default';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  links: ProjectLink[];
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}