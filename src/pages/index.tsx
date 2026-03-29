"use client";
import Link from "next/link";
import Head from "next/head";
import { siteConfig } from "../utils/siteConfig";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  FolderCode,
  Github,
  GraduationCap,
  Sparkles,
  Workflow,
} from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";
import { homeEducationBoard, homeProfileCard } from "@/data/home";
import { academics, certifications, experiences, workshops } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import ProtectedImage from "@/security/ProtectedImage";
import profileImage from "../../private/Rishitghosh_formal.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const snapshotCards = [
  { title: "Projects", value: `${projects.length} featured builds`, icon: FolderCode },
  { title: "Skills", value: `${skills.length} focus areas`, icon: Workflow },
  { title: "Learning", value: `${certifications.length + workshops.length} milestones`, icon: Award },
];

const primaryAcademic = academics[0];
const featuredProjects = projects.slice(0, 4);
const featuredCredentials = [...certifications.slice(0, 2), ...workshops.slice(0, 2)];

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.url + siteConfig.ogImage} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:type" content="website" />
      </Head>
      <MainLayout>
        <motion.section className="home-page" initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="home-page__shell">
            <div className="home-page__hero-grid">
              <motion.div className="home-page__hero-copy" variants={fadeInUp} transition={{ duration: 0.55 }}>
                <motion.div
                  className="home-page__eyebrow"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.45 }}
                >
                  <span className="home-page__eyebrow-dot" />
                  AI & ML Student | Workflow Architect
                </motion.div>

                <motion.h1 className="home-page__headline" variants={fadeInUp} transition={{ delay: 0.12, duration: 0.55 }}>
                  Building clear systems,
                  <span>thoughtful workflows,</span>
                  and polished presentation.
                </motion.h1>

                <motion.p className="home-page__lead" variants={fadeInUp} transition={{ delay: 0.18, duration: 0.55 }}>
                  I&apos;m <strong>Rishit Ghosh</strong>, a B.Tech CSE (AI &amp; ML) student at{" "}
                  <strong>{primaryAcademic.institution}</strong> in Hyderabad. I enjoy turning ideas into structured
                  projects, clean interfaces, and developer-friendly systems with a strong focus on clarity, modularity,
                  and execution.
                </motion.p>

                <motion.div className="home-page__cta-row" variants={fadeInUp} transition={{ delay: 0.24, duration: 0.55 }}>
                  <Button href="/projects" variant="gradient" size="lg" ariaLabel="View my projects">
                    View Projects
                  </Button>
                  <Button href="/skills" variant="ghost" size="lg" ariaLabel="View my skills and foundation">
                    Explore Skills
                  </Button>
                  <Button href="https://github.com/rajghosh06-dev" variant="ghost" size="lg" ariaLabel="Visit my GitHub profile">
                    <span className="home-page__button-with-icon">
                      <Github size={18} />
                      GitHub Profile
                    </span>
                  </Button>
                </motion.div>

                <motion.div className="home-page__snapshot-row" variants={fadeInUp} transition={{ delay: 0.28, duration: 0.55 }}>
                  {snapshotCards.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="home-page__snapshot-card">
                        <span className="home-page__snapshot-icon">
                          <Icon size={18} />
                        </span>
                        <div>
                          <p>{item.title}</p>
                          <strong>{item.value}</strong>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>

              <motion.div
                className="home-page__hero-board"
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.7 }}
              >
                <div className="home-page__hero-board-glow" />
                <div className="home-page__hero-stack">
                  <div className="home-page__profile-card">
                    <div className="home-page__profile-media">
                      <ProtectedImage
                        src={profileImage}
                        alt="Formal portrait of Rishit Ghosh"
                        wrapperClassName="home-page__profile-photo-shell"
                        className="home-page__profile-photo"
                        priority
                      />
                    </div>

                    <div className="home-page__profile-copy">
                      <p className="home-page__profile-eyebrow">{homeProfileCard.eyebrow}</p>
                      <h2>Rishit Ghosh</h2>
                      <p className="home-page__profile-description">
                        Student engineer focused on structured systems, polished presentation, and thoughtful execution.
                      </p>
                      <div className="home-page__profile-tags">
                        <span>Hyderabad</span>
                        <span>AI &amp; ML</span>
                        <span>Workflow-driven</span>
                      </div>
                    </div>
                  </div>

                  <div className="home-page__hero-board-card">
                    <div className="home-page__board-topline">
                      <span className="home-page__board-status">
                        <span className="home-page__board-status-dot" />
                        {homeEducationBoard.statusLabel}
                      </span>
                      <strong>{primaryAcademic.graduation.replace("Expected Graduation: ", "Expected ")}</strong>
                    </div>

                    <div className="home-page__board-education">
                      <div className="home-page__board-badge">
                        <GraduationCap size={24} />
                      </div>
                      <div>
                        <p>{primaryAcademic.level}</p>
                        <h2>{primaryAcademic.institution}</h2>
                        <span>{primaryAcademic.location}</span>
                      </div>
                    </div>

                    <div className="home-page__board-skill-cloud">
                      {skills.map((skill) => (
                        <span key={skill.name}>{skill.name}</span>
                      ))}
                    </div>

                    <div className="home-page__board-columns">
                      <div className="home-page__board-block">
                        <div className="home-page__board-block-top">
                          <BookOpenCheck size={18} />
                          <strong>{homeEducationBoard.experienceLabel}</strong>
                        </div>
                        <h3>{experiences[0].title}</h3>
                        <p>{experiences[0].details[0]}</p>
                      </div>

                      <div className="home-page__board-block home-page__board-block--soft">
                        <div className="home-page__board-block-top">
                          <Sparkles size={18} />
                          <strong>{homeEducationBoard.learningLabel}</strong>
                        </div>
                        <ul>
                          {featuredCredentials.map((item) => (
                            <li key={item.title}>{item.title}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.section
              className="home-page__content-grid"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6 }}
            >
              <article className="home-page__feature-card home-page__feature-card--projects">
                <div className="home-page__section-heading">
                  <div>
                    <p>Selected Projects</p>
                    <h2>Work that reflects my technical range</h2>
                  </div>
                  <Link href="/projects" className="home-page__section-link">
                    <span>
                      See projects
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>

                <div className="home-page__project-list">
                  {featuredProjects.map((project) => (
                    <div key={project.title} className="home-page__project-item">
                      <div>
                        <span className="home-page__project-category">{project.category}</span>
                        <h3>{project.title}</h3>
                      </div>
                      <p>{project.summary}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="home-page__feature-card">
                <div className="home-page__section-heading">
                  <div>
                    <p>Experience</p>
                    <h2>Applied learning highlights</h2>
                  </div>
                  <span className="home-page__section-icon">
                    <BriefcaseBusiness size={18} />
                  </span>
                </div>

                <div className="home-page__experience-list">
                  {experiences.map((item) => (
                    <div key={item.title} className="home-page__experience-item">
                      <h3>{item.title}</h3>
                      <ul>
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>

              <article className="home-page__feature-card home-page__feature-card--credentials">
                <div className="home-page__section-heading">
                  <div>
                    <p>Learning Highlights</p>
                    <h2>Certifications and workshops</h2>
                  </div>
                  <Link href="/skills" className="home-page__section-link">
                    <span>
                      See skills
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </div>

                <div className="home-page__credential-stack">
                  {featuredCredentials.map((item) => (
                    <div key={`${item.title}-${item.description}`} className="home-page__credential-chip">
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </div>
                  ))}
                </div>
              </article>
            </motion.section>

            <motion.div
              className="home-page__bottom-cta"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.55 }}
            >
              <p className="home-page__bottom-copy">Have a project, idea, or collaboration in mind?</p>
              <Button href="/contact" variant="primary" size="lg" ariaLabel="Get in touch">
                Get in touch
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </MainLayout>
    </>
  );
}
