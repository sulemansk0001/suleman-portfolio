import React from 'react';
import { Mail, Phone, MessageSquare, MapPin, Clock, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, GithubIcon, WhatsappIcon } from '../components/BrandIcons';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const contactCards = [
    {
      title: "Direct Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      actionText: "Send email",
      subtext: "Best for formal recruiter inquiries & briefs",
    },
    {
      title: "WhatsApp",
      value: personalInfo.phone,
      href: personalInfo.socialLinks.whatsappUrl,
      icon: WhatsappIcon,
      actionText: "Chat on WhatsApp",
      subtext: "Quick queries & informal messaging",
    },
    {
      title: "LinkedIn Profile",
      value: "linkedin.com/in/suleman-shaikh",
      href: personalInfo.socialLinks.linkedin,
      icon: LinkedinIcon,
      actionText: "View profile",
      subtext: "Professional network & endorsement",
    },
    {
      title: "GitHub Profile",
      value: "github.com/sulemanshaikh",
      href: personalInfo.socialLinks.github,
      icon: GithubIcon,
      actionText: "View repositories",
      subtext: "Web projects & code portfolio",
    },
  ];

  return (
    <>
      <SEO
        title="Contact Me"
        description="Get in touch with Suleman Shaikh, Digital Marketing Executive. Connect via email, WhatsApp, LinkedIn, or send a direct project inquiry."
      />

      {/* Header Banner */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-16 bg-white border-b border-charcoal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-accent-700 bg-accent-50 rounded-full border border-accent-100">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
              Let's Discuss Marketing Opportunities
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal-600 leading-relaxed">
              I am currently open to full-time Digital Marketing Executive positions, marketing agency roles, and strategic business consulting engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contact Channels & Availability (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-charcoal-200 shadow-subtle space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-charcoal-900">
                    Direct Contact Channels
                  </h2>
                  <p className="text-xs text-charcoal-500 mt-1">
                    Reach out via your preferred communication method
                  </p>
                </div>

                <div className="space-y-4">
                  {contactCards.map((card, idx) => {
                    const Icon = card.icon;
                    return (
                      <a
                        key={idx}
                        href={card.href}
                        target={card.href.startsWith('mailto') ? undefined : '_blank'}
                        rel={card.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                        className="group flex items-start gap-3.5 p-3.5 rounded-xl border border-charcoal-200 bg-charcoal-50/50 hover:bg-white hover:border-accent-200 hover:shadow-subtle transition-all"
                      >
                        <div className="p-2.5 rounded-lg bg-white border border-charcoal-200 text-accent-600 group-hover:bg-accent-600 group-hover:text-white transition-colors shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-charcoal-900">
                              {card.title}
                            </span>
                            <span className="text-[11px] font-semibold text-accent-600 group-hover:underline inline-flex items-center gap-0.5">
                              <span>{card.actionText}</span>
                              <ExternalLink className="w-3 h-3" />
                            </span>
                          </div>
                          <p className="text-xs font-medium text-charcoal-700 truncate mt-0.5">
                            {card.value}
                          </p>
                          <p className="text-[11px] text-charcoal-400 mt-0.5">
                            {card.subtext}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Working Hours & Response SLA */}
              <div className="bg-white rounded-2xl p-6 border border-charcoal-200 shadow-subtle space-y-4">
                <h3 className="text-sm font-bold text-charcoal-900">
                  Response Commitment
                </h3>
                
                <div className="space-y-3 text-xs text-charcoal-600">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-accent-600 shrink-0" />
                    <span>Typically responds within <strong>24 business hours</strong>.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-accent-600 shrink-0" />
                    <span>Based in <strong>{personalInfo.location}</strong> (Open to Remote &amp; On-Site).</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Currently Available for Immediate Opportunities</span>
                  </div>
                </div>
              </div>

              {/* Free Form Backend Integration Guide */}
              <div className="p-5 rounded-2xl bg-charcoal-50 border border-charcoal-200 text-xs text-charcoal-600 space-y-2">
                <div className="font-bold text-charcoal-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-accent-600" />
                  <span>Free Form Backend Ready</span>
                </div>
                <p className="leading-relaxed">
                  The form operates via direct mailto by default with 0 third-party tracking. If you want submissions forwarded to your inbox via a free service without managing servers:
                </p>
                <p className="text-[11px] text-charcoal-500">
                  You can plug in <strong>Formspree</strong> or a free <strong>Google Forms</strong> Webhook endpoint easily in <code>ContactForm.jsx</code> without changing UI styles.
                </p>
              </div>

            </div>

            {/* Right Column: Interactive Contact Form (7 Cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
