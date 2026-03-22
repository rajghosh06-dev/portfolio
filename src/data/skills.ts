import type { ElementType } from "react";
import { Binary, BrainCircuit, Braces, Code2, Database } from "lucide-react";
import skillsData from "@/data/content/skills.json";

export type Skill = {
  name: string;
  icon: ElementType;
  description: string;
  areas: string[];
  accent: "cyan" | "violet" | "amber" | "blue" | "emerald";
};

type SkillIconKey = "BrainCircuit" | "Code2" | "Binary" | "Database" | "Braces";

type RawSkill = {
  name: string;
  icon: SkillIconKey;
  description: string;
  areas: string[];
  accent: Skill["accent"];
};

type SkillsFile = {
  skills: RawSkill[];
};

const iconMap: Record<SkillIconKey, ElementType> = {
  BrainCircuit,
  Code2,
  Binary,
  Database,
  Braces,
};

const skillsFile = skillsData as SkillsFile;

export const skills: Skill[] = skillsFile.skills.map((skill) => ({
  ...skill,
  icon: iconMap[skill.icon],
}));
