# 🚀 deepshika-personal-portfolio

A modern, responsive **personal developer portfolio** built with **React 19** and **Vite**, styled with **Tailwind CSS v4**, and deployed on Vercel. It features sections for showcasing skills, projects, experience, and a functional contact form powered by EmailJS.

🔗 **Live Demo:** [dev-personal-portfolio-rouge.vercel.app](https://dev-personal-portfolio-rouge.vercel.app/)

---

## 📋 Table of Contents

- [Description](#-description)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Component Tree](#-component-tree)
- [Getting Started](#-getting-started)
- [Starter Code](#-starter-code)
- [Customization](#-customization)
- [Deployment](#-deployment)

---

## 📝 Description

`dev-personal-portfolio` is a single-page application (SPA) portfolio template for developers. It is built on top of the official **React + Vite** scaffold and enhanced with Tailwind CSS for utility-first styling and EmailJS for zero-backend contact form functionality.

### Key Features

- ⚡ Blazing fast dev server and builds via **Vite 8**
- 🎨 Utility-first styling with **Tailwind CSS v4**
- 📬 Functional contact form using **EmailJS** (no backend required)
- 🖼️ Icon library support via **Lucide React** and **React Icons**
- 📱 Fully responsive layout for all screen sizes
- 🚀 One-click deploy to **Vercel**
- 🧹 Code quality enforced with **ESLint**

---

## 🛠️ Technologies Used

| Category            | Technology / Library               | Version    |
| ------------------- | ---------------------------------- | ---------- |
| **Framework**       | React                              | ^19.2.4    |
| **Build Tool**      | Vite                               | ^8.0.1     |
| **Styling**         | Tailwind CSS                       | ^4.2.2     |
| **Tailwind Plugin** | @tailwindcss/vite                  | ^4.2.2     |
| **Contact Form**    | @emailjs/browser                   | ^4.4.1     |
| **Icons**           | Lucide React                       | ^1.7.0     |
| **Icons**           | React Icons                        | ^5.6.0     |
| **Linting**         | ESLint + eslint-plugin-react-hooks | ^9.x       |
| **Language**        | JavaScript (JSX)                   | ES Modules |
| **Deployment**      | Vercel                             | —          |

---

## 📁 Project Structure

```
dev-personal-portfolio/
├── public/
│   └── favicon.svg              # Site favicon
├── src/
│   ├── assets/                  # Images, icons, and static files
│   ├── components/              # Reusable UI components
│   │   ├── AnimatedBorderButton.jsx           # Animated button
│   │   ├── Button.jsx           # Reusable Button code
│   │   ├── About.jsx            # About me section
│   │   ├── Skills.jsx           # Technical skills section
│   │   ├── Projects.jsx         # Projects showcase section
│   │   └── Experience.jsx       # Work experience / timeline
│   |
│   ├── layout/                  # Reusable UI components
│   │   ├── Navbar.jsx           # Top navigation bar
│   │   └── Footer.jsx           # Footer with social links
│   |
│   ├── sections/                # UI containers
│   │   ├── Hero.jsx             # About me section
│   │   ├── About.jsx            # About me section
│   │   ├── Experience.jsx       # Work experience / timeline
│   │   ├── Projects.jsx         # Projects showcase section
│   │   ├── Contact.jsx          # Contact form (EmailJS)
│   │   └── Testimonals.jsx      # Testimonal Cards sections
│   ├── App.jsx                  # Root component – assembles all sections
│   ├── main.jsx                 # Entry point – renders App into #root
│   └── index.css                # Global styles + Tailwind directives
├── index.html                   # HTML shell
├── vite.config.js               # Vite + Tailwind plugin config
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies and scripts
└── .gitignore
```

---

## 🌳 Component Tree

```
main.jsx
└── <App />
    ├── <Navbar />
    │   ├── Logo / Brand
    │   ├── Nav Links (Home, About, Skills, Projects, Experience, Contact)
    │   └── Mobile Menu Toggle
    │
    ├── <Hero />
    │   ├── Greeting Text
    │   ├── Role / Tagline (animated text)
    │   ├── CTA Buttons (Resume, Contact Me)
    │   └── Profile Image / Illustration
    │
    ├── <About />
    │   ├── Profile Summary
    │   └── Personal Details / Bio
    │
    ├── <Experiencce />
    │   ├── Section Heading
    │   └── Skill Cards (icon + label per technology)
    │
    ├── <Testimonals />
    │   └── Persons Cards[]
    │       ├── Person Name
    │       ├── Testimonal Content
    │       └── Job Role
    │
    ├── <Experience />
    │   ├── Section Heading
    │   └── Timeline Items[]
    │       ├── Role / Title
    │       ├── Company & Duration
    │       └── Description Bullets
    │
    ├── <Contact />
    │   ├── Section Heading
    │   ├── Contact Info (email, social links)
    │   └── Contact Form (EmailJS)
    │       ├── Name Input
    │       ├── Email Input
    │       ├── Message Textarea
    │       └── Submit Button
    │
    └── <Footer />
        ├── Copyright Text
        └── Social Media Icons (GitHub, LinkedIn, etc.)
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/deepshikava/dev-personal-portfolio.git

# 2. Navigate into the project directory
cd dev-personal-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start local development server (HMR) |
| `npm run build`   | Create optimised production build    |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint across all source files   |

---

## 🧩 Starter Code

### `src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

### `src/App.jsx`

```jsx
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonals";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

### `src/index.css`

```css
@import "tailwindcss";

/* Add any global custom styles below */
* {
  scroll-behavior: smooth;
}
```

---

## ✏️ Customization

1. **Personal Info** — Update your name, role, bio, and profile image inside `Hero.jsx` and `About.jsx`.
2. **Skills** — Edit the skills array in `Skills.jsx` to reflect your tech stack.
3. **Projects** — Add/remove project objects in `Projects.jsx` with title, description, tech tags, and links.
4. **Experience** — Update timeline entries in `Experience.jsx`.
5. **Contact Form** — Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` in `Contact.jsx` with your [EmailJS](https://www.emailjs.com/) credentials.
6. **Colors/Theme** — Tailwind CSS v4 allows inline theme customisation directly in `index.css` using `@theme`.

---

## 🚀 Deployment

This project is deployed on **Vercel**. To deploy your own copy:

```bash
# Build the project
npm run build

# Or connect your GitHub repo to Vercel at https://vercel.com
# and it will auto-deploy on every push to main.
```

**Vercel settings:**

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

---
