import React from 'react';
import { ArrowRight, Download, CheckCircle, GraduationCap, Compass, Briefcase, Target, HeartHandshake, Lightbulb } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import SocialLinks from '../components/SocialLinks';
import { personalInfo, bioData, skillsData, educationData, toolsData } from '../data/portfolioData';

export default function AboutMe() {
  const edu = educationData[0];

  return (
    <>
      <SEO
        title="About Me"
        description="Learn about Suleman Shaikh, Digital Marketing Executive. BBA background in International Business, 4.5 months internship at Al Naya International LLC, and strategic marketing approach."
      />

      {/* Header Banner */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 bg-white border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-accent-700 bg-accent-50 rounded-full border border-accent-100">
              Personal Profile
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
              About Suleman Shaikh
            </h1>
            <p className="mt-4 text-base sm:text-xl text-charcoal-600 leading-relaxed">
              Digital Marketing Executive with a BBA in International Business, combining global market understanding with practical execution across search, web, and lead generation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/projects" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
                View My Projects
              </Button>
              <Button
                href={personalInfo.resumePath}
                download="Suleman_Shaikh_Resume.pdf"
                variant="secondary"
                size="md"
                icon={Download}
                iconPosition="left"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Background */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-3">
                  Professional Introduction
                </h2>
                <p className="text-base text-charcoal-700 leading-relaxed">
                  {bioData.intro}
                </p>
              </div>

              {/* BBA & International Business Foundation */}
              <div className="p-6 rounded-2xl bg-white border border-charcoal-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-accent-50 text-accent-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900">
                    Academic Background &amp; International Business Foundation
                  </h3>
                </div>
                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {bioData.background}
                </p>
                <div className="pt-2 text-xs text-charcoal-500 font-medium">
                  Degree: <span className="text-charcoal-800 font-semibold">{edu.degree}</span> ({edu.specialization})
                </div>
              </div>

              {/* The Transition into Digital Marketing */}
              <div>
                <h2 className="text-2xl font-bold text-charcoal-900 mb-3">
                  Transition into Digital Marketing
                </h2>
                <p className="text-base text-charcoal-700 leading-relaxed">
                  During my academic journey in International Business, I observed how traditional trade barriers were dissolving through modern digital infrastructure. B2B decision-makers no longer rely solely on trade fairs; they research solutions on Google, evaluate suppliers on LinkedIn, and assess credibility via corporate websites.
                </p>
                <p className="mt-3 text-base text-charcoal-700 leading-relaxed">
                  Recognizing that digital visibility is now the frontline of international commerce, I deliberately focused on mastering practical digital marketing competencies: technical website development, search engine discoverability, and outbound B2B lead generation.
                </p>
              </div>

              {/* Practical Internship at Al Naya International LLC */}
              <div className="p-6 rounded-2xl bg-accent-50/50 border border-accent-200 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-accent-600 text-white">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal-900">
                      Real-World Internship Experience
                    </h3>
                    <p className="text-xs text-accent-800 font-medium">
                      Al Naya International LLC • Approximately 4.5 Months
                    </p>
                  </div>
                </div>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {bioData.internshipExperience}
                </p>
              </div>

              {/* Career Objective */}
              <div className="p-6 rounded-2xl bg-white border border-charcoal-200 shadow-subtle space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900">
                    Career Objective
                  </h3>
                </div>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {bioData.careerObjective}
                </p>
              </div>
            </div>

            {/* Right Sticky Sidebar / Quick Facts */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              
              {/* Profile Card Summary */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-charcoal-200 shadow-subtle space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-16 h-16 rounded-2xl object-cover border border-charcoal-200 bg-charcoal-50"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-charcoal-900">{personalInfo.name}</h3>
                    <p className="text-xs text-accent-600 font-semibold">{personalInfo.role}</p>
                    <p className="text-xs text-charcoal-500 mt-0.5">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-charcoal-700 pt-4 border-t border-charcoal-100">
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Degree</span>
                    <span className="font-semibold text-right text-charcoal-900">BBA (Intl. Business)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Internship</span>
                    <span className="font-semibold text-right text-charcoal-900">Al Naya Intl. LLC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Internship Duration</span>
                    <span className="font-semibold text-right text-charcoal-900">~4.5 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Core Tools</span>
                    <span className="font-semibold text-right text-charcoal-900">WordPress, SEO, LinkedIn</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Work Status</span>
                    <span className="font-semibold text-emerald-700">Available Immediately</span>
                  </div>
                </div>

                <div className="pt-2">
                  <SocialLinks showLabels={true} className="flex-col !items-stretch" />
                </div>
              </div>

              {/* Values & Principles */}
              <div className="bg-charcoal-50 rounded-2xl p-6 border border-charcoal-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-accent-600" />
                  Work Ethic &amp; Professional Values
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-charcoal-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span><strong>Authentic Accountability:</strong> Never overstating numbers; delivering transparent reports.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span><strong>Continuous Learning:</strong> Constantly staying current with search algorithm changes and digital tooling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span><strong>Execution Orientation:</strong> Bridging theoretical strategy with tangible deliverables.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Strategic Problem-Solving Approach */}
      <section className="py-16 bg-white border-y border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Methodology"
            title="My Approach to Solving Business Marketing Problems"
            subtitle="How I apply international business thinking to structured, measurable digital marketing execution."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bioData.approach.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-charcoal-50/60 border border-charcoal-200/80 hover:bg-white hover:shadow-card transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-600 text-white font-bold flex items-center justify-center text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-charcoal-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Skills Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Technical &amp; Functional Matrix"
            title="Detailed Marketing &amp; Technical Skills"
            subtitle="Categorized breakdown of competencies developed through academic study, practical internship, and project builds."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((categoryItem, idx) => (
              <SkillCard key={idx} categoryItem={categoryItem} />
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl bg-white border border-charcoal-200 shadow-subtle">
              <span className="text-sm font-semibold text-charcoal-800 px-2">
                Interested in putting these capabilities to work for your team?
              </span>
              <Button to="/contact" variant="primary" size="md">
                Get in Touch
              </Button>
              <Button to="/projects" variant="secondary" size="md">
                Explore Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
