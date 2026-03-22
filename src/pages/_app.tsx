import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/ThemeContext";
import { siteConfig, withBasePath } from "@/utils/siteConfig";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rishit Ghosh | Portfolio</title>
        <meta name="description" content="Rishit Ghosh's personal portfolio. Web developer with Next.js, Tailwind, and Framer Motion." />
        <link rel="icon" type="image/svg+xml" href={withBasePath("/icons/favicon.svg")} />
        <link rel="shortcut icon" href={withBasePath("/icons/favicon.svg")} />
        <style>{`:root { --site-base-path: "${siteConfig.basePath}"; --site-dark-bg-image: url("${withBasePath("/images/bg-dark-new.svg")}"); }`}</style>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
