import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const expertise = [
  "Backend Architecture & Workflow Optimization: Designing modular backend systems that are scalable, maintainable, and easy to troubleshoot.",
  "Advanced Scripting: Proficient in Bash, Batch, and PowerShell for automating system-level tasks across Linux and Windows environments.",
  "Version Control Discipline: Rigorous Git workflows with commits and pushes after every meaningful change for clarity and traceability.",
  "UI/UX Workflow Design: Architecting clean, modular layouts with strong visual hierarchy and recruiter-friendly polish.",
  "Frontend Exploration: Actively learning and applying Tailwind CSS, Next.js, and TypeScript to build modern portfolio experiences.",
];

const philosophy = [
  "Modular: broken into reusable, independent components.",
  "Documented: supported by reproducible fixes that survive reboots and future changes.",
  "Polished: demo-ready, recruiter-friendly, and aesthetically intentional.",
  "Original: inspired by peers, but always adapted for uniqueness.",
];

const interests = [
  "Documentation Best Practices: prioritizing clarity and reproducibility in every project.",
  "Editor Configuration Hygiene: workspace-specific settings, linting discipline, and actionable snippets.",
  "Benchmarking Against Peers: analyzing portfolios and synthesizing ideas while adapting them for originality.",
  "Community Engagement: contributing to student chapters and collaborative efforts that encourage innovation.",
];

const vision = [
  "Build a professional portfolio that reflects both technical depth and creative polish.",
  "Contribute meaningfully to IEEE SSIT initiatives through documentation, organization, and improvements.",
  "Develop scalable, recruiter-friendly projects that demonstrate originality and clarity.",
  "Continue learning modern frameworks and integrating them into my workflow for innovation.",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <MainLayout>
      <motion.section
        className="about-page"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.55 }}
      >
        <div className="about-page__intro">
          <motion.p className="about-page__eyebrow" variants={sectionVariants} transition={{ delay: 0.05, duration: 0.45 }}>
            About Me
          </motion.p>

          <motion.h1 className="about-page__title" variants={sectionVariants} transition={{ delay: 0.1, duration: 0.5 }}>
            Workflow architect, student leader, and builder of polished systems.
          </motion.h1>

          <motion.p className="about-page__lead" variants={sectionVariants} transition={{ delay: 0.15, duration: 0.5 }}>
            My name is <strong>Rishit Ghosh</strong>, and I am currently pursuing a <strong>B.Tech in Computer Science &amp; Engineering (Artificial Intelligence &amp; Machine Learning)</strong> at Geethanjali College of Engineering and Technology, Hyderabad. As a second-year student, I am deeply committed to building a strong foundation in both theoretical knowledge and practical applications of computer science.
          </motion.p>

          <motion.p className="about-page__lead" variants={sectionVariants} transition={{ delay: 0.2, duration: 0.5 }}>
            I see myself as a <strong>workflow architect</strong> someone who thrives on modularity, clarity, and reproducibility. My journey is defined by persistence, originality, and a refusal to settle for mediocrity.
          </motion.p>
        </div>

        <div className="about-page__grid">
          <motion.article className="about-page__card about-page__card--wide" variants={sectionVariants} transition={{ delay: 0.08, duration: 0.5 }}>
            <h2>Academic and Technical Background</h2>
            <p>
              My academic path in <strong>Artificial Intelligence and Machine Learning</strong> has exposed me to diverse domains such as data structures, algorithms, object-oriented programming, database management systems, and machine learning fundamentals.
            </p>
            <p>
              I actively integrate classroom learning with real-world projects so that my knowledge is demonstrable, practical, and impactful.
            </p>
            <ul className="about-page__list">
              {expertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article className="about-page__card" variants={sectionVariants} transition={{ delay: 0.12, duration: 0.5 }}>
            <h2>Projects and Portfolio Development</h2>
            <p>
              My portfolio reflects my philosophy of <strong>clarity, modularity, and originality</strong>. I rebuilt it from scratch, moving from a single-page setup to a multipage modular structure with centralized data files, scalable folder organization, and dynamic motion.
            </p>
            <p>
              To me, the portfolio is not just a showcase of skills. It is a statement of identity as a developer who values polish, originality, and professional presentation.
            </p>
          </motion.article>

          <motion.article className="about-page__card" variants={sectionVariants} transition={{ delay: 0.16, duration: 0.5 }}>
            <h2>Leadership and Community Engagement</h2>
            <p>
              Since <strong>February 2026</strong>, I have been serving as the <strong>Secretary of the IEEE SSIT Student Chapter</strong>, contributing to innovation, collaboration, and professional development among peers.
            </p>
            <p>
              Previously, I was a member of the <strong>OSS Club GCET</strong> until March 2026, where I contributed to open-source projects and collaborative repositories that strengthened my technical and documentation practices.
            </p>
          </motion.article>

          <motion.article className="about-page__card about-page__card--wide" variants={sectionVariants} transition={{ delay: 0.2, duration: 0.5 }}>
            <h2>Workflow Philosophy</h2>
            <p>
              What sets me apart is my methodical approach to problem-solving. I believe every workflow should be built with discipline and should remain useful long after the first draft.
            </p>
            <ol className="about-page__ordered">
              {philosophy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p>
              I reject barebones or cluttered designs, preferring systems that balance minimalism with dynamic motion. My troubleshooting style is patient and persistent: I trace root causes, validate fixes stepwise, and adapt commands across environments to ensure reproducibility.
            </p>
          </motion.article>

          <motion.article className="about-page__card" variants={sectionVariants} transition={{ delay: 0.24, duration: 0.5 }}>
            <h2>Personal Identity and Interests</h2>
            <p>
              Beyond technical skills, I am passionate about <strong>open-source contribution, workflow optimization, and professional portfolio design</strong>. I enjoy iterating on terminal visuals, logos, and splash screens with equal focus on correctness and aesthetics.
            </p>
            <ul className="about-page__list">
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article className="about-page__card" variants={sectionVariants} transition={{ delay: 0.28, duration: 0.5 }}>
            <h2>Character and Vision</h2>
            <p>
              I am a <strong>perfectionist with resilience</strong>. If something lacks professional polish, I am willing to scrap and rebuild it until it meets my standards.
            </p>
            <ul className="about-page__list">
              {vision.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.article className="about-page__closing" variants={sectionVariants} transition={{ delay: 0.32, duration: 0.55 }}>
          <h2>Closing Statement</h2>
          <p>
            My journey is defined by a balance of <strong>discipline, creativity, and originality</strong>. I thrive on modularity, clarity, and reproducibility, and I am deeply invested in building systems that reflect professional polish and personal identity.
          </p>
          <p>
            Whether it is backend architecture, frontend design, or leadership in student chapters, I approach every challenge with persistence, adaptability, and a commitment to excellence. My portfolio is not just a collection of projects it is a reflection of who I am: a detail-oriented, resilient, and community-minded engineer determined to create solutions that stand out for their clarity, elegance, and originality.
          </p>
        </motion.article>

        <motion.div className="about-page__cta" variants={sectionVariants} transition={{ delay: 0.38, duration: 0.55 }}>
          <p>Interested in collaborating, building, or discussing workflow design and engineering?</p>
          <Button href="/contact" variant="gradient" size="lg">
            Get in Touch
          </Button>
        </motion.div>
      </motion.section>
    </MainLayout>
  );
}
