import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiGithub, FiCheckCircle, FiLayers, FiArrowUpRight } from 'react-icons/fi';
import { portfolioData, ProjectItem } from '../data/portfolio';

export const SelectedWork: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="relative py-24 border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent">02 // SELECTED WORK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-light-ink dark:text-dark-ink tracking-tight">
              Verified Projects.{' '}
              <span className="italic text-light-inkSoft dark:text-dark-inkSoft">
                Built to solve real needs.
              </span>
            </h2>
          </div>
          <p className="text-sm text-light-inkSoft dark:text-dark-inkSoft max-w-sm">
            Two projects verified directly from repository source code, exploring local-first browser extensions and low-overhead operational portals.
          </p>
        </div>

        {/* Project Cards Sequence */}
        <div className="space-y-16">
          {portfolioData.projects.map((project: ProjectItem, index: number) => (
            <motion.article
              key={project.id}
              className="rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface overflow-hidden shadow-sm hover:border-accent/50 transition-all duration-300"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Side: Editorial Details & Specifications */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-light-border dark:border-dark-border">
                  <div>
                    {/* Project index & category */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="font-mono text-xs tracking-wider uppercase text-accent font-medium">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-light-inkMuted dark:text-dark-inkMuted">
                        0{index + 1} / 0{portfolioData.projects.length}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-light-ink dark:text-dark-ink mb-3">
                      {project.displayTitle}
                    </h3>

                    {/* Summary */}
                    <p className="text-base text-light-inkSoft dark:text-dark-inkSoft leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Problem statement */}
                    <div className="p-4 rounded-lg bg-light-surfaceHover dark:bg-dark-surfaceHover border border-light-borderSubtle dark:border-dark-borderSubtle mb-6">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-medium block mb-1">
                        Use Case &amp; Problem
                      </span>
                      <p className="text-xs sm:text-sm text-light-inkSoft dark:text-dark-inkSoft leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </div>

                    {/* Implemented Verified Features */}
                    <div className="mb-6">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-light-inkMuted dark:text-dark-inkMuted block mb-3">
                        Verified Implemented Features
                      </span>
                      <ul className="space-y-2.5">
                        {project.verifiedFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-light-ink dark:text-dark-ink">
                            <FiCheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies & Source CTA */}
                  <div className="pt-6 border-t border-light-borderSubtle dark:border-dark-borderSubtle">
                    <div className="mb-5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-light-inkMuted dark:text-dark-inkMuted block mb-2">
                        Technologies evidenced in source
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded bg-light-surfaceHover dark:bg-dark-surfaceHover text-light-ink dark:text-dark-ink border border-light-border dark:border-dark-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-light-surfaceHover dark:bg-dark-surfaceHover text-light-ink dark:text-dark-ink hover:text-accent border border-light-border dark:border-dark-border hover:border-accent font-medium text-xs sm:text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={`View ${project.displayTitle} repository on GitHub (opens in new tab)`}
                      >
                        <FiGithub className="text-base" aria-hidden="true" />
                        <span>View repository</span>
                        <FiArrowUpRight className="text-xs opacity-60" aria-hidden="true" />
                      </a>

                      <span className="text-xs font-mono text-light-inkMuted dark:text-dark-inkMuted italic">
                        {project.statusNote}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Architectural Blueprint & System Overview */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-light-surfaceHover/50 dark:bg-dark-surfaceHover/40">
                  <div className="flex items-center justify-between text-[11px] font-mono text-light-inkMuted dark:text-dark-inkMuted border-b border-light-borderSubtle dark:border-dark-borderSubtle pb-3 mb-6">
                    <span className="flex items-center gap-1.5 uppercase tracking-wider">
                      <FiLayers className="text-accent" aria-hidden="true" /> Architecture
                    </span>
                    <span>{project.name}</span>
                  </div>

                  {/* Decorative Architectural Schematic */}
                  <div className="my-auto py-4">
                    {project.id === 'newton-extention' ? (
                      /* NST Reminder Extension Schematic */
                      <div className="space-y-4 font-mono text-xs" aria-hidden="true">
                        <div className="p-3.5 rounded-lg border border-accent/30 bg-accent/5">
                          <div className="flex items-center justify-between text-accent font-semibold mb-1">
                            <span>Chrome / Opera Browser Client</span>
                            <span className="text-[10px] uppercase">Manifest V3</span>
                          </div>
                          <p className="text-[11px] text-light-inkSoft dark:text-dark-inkSoft">
                            Background Service Worker + Content Script + Popup UI
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <div className="h-6 border-l-2 border-dashed border-accent/40 relative">
                            <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent/20"></span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
                          <div className="flex items-center justify-between text-light-ink dark:text-dark-ink font-semibold mb-1">
                            <span>Local Browser Storage &amp; Alarms</span>
                            <span className="text-[10px] text-accent">Zero Backend</span>
                          </div>
                          <p className="text-[11px] text-light-inkSoft dark:text-dark-inkSoft">
                            Session tokens never leave local machine; threshold alerts run via chrome.alarms.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <div className="h-6 border-l-2 border-dashed border-accent/40"></div>
                        </div>

                        <div className="p-3.5 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
                          <div className="flex items-center justify-between text-light-ink dark:text-dark-ink font-semibold mb-1">
                            <span>my.newtonschool.co API</span>
                            <span className="text-[10px] text-light-inkMuted dark:text-dark-inkMuted">Direct Endpoints</span>
                          </div>
                          <p className="text-[11px] text-light-inkSoft dark:text-dark-inkSoft">
                            GET course, attendance, contests, &amp; Question of the Day (QOTD).
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* SHIBAAM Apparel Portal Schematic */
                      <div className="space-y-4 font-mono text-xs" aria-hidden="true">
                        <div className="p-3.5 rounded-lg border border-accent/30 bg-accent/5">
                          <div className="flex items-center justify-between text-accent font-semibold mb-1">
                            <span>Dual Frontend Portal</span>
                            <span className="text-[10px] uppercase">HTML5 / JS</span>
                          </div>
                          <p className="text-[11px] text-light-inkSoft dark:text-dark-inkSoft">
                            Admin operations dashboard (8 modules) &amp; Customer tracking interface
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <div className="h-6 border-l-2 border-dashed border-accent/40 relative">
                            <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent/20"></span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
                          <div className="flex items-center justify-between text-light-ink dark:text-dark-ink font-semibold mb-1">
                            <span>Google Apps Script Engine</span>
                            <span className="text-[10px] text-accent">Serverless API</span>
                          </div>
                          <p className="text-[11px] text-light-inkSoft dark:text-dark-inkSoft">
                            Code.gs handles authenticated REST actions, order tracking, and print templates.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <div className="h-6 border-l-2 border-dashed border-accent/40"></div>
                        </div>

                        <div className="p-3.5 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
                          <div className="flex items-center justify-between text-light-ink dark:text-dark-ink font-semibold mb-1">
                            <span>Google Sheets Datastore</span>
                            <span className="text-[10px] text-light-inkMuted dark:text-dark-inkMuted">Zero Hosting Cost</span>
                          </div>
                          <p className="text-[11px] text-light-inkSoft dark:text-dark-inkSoft">
                            Structured tabs: Jobs, Customers, Workers, Measurements, Deliveries, Queries.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Architecture summary note */}
                  <div className="pt-4 border-t border-light-borderSubtle dark:border-dark-borderSubtle">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold block">
                      {project.architectureHighlight.type}
                    </span>
                    <p className="text-xs text-light-inkSoft dark:text-dark-inkSoft mt-1">
                      {project.architectureHighlight.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
