"use client";
import { motion } from "framer-motion";

type GradientButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

const gradientVariants = {
  primary: "from-teal-500 to-indigo-600 dark:from-purple-500 dark:to-blue-500",
  secondary: "from-pink-500 to-orange-500 dark:from-amber-500 dark:to-red-500",
};

export default function GradientButton({ label, href, onClick, variant = "primary", className = "" }: GradientButtonProps) {
  const base = "inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-white shadow-[0_8px_20px_rgba(45,212,191,.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary relative overflow-hidden";
  const gradients = gradientVariants[variant];

  const buttonClass = `${base} bg-gradient-to-r ${gradients} ${className}`;

  const glow = (
    <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-full" />
  );

  if (href) {
    const isInternal = href.startsWith("/");
    return (
      <motion.a
        href={href}
        target={isInternal ? undefined : "_blank"}
        rel={isInternal ? undefined : "noreferrer"}
        className={buttonClass}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onClick}
      >
        {glow}
        <span className="relative z-10 flex items-center gap-2">{label} <span aria-hidden>→</span></span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={buttonClass}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      {glow}
      <span className="relative z-10 flex items-center gap-2">{label} <span aria-hidden>→</span></span>
    </motion.button>
  );
}