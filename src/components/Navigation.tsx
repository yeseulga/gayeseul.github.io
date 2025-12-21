import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchModal from './SearchModal';

const navItems = [
  { id: 'about-me', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'career', label: 'Career' },
  { id: 'projects', label: 'Projects' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-lg font-bold text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors flex items-center gap-2"
                aria-label="검색"
              >
                <Search className="w-4 h-4 text-foreground" />
                <span className="hidden sm:inline text-xs text-muted-foreground">⌘K</span>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navigation;
