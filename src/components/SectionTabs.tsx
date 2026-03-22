"use client";
import { motion } from "framer-motion";

type SectionTabsProps = {
  sections: string[];
  active: string;
  onChange: (name: string) => void;
};

export default function SectionTabs({ sections, active, onChange }: SectionTabsProps) {
  return (
    <div className="flex items-center justify-center gap-2 overflow-auto pb-4">
      {sections.map((section) => {
        const isActive = section === active;
        return (
          <button
            key={section}
            type="button"
            onClick={() => onChange(section)}
            className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              isActive
                ? "bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-lg"
                : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:scale-105"
            }`}
          >
            <motion.span
              animate={isActive ? { scale: 1.02 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
            >
              {section}
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}
