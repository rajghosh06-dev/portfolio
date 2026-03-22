import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, GraduationCap } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";
import { academics, certifications, workshops } from "@/data/profile";

export default function SkillsPage() {
  return (
    <MainLayout>
      <motion.section className="skills-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <motion.p
          className="skills-page__eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          Skills & Foundation
        </motion.p>

        <motion.h1
          className="skills-page__title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45 }}
        >
          Languages, foundations, and credentials carried forward from my earlier portfolio.
        </motion.h1>

        <motion.p
          className="skills-page__lead"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.45 }}
        >
          This page brings together the practical areas I work in, the academic base behind them, and the certificates and workshops that helped shape my early learning path.
        </motion.p>

        <div className="skills-page__grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <SkillCard
                name={skill.name}
                description={skill.description}
                icon={skill.icon}
                areas={skill.areas}
                accent={skill.accent}
              />
            </motion.div>
          ))}
        </div>

        <div className="skills-page__details">
          <motion.article
            className="skills-page__panel"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="skills-page__panel-heading">
              <span className="skills-page__panel-icon">
                <GraduationCap size={20} />
              </span>
              <div>
                <p>Academic Journey</p>
                <h2>Education timeline</h2>
              </div>
            </div>

            <div className="skills-page__timeline">
              {academics.map((item) => (
                <div key={`${item.level}-${item.institution}`} className="skills-page__timeline-item">
                  <strong>{item.level}</strong>
                  <p>{item.institution}</p>
                  <span>{item.location}</span>
                  <em>{item.graduation}</em>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="skills-page__panel skills-page__panel--soft"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="skills-page__panel-heading">
              <span className="skills-page__panel-icon skills-page__panel-icon--violet">
                <Award size={20} />
              </span>
              <div>
                <p>Credentials</p>
                <h2>Certifications & workshops</h2>
              </div>
            </div>

            <div className="skills-page__credential-block">
              <h3>Certifications</h3>
              <ul className="skills-page__credential-list">
                {certifications.map((item) => (
                  <li key={`${item.title}-${item.description}`}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="skills-page__credential-block">
              <h3>Workshops</h3>
              <ul className="skills-page__credential-list">
                {workshops.map((item) => (
                  <li key={`${item.title}-${item.description}`}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>

        <motion.div
          className="skills-page__cta"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <p className="skills-page__cta-label">Applied In Practice</p>
            <h2>See how these foundations turn into actual builds.</h2>
          </div>
          <Link href="/projects" className="skills-page__cta-link">
            <span>
              Explore projects
              <ArrowRight size={18} />
            </span>
          </Link>
        </motion.div>
      </motion.section>
    </MainLayout>
  );
}
