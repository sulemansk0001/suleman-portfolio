import React from 'react';
import { ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import Button from './Button';

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <div className="bg-white rounded-2xl border border-charcoal-200 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden group">
      
      {/* Project Image Preview */}
      <div
        className="relative bg-charcoal-50 aspect-video overflow-hidden border-b border-charcoal-100 cursor-pointer"
        onClick={() => onOpenModal(project)}
      >
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/95 text-charcoal-800 shadow-sm border border-charcoal-100 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3
            onClick={() => onOpenModal(project)}
            className="text-lg sm:text-xl font-bold text-charcoal-900 group-hover:text-accent-600 transition-colors cursor-pointer line-clamp-1"
          >
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm text-charcoal-600 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-charcoal-50 text-charcoal-600 border border-charcoal-200"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-0.5 text-xs text-charcoal-400">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="mt-6 pt-4 border-t border-charcoal-100 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
          >
            <span>Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live site for ${project.title}`}
              className="p-1.5 rounded-lg text-charcoal-400 hover:text-accent-600 hover:bg-accent-50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-[11px] font-medium text-charcoal-400">Verified Intern Project</span>
          )}
        </div>
      </div>
    </div>
  );
}
