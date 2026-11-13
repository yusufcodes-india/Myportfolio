import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiMail, FiCopy, FiCheck, FiGithub, FiCode, FiArrowUpRight } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState<string>('');

  const email = portfolioData.personal.email;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyFeedback('Email copied to clipboard');
      setTimeout(() => {
        setCopied(false);
        setCopyFeedback('');
      }, 3000);
    } catch {
      setCopyFeedback('Unable to copy automatically. Please use direct email link.');
      setTimeout(() => setCopyFeedback(''), 4000);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="relative py-28 border-t border-light-border dark:border-dark-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-accent">04 // GET IN TOUCH</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-light-ink dark:text-dark-ink tracking-tight mb-6">
            Have something interesting{' '}
            <span className="italic text-accent">in mind?</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-light-inkSoft dark:text-dark-inkSoft leading-relaxed max-w-xl mx-auto mb-10">
            I’m happy to connect with fellow builders, exchange ideas, and learn from interesting projects.
          </p>

          {/* Email Card with Copy Action */}
          <motion.div
            className="p-6 sm:p-8 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-sm mb-12 text-left"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-light-inkMuted dark:text-dark-inkMuted block mb-1">
                  Direct Email
                </span>
                <a
                  href={`mailto:${email}`}
                  className="font-serif text-xl sm:text-2xl font-medium text-light-ink dark:text-dark-ink hover:text-accent transition-colors break-all"
                  aria-label={`Send email to ${email}`}
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-accent text-dark-bg font-medium text-xs sm:text-sm hover:bg-accent-hover transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <FiMail aria-hidden="true" />
                  <span>Send Mail</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-light-border dark:border-dark-border bg-light-surfaceHover dark:bg-dark-surfaceHover text-light-ink dark:text-dark-ink hover:border-accent text-xs sm:text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-accent" aria-hidden="true" />
                      <span className="text-accent">Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Accessible screen-reader live status */}
            <div
              aria-live="polite"
              className="mt-3 font-mono text-xs text-accent transition-all min-h-[1.25rem]"
            >
              {copyFeedback}
            </div>
          </motion.div>

          {/* Verified External Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-5 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent transition-colors group flex items-center justify-between"
              aria-label="GitHub Profile - yusufcodes-india (opens in new tab)"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 rounded bg-light-surfaceHover dark:bg-dark-surfaceHover text-light-ink dark:text-dark-ink group-hover:text-accent transition-colors">
                  <FiGithub className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-light-inkMuted dark:text-dark-inkMuted block">
                    Source Code &amp; Repos
                  </span>
                  <span className="font-medium text-sm text-light-ink dark:text-dark-ink group-hover:text-accent transition-colors">
                    GitHub / {portfolioData.personal.githubUsername}
                  </span>
                </div>
              </div>
              <FiArrowUpRight className="text-light-inkMuted dark:text-dark-inkMuted group-hover:text-accent transition-colors" aria-hidden="true" />
            </a>

            <a
              href={portfolioData.personal.codeforces.profileUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="p-5 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent transition-colors group flex items-center justify-between"
              aria-label="Codeforces Profile - YusufNST (opens in new tab)"
            >
              <div className="flex items-center gap-3">
                <span className="p-2 rounded bg-light-surfaceHover dark:bg-dark-surfaceHover text-light-ink dark:text-dark-ink group-hover:text-accent transition-colors">
                  <FiCode className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-light-inkMuted dark:text-dark-inkMuted block">
                    Competitive Practice
                  </span>
                  <span className="font-medium text-sm text-light-ink dark:text-dark-ink group-hover:text-accent transition-colors">
                    Codeforces / {portfolioData.personal.codeforces.handle}
                  </span>
                </div>
              </div>
              <FiArrowUpRight className="text-light-inkMuted dark:text-dark-inkMuted group-hover:text-accent transition-colors" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
