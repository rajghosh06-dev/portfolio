"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  useEffect(() => {
    document.body.removeAttribute("data-bg");
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="light-mode-background" aria-hidden="true">
        <div className="light-mode-background__wash" />
        <div className="light-mode-background__grid" />
        <div className="light-mode-background__beam light-mode-background__beam--left" />
        <div className="light-mode-background__beam light-mode-background__beam--right" />
        <div className="light-mode-background__orb light-mode-background__orb--one" />
        <div className="light-mode-background__orb light-mode-background__orb--two" />
        <div className="light-mode-background__orb light-mode-background__orb--three" />
      </div>
      <Navbar />

      <main className="layout-main">
        {children}
      </main>

      <Footer />
    </div>
  );
}
