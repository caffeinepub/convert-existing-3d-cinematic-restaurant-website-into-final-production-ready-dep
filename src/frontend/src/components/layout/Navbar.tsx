import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { scrollToSection } from '../../lib/scrollToSection';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Menu', id: 'menu' },
  { name: 'Booking', id: 'booking' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/95 shadow-lg shadow-amber-900/10 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-amber-400 transition-colors hover:text-amber-300"
          >
            Culinary Excellence
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-amber-100/80 transition-colors hover:text-amber-400"
              >
                {link.name}
              </button>
            ))}
            <Button
              className="bg-amber-600 hover:bg-amber-700"
              onClick={() => scrollToSection('booking')}
            >
              Reserve Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-amber-400">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-amber-900/30 bg-zinc-950">
              <div className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="text-left text-lg text-amber-100/80 transition-colors hover:text-amber-400"
                  >
                    {link.name}
                  </button>
                ))}
                <Button
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={() => handleNavClick('booking')}
                >
                  Reserve Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
