import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ioaLogo from '@/assets/IOA_media-Logo-Kleur.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Albums', path: '/albums' },
  { label: 'Calendar', path: '/calendar' },
  //{ label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary relative overflow-hidden">
      {/* Diagonal green accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent opacity-10" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />
      
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img src={ioaLogo} alt="IOA Media logo" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <div className="font-heading font-black text-lg uppercase tracking-wider text-secondary-foreground leading-none">Inside Out</div>
            <div className="font-heading font-bold text-xs uppercase tracking-widest text-accent leading-none mt-0.5">Archery Media</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-accent'
                  : 'text-secondary-foreground/70 hover:text-secondary-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-secondary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-secondary border-t border-primary/20 px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 font-heading font-bold text-sm uppercase tracking-wider transition-colors ${
                location.pathname === item.path
                  ? 'text-accent bg-primary/10'
                  : 'text-secondary-foreground/70 hover:text-secondary-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
