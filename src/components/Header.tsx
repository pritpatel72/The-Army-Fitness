import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'py-4 bg-[#0a0b0d]/70 backdrop-blur-md border-b border-zinc-800/40 shadow-lg'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <img 
              src="/logo.png" 
              alt="The Army Fitness Logo" 
              className="h-10 w-auto object-contain brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['services', 'showcase', 'about', 'reviews'].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                data-cursor="view"
                className="text-xs font-display tracking-widest text-zinc-400 hover:text-white uppercase transition-colors"
              >
                {sec}
              </button>
            ))}
          </nav>

          {/* CTA Header Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              data-cursor="join"
              className="px-6 py-2 border border-gym-accent/40 bg-gym-accent/5 hover:bg-gym-accent hover:text-black rounded-full text-xs font-display font-bold tracking-widest text-gym-accent transition-all duration-300"
            >
              JOIN THE UNIT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-35 bg-[#0a0b0d]/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {['services', 'showcase', 'about', 'reviews'].map((sec) => (
            <button
              key={sec}
              onClick={() => scrollToSection(sec)}
              className="text-2xl font-serif text-zinc-300 hover:text-gym-accent uppercase tracking-widest transition-colors"
            >
              {sec}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="mt-4 px-8 py-3 bg-gym-accent text-black rounded-full font-display font-extrabold tracking-widest text-sm hover:bg-gym-lime transition-colors"
          >
            JOIN THE UNIT
          </button>
        </div>
      </div>
    </>
  );
}
