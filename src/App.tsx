import { useState, useEffect } from 'react';
import { GridGuides } from './components/GridGuides';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutFocus } from './components/AboutFocus';
import { SelectedWork } from './components/SelectedWork';
import { ProblemSolving } from './components/ProblemSolving';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Read saved preference or system preference
    const saved = localStorage.getItem('yt_theme_pref');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      applyTheme(saved);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'dark'; // Default to polished dark
      setTheme(initial);
      applyTheme(initial);
    }
  }, []);

  const applyTheme = (t: 'dark' | 'light') => {
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('yt_theme_pref', nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <div className="relative min-h-screen bg-light-bg text-light-ink dark:bg-dark-bg dark:text-dark-ink selection:bg-accent/20 transition-colors duration-300">
      {/* Background Architectural Grid Guides */}
      <GridGuides />

      {/* Navigation */}
      <Navigation currentTheme={theme} onToggleTheme={handleToggleTheme} />

      {/* Main Content Landmark */}
      <main id="main-content" tabIndex={-1} className="relative z-10 focus:outline-none">
        <Hero />
        <AboutFocus />
        <SelectedWork />
        <ProblemSolving />
        <Contact />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
}
