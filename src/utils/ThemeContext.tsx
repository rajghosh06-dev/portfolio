"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  glassMode: boolean;
  toggleGlassMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [glassMode, setGlassMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      const initialTheme =
        storedTheme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      const initialGlassMode = localStorage.getItem("glassMode") === "true";

      setTheme(initialTheme);
      setGlassMode(initialGlassMode);
      applyPreferences(initialTheme, initialGlassMode);
      setIsHydrated(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    applyPreferences(theme, glassMode);
  }, [glassMode, isHydrated, theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const toggleGlassMode = () => {
    setGlassMode((current) => !current);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, glassMode, toggleGlassMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

function applyPreferences(theme: Theme, glassMode: boolean) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  document.documentElement.dataset.glassMode = glassMode ? "true" : "false";

  localStorage.setItem("theme", theme);
  localStorage.setItem("glassMode", String(glassMode));
}
