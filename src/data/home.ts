import homeData from "@/data/content/home.json";

export type HomeProfileCardContent = {
  eyebrow: string;
};

export type HomeEducationBoardContent = {
  statusLabel: string;
  experienceLabel: string;
  learningLabel: string;
};

type HomeContentFile = {
  profileCard: HomeProfileCardContent;
  educationBoard: HomeEducationBoardContent;
};

const typedHomeData = homeData as HomeContentFile;

export const homeProfileCard = typedHomeData.profileCard;
export const homeEducationBoard = typedHomeData.educationBoard;
