import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer upon route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track window scroll for elevation styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-charcoal-100'
          : 'bg-background/90 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand Name */}
          <NavLink
            to="/"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Suleman Shaikh Home"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-600 text-white font-extrabold flex items-center justify-center text-base shadow-sm group-hover:bg-accent-700 transition-colors">
              SS
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-charcoal-900 tracking-tight leading-none group-hover:text-accent-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-charcoal-400 font-medium tracking-wide mt-1">
                {personalInfo.role}
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-150 ${
                    isActive
                      ? 'text-accent-600 bg-accent-50 font-semibold'
                      : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg text-white bg-accent-600 hover:bg-accent-700 transition-colors shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100 focus:outline-none focus:ring-2 focus:ring-accent-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-charcoal-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-50 text-accent-700 font-semibold border-l-4 border-accent-600'
                      : 'text-charcoal-700 hover:bg-charcoal-50 hover:text-charcoal-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-charcoal-100 mt-2">
            <NavLink
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-lg text-white bg-accent-600 hover:bg-accent-700 shadow-sm transition-colors"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
