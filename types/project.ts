type ProjectCategory = "personal" | "professional" | "freelance";

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  category: ProjectCategory;
  image?: string;
  demo?: string;
  code?: string;
}