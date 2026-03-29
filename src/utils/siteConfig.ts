const repoName = "portfolio";
const isProduction = process.env.NODE_ENV === "production";

export const siteConfig = {
  repoName,
  basePath: isProduction ? `/${repoName}` : "",
  title: "Portfolio - Rishit Ghosh",
  description: "Portfolio of Rishit Ghosh, B.Tech CSE (AI & ML) student at Geethanjali College of Engineering and Technology, Hyderabad. Showcasing academic projects, technical skills, certifications, and workshops with a strong focus on clarity, modularity, and polished presentation. Explore featured builds, applied learning highlights, and structured systems designed for developer-friendly execution.",
  url: "https://rajghosh06-dev.github.io/portfolio/",
  ogImage: "/thumb/thumbnail.png",
};

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }
  return `${siteConfig.basePath}${path}`;
}
