"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";

interface ProjectCardProps {
  title: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  highlights: string[];
  note: string;
  link?: string;
  image: string;
}

export default function ProjectCard({
  title,
  category,
  summary,
  description,
  stack,
  highlights,
  note,
  link,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="project-card"
    >
      <div className="project-card__media">
        <div className="project-card__media-glow" />
        <div className="project-card__media-inner">
          <div className="project-card__media-meta">
            <span className="project-card__badge">{category}</span>
            <span className="project-card__note">{note}</span>
          </div>
          <Image src={image} alt={title} width={800} height={450} className="project-card__image" />
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <div>
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__summary">{summary}</p>
          </div>
        </div>

        <p className="project-card__description">{description}</p>

        <div className="project-card__stack">
          {stack.map((item) => (
            <span key={item} className="project-card__chip">
              {item}
            </span>
          ))}
        </div>

        <ul className="project-card__highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-card__footer">
          {link ? (
            <Button href={link} variant="ghost" size="md" ariaLabel={`Open ${title}`}>
              <span className="project-card__button-label">
                View related repo
                <ArrowUpRight size={16} />
              </span>
            </Button>
          ) : (
            <p className="project-card__footnote">Preserved from the old portfolio archive and available as a project summary.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
