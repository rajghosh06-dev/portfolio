const repoName = "portfolio";
const isProduction = process.env.NODE_ENV === "production";

export const siteConfig = {
  repoName,
  basePath: isProduction ? `/${repoName}` : "",
  title: "Portfolio - Rishit Ghosh",
  description: "Interactive portfolio showcasing projects, skills, and live demos.",
  url: "https://rajghosh06-dev.github.io/portfolio/",
  ogImage: "/thumb/thumbnail.png",
};

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }
  return `${siteConfig.basePath}${path}`;
}
