export const contactLinks = [
  {
    name: "Email",
    url: "mailto:rishitghosh06@gmail.com",
  },
  {
    name: "GitHub",
    url: "https://github.com/rajghosh06-dev",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rajghosh06/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rajghosh06_dev",
  },
];

// Google Forms can work with a static GitHub Pages deployment if you post viewer
// input to the public `formResponse` endpoint using your field entry ids.
// If you edit the Google Form later, re-check the ids because Google can change
// them after structural edits.
export const contactFormConfig = {
  recipientEmail: "rishitghosh06@gmail.com",
  googleForms: {
    enabled: true,
    formId: "1FAIpQLSexqCmbEtTpjCyotpJjA_AqBqWJ3TTlHab1519fKGIpy9H3KQ",
    pageHistory: "0",
    fbzx: "-2755018668904296491",
    fields: {
      name: "entry.1574284766",
      email: "entry.401205242",
      subject: "entry.1354037410",
      message: "entry.909250095",
    },
  },
} as const;
