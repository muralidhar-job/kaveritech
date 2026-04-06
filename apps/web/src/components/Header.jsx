
import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollSpy } from '@/hooks/useScrollSpy';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Career Transition', id: 'career-transition' },
    { name: 'Non-IT To IT', id: 'non-it-to-it' },
    { name: 'Job Guarantee', id: 'job-guarantee' },
    { name: 'Corporate Training', id: 'corporate-training' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Technologies', id: 'technologies' },
    { name: 'Services', id: 'services' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact Us', id: 'contact-us' }
  ];

  const sectionIds = ['home', ...navLinks.map(link => link.id)];
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Kaveri<span className="text-primary">Technologies</span>
            </span>
          </a>

          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden border-t bg-background shadow-lg absolute w-full">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
