import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 lg:mb-14 ${isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-accent-700 bg-accent-50 rounded-full border border-accent-100">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-charcoal-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
