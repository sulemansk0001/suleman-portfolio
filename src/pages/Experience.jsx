import React from 'react';
import { Download, Briefcase, GraduationCap, Award, BookOpen, CheckCircle, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from '../components/ExperienceTimeline';
import { personalInfo, experienceData, educationData, certificationsData, professionalDevelopmentData, toolsData } from '../data/portfolioData';

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience &amp; Credentials"
        description="Professional experience timeline, education, certifications, and technical skills of Suleman Shaikh, Digital Marketing Executive."
      />

      {/* Header Banner */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-16 bg-white border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-accent-700 bg-accent-50 rounded-full border border-accent-100">
                Career History &amp; Qualifications
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
                Experience &amp; Education
              </h1>
              <p className="mt-4 text-base sm:text-lg text-charcoal-600 leading-relaxed">
                Practical marketing internship record, academic foundation in International Business, professional training, and technical competencies.
              </p>
            </div>

            {/* Resume Download Action */}
            <div className="shrink-0">
              <Button
                href={personalInfo.resumePath}
                download="Suleman_Shaikh_Resume.pdf"
                variant="primary"
                size="lg"
                icon={Download}
                iconPosition="left"
              >
                Download Complete Resume (PDF)
              </Button>
              <p className="text-[11px] text-charcoal-500 mt-2 text-center md:text-right">
                Standard ATS-friendly document
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Experience Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 8 Cols: Timeline */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Section 1: Professional Experience */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-xl bg-accent-600 text-white">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal-900">
                      Professional Experience
                    </h2>
                    <p className="text-xs text-charcoal-500">
                      Internships, corporate engagements, and business execution
                    </p>
                  </div>
                </div>

                <ExperienceTimeline experiences={experienceData} />
              </div>

              {/* Section 2: Education */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-xl bg-indigo-600 text-white">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal-900">
                      Academic Education
                    </h2>
                    <p className="text-xs text-charcoal-500">
                      Formal university education and business disciplines
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {educationData.map((edu, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal-200 shadow-subtle hover:shadow-card transition-all"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100 mb-2">
                            Degree Program
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
                            {edu.degree}
                          </h3>
                          <div className="text-sm font-semibold text-accent-600 mt-0.5">
                            {edu.specialization}
                          </div>
                        </div>

                        <div className="text-xs text-charcoal-500 font-medium bg-charcoal-50 px-3 py-1.5 rounded-lg border border-charcoal-200">
                          {edu.period}
                        </div>
                      </div>

                      <div className="text-xs font-medium text-charcoal-500 mb-4">
                        Institution: <span className="text-charcoal-800 font-semibold">{edu.institution}</span> • {edu.location}
                      </div>

                      <div className="pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2.5">
                          Key Curriculum Highlights
                        </h4>
                        <ul className="space-y-2">
                          {edu.highlights.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                              <CheckCircle className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Certifications & Training */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-xl bg-emerald-600 text-white">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal-900">
                      Certifications &amp; Professional Training
                    </h2>
                    <p className="text-xs text-charcoal-500">
                      Industry courses, self-directed certifications, and specialized modules
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {certificationsData.map((cert, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-6 border border-charcoal-200 shadow-subtle flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {cert.status}
                          </span>
                          <span className="text-xs text-charcoal-400 font-medium">
                            {cert.date}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-charcoal-900 mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-xs font-semibold text-accent-600 mb-2.5">
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-charcoal-600 leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Professional Development */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 rounded-xl bg-amber-500 text-white">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal-900">
                      Ongoing Professional Development
                    </h2>
                    <p className="text-xs text-charcoal-500">
                      Active study areas and current skill-building roadmap
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {professionalDevelopmentData.map((dev, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-charcoal-50 border border-charcoal-200"
                    >
                      <h3 className="text-sm font-bold text-charcoal-900 mb-1">
                        {dev.title}
                      </h3>
                      <p className="text-xs text-charcoal-600 leading-relaxed">
                        {dev.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 4 Cols: Technical Skills & Quick Reference */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Technical Tools Matrix */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-charcoal-200 shadow-subtle space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-charcoal-900">
                    Technical Tools &amp; Software
                  </h3>
                  <p className="text-xs text-charcoal-500 mt-1">
                    Platforms utilized across projects &amp; internship
                  </p>
                </div>

                <div className="space-y-3">
                  {toolsData.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-charcoal-50/70 border border-charcoal-200 text-xs"
                    >
                      <span className="font-semibold text-charcoal-800">{tool.name}</span>
                      <span className="text-[11px] font-medium text-charcoal-500 bg-white px-2 py-0.5 rounded border border-charcoal-200">
                        {tool.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume Download Promo Card */}
              <div className="bg-accent-600 text-white rounded-2xl p-6 sm:p-7 shadow-card space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-100">
                  Ready to Review
                </span>
                <h3 className="text-xl font-bold leading-snug">
                  Download My Complete Resume
                </h3>
                <p className="text-xs text-accent-100 leading-relaxed">
                  Includes full contact details, internship achievements, academic background, and technical toolset.
                </p>
                <div className="pt-2">
                  <a
                    href={personalInfo.resumePath}
                    download="Suleman_Shaikh_Resume.pdf"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-accent-700 font-bold text-sm hover:bg-accent-50 transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Resume</span>
                  </a>
                </div>
              </div>

              {/* Placeholder Guidance Card */}
              <div className="p-5 rounded-2xl bg-charcoal-50 border border-charcoal-200 text-xs text-charcoal-600 space-y-2">
                <div className="font-bold text-charcoal-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-accent-600" />
                  <span>Customization Note</span>
                </div>
                <p className="leading-relaxed">
                  To customize dates, college name, or additional certifications, edit the centralized data file:
                </p>
                <code className="block p-2 rounded bg-white border border-charcoal-200 text-[11px] text-accent-700 font-mono">
                  src/data/portfolioData.js
                </code>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
