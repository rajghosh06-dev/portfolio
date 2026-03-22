import MainLayout from "@/layouts/MainLayout";
import { contactLinks } from "@/data/contact";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const contactMeta: Record<string, { icon: typeof Mail; eyebrow: string; note: string; accent: string }> = {
  Email: {
    icon: Mail,
    eyebrow: "Direct",
    note: "Best for detailed conversations, project ideas, and formal outreach.",
    accent: "cyan",
  },
  GitHub: {
    icon: Github,
    eyebrow: "Code",
    note: "Explore what I am building, the way I structure repos, and my workflow style.",
    accent: "slate",
  },
  LinkedIn: {
    icon: Linkedin,
    eyebrow: "Professional",
    note: "Ideal for networking, academic opportunities, and collaborative discussions.",
    accent: "blue",
  },
  Twitter: {
    icon: MessageCircle,
    eyebrow: "Social",
    note: "A lighter space for updates, thoughts, and quick interactions.",
    accent: "violet",
  },
};

function getDisplayValue(url: string) {
  return url.replace("mailto:", "").replace("https://", "").replace("http://", "");
}

export default function Contact() {
  return (
    <MainLayout>
      <motion.section
        className="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="contact-page__intro"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.45 }}
        >
          <p className="contact-page__eyebrow">Contact</p>
          <h1 className="contact-page__title">Reach out in the way that fits the conversation best.</h1>
          <p className="contact-page__lead">
            I&apos;m always interested in hearing about projects, technical collaboration, student initiatives, and opportunities to build thoughtful digital experiences.
          </p>
        </motion.div>

        <motion.div
          className="contact-page__layout"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.5 }}
        >
          <div className="contact-page__grid">
            {contactLinks.map((contact, index) => {
              const meta = contactMeta[contact.name];
              const Icon = meta.icon;

              return (
                <motion.a
                  key={contact.name}
                  href={contact.url}
                  target={contact.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={contact.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className={`contact-page__card contact-page__card--${meta.accent}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + index * 0.08, duration: 0.45 }}
                >
                  <div className="contact-page__card-top">
                    <span className="contact-page__icon">
                      <Icon size={20} />
                    </span>
                    <div className="contact-page__heading">
                      <p>{meta.eyebrow}</p>
                      <h2>{contact.name}</h2>
                    </div>
                    <span className="contact-page__arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <p className="contact-page__value">{getDisplayValue(contact.url)}</p>
                  <p className="contact-page__note">{meta.note}</p>
                </motion.a>
              );
            })}
          </div>

          <motion.aside
            className="contact-page__aside"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.24, duration: 0.5 }}
          >
            <div className="contact-page__aside-block">
              <p className="contact-page__aside-label">Preferred Flow</p>
              <h3>Choose the channel based on the conversation.</h3>
              <ul className="contact-page__aside-list">
                <li>Email for detailed project outreach and structured discussion.</li>
                <li>LinkedIn for networking, student leadership, and professional opportunities.</li>
                <li>GitHub if you want to evaluate my work style and repository discipline.</li>
                <li>Twitter for lighter check-ins and public-facing updates.</li>
              </ul>
            </div>

            <div className="contact-page__aside-block contact-page__aside-block--soft">
              <p className="contact-page__aside-label">Availability</p>
              <h3>Open to meaningful conversations and collaborative work.</h3>
              <p className="contact-page__aside-copy">
                If your idea values originality, structure, and polished execution, I&apos;d be happy to discuss it.
              </p>
            </div>
          </motion.aside>
        </motion.div>
      </motion.section>
    </MainLayout>
  );
}
