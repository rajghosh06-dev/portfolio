import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/ThemeContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rishit Ghosh | Portfolio</title>
        <meta name="description" content="Rishit Ghosh's personal portfolio. Web developer with Next.js, Tailwind, and Framer Motion." />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="shortcut icon" href="/icons/favicon.svg" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
