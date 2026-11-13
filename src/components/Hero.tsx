import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDown, FiMail, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Introduction */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow / Current Status */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-light-inkSoft dark:text-dark-inkSoft">
                {portfolioData.personal.role}
              </span>
            </motion.div>

            {/* Editorial Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-light-ink dark:text-dark-ink leading-[1.08] mb-6"
            >
              Learning deeply.{' '}
              <span className="italic font-normal text-accent block sm:inline">
                Building curiously.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-light-inkSoft dark:text-dark-inkSoft leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {portfolioData.personal.heroIntroduction}
            </motion.p>

            {/* CTAs and Verified Social Link */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#work"
                onClick={(e) => handleScrollTo(e, '#work')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-dark-bg font-medium text-sm hover:bg-accent-hover transition-all duration-200 shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Explore my work</span>
                <FiArrowDown className="text-sm" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-light-border dark:border-dark-border text-light-ink dark:text-dark-ink font-medium text-sm hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <FiMail className="text-sm" aria-hidden="true" />
                <span>Say hello</span>
              </a>

              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-mono text-light-inkSoft dark:text-dark-inkSoft hover:text-light-ink dark:hover:text-dark-ink transition-colors"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <FiGithub className="text-base" aria-hidden="true" />
                <span>yusufcodes-india</span>
                <FiArrowUpRight className="text-xs opacity-60" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Original Geometric Curiosity Motif */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl border border-light-border dark:border-dark-border bg-gradient-to-b from-light-surface/60 to-light-surface/20 dark:from-dark-surface/60 dark:to-dark-surface/20 p-6 flex flex-col justify-between overflow-hidden shadow-sm">
              {/* Subtle top metadata */}
              <div className="flex items-center justify-between text-[11px] font-mono text-light-inkMuted dark:text-dark-inkMuted border-b border-light-borderSubtle dark:border-dark-borderSubtle pb-3">
                <span className="tracking-widest uppercase">System Canvas</span>
                <span className="text-accent">Curiosity Vector · 01</span>
              </div>

              {/* Central SVG Geometric Contour & Interconnected Learning Nodes */}
              <div className="relative my-auto py-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 340 240"
                  className="w-full h-auto text-accent"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle grid background pattern inside canvas */}
                  <defs>
                    <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeOpacity="0.08"
                      />
                    </pattern>
                  </defs>
                  <rect width="340" height="240" fill="url(#heroGrid)" />

                  {/* Flowing curvilinear learning path */}
                  <path
                    d="M 30 190 C 80 190, 80 60, 150 60 C 220 60, 220 180, 290 180 C 310 180, 325 150, 330 130"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeDasharray="4 4"
                    strokeOpacity="0.4"
                  />
                  <path
                    d="M 30 190 C 80 190, 80 60, 150 60 C 220 60, 220 180, 290 180"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                  />

                  {/* Node 1: Foundations (DSA) */}
                  <g className="cursor-default">
                    <circle cx="30" cy="190" r="14" fill="currentColor" fillOpacity="0.1" />
                    <circle cx="30" cy="190" r="5" fill="currentColor" />
                    <text
                      x="30"
                      y="218"
                      textAnchor="middle"
                      className="text-[10px] font-mono fill-current font-medium"
                    >
                      DSA Foundations
                    </text>
                  </g>

                  {/* Node 2: Applied Python */}
                  <g className="cursor-default">
                    <circle cx="150" cy="60" r="18" fill="currentColor" fillOpacity="0.12" />
                    <circle cx="150" cy="60" r="6" fill="currentColor" />
                    <circle cx="150" cy="60" r="10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                    <text
                      x="150"
                      y="40"
                      textAnchor="middle"
                      className="text-[10px] font-mono fill-current font-medium"
                    >
                      Python Projects
                    </text>
                  </g>

                  {/* Node 3: Competitive Practice (Codeforces) */}
                  <g className="cursor-default">
                    <circle cx="290" cy="180" r="14" fill="currentColor" fillOpacity="0.1" />
                    <circle cx="290" cy="180" r="5" fill="currentColor" />
                    <text
                      x="290"
                      y="208"
                      textAnchor="middle"
                      className="text-[10px] font-mono fill-current font-medium"
                    >
                      Codeforces Practice
                    </text>
                  </g>

                  {/* Tangent guide vectors */}
                  <line
                    x1="150"
                    y1="60"
                    x2="150"
                    y2="190"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                    strokeOpacity="0.25"
                  />
                  <line
                    x1="30"
                    y1="190"
                    x2="290"
                    y2="180"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                    strokeOpacity="0.2"
                  />
                </svg>
              </div>

              {/* Bottom canvas caption */}
              <div className="flex items-center justify-between text-[11px] font-mono text-light-inkMuted dark:text-dark-inkMuted border-t border-light-borderSubtle dark:border-dark-borderSubtle pt-3">
                <span>Problem Solving Loop</span>
                <span className="text-light-inkSoft dark:text-dark-inkSoft">First-year CS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
