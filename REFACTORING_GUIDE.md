# Rishit Ghosh Portfolio - Multi-Page Refactor

A modern, responsive developer portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features a multi-page structure with separate routes for each section, custom display font for UI highlights, and gradient-filled buttons.

## 🚀 Features

- **Multi-Page Navigation**: Separate pages for Home, About, Projects, Skills, and Contact
- **Responsive Design**: Fully responsive across all devices (mobile-first approach)
- **Dark Mode**: Toggle between light and dark themes with persistent storage
- **Custom Display Font**: Playfair Display font applied ONLY to short UI elements (see below)
- **Gradient Buttons**: Beautiful gradient-filled button components with smooth animations
- **Smooth Transitions**: Page transitions powered by Framer Motion
- **Accessibility**: WCAG AA compliant with keyboard navigation and semantic HTML
- **Multiple Backgrounds**: SVG patterns, particle field, and gradient options
- **TypeScript**: Fully typed for better development experience
- **SEO Optimized**: Meta tags and structured data for each page

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (Pages Router)
- **Styling**: Tailwind CSS 4.2.2
- **Animations**: Framer Motion 12.38.0
- **Language**: TypeScript 5
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins, Playfair Display)

## 📄 Pages & Routes

| Page | Route | Purpose |
|------|-------|---------|
| **Home** | `/` | Hero section with main CTA buttons |
| **About** | `/about` | Personal bio and introduction |
| **Projects** | `/projects` | Portfolio with filterable projects |
| **Skills** | `/skills` | Technical skills and expertise |
| **Contact** | `/contact` | Contact information and CTA |

## 🎨 Display Font Usage

The custom display font **Playfair Display** is used ONLY for short, prominent UI elements. These include:

### Where Display Font Is Applied:
- `.display-font` class on these elements:
  - **Home page**: "Welcome!" micro-headline
  - **About page**: "About Me" section header
  - **Projects page**: "My Projects" section header
  - **Skills page**: "My Skills" section header
  - **Contact page**: "Let's Connect" section header

### Where Display Font Is NOT Used:
- Body copy and paragraphs
- Navigation links and labels
- Regular heading (H1, H2) - use system fonts
- Button labels
- Project descriptions
- Skill descriptions

### Font Utilities in CSS:

```css
/* Display font utility - use ONLY for short UI elements */
.display-font {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
```

To use it:
```jsx
<div className="display-font text-4xl text-blue-600">
  Welcome!
</div>
```

## 🎯 Gradient Buttons

The portfolio uses gradient-filled buttons with CSS variables for easy customization.

### Button Variants:
- **gradient**: Teal to Blue gradient (primary CTA)
- **ghost**: Transparent with border (secondary)
- **primary**: Solid blue (less prominent)

### CSS Variables:

```css
:root {
  --btn-grad-start: #6ee7b7;  /* Teal */
  --btn-grad-end: #3b82f6;    /* Blue */
  --btn-grad-hover-start: #5eead4;
  --btn-grad-hover-end: #2563eb;
}
```

### Changing Gradient Colors:
Edit the CSS variables in `src/styles/globals.css`:

```css
:root {
  --btn-grad-start: #YOUR_START_COLOR;
  --btn-grad-end: #YOUR_END_COLOR;
  --btn-grad-hover-start: #YOUR_HOVER_START;
  --btn-grad-hover-end: #YOUR_HOVER_END;
}
```

### Button Component Implementation:

```jsx
import Button from "@/components/Button";

// Usage examples:
<Button href="/projects" variant="gradient" size="lg">
  View Work
</Button>

<Button href="/contact" variant="ghost" size="md">
  Contact Me
</Button>

<Button onClick={handleClick} variant="primary" type="button">
  Click Me
</Button>
```

## 📦 Installation & Setup

1. **Clone and install**:
   ```bash
   git clone <repo-url>
   cd portfolio
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

4. **Lint code**:
   ```bash
   npm run lint
   ```

## 🆕 Adding a New Page

1. **Create page file** in `src/pages/newpage.tsx`:
   ```jsx
   import MainLayout from "@/layouts/MainLayout";
   import { motion } from "framer-motion";
   import Button from "@/components/Button";

   export default function NewPage() {
     return (
       <MainLayout>
         <motion.div className="max-w-6xl mx-auto px-6 py-20">
           {/* Your content */}
         </motion.div>
       </MainLayout>
     );
   }
   ```

2. **Add navigation link** in `src/components/Navbar.tsx`:
   ```tsx
   const navLinks = [
     { href: "/", label: "Home" },
     { href: "/about", label: "About" },
     { href: "/newpage", label: "New Page" },  // Add this
     // ...
   ];
   ```

3. **Add Framer Motion transitions** (optional) for page enter/exit:
   ```jsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: -20 }}
     transition={{ duration: 0.4 }}
   >
     {/* Content */}
   </motion.div>
   ```

## ♿ Accessibility Testing

### Keyboard Navigation:
1. Press `Tab` to cycle through focusable elements
2. Press `Enter` on links and buttons
3. Press `Escape` to close the mobile menu (if applicable)
4. Visible focus outlines appear on all interactive elements

### Contrast Checking:
- Run Lighthouse audit: `npm run build` then test in browser DevTools
- All text meets WCAG AA standards (4.5:1 contrast minimum)
- Test with tools like WebAIM or Chrome DevTools

### Screen Reader Testing:
- Use NVDA (Windows), JAWS, or Safari VoiceOver
- All images have alt text
- Semantic HTML structure with `<main>`, `<nav>`, `<section>`, `<article>`
- ARIA labels on interactive components

### Lighthouse Audit Target:
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- Performance: ≥ 80
- SEO: ≥ 90

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Button.tsx      # Gradient button component
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer
│   ├── Hero.tsx        # Hero component with animations
│   ├── SkillCard.tsx   # Skill card component
│   ├── ProjectCard.tsx # Project card component
│   └── ...
├── pages/              # Next.js pages (file-based routing)
│   ├── _app.tsx       # App wrapper with theme provider
│   ├── index.tsx      # Home page
│   ├── about.tsx      # About page
│   ├── projects.tsx   # Projects page
│   ├── skills.tsx     # Skills page
│   └── contact.tsx    # Contact page
├── layouts/
│   └── MainLayout.tsx # Main layout wrapper
├── styles/
│   ├── globals.css    # Global styles and variables
│   └── tailwind.css   # Tailwind directives
├── data/              # Static data files
│   ├── skills.ts
│   ├── projects.ts
│   └── contact.ts
└── utils/
    ├── ThemeContext.tsx # Theme management
    ├── darkTheme.ts
    └── lightTheme.ts
```

## 🎓 Key Refactoring Changes

### From Single-Page to Multi-Page:
- **Before**: All content in tabs on one `index.tsx` page
- **After**: Separate pages with proper routing and transitions

### Display Font Implementation:
- **Before**: "Great Vibes" font used on headings everywhere
- **After**: Playfair Display used ONLY on short UI callouts like "Welcome!"

### Button System:
- **Before**: GradientButton with custom props
- **After**: Generic Button component with gradient, ghost, and primary variants

### Theme Management:
- **Before**: Local state in each component
- **After**: Global ThemeContext for consistent dark/light mode

## 🚀 Deployment

### Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Docker:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📝 Environment Variables

Create `.env.local` for local development (if needed):
```env
# Optional: Add any API keys or config values
```

## 🔒 Performance Optimization

- **Image Optimization**: Using `next/image` for automatic optimization
- **Font Loading**: Preload with `font-display: swap` for Playfair Display
- **Code Splitting**: Next.js automatically splits code by page
- **Lazy Loading**: Components lazy-load via viewport detection with Framer Motion

## 🤝 Contributing

Feel free to fork and submit PRs for improvements!

## 📧 Contact

- Email: rajghosh06.dev@gmail.com
- GitHub: [rajghosh06-dev](https://github.com/rajghosh06-dev)
- LinkedIn: [rajghosh06](https://www.linkedin.com/in/rajghosh06/)

---

**Last Updated**: March 2026  
**Version**: 2.0 (Multi-Page Refactor)
