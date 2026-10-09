import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Projects & Case Studies', path: '/projects' },
    { name: 'Experience & Credentials', path: '/experience' },
    { name: 'Contact Me', path: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-charcoal-200 text-charcoal-700 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-charcoal-100">
          
          {/* Column 1: Brand & Bio Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-accent-600 text-white font-extrabold flex items-center justify-center text-sm shadow-sm">
                SS
              </div>
              <span className="text-xl font-bold text-charcoal-900 tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-charcoal-600 max-w-sm leading-relaxed">
              {personalInfo.role} with practical experience in SEO, WordPress development, social media strategy, and organic B2B lead generation. BBA graduate specialized in International Business.
            </p>
            <div className="pt-2">
              <SocialLinks iconSize="w-4 h-4" />
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
              Site Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-charcoal-600 hover:text-accent-600 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Availability */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
              Direct Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-charcoal-600">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-600 shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-accent-600 transition-colors underline-offset-4 hover:underline"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-600 shrink-0" />
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="hover:text-accent-600 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent-600 shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{personalInfo.availability}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-600" />
            <span>
              &copy; {new Date().getFullYear()} {personalInfo.name}. All verified content authentic and independently verifiable.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-charcoal-500 hover:text-accent-600 transition-colors py-1 px-2.5 rounded-md hover:bg-charcoal-50"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
