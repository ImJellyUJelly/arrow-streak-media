import { Link } from 'react-router-dom';
import { Target, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary relative overflow-hidden">
      {/* Green diagonal strip top */}
      <div className="h-2 bg-accent w-full" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-8 h-8 bg-primary flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-accent rotate-45" />
              </div>
              <div>
                <div className="font-heading font-black text-sm uppercase tracking-wider text-secondary-foreground leading-none">Inside Out</div>
                <div className="font-heading font-bold text-xs uppercase tracking-widest text-accent leading-none mt-0.5">Archery Media</div>
              </div>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Professional tournament photography, event branding, and livestream coverage for the field archery community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-secondary-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Home', path: '/' },
                /*{ label: 'Services', path: '/services' },*/
                { label: 'Albums', path: '/albums' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-secondary-foreground/60 hover:text-accent text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-secondary-foreground mb-4">Social Media</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/insideoutarcherymedia/?hl=nl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground text-secondary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://flickr.com/photos/198763833@N05/albums/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground text-secondary-foreground transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="12" r="5" /><circle cx="17" cy="12" r="5" /></svg>
              </a>
              <a href="https://twitch.tv/insideoutarchery" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 flex items-center justify-center hover:bg-accent hover:text-accent-foreground text-secondary-foreground transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-secondary-foreground/10 flex items-center justify-between relative">
          <p className="text-secondary-foreground/40 text-xs">© 2024 Inside Out Archery Media. All rights reserved.</p>
          {/* Yellow diagonal accent */}
          <div className="absolute -bottom-2 right-0 w-20 h-4 bg-highlight" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
