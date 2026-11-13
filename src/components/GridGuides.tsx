import React from 'react';

/**
 * Architectural grid guides inspired by editorial museum layouts.
 * Provides subtle vertical structural lines across the viewport.
 */
export const GridGuides: React.FC = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-hidden="true"
    >
      <div className="grid h-full grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 border-x border-light-borderSubtle dark:border-dark-borderSubtle">
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle hidden sm:block"></div>
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle hidden sm:block"></div>
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle"></div>
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle hidden lg:block"></div>
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle hidden lg:block"></div>
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle"></div>
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle hidden lg:block"></div>
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle hidden lg:block"></div>
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle"></div>
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle hidden sm:block"></div>
        <div className="border-r border-light-borderSubtle dark:border-dark-borderSubtle hidden lg:block"></div>
        <div></div>
      </div>
    </div>
  );
};
