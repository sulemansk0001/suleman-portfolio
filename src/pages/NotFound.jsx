import React from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The requested page could not be found." />
      
      <section className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-accent-50 text-accent-600 flex items-center justify-center mx-auto border border-accent-100 shadow-subtle">
            <span className="text-3xl font-extrabold">404</span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Page Not Found
            </h1>
            <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">
              The page you are looking for doesn't exist or has been relocated. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
              Return Home
            </Button>
            <Button to="/projects" variant="secondary" size="md" icon={Search} iconPosition="left">
              View Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
