const repoName = "portfolio";
const isProduction = process.env.NODE_ENV === "production";

export const siteConfig = {
  repoName,
  basePath: isProduction ? `/${repoName}` : "",
};

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${siteConfig.basePath}${path}`;
}
