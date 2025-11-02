import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ExperiencePage } from './components/ExperiencePage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { BookingPage } from './components/BookingPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'experience' | 'blog' | 'contact' | 'booking'>('home');

  const handleNavigate = (page: 'home' | 'about' | 'services' | 'experience' | 'blog' | 'contact' | 'booking') => {
    console.log('handleNavigate called:', page);
    // update app state
    setCurrentPage(page);
    // push a new history entry so browser back/forward work
    try {
      const url = page === 'home' ? '/' : `/${page}`;
      window.history.pushState({ page }, '', url);
      console.log('pushed history state:', url);
    } catch (e) {
      // if pushState fails for any reason, still continue
      console.warn('history pushState failed', e);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync initial page from URL and handle popstate (back/forward)
  useEffect(() => {
    const allowed = ['home','about','services','experience','blog','contact','booking'];

    const pathToPage = (path: string): typeof currentPage => {
      const trimmed = path.replace(/^\/+|\/+$/g, '').toLowerCase();
      if (!trimmed) return 'home';
      if ((allowed as string[]).includes(trimmed)) return trimmed as any;
      return 'home';
    };

    // set initial page from the current pathname
    const initial = pathToPage(window.location.pathname);
    if (initial !== currentPage) {
      setCurrentPage(initial);
    }

    const onPop = (e: PopStateEvent) => {
      // prefer state.page if available, else derive from location
      const statePage = (e.state && (e.state as any).page) as typeof currentPage | undefined;
      const pageFromLoc = statePage ?? pathToPage(window.location.pathname);
      console.log('popstate -> set page to', pageFromLoc, 'event.state=', e.state);
      setCurrentPage(pageFromLoc as any);
    };

    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
  {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'experience' && <ExperiencePage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'booking' && <BookingPage />}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
