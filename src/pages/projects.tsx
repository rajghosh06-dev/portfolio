"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Layers3, Sparkles, TerminalSquare } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const filterOptions = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <MainLayout>
      <motion.section className="projects-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <motion.div
          className="projects-page__intro"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.45 }}
        >
          <p className="projects-page__eyebrow">Projects</p>
          <h1 className="projects-page__title">A rebuilt project archive with systems, web flows, and concept work.</h1>
          <p className="projects-page__lead">
            These projects come from my earlier portfolio and now live here with better structure, stronger presentation, and clearer technical framing.
          </p>
        </motion.div>

        <motion.div
          className="projects-page__stats"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.45 }}
        >
          <div className="projects-page__stat-card">
            <Layers3 size={20} />
            <div>
              <strong>{projects.length}</strong>
              <span>archived builds</span>
            </div>
          </div>
          <div className="projects-page__stat-card">
            <Sparkles size={20} />
            <div>
              <strong>{filterOptions.length - 1}</strong>
              <span>project directions</span>
            </div>
          </div>
          <div className="projects-page__stat-card">
            <TerminalSquare size={20} />
            <div>
              <strong>Structure-first</strong>
              <span>from CLI logic to campus platforms</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="projects-page__filters"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.45 }}
        >
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`projects-page__filter ${activeFilter === filter ? "projects-page__filter--active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="projects-page__grid">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  summary={project.summary}
                  description={project.description}
                  stack={project.stack}
                  highlights={project.highlights}
                  note={project.note}
                  link={project.link}
                  image={project.image}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>
    </MainLayout>
  );
}
