"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/utils/ThemeContext";
import { lightTheme } from "@/utils/lightTheme";
import { darkTheme } from "@/utils/darkTheme";
import GradientButton from "./GradientButton";

const introText = "I build modern, performant web experiences with Next.js, Tailwind CSS, and Framer Motion.";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setTypedText((current) => introText.slice(0, idx + 1));
      idx += 1;
      if (idx >= introText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`flex flex-col items-center justify-center min-h-screen pt-24 text-center px-6 ${currentTheme.heroBg}`}>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-primary dark:text-secondary mb-4 font-['Great Vibes']"
      >
        Hi, I’m Rishit Ghosh
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.8 }}
        className="text-lg max-w-2xl text-gray-600 dark:text-gray-300 mb-8"
      >
        {typedText}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <GradientButton href="#projects" label="Show my work" />
        <GradientButton href="#contact" label="Copy my email" variant="secondary" />
      </motion.div>
    </section>
  );
}
