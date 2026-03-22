import projectsData from "@/data/content/projects.json";

export type Project = {
  title: string;
  category: "Web Platform" | "Systems" | "Open Source" | "AI Concept";
  summary: string;
  description: string;
  stack: string[];
  highlights: string[];
  image: string;
  note: string;
  link?: string;
};

type ProjectsFile = {
  projects: Project[];
};

const projectsFile = projectsData as ProjectsFile;

export const projects: Project[] = projectsFile.projects;
