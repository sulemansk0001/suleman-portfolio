import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative pl-6 sm:pl-8 border-l-2 border-accent-200 space-y-12">
      {experiences.map((exp, idx) => (
        <div key={idx} className="relative group">
          {/* Timeline Dot Indicator */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-accent-600 shadow-sm group-hover:scale-110 transition-transform"></div>

          {/* Experience Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal-200 shadow-subtle hover:shadow-card transition-all duration-200">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div>
                <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-md bg-accent-50 text-accent-700 border border-accent-100 mb-2">
                  {exp.type}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
                  {exp.title}
                </h3>
                <div className="text-base font-semibold text-accent-600 mt-0.5">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1 text-xs text-charcoal-500 font-medium">
                <div className="flex items-center gap-1.5 bg-charcoal-50 px-2.5 py-1 rounded-md border border-charcoal-200">
                  <Calendar className="w-3.5 h-3.5 text-charcoal-400" />
                  <span>{exp.period}</span>
                </div>
                {exp.location && (
                  <div className="flex items-center gap-1 text-charcoal-400 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{exp.location}</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
              {exp.description}
            </p>

            {/* Responsibilities */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-3">
                Key Responsibilities &amp; Day-to-Day Impact
              </h4>
              <ul className="space-y-2.5">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                    <CheckCircle className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applied Skills Tags */}
            {exp.skillsLearned && (
              <div className="mt-6 pt-5 border-t border-charcoal-100">
                <h4 className="text-xs font-semibold text-charcoal-400 mb-2">
                  Key Competencies Demonstrated
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skillsLearned.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-charcoal-50 text-charcoal-700 border border-charcoal-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
