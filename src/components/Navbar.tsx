import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
        ${scrolled 
          ? 'bg-moore-black/90 backdrop-blur-md py-4 border-moore-white/10' 
          : 'bg-transparent py-6 border-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Brand typography or mark */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-moore-blue group-hover:scale-125 transition-transform" />
          <span className="text-xl font-extrabold tracking-tighter text-moore-white font-sans uppercase">
            MOORE UNIVERSAL
          </span>
        </a>

        {/* Center: Compact Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#methodology"
            className="text-xs font-mono uppercase tracking-widest text-moore-white/80 hover:text-moore-blue transition-colors"
          >
            Methodology
          </a>
          <a
            href="#services"
            className="text-xs font-mono uppercase tracking-widest text-moore-white/80 hover:text-moore-blue transition-colors"
          >
            Services
          </a>
          <a
            href="#work"
            className="text-xs font-mono uppercase tracking-widest text-moore-white/80 hover:text-moore-blue transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-xs font-mono uppercase tracking-widest text-moore-white/80 hover:text-moore-blue transition-colors"
          >
            Partnerships
          </a>
        </div>

        {/* Right Actions: MENU Button & Trigger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-moore-white hover:text-moore-blue transition-all relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-moore-blue after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left after:transition-transform"
          >
            START PROJECT
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-moore-white hover:text-moore-blue transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <span className="hidden md:inline-block bg-moore-white/10 text-moore-white font-mono text-[10px] tracking-widest uppercase px-3 py-1 border border-moore-white/10 rounded-sm">
            UTC-0
          </span>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[100%] left-0 w-full bg-moore-black border-b border-moore-white/10 py-8 px-6 flex flex-col space-y-6 animate-fade-in">
          <a
            href="#methodology"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-widest text-moore-white/80 hover:text-moore-blue transition-colors"
          >
            Methodology
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-widest text-moore-white/80 hover:text-moore-blue transition-colors"
          >
            Services
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-widest text-moore-white/80 hover:text-moore-blue transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-mono uppercase tracking-widest text-moore-white/80 hover:text-moore-blue transition-colors"
          >
            Contact
          </a>
          <div className="pt-4 border-t border-moore-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block bg-moore-blue text-moore-white py-3 font-mono text-xs uppercase tracking-widest hover:bg-moore-blue-dark transition-colors"
            >
              START PROJECT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
