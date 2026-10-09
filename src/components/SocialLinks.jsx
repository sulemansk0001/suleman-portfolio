import React from 'react';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon, WhatsappIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function SocialLinks({ className = '', iconSize = 'w-5 h-5', showLabels = false }) {
  const links = [
    {
      name: 'LinkedIn',
      href: personalInfo.socialLinks.linkedin,
      icon: LinkedinIcon,
      label: 'LinkedIn Profile',
      hoverColor: 'hover:text-[#0A66C2] hover:bg-blue-50',
    },
    {
      name: 'GitHub',
      href: personalInfo.socialLinks.github,
      icon: GithubIcon,
      label: 'GitHub Profile',
      hoverColor: 'hover:text-charcoal-900 hover:bg-charcoal-100',
    },
    {
      name: 'WhatsApp',
      href: personalInfo.socialLinks.whatsappUrl,
      icon: WhatsappIcon,
      label: 'Direct WhatsApp',
      hoverColor: 'hover:text-[#25D366] hover:bg-emerald-50',
    },
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      label: 'Send Email',
      hoverColor: 'hover:text-accent-600 hover:bg-accent-50',
    },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target={link.name === 'Email' ? undefined : '_blank'}
            rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
            aria-label={link.label}
            className={`flex items-center gap-2 p-2.5 rounded-lg border border-charcoal-200 bg-white text-charcoal-600 transition-all duration-200 shadow-subtle hover:scale-105 ${link.hoverColor}`}
            title={link.name}
          >
            <Icon className={iconSize} />
            {showLabels && <span className="text-sm font-medium pr-1">{link.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
