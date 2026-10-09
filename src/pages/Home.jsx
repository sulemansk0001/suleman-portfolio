import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, CheckCircle2, Sparkles, Briefcase, GraduationCap, ArrowUpRight, Search, Globe, Users, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import SocialLinks from '../components/SocialLinks';
import { personalInfo, projectsData, experienceData, toolsData } from '../data/portfolioData';

export default function Home() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Featured projects for the homepage
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
  const currentRole = experienceData[0];

  return (
    <>
      <SEO
        title="Home"
        description="Portfolio of Suleman Shaikh, Digital Marketing Executive. Specializing in SEO, WordPress website development, social media strategy, and organic B2B lead generation."
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        {/* Subtle decorative background gradient blob */}
        <div className="absolute top-1/4 right-0 -z-10 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-50 border border-accent-100 text-accent-700 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-accent-600 animate-pulse"></span>
                <span>{personalInfo.role} • International Business BBA</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 tracking-tight leading-[1.12]">
                {personalInfo.headline}
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg lg:text-xl text-charcoal-600 leading-relaxed max-w-2xl">
                I am a results-oriented digital marketing professional with practical experience in <span className="text-charcoal-900 font-semibold">Search Engine Optimization (SEO)</span>, <span className="text-charcoal-900 font-semibold">WordPress website development</span>, <span className="text-charcoal-900 font-semibold">social media management</span>, and <span className="text-charcoal-900 font-semibold">organic lead generation</span>.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  to="/projects"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Explore My Work
                </Button>

                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                >
                  Contact Me
                </Button>

                <Button
                  href={personalInfo.resumePath}
                  download="Suleman_Shaikh_Resume.pdf"
                  variant="ghost"
                  size="lg"
                  icon={Download}
                  iconPosition="left"
                >
                  Resume
                </Button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-charcoal-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Internship</span>
                  <p className="text-sm font-bold text-charcoal-900 mt-0.5">Al Naya International LLC</p>
                  <p className="text-xs text-charcoal-500">~4.5 Months Experience</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Education</span>
                  <p className="text-sm font-bold text-charcoal-900 mt-0.5">BBA Degree</p>
                  <p className="text-xs text-charcoal-500">International Business</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Focus Areas</span>
                  <p className="text-sm font-bold text-charcoal-900 mt-0.5">SEO &amp; WordPress</p>
                  <p className="text-xs text-charcoal-500">B2B Lead Sourcing</p>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="pt-2">
                <SocialLinks showLabels={false} />
              </div>
            </div>

            {/* Right Profile Photo / Card (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md">
                
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-accent-600/10 to-indigo-500/20 blur-lg -z-10" />

                <div className="bg-white rounded-3xl p-4 sm:p-5 border border-charcoal-200 shadow-card">
                  
                  {/* Photo container with replace instruction overlay */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/4] bg-charcoal-50 border border-charcoal-100 group">
                    <img
                      src={personalInfo.profileImage}
                      alt={`Professional profile of ${personalInfo.name}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Instruction overlay for photo replacement */}
                    <div className="absolute inset-0 bg-charcoal-900/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center text-white">
                      <p className="text-xs font-bold tracking-wide uppercase text-accent-400 mb-1">
                        Replace Photo:
                      </p>
                      <p className="text-xs text-white/90">
                        Drop your professional headshot into:
                      </p>
                      <code className="mt-1 px-2 py-1 rounded bg-black/60 text-[11px] text-emerald-300 font-mono">
                        public/images/profile-placeholder.svg
                      </code>
                    </div>
                  </div>

                  {/* Profile Card Footer */}
                  <div className="mt-4 pt-3 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-charcoal-900 text-base">{personalInfo.name}</h3>
                      <p className="text-xs text-charcoal-500">{personalInfo.role}</p>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Verified Profile</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Concise Core Skills Overview */}
      <section className="py-16 bg-white border-y border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Competencies"
            title="Strategic Digital Marketing Capabilities"
            subtitle="Hands-on skills grounded in real business workflows, technical web fundamentals, and organic lead acquisition."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-charcoal-50/70 border border-charcoal-200/80 hover:border-accent-200 hover:bg-white hover:shadow-card transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-charcoal-900">SEO &amp; Optimization</h3>
              <p className="mt-2 text-xs text-charcoal-600 leading-relaxed">
                Keyword research, search intent mapping, meta titles, heading hierarchy, and on-page optimization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-charcoal-50/70 border border-charcoal-200/80 hover:border-accent-200 hover:bg-white hover:shadow-card transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-charcoal-900">WordPress Development</h3>
              <p className="mt-2 text-xs text-charcoal-600 leading-relaxed">
                Responsive website architecture, Elementor page design, mobile testing, and lead capture integration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-charcoal-50/70 border border-charcoal-200/80 hover:border-accent-200 hover:bg-white hover:shadow-card transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-charcoal-900">Organic Lead Gen</h3>
              <p className="mt-2 text-xs text-charcoal-600 leading-relaxed">
                International B2B prospect research, LinkedIn prospecting, qualification scoring, and pipeline tracking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-charcoal-50/70 border border-charcoal-200/80 hover:border-accent-200 hover:bg-white hover:shadow-card transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-charcoal-900">Social Media &amp; Strategy</h3>
              <p className="mt-2 text-xs text-charcoal-600 leading-relaxed">
                LinkedIn and Facebook page management, content calendars, branded graphic creation, and campaign execution.
              </p>
            </div>
          </div>

          {/* Tools & Platforms Strip */}
          <div className="mt-12 p-6 rounded-2xl bg-background border border-charcoal-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 text-center mb-4">
              Platforms &amp; Working Tools
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              {toolsData.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white border border-charcoal-200 text-xs font-medium text-charcoal-700 shadow-subtle"
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-accent-700 bg-accent-50 rounded-full border border-accent-100">
                Featured Work
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900 tracking-tight">
                Practical Projects &amp; Case Studies
              </h2>
              <p className="mt-2 text-sm sm:text-base text-charcoal-600 max-w-xl">
                Explore actual marketing work, methodologies, and documented learnings from my digital marketing initiatives.
              </p>
            </div>

            <Button
              to="/projects"
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
            >
              View All Projects
            </Button>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={setActiveModalProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-16 bg-white border-y border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-700 bg-accent-50 rounded-full border border-accent-100">
                Work History
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
                Practical Experience in a Real Business Environment
              </h2>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                Rather than hypothetical coursework, my knowledge has been forged through daily operational tasks supporting international B2B commerce and digital brand management.
              </p>
              <div className="pt-2">
                <Button to="/experience" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                  Full Career Timeline &amp; Credentials
                </Button>
              </div>
            </div>

            {/* Experience Card Preview */}
            <div className="lg:col-span-7">
              <div className="bg-background rounded-2xl p-6 sm:p-8 border border-charcoal-200 shadow-subtle space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-charcoal-200">
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-accent-50 text-accent-700 border border-accent-100">
                      {currentRole.type}
                    </span>
                    <h3 className="text-xl font-bold text-charcoal-900 mt-1.5">
                      {currentRole.title}
                    </h3>
                    <p className="text-sm font-semibold text-accent-600">
                      {currentRole.company}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-charcoal-500 bg-white px-3 py-1.5 rounded-lg border border-charcoal-200">
                    {currentRole.period}
                  </span>
                </div>

                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {currentRole.description}
                </p>

                <ul className="space-y-2 text-sm text-charcoal-700">
                  {currentRole.responsibilities.slice(0, 3).map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    to="/experience"
                    className="text-xs font-bold text-accent-600 hover:text-accent-700 inline-flex items-center gap-1"
                  >
                    <span>View all responsibilities &amp; educational background</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-charcoal-900 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl text-center">
            
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-accent-600/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-200 bg-white/10 rounded-full border border-white/20">
                Ready to Collaborate
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Looking for an Ambitious Digital Marketing Executive?
              </h2>

              <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed">
                Whether you have an open full-time position, an internship-to-hire opportunity, or need freelance marketing support, I am eager to discuss how I can add immediate value.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-white text-charcoal-900 hover:bg-charcoal-100 focus:ring-white"
                >
                  Get in Touch Today
                </Button>

                <Button
                  href={personalInfo.resumePath}
                  download="Suleman_Shaikh_Resume.pdf"
                  variant="outline"
                  size="lg"
                  className="border-charcoal-400 text-white hover:bg-white/10 focus:ring-white"
                  icon={Download}
                  iconPosition="left"
                >
                  Download Resume
                </Button>
              </div>

              <div className="pt-4 flex items-center justify-center gap-4 text-xs text-charcoal-400">
                <span>Direct Email: {personalInfo.email}</span>
                <span>•</span>
                <span>WhatsApp: {personalInfo.phone}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </>
  );
}
