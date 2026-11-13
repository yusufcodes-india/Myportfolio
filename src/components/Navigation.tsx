import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

interface NavigationProps {
  currentTheme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentTheme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'about', 'focus', 'work', 'problem-solving', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Focus', href: '#focus', id: 'focus' },
    { name: 'Selected Work', href: '#work', id: 'work' },
    { name: 'Problem Solving', href: '#problem-solving', id: 'problem-solving' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip to Content link for accessibility */}
      <a
        href="#main-content"
        className="skip-link bg-accent text-dark-bg font-medium shadow-lg"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-light-border dark:border-dark-border py-3.5 shadow-sm'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark / Monogram */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="group flex items-center gap-3 text-light-ink dark:text-dark-ink transition-colors"
              aria-label="Yusuf Tarwala - Back to top"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface group-hover:border-accent transition-colors font-mono text-xs font-semibold tracking-wider text-accent">
                YT
              </span>
              <div className="flex flex-col">
                <span className="font-serif font-medium tracking-tight text-base sm:text-lg">
                  {portfolioData.personal.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-light-inkMuted dark:text-dark-inkMuted -mt-1 hidden sm:block">
                  CS @ Newton School of Tech
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors group ${
                      isActive
                        ? 'text-light-ink dark:text-dark-ink'
                        : 'text-light-inkSoft dark:text-dark-inkSoft hover:text-light-ink dark:hover:text-dark-ink'
                    }`}
                  >
                    <span>{link.name}</span>
                    {/* Editorial underline indicator */}
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-accent transition-all duration-300 rounded-full ${
                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-75'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right actions: GitHub link & Theme Toggle & Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* GitHub text link */}
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-light-inkSoft dark:text-dark-inkSoft hover:text-light-ink dark:hover:text-dark-ink border border-light-border dark:border-dark-border rounded hover:border-accent transition-colors"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <FiGithub className="text-sm" aria-hidden="true" />
                <span>GitHub</span>
                <FiArrowUpRight className="text-xs opacity-60" aria-hidden="true" />
              </a>

              {/* Accessible Theme Toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-2 text-light-inkSoft dark:text-dark-inkSoft hover:text-light-ink dark:hover:text-dark-ink border border-light-border dark:border-dark-border rounded hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={
                  currentTheme === 'dark'
                    ? 'Switch to light theme'
                    : 'Switch to dark theme'
                }
                title={
                  currentTheme === 'dark'
                    ? 'Switch to light theme'
                    : 'Switch to dark theme'
                }
              >
                {currentTheme === 'dark' ? (
                  <FiSun className="w-4 h-4 text-amber-400" aria-hidden="true" />
                ) : (
                  <FiMoon className="w-4 h-4 text-slate-700" aria-hidden="true" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-light-inkSoft dark:text-dark-inkSoft hover:text-light-ink dark:hover:text-dark-ink border border-light-border dark:border-dark-border rounded hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? (
                  <FiX className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <FiMenu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-0 z-30 bg-light-bg/95 dark:bg-dark-bg/95 backdrop-blur-lg pt-24 px-6 flex flex-col justify-between pb-8"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-light-inkMuted dark:text-dark-inkMuted mb-2">
              Menu Navigation
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between text-2xl font-serif text-light-ink dark:text-dark-ink border-b border-light-border dark:border-dark-border pb-3 hover:text-accent transition-colors"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-accent">0{idx + 1}</span>
              </a>
            ))}
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-between text-lg font-mono text-light-inkSoft dark:text-dark-inkSoft pt-2 hover:text-accent transition-colors"
            >
              <span className="flex items-center gap-2">
                <FiGithub aria-hidden="true" /> GitHub Profile
              </span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </nav>

          <div className="pt-6 border-t border-light-border dark:border-dark-border flex items-center justify-between text-xs font-mono text-light-inkMuted dark:text-dark-inkMuted">
            <span>Yusuf Tarwala</span>
            <span>he/him</span>
          </div>
        </div>
      )}
    </>
  );
};
