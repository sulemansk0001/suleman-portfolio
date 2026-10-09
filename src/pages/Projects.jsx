import React, { useState, useMemo } from 'react';
import { Filter, Search as SearchIcon, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Available categories
  const categories = ['All', 'Website Development', 'Lead Generation', 'Social Media', 'SEO'];

  // Filter projects by category and search keyword
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All'
          ? true
          : project.category === selectedCategory ||
            (selectedCategory === 'SEO' && project.tags.some((t) => t.toLowerCase().includes('seo')));

      const matchesSearch =
        searchQuery.trim() === ''
          ? true
          : project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Projects &amp; Case Studies"
        description="Explore digital marketing projects by Suleman Shaikh: WordPress Website Development, Organic B2B Lead Generation, and Social Media Marketing from his internship at Al Naya International LLC."
      />

      {/* Header Banner */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-16 bg-white border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-accent-700 bg-accent-50 rounded-full border border-accent-100">
              Work Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
              Projects &amp; Case Studies
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal-600 leading-relaxed">
              Real-world marketing initiatives, execution workflows, and documented outcomes from my internship at Al Naya International LLC and digital project experience.
            </p>
          </div>

          {/* Authenticity Disclaimer Banner */}
          <div className="mt-8 p-4 rounded-xl bg-charcoal-50 border border-charcoal-200/80 flex items-start gap-3 max-w-4xl">
            <ShieldCheck className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-charcoal-700">
              <strong className="text-charcoal-900">Portfolio Integrity Notice:</strong> All case studies reflect actual workflows and methodologies executed during my ~4.5-month internship. In keeping with high professional standards, no artificial or unverified conversion statistics have been added.
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Content Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar: Category Pills + Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-charcoal-200">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mr-1 hidden sm:inline">
                Filter:
              </span>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 ${
                    selectedCategory === category
                      ? 'bg-accent-600 text-white shadow-sm'
                      : 'bg-white text-charcoal-700 border border-charcoal-200 hover:bg-charcoal-50 hover:text-charcoal-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className="relative min-w-[260px]">
              <SearchIcon className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by keyword..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-charcoal-200 bg-white text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-600 transition-all placeholder:text-charcoal-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-charcoal-600 font-medium p-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-8 flex items-center justify-between text-xs text-charcoal-500 font-medium">
            <span>
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} in <strong className="text-charcoal-800">{selectedCategory}</strong>
            </span>
            <span className="hidden sm:inline">
              Click any project card to view full case study details
            </span>
          </div>

          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={setActiveModalProject}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-charcoal-200 p-8 max-w-lg mx-auto">
              <AlertCircle className="w-8 h-8 text-charcoal-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-charcoal-900">No matching projects found</h3>
              <p className="mt-1 text-xs text-charcoal-600">
                Try selecting a different category or clearing your search term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-accent-50 text-accent-700 hover:bg-accent-100 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Project Case Studies Overview Guide */}
          <div className="mt-20 p-8 rounded-2xl bg-white border border-charcoal-200 shadow-subtle">
            <h3 className="text-lg font-bold text-charcoal-900 mb-2">
              Case Study Framework Applied
            </h3>
            <p className="text-sm text-charcoal-600 leading-relaxed max-w-3xl mb-6">
              Each project in this portfolio adheres to a standardized business framework designed to give recruiters and hiring teams full transparency into my role, problem analysis, strategic planning, execution, and outcomes:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-charcoal-50 border border-charcoal-200">
                <span className="font-bold text-accent-700 block mb-1">1. Business Objective</span>
                <span className="text-charcoal-600">Why the organization needed the marketing initiative.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-charcoal-50 border border-charcoal-200">
                <span className="font-bold text-accent-700 block mb-1">2. Strategy &amp; Role</span>
                <span className="text-charcoal-600">Specific responsibilities and tactical plan before execution.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-charcoal-50 border border-charcoal-200">
                <span className="font-bold text-accent-700 block mb-1">3. Tools &amp; Deliverables</span>
                <span className="text-charcoal-600">Concrete assets generated (websites, spreadsheets, calendars).</span>
              </div>
              <div className="p-3.5 rounded-xl bg-charcoal-50 border border-charcoal-200">
                <span className="font-bold text-accent-700 block mb-1">4. Learnings &amp; Verification</span>
                <span className="text-charcoal-600">Transparent reflection on performance and knowledge gained.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </>
  );
}
