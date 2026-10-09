# Suleman Shaikh – Digital Marketing Portfolio Website

A modern, responsive, 5-page digital marketing portfolio website built with **React**, **Vite**, **Tailwind CSS**, **React Router**, and **Lucide React**.

Designed specifically for **Suleman Shaikh**, Digital Marketing Executive with a background in **BBA (Specialization in International Business)** and hands-on internship experience at **Al Naya International LLC**.

---

## 🌟 Key Highlights

- **5 Complete Core Pages**:
  1. **Home (`/`)**: Impactful hero with headline *"I Help Businesses Grow Through Digital Marketing."*, trust metrics, concise skills matrix, 3 featured project cards, experience teaser, and recruiter CTA banner.
  2. **About Me (`/about`)**: Personal introduction, International Business BBA foundation, transition to digital marketing, practical 4.5-month internship breakdown, 4-pillar problem-solving approach, and career objective.
  3. **Projects (`/projects`)**: Complete project showcase with functional category filters (*All, Website Development, Lead Generation, Social Media, SEO*), keyword search, and interactive modal case studies with structured business objectives, execution, tools, deliverables, verified results, and key learnings.
  4. **Experience (`/experience`)**: Professional timeline of internship at Al Naya International LLC, formal education details, technical tools matrix, professional development roadmap, and functional PDF resume download.
  5. **Contact (`/contact`)**: Multi-channel communication cards (Email, WhatsApp, LinkedIn, GitHub), business hour SLA commitments, and a client-side validated contact form with mailto trigger and simple free form provider hooks.
- **Custom 404 Page (`*`)**: Friendly missing route handler with direct navigation back to Home or Projects.
- **Design System**: Warm off-white background (`#FAFAF9`), dark charcoal typography (`#18181B`), electric blue & deep indigo accents (`#2563EB`), generous whitespace, rounded modern cards, subtle shadows, and zero bloated animations.
- **Mobile Responsive**: Custom hamburger drawer, responsive layouts tested from mobile to desktop.
- **GitHub Pages Ready**: Uses relative asset resolution (`base: './'`) and `HashRouter` ensuring 100% reliable page navigation and refresh without 404 errors. Includes an automated GitHub Actions deployment workflow.
- **Single Source of Truth**: All profile information, links, projects, and career history are centralized in `src/data/portfolioData.js`.

---

## 📂 Project Directory Structure

```text
PORTFOLIO/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Actions deployment to GitHub Pages
├── public/
│   ├── favicon.svg               # Vector monogram favicon
│   ├── images/
│   │   ├── profile-placeholder.svg # Profile image placeholder (replace with your photo)
│   │   ├── og-preview.svg        # Social sharing / OpenGraph banner
│   │   └── projects/
│   │       ├── project-wordpress.svg # WordPress project illustration
│   │       ├── project-leadgen.svg   # Organic lead gen project illustration
│   │       └── project-social.svg    # Social media strategy illustration
│   └── resume/
│       └── Suleman_Shaikh_Resume.pdf # Valid placeholder PDF (replace with your real resume)
├── src/
│   ├── components/
│   │   ├── BrandIcons.jsx        # SVG icons for LinkedIn, GitHub, WhatsApp, Facebook
│   │   ├── Button.jsx            # Reusable accessible button (primary, secondary, outline, ghost)
│   │   ├── ContactForm.jsx       # Validated inquiry form with mailto fallback
│   │   ├── ExperienceTimeline.jsx# Clean vertical experience timeline
│   │   ├── Footer.jsx            # Multi-column footer with links and Back-to-Top
│   │   ├── Navbar.jsx            # Responsive navigation bar with mobile hamburger menu
│   │   ├── ProjectCard.jsx       # Interactive project card with tags & case study trigger
│   │   ├── ProjectModal.jsx      # In-depth case study modal with execution breakdown
│   │   ├── ScrollToTop.jsx       # Resets scroll position on route change
│   │   ├── SectionHeading.jsx    # Standardized section headings
│   │   ├── SEO.jsx               # Dynamic document title & meta tags per page
│   │   ├── SkillCard.jsx         # Categorized skills card
│   │   └── SocialLinks.jsx       # Icon links for social channels
│   ├── data/
│   │   └── portfolioData.js      # Central configuration for all text, links, and projects
│   ├── pages/
│   │   ├── AboutMe.jsx           # About Me page
│   │   ├── Contact.jsx           # Contact page
│   │   ├── Experience.jsx        # Experience, Education, and Training page
│   │   ├── Home.jsx              # Homepage
│   │   ├── NotFound.jsx          # 404 error page
│   │   └── Projects.jsx          # Projects and case studies with category filtering
│   ├── App.jsx                   # Main layout and route definitions
│   ├── index.css                 # Tailwind CSS styles and accessibility focus rings
│   └── main.jsx                  # Application entry point
├── .gitignore
├── index.html                    # SEO metadata, Open Graph tags, Inter font
├── package.json                  # Dependencies and build scripts
├── postcss.config.js             # PostCSS config for Tailwind
├── tailwind.config.js            # Tailwind theme colors and typography
├── vite.config.js                # Vite build configuration (base: './')
└── README.md                     # Documentation and deployment guide
```

---

## 🚀 Getting Started Locally

### 1. Requirements
Ensure you have **Node.js** (v18 or higher) and **npm** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
Dependencies are already configured. If needed, install via:
```bash
npm install
```

### 3. Run Development Server
Start the local development server with instant Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to the printed local URL (typically `http://localhost:5173/`).

### 4. Build for Production
To compile and bundle the site for deployment:
```bash
npm run build
```
This produces an optimized, minified bundle in the `dist/` directory.

### 5. Preview Production Build Locally
To test the built version locally before deploying:
```bash
npm run preview
```

---

## ✏️ How to Personalize Your Information

Everything on this website is driven by a single file: `src/data/portfolioData.js`. You do **not** need to touch React components to update your information.

### 1. Update Contact Information & Social Profiles
Open `src/data/portfolioData.js` and locate `personalInfo`:
```javascript
export const personalInfo = {
  name: "Suleman Shaikh",
  email: "your.real.email@gmail.com",       // <-- Enter your actual email
  phone: "+91 98765 43210",                 // <-- Enter your actual phone number
  whatsapp: "+919876543210",                // <-- Digits with country code
  location: "Mumbai, India",                // <-- Your city / country
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    whatsappUrl: "https://wa.me/919876543210?text=Hi%20Suleman...",
  },
  // ...
};
```

### 2. Replace Your Profile Photo
- **Method A**: Save your professional portrait photo as `profile-placeholder.svg` (or `.png` / `.jpg`) inside the `public/images/` folder.
- **Method B**: Save your photo as `public/images/suleman-photo.jpg` and update line in `src/data/portfolioData.js`:
  ```javascript
  profileImage: "./images/suleman-photo.jpg",
  ```

### 3. Replace Your Resume PDF
Place your final resume PDF inside:
```text
public/resume/Suleman_Shaikh_Resume.pdf
```
Both the "Download Resume" buttons on the **Home**, **About Me**, and **Experience** pages point directly to this file.

### 4. Update College Name and Graduation Dates
In `src/data/portfolioData.js`, locate `educationData`:
```javascript
export const educationData = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    specialization: "Specialization in International Business",
    institution: "Your University / College Name Here", // <-- Replace
    location: "City, Country",                          // <-- Replace
    period: "2020 – 2023",                              // <-- Replace
    // ...
  }
];
```

### 5. Add or Update Projects
In `src/data/portfolioData.js`, find `projectsData`. You can add new project objects or customize existing ones with live website URLs, updated deliverables, or new learnings.

---

## 📬 Free Form Integration (Contact Page)

By default, the contact form uses a **zero-configuration client-side mailto trigger**:
1. When a visitor submits the form, their default email program opens with recipient, subject, and message pre-populated.
2. It also displays a one-click **"Copy Message Text"** button so anyone without an email client can easily paste and send.
3. No personal API keys or secrets are exposed in the frontend.

### Connecting Formspree (Optional - 100% Free)
If you want form messages sent directly to your email without opening the visitor's mail client:
1. Sign up for a free account at [Formspree.io](https://formspree.io).
2. Create a form and copy your Form ID (e.g., `https://formspree.io/f/xqkrpzyw`).
3. In `src/components/ContactForm.jsx`, replace the `handleSubmit` function with a standard `fetch` call to your Formspree endpoint:
   ```javascript
   await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData),
   });
   ```

---

## 🌐 Free Deployment to GitHub Pages

### Method 1: Automated Deployment with GitHub Actions (Recommended)

1. Create a new repository on GitHub (e.g. `suleman-portfolio` or `sulemanshaikh.github.io`).
2. Push this project to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 5-page digital marketing portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. GitHub will automatically run the included workflow (`.github/workflows/deploy.yml`) and deploy your website within 1–2 minutes!

### Method 2: Manual Deployment with `gh-pages`

1. Install `gh-pages` as a dev dependency:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add a deploy script to `package.json`:
   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run build
   npm run deploy
   ```

---

## 🔒 Professional Integrity & Verification Standards

In alignment with the brief:
- **No fabricated metrics**: Case studies highlight verified methodologies, operational deliverables, and qualitative learnings.
- **No fake testimonials or unverified awards**.
- All unverified fields (college name, graduation dates, certification providers) are clearly marked with editable placeholders.

---

## 📄 License
This project is open-source and customizable for personal portfolio use.
