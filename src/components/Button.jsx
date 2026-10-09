import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  download,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-accent-600 hover:bg-accent-700 text-white shadow-sm hover:shadow focus:ring-accent-500",
    secondary: "bg-charcoal-50 hover:bg-charcoal-100 text-charcoal-900 border border-charcoal-200 focus:ring-charcoal-400",
    outline: "border-2 border-accent-600 text-accent-600 hover:bg-accent-50 focus:ring-accent-500",
    dark: "bg-charcoal-900 hover:bg-charcoal-800 text-white shadow-sm focus:ring-charcoal-700",
    ghost: "text-charcoal-700 hover:text-accent-600 hover:bg-charcoal-100/50 focus:ring-accent-500",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const renderContent = () => (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target || (download ? undefined : (href.startsWith('http') ? '_blank' : undefined))}
        rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        {...props}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
}
