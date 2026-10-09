import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Copy, Check, Mail, ExternalLink } from 'lucide-react';
import Button from './Button';
import { personalInfo } from '../data/portfolioData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'mailto_opened' | null
  const [copied, setCopied] = useState(false);

  // Client-side validation
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write your message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct mailto link
    const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailBody = encodeURIComponent(
      `Hello Suleman,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via portfolio contact form`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;

    // Open mailto link
    window.location.href = mailtoUrl;

    // Show client confirmation state
    setSubmittedStatus('mailto_opened');
  };

  const copyDraft = () => {
    const draftText = `To: ${personalInfo.email}\nSubject: [Portfolio Inquiry] ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(draftText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-charcoal-200 shadow-subtle">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
          Send a Message
        </h3>
        <p className="mt-1.5 text-sm text-charcoal-600">
          Fill out this form to prepare a direct inquiry to <span className="font-semibold text-charcoal-800">{personalInfo.email}</span>.
        </p>
      </div>

      {submittedStatus === 'mailto_opened' ? (
        <div className="p-6 rounded-xl bg-accent-50/70 border border-accent-200 space-y-4 animate-in fade-in">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-accent-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-bold text-charcoal-900">
                Your Email Client Was Triggered!
              </h4>
              <p className="mt-1 text-sm text-charcoal-700 leading-relaxed">
                A draft message has been prepared for <strong className="text-accent-700">{personalInfo.email}</strong> with your subject and message body.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-white border border-charcoal-200 text-xs text-charcoal-700 space-y-1">
            <div><strong className="text-charcoal-900">From:</strong> {formData.name} ({formData.email})</div>
            <div><strong className="text-charcoal-900">Subject:</strong> {formData.subject}</div>
            <div className="pt-1 text-charcoal-600 italic line-clamp-3">"{formData.message}"</div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={copyDraft}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white border border-charcoal-300 text-charcoal-800 hover:bg-charcoal-50 shadow-sm transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Message Text'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSubmittedStatus(null);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="text-xs text-accent-600 hover:underline font-medium"
            >
              Send another message
            </button>
          </div>

          <p className="text-[11px] text-charcoal-500 pt-2 border-t border-accent-200/60">
            * Note: If your default desktop email client didn't open automatically, you can copy the text above and send it manually to <strong>{personalInfo.email}</strong>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Jane Doe"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-charcoal-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? 'border-rose-400 focus:ring-rose-400'
                    : 'border-charcoal-200 focus:border-accent-600 focus:ring-accent-500/20'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
                Your Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. jane@company.com"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-charcoal-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-rose-400 focus:ring-rose-400'
                    : 'border-charcoal-200 focus:border-accent-600 focus:ring-accent-500/20'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
              Subject <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Job Opportunity / Consulting Project / Collaboration"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-charcoal-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.subject
                  ? 'border-rose-400 focus:ring-rose-400'
                  : 'border-charcoal-200 focus:border-accent-600 focus:ring-accent-500/20'
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.subject}</span>
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1.5">
              Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message, project scope, or recruiter inquiry here..."
              className={`w-full px-4 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-charcoal-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-y ${
                errors.message
                  ? 'border-rose-400 focus:ring-rose-400'
                  : 'border-charcoal-200 focus:border-accent-600 focus:ring-accent-500/20'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={Send}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              Compose &amp; Send Message
            </Button>

            <span className="text-xs text-charcoal-400">
              No third-party trackers. Instant mailto trigger.
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
