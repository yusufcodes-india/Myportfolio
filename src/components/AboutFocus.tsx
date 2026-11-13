import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiBookOpen, FiTerminal, FiCpu, FiTrendingUp } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

export const AboutFocus: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const getFocusIcon = (title: string) => {
    switch (title) {
      case 'Python':
        return <FiTerminal className="w-5 h-5 text-accent" aria-hidden="true" />;
      case 'Data Structures & Algorithms':
        return <FiCpu className="w-5 h-5 text-accent" aria-hidden="true" />;
      case 'Competitive Programming':
        return <FiTrendingUp className="w-5 h-5 text-accent" aria-hidden="true" />;
      default:
        return <FiBookOpen className="w-5 h-5 text-accent" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="about"
      aria-label="About & Current Focus"
      className="relative py-24 border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent">01 // CONTEXT &amp; PRACTICE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-light-ink dark:text-dark-ink tracking-tight">
              Curious generalist.{' '}
              <span className="italic text-light-inkSoft dark:text-dark-inkSoft">
                Foundation in progress.
              </span>
            </h2>
          </div>
          <div className="font-mono text-xs text-light-inkMuted dark:text-dark-inkMuted">
            First-year CS student
          </div>
        </div>

        {/* Narrative & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Main Story Paragraph */}
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl text-light-ink dark:text-dark-ink leading-relaxed font-normal mb-6">
              {portfolioData.personal.aboutStory}
            </p>
            <p className="text-base text-light-inkSoft dark:text-dark-inkSoft leading-relaxed">
              Rather than rushing to claim specializations, I focus on understanding underlying systems: how algorithms organize data, how code executes efficiently, and how practical tools can solve everyday challenges.
            </p>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded bg-accent/10 text-accent">
                  <FiBookOpen className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-light-inkMuted dark:text-dark-inkMuted block">
                    Education
                  </span>
                  <h3 className="font-serif text-lg font-medium text-light-ink dark:text-dark-ink">
                    {portfolioData.personal.education.institution}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-light-borderSubtle dark:border-dark-borderSubtle text-sm">
                <div className="flex items-center justify-between text-light-inkSoft dark:text-dark-inkSoft">
                  <span>Current Standing</span>
                  <span className="font-mono text-xs text-light-ink dark:text-dark-ink font-medium">
                    {portfolioData.personal.education.year}
                  </span>
                </div>
                <div className="flex items-center justify-between text-light-inkSoft dark:text-dark-inkSoft">
                  <span>Focus Area</span>
                  <span className="font-mono text-xs text-accent">
                    {portfolioData.personal.education.focus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interconnected Focus Triad */}
        <div id="focus" className="pt-8">
          <div className="mb-8">
            <span className="font-mono text-xs text-accent uppercase tracking-wider">
              Core Practice Triad
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-light-ink dark:text-dark-ink mt-1">
              How I spend my learning hours
            </h3>
            <p className="text-sm text-light-inkSoft dark:text-dark-inkSoft mt-1 max-w-xl">
              These three pillars reinforce one another: writing real code clarifies algorithms, while competitive practice hones speed and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.focusAreas.map((focus, idx) => (
              <motion.article
                key={focus.title}
                className="group p-6 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent/60 transition-all duration-300 flex flex-col justify-between"
                initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-lg border border-light-borderSubtle dark:border-dark-borderSubtle bg-light-surfaceHover dark:bg-dark-surfaceHover">
                      {getFocusIcon(focus.title)}
                    </span>
                    <span className="font-mono text-xs text-light-inkMuted dark:text-dark-inkMuted">
                      0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-medium text-light-ink dark:text-dark-ink mb-1 group-hover:text-accent transition-colors">
                    {focus.title}
                  </h4>
                  <span className="font-mono text-xs text-accent/90 block mb-3">
                    {focus.label}
                  </span>

                  <p className="text-sm text-light-inkSoft dark:text-dark-inkSoft leading-relaxed mb-4">
                    {focus.description}
                  </p>
                  <p className="text-xs text-light-inkMuted dark:text-dark-inkMuted leading-relaxed mb-6 italic">
                    {focus.approach}
                  </p>
                </div>

                <div className="pt-4 border-t border-light-borderSubtle dark:border-dark-borderSubtle">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-light-inkMuted dark:text-dark-inkMuted block mb-2">
                    Key Topics
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {focus.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-light-surfaceHover dark:bg-dark-surfaceHover text-light-inkSoft dark:text-dark-inkSoft border border-light-borderSubtle dark:border-dark-borderSubtle"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
