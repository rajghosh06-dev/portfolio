import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  LoaderCircle,
  Mail,
  Orbit,
  Send,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import { contactFormConfig } from "@/data/contact";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormValues, string>>;
type SubmitState = "idle" | "submitting" | "success" | "error" | "fallback";

const INITIAL_FORM: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inquiryTracks = [
  "Project build",
  "Collaboration",
  "Hackathon",
  "Student initiative",
];

const messageChecklist = [
  "Share the idea, goal, or problem you want to solve.",
  "Add timelines, scope, or the kind of help you need.",
  "Leave a working email so I can reply with context.",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getGoogleFormsEndpoint(formId: string) {
  return `https://docs.google.com/forms/d/e/${formId}/formResponse`;
}

function buildMailto(values: FormValues) {
  const subject = encodeURIComponent(`Portfolio inquiry: ${values.subject || "New message"}`);
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Subject: ${values.subject || "Not provided"}`,
      "",
      values.message,
    ].join("\n"),
  );

  return `mailto:${contactFormConfig.recipientEmail}?subject=${subject}&body=${body}`;
}

function submitToGoogleForms(values: FormValues) {
  const { googleForms } = contactFormConfig;

  return new Promise<void>((resolve, reject) => {
    const iframeId = "contact-google-transport";
    let iframe = document.getElementById(iframeId) as HTMLIFrameElement | null;

    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = iframeId;
      iframe.name = iframeId;
      iframe.hidden = true;
      iframe.setAttribute("aria-hidden", "true");
      document.body.appendChild(iframe);
    }

    const form = document.createElement("form");
    form.action = getGoogleFormsEndpoint(googleForms.formId);
    form.method = "POST";
    form.target = iframeId;
    form.style.display = "none";

    const appendField = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    appendField(googleForms.fields.name, values.name.trim());
    appendField(googleForms.fields.email, values.email.trim());
    appendField(googleForms.fields.subject, values.subject.trim());
    appendField(googleForms.fields.message, values.message.trim());
    appendField("fvv", "1");
    appendField("pageHistory", googleForms.pageHistory);
    appendField("fbzx", googleForms.fbzx);
    appendField("submissionTimestamp", "-1");

    document.body.appendChild(form);

    let settled = false;

    const cleanup = () => {
      iframe?.removeEventListener("load", handleLoad);
      window.clearTimeout(timeoutId);
      form.remove();
    };

    const finish = (callback: () => void) => {
      if (settled) return;
      settled = true;
      cleanup();
      callback();
    };

    const handleLoad = () => finish(resolve);

    iframe.addEventListener("load", handleLoad, { once: true });

    const timeoutId = window.setTimeout(() => {
      finish(() => reject(new Error("google-forms-timeout")));
    }, 5000);

    form.submit();
  });
}

export default function ContactMessagePanel() {
  const [values, setValues] = useState<FormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState(
    "Messages can be routed through Google Forms, with an email-draft fallback available when needed.",
  );

  const googleForms = contactFormConfig.googleForms;

  const googleFormsReady = useMemo(() => {
    return Boolean(
      googleForms.enabled &&
      googleForms.formId &&
      googleForms.fields.name &&
      googleForms.fields.email &&
      googleForms.fields.subject &&
      googleForms.fields.message,
    );
  }, [
    googleForms.enabled,
    googleForms.fields.email,
    googleForms.fields.message,
    googleForms.fields.name,
    googleForms.fields.subject,
    googleForms.formId,
  ]);

  const deliveryLabel = googleFormsReady ? "Google Forms connected" : "Email backup available";
  const deliveryCopy = googleFormsReady
    ? "Messages are routed into your Google Form responses while the visitor remains on the portfolio."
    : "If Google Forms is unavailable, the contact flow can still continue through a prefilled email draft.";

  const handleFieldChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const nextValue = event.target.value;

      setValues((current) => ({
        ...current,
        [field]: nextValue,
      }));

      setErrors((current) => {
        if (!current[field]) return current;

        const nextErrors = { ...current };
        delete nextErrors[field];
        return nextErrors;
      });
    };

  const validate = () => {
    const nextErrors: FieldErrors = {};

    if (!values.name.trim()) nextErrors.name = "Please add your name.";
    if (!values.email.trim()) nextErrors.email = "Please add your email.";
    else if (!isValidEmail(values.email)) nextErrors.email = "Please enter a valid email address.";
    if (!values.message.trim()) nextErrors.message = "Please describe your message.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setSubmitState("error");
      setStatusMessage("A few details are still missing. Check the highlighted fields and try again.");
      return;
    }

    setSubmitState("submitting");
    setStatusMessage(
      googleFormsReady
        ? "Submitting your message through the connected contact channel..."
        : "Preparing a prefilled email draft so your message can still be sent.",
    );

    try {
      if (googleFormsReady) {
        await submitToGoogleForms(values);

        setSubmitState("success");
        setStatusMessage(
          "Your message has been submitted successfully. Thank you for reaching out. I typically respond within about one week.",
        );
        setValues(INITIAL_FORM);
        setErrors({});
        return;
      }

      window.location.href = buildMailto(values);
      setSubmitState("fallback");
      setStatusMessage(
        "A prefilled email draft has been opened as an alternative contact route. I typically respond within about one week.",
      );
    } catch {
      window.location.href = buildMailto(values);
      setSubmitState("fallback");
      setStatusMessage(
        "Google Forms did not confirm in time, so a prefilled email draft has been opened as backup. I typically respond within about one week.",
      );
    }
  };

  return (
    <motion.section
      className="contact-page__composer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.28, duration: 0.55 }}
      aria-labelledby="contact-message-title"
    >
      <div className="contact-page__composer-shell">
        <div className="contact-page__composer-glow" aria-hidden="true" />

        <div className="contact-page__signal-panel">
          <span className="contact-page__signal-pill">
            <Sparkles size={14} />
            Get In Touch
          </span>

          <h2 id="contact-message-title" className="contact-page__signal-title">
            Build the first message right here.
          </h2>

          <p className="contact-page__signal-copy">
            This is a custom contact composer for your portfolio, designed to feel more premium than a generic form while still staying practical for GitHub Pages.
          </p>

          <div className="contact-page__signal-tags" aria-label="Conversation lanes">
            {inquiryTracks.map((track) => (
              <span key={track} className="contact-page__signal-tag">
                {track}
              </span>
            ))}
          </div>

          <div className="contact-page__signal-status">
            <div className="contact-page__signal-status-icon">
              <Orbit size={18} />
            </div>
            <div>
              <p>{deliveryLabel}</p>
              <span>{deliveryCopy}</span>
            </div>
          </div>

          <div className="contact-page__signal-steps">
            {messageChecklist.map((item, index) => (
              <div key={item} className="contact-page__signal-step">
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-page__form-shell">
          <div className="contact-page__form-head">
            <div>
              <p className="contact-page__form-kicker">Message Composer</p>
              <h3 className="contact-page__form-title">Send a polished first touchpoint.</h3>
            </div>

            <div className="contact-page__form-badges" aria-hidden="true">
              <span>
                <ShieldCheck size={15} />
                Human-first
              </span>
              <span>
                <Mail size={15} />
                Reply-ready
              </span>
            </div>
          </div>

          <p className="contact-page__form-lead">
            Share enough context for a thoughtful response. I typically reply within about one week. The form is styled to adapt across light mode, dark mode, and your beta Glass Mode.
          </p>

          <form className="contact-page__form" onSubmit={handleSubmit} noValidate>
            <div className="contact-page__form-grid">
              <label className="contact-page__field">
                <span className="contact-page__field-label">Name</span>
                <input
                  type="text"
                  name="name"
                  className="contact-page__field-input"
                  placeholder="Your full name"
                  value={values.name}
                  onChange={handleFieldChange("name")}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name ? <span className="contact-page__field-error">{errors.name}</span> : null}
              </label>

              <label className="contact-page__field">
                <span className="contact-page__field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  className="contact-page__field-input"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleFieldChange("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email ? <span className="contact-page__field-error">{errors.email}</span> : null}
              </label>

              <label className="contact-page__field contact-page__field--wide">
                <span className="contact-page__field-label">Subject</span>
                <input
                  type="text"
                  name="subject"
                  className="contact-page__field-input"
                  placeholder="Project idea, opportunity, feedback, collaboration..."
                  value={values.subject}
                  onChange={handleFieldChange("subject")}
                />
              </label>

              <label className="contact-page__field contact-page__field--wide">
                <span className="contact-page__field-label">Message</span>
                <textarea
                  name="message"
                  className="contact-page__field-input contact-page__field-textarea"
                  placeholder="Tell me about your idea, goal, timeline, or what kind of collaboration you have in mind..."
                  value={values.message}
                  onChange={handleFieldChange("message")}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message ? (
                  <span className="contact-page__field-error">{errors.message}</span>
                ) : (
                  <span className="contact-page__field-hint">
                    A concise, high-context message usually helps me respond more clearly and promptly.
                  </span>
                )}
              </label>
            </div>

            <div className="contact-page__form-actions">
              <button
                type="submit"
                className="contact-page__form-submit"
                disabled={submitState === "submitting"}
              >
                {submitState === "submitting" ? <LoaderCircle size={18} className="contact-page__spin" /> : <Send size={18} />}
                <span>{googleFormsReady ? "Send Message" : "Open Email Draft"}</span>
              </button>

              <div className="contact-page__form-meta">
                <p>Static-site compatible</p>
                <span>{googleFormsReady ? "Google Forms response capture" : "Ready for Google Forms or mail fallback"}</span>
              </div>
            </div>

            <div className={`contact-page__form-status contact-page__form-status--${submitState}`} role="status" aria-live="polite">
              {submitState === "success" ? <CheckCircle2 size={17} /> : null}
              {submitState === "error" ? <TriangleAlert size={17} /> : null}
              {submitState === "fallback" ? <Mail size={17} /> : null}
              {submitState === "submitting" ? <LoaderCircle size={17} className="contact-page__spin" /> : null}
              <span>{statusMessage}</span>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
