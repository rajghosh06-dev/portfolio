import academicsData from "@/data/content/academics.json";
import certificatesData from "@/data/content/certificates.json";
import experiencesData from "@/data/content/experience.json";

export type AcademicRecord = {
  level: string;
  institution: string;
  location: string;
  graduation: string;
};

export type ExperienceRecord = {
  title: string;
  details: string[];
};

export type CredentialRecord = {
  title: string;
  description: string;
};

type AcademicsFile = {
  academics: AcademicRecord[];
};

type CertificatesFile = {
  certificates: CredentialRecord[];
  workshops: CredentialRecord[];
};

type ExperienceFile = {
  experiences: ExperienceRecord[];
};

const academicsFile = academicsData as AcademicsFile;
const certificatesFile = certificatesData as CertificatesFile;
const experienceFile = experiencesData as ExperienceFile;

export const academics: AcademicRecord[] = academicsFile.academics;
export const certifications: CredentialRecord[] = certificatesFile.certificates;
export const workshops: CredentialRecord[] = certificatesFile.workshops;
export const experiences: ExperienceRecord[] = experienceFile.experiences;
