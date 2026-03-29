# Rishit Ghosh Portfolio

![Project Status: Active](https://img.shields.io/badge/status-active-brightgreen.svg)
![License: MIT](https://img.shields.io/github/license/rajghosh06-dev/portfolio)
![GitHub repo size](https://img.shields.io/github/repo-size/rajghosh06-dev/portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/rajghosh06-dev/portfolio)
![GitHub language count](https://img.shields.io/github/languages/count/rajghosh06-dev/portfolio)
![GitHub top language](https://img.shields.io/github/languages/top/rajghosh06-dev/portfolio)

[![Live Demo](https://img.shields.io/badge/demo-online-blue?style=social&logo=github)](https://rajghosh06-dev.github.io/portfolio)
![GitHub stars](https://img.shields.io/github/stars/rajghosh06-dev/portfolio?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/rajghosh06-dev/portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/rajghosh06-dev/portfolio?style=social)
![Visitors](https://hits.sh/github.com/rajghosh06-dev/portfolio.svg?style=social&label=Visitors)

>🔗 **Live Portfolio:** [rajghosh06-dev.github.io/portfolio](https://rajghosh06-dev.github.io/portfolio)

A multi-page personal portfolio built with Next.js, React, TypeScript, Framer Motion, and a heavily customized CSS system. The project is designed to present Rishit Ghosh’s academic background, projects, skills, experience, and contact channels in a polished, recruiter-friendly format while keeping content easy to maintain through centralized JSON files.

This is not a generic starter anymore. The codebase has been refactored into a structured portfolio system with:

- a custom floating navbar and SVG brand mark
- light mode, dark mode, and a site-wide experimental Glass Mode
- editable JSON content sources
- reusable page/card/button components
- motion and hover systems across major UI surfaces
- a protected profile-image wrapper for casual download deterrence

## Overview

The portfolio uses the Next.js Pages Router and a shared `MainLayout` to provide a consistent shell across all pages. The visual language blends:

- soft grid-and-orb light backgrounds
- darker neon-accented dark mode styling
- glassmorphism as an optional enhancement layer
- animated cards and polished CTA patterns

The overall goal of the project is twofold:

1. present a strong personal brand with modern UI polish
2. keep the content layer simple enough to edit without touching core source code

## Core Pages

### Home

The landing page is structured as a high-impact introduction plus supporting proof points. It includes:

- a hero section with positioning statement and CTA buttons
- a professional profile tile with a formal portrait
- a current-education panel with academic status, expected graduation, and skill cloud
- featured project previews
- applied learning and experience highlights
- certifications and workshop cards
- a footer-top Glass Mode beta control

### About

The About page is a structured narrative page that presents:

- introduction and identity
- academic and technical background
- project and portfolio philosophy
- leadership and community engagement
- workflow principles
- personal interests and long-term vision

### Projects

The Projects page showcases the main build archive with:

- a page-level introduction
- project statistics
- filter chips by project category
- reusable project cards with images, notes, stack, summary, and highlights

### Skills

The Skills page organizes the technical foundation through:

- grouped skill cards
- academic timeline content
- certifications
- workshop and learning history

### Contact

The Contact page combines styled platform cards with a custom message composer instead of relying on plain links alone. It presents:

- email
- GitHub
- LinkedIn
- Twitter
- a custom "Send Message" panel below the cards

Each platform is framed as an intentional contact surface rather than a plain text link list, and the composer adds a direct outreach path that still works within a static GitHub Pages deployment.

## Feature Highlights

### 1. Theme System

The site supports:

- Light mode
- Dark mode
- Glass Mode beta overlay

The theme state is centralized in [`src/utils/ThemeContext.tsx`](src/utils/ThemeContext.tsx). It stores user preferences in `localStorage` and applies global HTML-level state using:

- the `dark` class for dark theme
- `data-glass-mode="true"` for Glass Mode

This makes the styling system easy to scale because the CSS can respond to one global source of truth.

### 2. Glass Mode

Glass Mode is an experimental visual layer controlled from the footer-top beta tile. When enabled, it transforms major surfaces across the site into a frosted-glass aesthetic using:

- semi-transparent layered backgrounds
- `backdrop-filter` blur
- brighter border edges
- softened gradient illumination
- hover states with richer highlights

Glass Mode works in both light and dark themes and has its own tuning for contrast and surface clarity.

### 3. Editable JSON Content Layer

One of the most important refactors in this portfolio is the move away from scattered hardcoded content. Most editable information lives under:

```text
src/data/content/
```

This allows content updates without editing page logic or component code.

Current editable sources include:

- `academics.json`
- `certificates.json`
- `experience.json`
- `home.json`
- `projects.json`
- `skills.json`

TypeScript wrapper files inside `src/data/` read those JSON files and provide typed exports to the rest of the app.

### 4. Reusable UI Components

The project uses a reusable component layer for consistency:

- [`Button.tsx`](src/components/Button.tsx) for CTA variants
- [`ContactMessagePanel.tsx`](src/components/ContactMessagePanel.tsx) for the custom contact composer and submission logic
- [`Navbar.tsx`](src/components/Navbar.tsx) for navigation and brand identity
- [`DarkModeToggle.tsx`](src/components/DarkModeToggle.tsx) for light/dark switching
- [`GlassModeToggle.tsx`](src/components/GlassModeToggle.tsx) for the experimental glass aesthetic
- [`ProjectCard.tsx`](src/components/ProjectCard.tsx) for project presentation
- [`SkillCard.tsx`](src/components/SkillCard.tsx) for skills presentation
- [`Footer.tsx`](src/components/Footer.tsx) for footer shell and Glass Mode placement

### 5. Contact Workflow

The contact system is designed around the constraints of a static GitHub Pages deployment.

Why this matters:

- this portfolio is exported with `output: "export"`
- GitHub Pages does not provide a Next.js backend or API routes
- a normal server-side contact endpoint would not work here

To solve that cleanly, the portfolio uses a hybrid contact flow:

1. visitors fill out the custom form on the Contact page
2. if Google Forms is enabled and configured, the browser posts the message into the published Google Form response endpoint
3. if that handoff does not confirm in time, the portfolio falls back to a prefilled `mailto:` draft
4. if Google Forms is intentionally disabled, the form skips straight to the email-draft backup flow

This means the page can stay visually custom while the data still lands in a real collection system.

The current contact message fields are:

- Full Name
- Email Address
- Subject
- Message

The runtime is controlled in [`src/data/contact.ts`](src/data/contact.ts) through `contactFormConfig`.

That config currently stores:

- `recipientEmail` for the fallback email-draft route
- `googleForms.enabled` to decide whether Google Forms is the primary route
- `googleForms.formId` for the published Google Form
- `googleForms.pageHistory` and `googleForms.fbzx` for the Google form submission payload
- `googleForms.fields.*` mappings for the required `entry.xxxxxxxx` ids

The actual UI and submission behavior live in [`src/components/ContactMessagePanel.tsx`](src/components/ContactMessagePanel.tsx).

The page-level integration happens in [`src/pages/contact.tsx`](src/pages/contact.tsx), and the visual system for light mode, dark mode, and Glass Mode is handled in [`src/styles/globals.css`](src/styles/globals.css).

Important implementation note:

- Google Forms success is inferred from the submission handoff through a hidden transport frame
- because this is not a first-party JSON API, the success state is practical and reliable for normal usage, but not as authoritative as a dedicated backend response
- the email-draft fallback exists to keep the contact path resilient even if Google does not confirm in time

### 6. Motion and Interaction

Framer Motion is used for entry animations, while CSS handles:

- hover lifts
- border glow shifts
- icon motion
- media scaling
- chip and badge reactions

The result is a portfolio that feels active without becoming noisy.

### 7. Profile Image Protection

The profile photo on the home page uses a wrapper in [`src/security/ProtectedImage.tsx`](src/security/ProtectedImage.tsx) to discourage casual image downloading by:

- disabling right-click on the image area
- disabling drag behavior
- disabling standard pointer interaction on the underlying image
- placing a transparent shield layer above the image

Important note: this is a deterrent, not absolute protection. Any browser-delivered image can still be captured by determined users.

## Tech Stack

### Framework

- Next.js `16.2.1`
- Pages Router

### Frontend

- React `19.2.4`
- TypeScript `5`
- Framer Motion `12.38.0`
- Lucide React icons

### Styling

- Tailwind CSS installed in the project
- custom global CSS as the primary styling system
- Google Font imports through CSS

### Tooling

- ESLint
- TypeScript type-checking during build
- PostCSS / Autoprefixer

## Architecture

### Application Shell

The global shell is provided by:

- [`src/pages/_app.tsx`](src/pages/_app.tsx)
- [`src/pages/_document.tsx`](src/pages/_document.tsx)
- [`src/layouts/MainLayout.tsx`](src/layouts/MainLayout.tsx)

Responsibilities:

- attach global CSS
- wrap the app in the theme provider
- set the root HTML attributes
- render the persistent navbar and footer
- mount the custom light-mode background scene

### Data Flow

The data system follows this pattern:

```text
JSON content -> typed wrapper -> page/component consumption
```

Examples:

- [`src/data/content/projects.json`](src/data/content/projects.json) -> [`src/data/projects.ts`](src/data/projects.ts)
- [`src/data/content/skills.json`](src/data/content/skills.json) -> [`src/data/skills.ts`](src/data/skills.ts)
- [`src/data/content/home.json`](src/data/content/home.json) -> [`src/data/home.ts`](src/data/home.ts)

This keeps the main UI safer while still allowing fast edits.

### Styling Strategy

Most visual behavior lives in [`src/styles/globals.css`](src/styles/globals.css). The file contains:

- theme variables
- navbar styles
- button styles
- page-specific layouts
- shared hover systems
- dark-mode overrides
- Glass Mode global overrides

This portfolio currently relies more on carefully authored CSS than on utility-only styling.

## Folder Structure

```text
src/
├── components/
│   ├── Button.tsx
│   ├── ContactMessagePanel.tsx
│   ├── DarkModeToggle.tsx
│   ├── Footer.tsx
│   ├── GlassModeToggle.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   └── SkillCard.tsx
├── data/
│   ├── contact.ts
│   ├── home.ts
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── content/
│       ├── academics.json
│       ├── certificates.json
│       ├── experience.json
│       ├── home.json
│       ├── projects.json
│       └── skills.json
├── layouts/
│   └── MainLayout.tsx
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   ├── index.tsx
│   ├── projects.tsx
│   └── skills.tsx
├── security/
│   └── ProtectedImage.tsx
├── styles/
│   ├── globals.css
│   └── tailwind.css
└── utils/
    ├── ThemeContext.tsx
    ├── animations.ts
    ├── darkTheme.ts
    ├── lightTheme.ts
    └── PRESET/
```

## How To Update Content

### Update academic information

Edit:

- [`src/data/content/academics.json`](src/data/content/academics.json)

### Update certifications or workshops

Edit:

- [`src/data/content/certificates.json`](src/data/content/certificates.json)

### Update experience highlights

Edit:

- [`src/data/content/experience.json`](src/data/content/experience.json)

### Update home-page education/profile labels

Edit:

- [`src/data/content/home.json`](src/data/content/home.json)

### Update project archive

Edit:

- [`src/data/content/projects.json`](src/data/content/projects.json)

### Update skill groups

Edit:

- [`src/data/content/skills.json`](src/data/content/skills.json)

### Update contact form routing

Edit:

- [`src/data/contact.ts`](src/data/contact.ts)

This file now controls both the visible contact links and the message-composer submission flow.

If you need to update the Google Forms integration:

1. publish the responder form
2. copy the form id from the public form URL
3. copy the `entry.xxxxxxxx` ids for each field from the form source
4. update:
   - `googleForms.formId`
   - `googleForms.pageHistory`
   - `googleForms.fbzx`
   - `googleForms.fields.name`
   - `googleForms.fields.email`
   - `googleForms.fields.subject`
   - `googleForms.fields.message`
5. keep `googleForms.enabled` as `true`

If you want to force the backup path for testing:

- temporarily set `googleForms.enabled` to `false`

Then open:

```text
http://localhost:3000/contact/
```

That bypasses Google Forms and opens the prefilled email-draft route instead.

If the Google Form structure changes later, re-check the ids because Google can regenerate them after edits.

## Local Development

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000/contact/
```

to test the contact experience locally.

### Lint the project

```bash
npm run lint
```

### Create a production build

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

## Notes About Development

### Smooth scrolling

The project uses:

- `scroll-behavior: smooth` in global CSS
- `data-scroll-behavior="smooth"` on the root HTML element

This prevents the Next.js development warning related to route-transition scrolling behavior.

### Image handling

The home-page portrait is imported from `private/` and rendered through a protective wrapper. Public images for project cards and other visual assets live under `public/`.

### Current styling direction

The portfolio intentionally avoids a plain boilerplate look. It leans into:

- expressive hero structure
- hover-driven motion
- gradient accents
- frosted surfaces
- glassmorphism as an optional premium layer

### Contact testing notes

The contact system can be tested in two modes:

- Google Forms primary mode:
  keep `googleForms.enabled` set to `true`
- Email fallback mode:
  temporarily set `googleForms.enabled` to `false`

When Google Forms is enabled, the page attempts to submit to the Google form first.

When Google Forms is disabled, or when the Google handoff does not confirm in time, the portfolio opens a prefilled email draft using the configured `recipientEmail`.

This behavior is especially useful on GitHub Pages because it gives the portfolio a functional backup path without needing a custom backend.

## Why This Project Stands Out

This portfolio is not just a personal website. It is also a structured frontend system built around:

- content modularity
- repeatable editing workflow
- visual experimentation
- recruiter-facing presentation quality
- incremental refinement without rewriting the entire app each time

That combination makes it useful both as a portfolio and as a case study in personal-site architecture.

## Verification

The project is routinely verified with:

- `npm run lint`
- `npm run build`

If a build shows `spawn EPERM` in a restricted Windows sandbox, that is an environment restriction rather than a project code issue.

## Contact

- GitHub: [rajghosh06-dev](https://github.com/rajghosh06-dev)
- LinkedIn: [rajghosh06](https://www.linkedin.com/in/rajghosh06/)
- Twitter: [rajghosh06_dev](https://twitter.com/rajghosh06_dev)
- Email: [rajghosh06.dev@gmail.com](mailto:rajghosh06.dev@gmail.com)

## License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

Built as a structured, evolving portfolio system for Rishit Ghosh.
