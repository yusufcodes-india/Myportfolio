import React from 'react';
import { FiArrowUp, FiGithub, FiCode, FiMail } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-light-border dark:border-dark-border py-12 bg-light-surface/40 dark:bg-dark-surface/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-7 h-7 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface font-mono text-[11px] font-semibold text-accent">
              YT
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-xs text-light-inkSoft dark:text-dark-inkSoft">
              <span className="font-medium text-light-ink dark:text-dark-ink">
                {portfolioData.personal.name}
              </span>
              <span className="hidden sm:inline text-light-inkMuted dark:text-dark-inkMuted">·</span>
              <span>© 2026 · First-year CS at Newton School of Technology</span>
            </div>
          </div>

          {/* Social links & Back to Top */}
          <div className="flex items-center gap-5">
            <nav className="flex items-center gap-4 text-xs font-mono text-light-inkSoft dark:text-dark-inkSoft" aria-label="Footer Links">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent transition-colors flex items-center gap-1"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <FiGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.codeforces.profileUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-accent transition-colors flex items-center gap-1"
                aria-label="Codeforces Profile (opens in new tab)"
              >
                <FiCode aria-hidden="true" />
                <span>Codeforces</span>
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="hover:text-accent transition-colors flex items-center gap-1"
                aria-label={`Email ${portfolioData.personal.email}`}
              >
                <FiMail aria-hidden="true" />
                <span>Email</span>
              </a>
            </nav>

            <button
              type="button"
              onClick={handleScrollTop}
              className="p-2 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent hover:text-accent transition-colors text-light-inkSoft dark:text-dark-inkSoft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Scroll back to top of page"
              title="Back to top"
            >
              <FiArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
