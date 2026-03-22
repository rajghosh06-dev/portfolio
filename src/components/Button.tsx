"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonVariant = "gradient" | "ghost" | "primary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "app-button--sm",
  md: "app-button--md",
  lg: "app-button--lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  gradient: "app-button--gradient",
  ghost: "app-button--ghost",
  primary: "app-button--primary",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "gradient",
  size = "md",
  className = "",
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const combinedClasses = `app-button ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();
  const isExternal = href ? /^(https?:|mailto:|tel:)/.test(href) : false;

  const motionVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.div
        variants={motionVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        {isExternal ? (
          <a
            href={href}
            className={combinedClasses}
            aria-label={ariaLabel}
            target="_blank"
            rel="noreferrer"
          >
            {children}
          </a>
        ) : (
          <Link
            href={href}
            className={combinedClasses}
            aria-label={ariaLabel}
          >
            {children}
          </Link>
        )}
      </motion.div>
    );
  }

  return (
    <motion.button
      variants={motionVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      type={type}
      className={combinedClasses}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
