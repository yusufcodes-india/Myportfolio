import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiCode, FiArrowUpRight, FiAward, FiActivity } from 'react-icons/fi';
import { portfolioData } from '../data/portfolio';

export const ProblemSolving: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const cf = portfolioData.personal.codeforces;

  const [ratingData, setRatingData] = useState({
    rating: cf.verifiedSnapshot.rating,
    maxRating: cf.verifiedSnapshot.maxRating,
    rank: cf.verifiedSnapshot.rank,
    maxRank: cf.verifiedSnapshot.maxRank,
    isLive: false,
    lastUpdated: cf.verifiedSnapshot.snapshotDate,
  });

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    fetch(`https://codeforces.com/api/user.info?handles=${cf.handle}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then((data) => {
        if (data.status === 'OK' && data.result && data.result.length > 0) {
          const user = data.result[0];
          setRatingData({
            rating: user.rating ?? cf.verifiedSnapshot.rating,
            maxRating: user.maxRating ?? cf.verifiedSnapshot.maxRating,
            rank: user.rank ? user.rank.charAt(0).toUpperCase() + user.rank.slice(1) : cf.verifiedSnapshot.rank,
            maxRank: user.maxRank ? user.maxRank.charAt(0).toUpperCase() + user.maxRank.slice(1) : cf.verifiedSnapshot.maxRank,
            isLive: true,
            lastUpdated: 'Live snapshot',
          });
        }
      })
      .catch(() => {
        // Gracefully keep the verified fallback snapshot without breaking
      })
      .finally(() => {
        clearTimeout(timeoutId);
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [cf.handle, cf.verifiedSnapshot]);

  return (
    <section
      id="problem-solving"
      aria-label="Problem Solving & Competitive Programming"
      className="relative py-24 border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-accent">03 // PROBLEM-SOLVING</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-light-ink dark:text-dark-ink tracking-tight">
              Algorithmic Practice.{' '}
              <span className="italic text-light-inkSoft dark:text-dark-inkSoft">
                One problem at a time.
              </span>
            </h2>
          </div>
          <div className="font-mono text-xs text-light-inkMuted dark:text-dark-inkMuted">
            Codeforces · {cf.handle}
          </div>
        </div>

        {/* Content Box */}
        <motion.div
          className="rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 sm:p-10"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/10 border border-accent/20 text-accent font-mono text-xs mb-4">
                <FiCode aria-hidden="true" />
                <span>Competitive Programming</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-light-ink dark:text-dark-ink mb-4">
                I practice competitive programming on Codeforces as{' '}
                <span className="text-accent underline decoration-accent/40 underline-offset-4 font-mono font-normal">
                  {cf.handle}
                </span>
                .
              </h3>

              <p className="text-base text-light-inkSoft dark:text-dark-inkSoft leading-relaxed mb-6">
                Competitive programming provides honest feedback. When a test case fails, it points directly to an unhandled boundary condition, integer overflow, or asymptotic inefficiency. It trains me to verify assumptions before writing code.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={cf.profileUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent text-dark-bg font-medium text-xs sm:text-sm hover:bg-accent-hover transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="View YusufNST profile on Codeforces (opens in new tab)"
                >
                  <span>View Codeforces profile</span>
                  <FiArrowUpRight className="text-sm" aria-hidden="true" />
                </a>

                <span className="font-mono text-xs text-light-inkMuted dark:text-dark-inkMuted">
                  Direct profile link
                </span>
              </div>
            </div>

            {/* Right: Verified Stats Snapshot */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-xl border border-light-border dark:border-dark-border bg-light-surfaceHover dark:bg-dark-surfaceHover relative">
                <div className="flex items-center justify-between border-b border-light-borderSubtle dark:border-dark-borderSubtle pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <FiActivity className="text-accent text-sm" aria-hidden="true" />
                    <span className="font-mono text-xs font-medium text-light-ink dark:text-dark-ink">
                      Handle: {cf.handle}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-light-inkMuted dark:text-dark-inkMuted">
                    {ratingData.lastUpdated}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3.5 rounded-lg border border-light-borderSubtle dark:border-dark-borderSubtle bg-light-surface dark:bg-dark-surface">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-light-inkMuted dark:text-dark-inkMuted block mb-1">
                      Current Rating
                    </span>
                    <span className="font-serif text-2xl font-semibold text-light-ink dark:text-dark-ink">
                      {ratingData.rating}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-lg border border-light-borderSubtle dark:border-dark-borderSubtle bg-light-surface dark:bg-dark-surface">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-light-inkMuted dark:text-dark-inkMuted block mb-1">
                      Max Rating
                    </span>
                    <span className="font-serif text-2xl font-semibold text-light-ink dark:text-dark-ink">
                      {ratingData.maxRating}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg border border-light-borderSubtle dark:border-dark-borderSubtle bg-light-surface dark:bg-dark-surface flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-light-inkMuted dark:text-dark-inkMuted block">
                      Rank Classification
                    </span>
                    <span className="font-mono text-sm font-medium text-accent">
                      {ratingData.rank}
                    </span>
                  </div>
                  <FiAward className="text-accent text-xl opacity-80" aria-hidden="true" />
                </div>

                <div className="mt-4 pt-3 border-t border-light-borderSubtle dark:border-dark-borderSubtle flex items-center justify-between text-[11px] font-mono text-light-inkMuted dark:text-dark-inkMuted">
                  <span>Practice Focus</span>
                  <span>DSA &amp; Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
