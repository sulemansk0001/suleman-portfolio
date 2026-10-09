import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, Wrench, Target, Compass, Award, Lightbulb, AlertCircle } from 'lucide-react';
import Button from './Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-charcoal-200 overflow-hidden relative max-h-[90vh] flex flex-col my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-charcoal-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-accent-50 text-accent-700 border border-accent-100">
              {project.category}
            </span>
            <span className="text-xs text-charcoal-400 font-medium">Case Study Details</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Title & Preview Image */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-charcoal-600 leading-relaxed">
              {project.shortDescription}
            </p>

            {project.thumbnail && (
              <div className="mt-6 rounded-xl overflow-hidden border border-charcoal-200 bg-charcoal-50 aspect-video max-h-72 w-full flex items-center justify-center">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} diagram and overview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Quick Context & Role Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-charcoal-50 border border-charcoal-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5 mb-1">
                <Compass className="w-3.5 h-3.5 text-accent-600" />
                Context &amp; Environment
              </span>
              <p className="text-sm text-charcoal-800">{project.context}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 flex items-center gap-1.5 mb-1">
                <Award className="w-3.5 h-3.5 text-accent-600" />
                My Role
              </span>
              <p className="text-sm text-charcoal-800">{project.role}</p>
            </div>
          </div>

          {/* Business Objective & Problem */}
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
                <Target className="w-4 h-4 text-accent-600" />
                Business Objective
              </h3>
              <p className="mt-1 text-sm text-charcoal-700 leading-relaxed">
                {project.businessObjective}
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-accent-600" />
                The Problem / Opportunity
              </h3>
              <p className="mt-1 text-sm text-charcoal-700 leading-relaxed">
                {project.problemOrOpportunity}
              </p>
            </div>
          </div>

          {/* Strategy */}
          <div>
            <h3 className="text-base font-bold text-charcoal-900">Strategy &amp; Approach</h3>
            <p className="mt-1.5 text-sm text-charcoal-700 leading-relaxed">
              {project.strategy}
            </p>
          </div>

          {/* Execution Steps */}
          <div>
            <h3 className="text-base font-bold text-charcoal-900">Execution Breakdown</h3>
            <ul className="mt-3 space-y-2.5">
              {project.execution.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                  <CheckCircle className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-accent-600" />
                Tools &amp; Platforms Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-white border border-charcoal-200 text-charcoal-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-2">
                Key Deliverables
              </h4>
              <ul className="space-y-1.5 text-xs text-charcoal-700">
                {project.deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-600 shrink-0"></span>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verified Results Section */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Verified Results &amp; Outcomes</span>
            </div>
            <p className="text-sm text-emerald-950 leading-relaxed font-medium">
              {project.results.summary}
            </p>
            {project.results.notice && (
              <p className="mt-2 text-xs text-emerald-800/80 italic">
                * Note: {project.results.notice}
              </p>
            )}
          </div>

          {/* Key Learnings */}
          <div>
            <h3 className="text-base font-bold text-charcoal-900 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              Key Learnings &amp; Takeaways
            </h3>
            <ul className="mt-2.5 space-y-2">
              {project.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-charcoal-700">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-10 bg-charcoal-50 px-6 py-4 border-t border-charcoal-200 flex items-center justify-between">
          <div className="text-xs text-charcoal-500">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 font-medium inline-flex items-center gap-1 hover:underline"
              >
                <span>Visit Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="italic text-charcoal-400">Live URL placeholder available in data file</span>
            )}
          </div>

          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
