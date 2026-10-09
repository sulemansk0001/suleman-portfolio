import React from 'react';
import { Search, Globe, Users, Share2, CheckCircle2 } from 'lucide-react';

export default function SkillCard({ categoryItem }) {
  const { category, description, skills } = categoryItem;

  // Select appropriate icon based on category name
  const getIcon = () => {
    if (category.toLowerCase().includes('seo') || category.toLowerCase().includes('search')) {
      return <Search className="w-5 h-5 text-accent-600" />;
    }
    if (category.toLowerCase().includes('web') || category.toLowerCase().includes('wordpress')) {
      return <Globe className="w-5 h-5 text-accent-600" />;
    }
    if (category.toLowerCase().includes('lead') || category.toLowerCase().includes('b2b')) {
      return <Users className="w-5 h-5 text-accent-600" />;
    }
    return <Share2 className="w-5 h-5 text-accent-600" />;
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-charcoal-200 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-accent-50 border border-accent-100 flex items-center justify-center">
            {getIcon()}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-charcoal-900">
            {category}
          </h3>
        </div>

        <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
          {description}
        </p>

        <div className="space-y-2.5 pt-2 border-t border-charcoal-100">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-charcoal-700 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-600 shrink-0" />
                {skill.name}
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-charcoal-50 text-charcoal-500 border border-charcoal-200">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
