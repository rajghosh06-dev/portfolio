"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/utils/ThemeContext";

type DarkModeToggleProps = {
  className?: string;
};

export default function DarkModeToggle({ className = "" }: DarkModeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`theme-toggle ${className}`.trim()}
      data-theme={isDark ? "dark" : "light"}
      aria-label="Toggle Dark Mode"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">
        <Sun size={15} />
      </span>
      <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">
        <Moon size={15} />
      </span>
      <span className="theme-toggle__thumb" aria-hidden="true" />
    </button>
  );
}
