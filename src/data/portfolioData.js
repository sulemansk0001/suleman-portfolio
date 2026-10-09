/**
 * Centralized Portfolio Data for Suleman Shaikh
 * Digital Marketing Executive
 * 
 * Edit this file to update any text, links, personal contact info,
 * project case studies, skills, or career history across the entire website.
 */

export const personalInfo = {
  name: "Suleman Shaikh",
  shortName: "Suleman",
  role: "Digital Marketing Executive",
  headline: "I Help Businesses Grow Through Digital Marketing.",
  tagline: "Bridging international business strategy with hands-on digital execution across SEO, WordPress development, social media management, and organic lead generation.",
  
  // Contact details (Editable placeholders - update with your actual details)
  email: "sulemanshaikh.work@gmail.com", // [EDITABLE] Replace with your actual email
  phone: "+91 98765 43210",              // [EDITABLE] Replace with your actual phone number
  whatsapp: "+919876543210",             // [EDITABLE] Digits only with country code for WhatsApp link
  location: "Mumbai, India",             // [EDITABLE] Replace with your city / country
  availability: "Open to Full-Time Roles & Consulting",

  // Social Profile URLs (Editable placeholders)
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/suleman-shaikh", // [EDITABLE]
    github: "https://github.com/sulemanshaikh",             // [EDITABLE]
    whatsappUrl: "https://wa.me/919876543210?text=Hi%20Suleman,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect.",
  },

  // Document & Asset Paths
  resumePath: "./resume/Suleman_Shaikh_Resume.pdf", // Place your PDF in /public/resume/
  profileImage: "./images/profile-placeholder.svg",  // Place your photo in /public/images/
};

export const bioData = {
  intro: `I am an ambitious and detail-oriented Digital Marketing Executive with a background in Business Administration (BBA) specializing in International Business. My objective is to help brands build sustainable online visibility, capture high-intent leads, and grow through data-informed digital marketing practices.`,
  
  background: `My academic foundation in International Business gave me a strategic perspective on market dynamics, global commerce, and buyer behavior. Rather than viewing marketing in isolation, I combine market analysis with hands-on execution across search engines, social platforms, and digital properties.`,
  
  internshipExperience: `During my 4.5-month internship as a Digital Marketing Intern at Al Naya International LLC, I gained practical experience executing core marketing initiatives in a real business environment. My responsibilities spanned building and structuring a WordPress website, conducting keyword research, managing LinkedIn and Facebook company pages, planning content schedules, and conducting targeted organic lead generation across international markets.`,
  
  approach: [
    {
      title: "Data-Driven Discovery",
      description: "Researching target markets, customer search intent, and competitors before crafting any campaign or publishing content.",
    },
    {
      title: "Structured Technical Foundations",
      description: "Ensuring websites are cleanly structured, responsive, fast, and optimized for search engine bots as well as human visitors.",
    },
    {
      title: "Organic, Sustainable Growth",
      description: "Focusing on repeatable, organic lead generation and content strategies that build brand authority without over-reliance on ad spend.",
    },
    {
      title: "Measurable Reporting",
      description: "Tracking key metrics—from organic visits and search impressions to qualified leads—to iterate and improve marketing performance.",
    },
  ],

  careerObjective: `To secure a full-time Digital Marketing Executive position within a forward-thinking organization or agency where I can leverage my hands-on experience in SEO, WordPress website development, lead research, and content planning to drive tangible business growth while continuously expanding my digital marketing mastery.`,
};

export const skillsData = [
  {
    category: "Search Engine Optimization",
    description: "Improving search presence, visibility, and organic traffic through methodical research and on-page improvements.",
    skills: [
      { name: "Keyword Research & Mapping", level: "Intermediate" },
      { name: "On-Page SEO Optimization", level: "Intermediate" },
      { name: "Search Intent Analysis", level: "Intermediate" },
      { name: "Meta Tags & Content Optimization", level: "Intermediate" },
      { name: "Basic Technical SEO & Crawlability", level: "Foundational" },
      { name: "Competitor Keyword Analysis", level: "Intermediate" },
    ],
  },
  {
    category: "Website Development & Optimization",
    description: "Building responsive, modern, and user-friendly digital storefronts and company websites.",
    skills: [
      { name: "WordPress Website Development", level: "Intermediate" },
      { name: "Elementor & Page Builders", level: "Intermediate" },
      { name: "Site Architecture & Navigation", level: "Intermediate" },
      { name: "Mobile Responsiveness & UX", level: "Intermediate" },
      { name: "Basic Website Optimization & Speed", level: "Foundational" },
      { name: "Landing Page Creation", level: "Intermediate" },
    ],
  },
  {
    category: "Organic Lead Generation",
    description: "Identifying, researching, and qualifying potential B2B buyers and commercial partners.",
    skills: [
      { name: "B2B Prospect Research", level: "Intermediate" },
      { name: "International Lead Sourcing", level: "Intermediate" },
      { name: "LinkedIn Prospecting & Outreach", level: "Intermediate" },
      { name: "Lead Qualification & Verification", level: "Intermediate" },
      { name: "CRM & Spreadsheet Organization", level: "Intermediate" },
      { name: "Outreach Message Structuring", level: "Intermediate" },
    ],
  },
  {
    category: "Social Media & Content Strategy",
    description: "Maintaining consistent brand voices and engaging audiences across professional and social channels.",
    skills: [
      { name: "LinkedIn Business Page Management", level: "Intermediate" },
      { name: "Facebook Business Page Management", level: "Intermediate" },
      { name: "Content Calendar & Scheduling", level: "Intermediate" },
      { name: "Visual Content & Post Creation", level: "Intermediate" },
      { name: "Campaign Planning & Alignment", level: "Intermediate" },
      { name: "Digital Marketing Reporting", level: "Foundational" },
    ],
  },
];

export const toolsData = [
  { name: "WordPress", category: "CMS / Web" },
  { name: "Google Search Console", category: "SEO" },
  { name: "Google Analytics (GA4)", category: "Analytics" },
  { name: "Ubersuggest / Semrush (Basics)", category: "SEO" },
  { name: "LinkedIn Sales Navigator (Basics)", category: "Lead Gen" },
  { name: "Meta Business Suite", category: "Social" },
  { name: "Canva", category: "Design" },
  { name: "Google Sheets / Excel", category: "Data & CRM" },
  { name: "Yoast / RankMath SEO", category: "SEO" },
  { name: "Google Maps Scraping / Research", category: "Lead Gen" },
];

export const projectsData = [
  {
    id: "wordpress-website-development",
    title: "WordPress Corporate Website Development",
    shortDescription: "Structured, built, and optimized a multi-page WordPress business website during my internship at Al Naya International LLC.",
    category: "Website Development",
    tags: ["WordPress", "On-Page SEO", "Responsive Design", "Site Architecture", "Content Strategy"],
    featured: true,
    thumbnail: "./images/projects/project-wordpress.svg",
    liveUrl: null, // [EDITABLE] Add live website URL once public (e.g. "https://alnayainternational.com")
    repoUrl: null,
    
    // Detailed Case Study Fields
    context: "Website development initiative undertaken during my Digital Marketing Internship at Al Naya International LLC.",
    businessObjective: "Create a modern, professional, and mobile-friendly corporate web presence to showcase company capabilities, establish credibility for international prospects, and capture incoming inquiries.",
    problemOrOpportunity: "The business needed a structured digital hub that clearly communicated its services, loaded quickly across devices, and was indexed properly by search engines to support incoming lead acquisition.",
    role: "Digital Marketing Intern — responsible for site structuring, page creation, visual layout implementation, content layout, and on-page SEO integration.",
    strategy: "Adopted a clean user-journey framework: clear value proposition on the homepage, dedicated service pages with structured hierarchy, clear call-to-action buttons, and foundational on-page SEO tags on every page.",
    execution: [
      "Designed and configured site navigation, header, and footer menus for intuitive user experience.",
      "Built core pages including Home, About Us, Services/Products, and Contact.",
      "Structured headings (H1, H2, H3), meta titles, and meta descriptions for key search terms.",
      "Optimized images and implemented responsive layouts to guarantee flawless mobile rendering.",
      "Integrated inquiry and contact forms for seamless prospect communication.",
    ],
    toolsUsed: ["WordPress CMS", "Elementor / Block Editor", "Yoast / RankMath SEO", "Canva", "Google Search Console"],
    deliverables: [
      "Multi-page responsive WordPress business website",
      "Optimized navigation architecture and contact touchpoints",
      "On-page SEO setup with custom title tags and meta descriptions",
      "Mobile-tested layout and content structure",
    ],
    results: {
      isVerified: true,
      summary: "Successfully launched the business website structure on staging/production, achieving 100% mobile responsiveness, clean indexing structure, and streamlined lead capture forms for incoming queries.",
      notice: "Verified operational milestone. Specific visitor and conversion metrics will be updated following continuous tracking cycles.",
    },
    keyLearnings: [
      "User navigation clarity directly affects how long visitors engage with service offerings.",
      "Structuring on-page SEO during the initial website build is significantly more efficient than retrofitting tags later.",
      "Ensuring clean mobile responsiveness is critical as the majority of B2B international buyers first browse on mobile devices.",
    ],
  },
  {
    id: "organic-lead-generation",
    title: "B2B & International Organic Lead Generation",
    shortDescription: "Researched, qualified, and organized commercial prospective leads across international markets using targeted organic research methods.",
    category: "Lead Generation",
    tags: ["B2B Research", "International Outreach", "LinkedIn", "Lead Qualification", "Spreadsheet Tracking"],
    featured: true,
    thumbnail: "./images/projects/project-leadgen.svg",
    liveUrl: null,
    repoUrl: null,

    // Detailed Case Study Fields
    context: "Lead acquisition workflow developed at Al Naya International LLC to expand business-to-business footprint into targeted regional and international markets.",
    businessObjective: "Identify, filter, and compile verified high-intent business leads for commercial partnerships without relying on expensive paid advertising campaigns.",
    problemOrOpportunity: "The company required an efficient, repeatable organic process to discover relevant decision-makers (procurement managers, business owners, operations leads) in specific target territories.",
    role: "Lead Generation & Market Research Specialist — responsible for territory research, prospect qualification, contact discovery, and structured pipeline management.",
    strategy: "Built a systematic multi-channel sourcing methodology: filtered relevant companies via LinkedIn and business registries, checked company website viability, verified direct contact channels, and tracked outreach status in structured databases.",
    execution: [
      "Conducted granular searches across LinkedIn, Facebook Business Pages, and business directories for matching industry profiles.",
      "Screened companies based on size, location, service relevance, and decision-maker availability.",
      "Organized prospects into structured spreadsheets with verified email, company URL, phone, and key contact person.",
      "Drafted professional, non-spam introductory outreach scripts personalized to each prospect's business context.",
      "Monitored response signals and scheduled follow-up reminders to ensure zero lost leads.",
    ],
    toolsUsed: ["LinkedIn", "Facebook Business Search", "Google Maps Business Directory", "Google Sheets / MS Excel", "Email Verification Tools"],
    deliverables: [
      "Structured international B2B prospect database with verified contact details",
      "Standardized lead qualification scoring criteria",
      "Personalized outreach message templates for commercial outreach",
      "Follow-up scheduling sheet for timely relationship building",
    ],
    results: {
      isVerified: true,
      summary: "Built a structured pipeline of qualified prospective international business contacts, successfully delivering actionable leads to the core team for commercial follow-up.",
      notice: "Operational process verified. Quantitative closed deal figures are proprietary to the employer and excluded in accordance with confidentiality standards.",
    },
    keyLearnings: [
      "Precise qualification upfront saves substantial time downstream compared to mass generic outreach.",
      "Personalizing the opening sentence with specific business context increases recipient receptiveness.",
      "Systematic spreadsheet management and clear follow-up tracking are essential for preventing qualified leads from falling through the cracks.",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Brand Social Media Management & Campaign Strategy",
    shortDescription: "Managed LinkedIn and Facebook business pages, created content calendars, and planned brand-aligned digital campaigns.",
    category: "Social Media",
    tags: ["LinkedIn Management", "Facebook Business", "Content Planning", "Copywriting", "Audience Engagement"],
    featured: true,
    thumbnail: "./images/projects/project-social.svg",
    liveUrl: null,
    repoUrl: null,

    // Detailed Case Study Fields
    context: "Brand building and social presence management for company business profiles at Al Naya International LLC.",
    businessObjective: "Establish a credible, active, and engaging presence on key social platforms to reinforce brand trust when prospective clients research the business.",
    problemOrOpportunity: "Company social profiles were underutilized and lacked consistent messaging, creating an opportunity to establish regular communication and showcase industry expertise.",
    role: "Social Media Coordinator & Content Creator — responsible for content planning, graphic direction, copywriting, posting schedule, and page optimization.",
    strategy: "Developed a theme-based content calendar alternating between industry insights, company capabilities, service highlights, and credibility posts to provide balanced value.",
    execution: [
      "Audited existing LinkedIn and Facebook company pages and optimized bios, banner images, and call-to-action buttons.",
      "Designed a weekly content calendar with clear posting dates, visual concepts, and targeted hashtags.",
      "Wrote engaging post copy focused on professional value, clarity, and brand consistency.",
      "Designed clean, branded graphic assets using Canva adhering to brand colors and typography.",
      "Monitored post interactions and tracked profile views and post engagement.",
    ],
    toolsUsed: ["LinkedIn Business Manager", "Facebook Business Suite", "Canva Graphic Design", "Content Calendar Sheets"],
    deliverables: [
      "Comprehensive monthly content calendars with pre-scheduled topics",
      "Optimized LinkedIn and Facebook business profiles with unified branding",
      "Portfolio of branded social post graphics and engaging captions",
      "Engagement review notes for refining future topics",
    ],
    results: {
      isVerified: true,
      summary: "Restored consistent publishing cadence across LinkedIn and Facebook, elevating profile completeness to 100% and providing a professional impression for visiting prospects.",
      notice: "Engagement growth metrics recorded internally. Exact impressions and percentage gains reflect verified organic activity during the active internship period.",
    },
    keyLearnings: [
      "Consistency and relevant messaging build audience familiarity faster than sporadic high-effort campaigns.",
      "Visual hierarchy and concise, readable copy in the first three lines determine whether a reader clicks 'see more'.",
      "Aligning social posts with ongoing lead generation efforts creates strong synergy across digital marketing channels.",
    ],
  },
];

export const experienceData = [
  {
    title: "Digital Marketing Intern",
    company: "Al Naya International LLC",
    location: "Corporate Office", // [EDITABLE] Add city/country if desired
    period: "Approx. 4.5 Months",   // [EDITABLE] e.g. "Jun 2024 - Oct 2024"
    type: "Internship",
    description: "Hands-on digital marketing internship focusing on web development, search engine optimization, international lead generation, and social media management.",
    responsibilities: [
      "Managed LinkedIn and Facebook business pages, ensuring consistent brand voice, regular post scheduling, and professional page optimization.",
      "Supported international B2B lead generation by researching prospective commercial partners and qualifying key decision-makers across target markets.",
      "Researched, verified, and organized potential business leads into structured databases for ongoing commercial outreach.",
      "Contributed to digital marketing campaign planning and promotional asset coordination.",
      "Built and configured a responsive multi-page WordPress business website, implementing user-friendly navigation and structured content layouts.",
      "Assisted with keyword research, on-page SEO optimization (meta titles, descriptions, headers), and organic content planning.",
      "Monitored basic website performance indicators and compiled regular marketing activity reports for team review.",
    ],
    skillsLearned: [
      "WordPress Development",
      "On-Page SEO",
      "Keyword Research",
      "B2B Lead Generation",
      "International Prospecting",
      "LinkedIn Management",
      "Facebook Business Suite",
      "Digital Marketing Reporting",
    ],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    specialization: "Specialization in International Business",
    institution: "[Your College / University Name]", // [EDITABLE] Replace with your actual college name
    location: "[City, Country]",                    // [EDITABLE] Replace with your college city
    period: "[Year Started] – [Year Graduated]",   // [EDITABLE] e.g. "2020 – 2023"
    highlights: [
      "Comprehensive coursework in International Trade, Global Business Strategies, and Market Dynamics.",
      "Strong foundation in Consumer Behavior, Market Research, and Business Communication.",
      "Developed strategic analytical frameworks that directly inform digital marketing and audience targeting decisions.",
    ],
  },
];

export const certificationsData = [
  {
    title: "Search Engine Optimization (SEO) Foundations",
    issuer: "[Certification Provider - e.g., HubSpot / Google / Semrush]", // [EDITABLE]
    date: "[Month, Year - Editable]",                                       // [EDITABLE]
    description: "Practical training covering keyword research methodologies, on-page optimization, content structure, and search engine crawling fundamentals.",
    status: "Completed / In Progress",
  },
  {
    title: "Digital Marketing & Social Media Strategy",
    issuer: "[Certification Provider - e.g., Meta / Coursera / Google Digital Garage]", // [EDITABLE]
    date: "[Month, Year - Editable]",                                                   // [EDITABLE]
    description: "Training in campaign planning, audience segmentation, B2B social media execution, and conversion funnel fundamentals.",
    status: "Completed / In Progress",
  },
  {
    title: "WordPress Web Design & On-Page SEO",
    issuer: "[Course Provider / Practical Project Portfolio]", // [EDITABLE]
    date: "[Month, Year - Editable]",                          // [EDITABLE]
    description: "End-to-end site structuring, responsive mobile layouts, plugin configuration, and basic technical SEO principles.",
    status: "Completed / In Progress",
  },
];

export const professionalDevelopmentData = [
  {
    title: "Technical SEO & Core Web Vitals",
    focus: "Deepening knowledge of website speed optimization, schema markup, and advanced search crawlability.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    focus: "Studying user journey analytics, landing page heatmaps, and A/B copy testing to maximize visitor-to-lead conversion rates.",
  },
  {
    title: "Marketing Automation & CRM",
    focus: "Exploring automated email nurture sequences, lead scoring models, and integration between web forms and CRM tools.",
  },
  {
    title: "Performance Advertising (PPC)",
    focus: "Building foundational competencies in Google Ads (Search & Display) and Meta Ads Manager to complement organic digital strategies.",
  },
];
