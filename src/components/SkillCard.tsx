"use client";
import type { ElementType } from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  description: string;
  icon?: ElementType;
  areas: string[];
  accent: "cyan" | "violet" | "amber" | "blue" | "emerald";
}

export default function SkillCard({ name, description, icon: Icon, areas, accent }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3, scale: 1.02 }}
      className={`skill-card skill-card--${accent}`}
    >
      {Icon && (
        <div className="skill-card__icon">
          <Icon size={26} />
        </div>
      )}
      <h3 className="skill-card__title">{name}</h3>
      <p className="skill-card__description">{description}</p>
      <div className="skill-card__areas">
        {areas.map((item) => (
          <span key={item} className="skill-card__pill">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
