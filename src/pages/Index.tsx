import { Link } from 'react-router-dom';
import { Trophy, ArrowRight, Calendar, ExternalLink, Image } from 'lucide-react';
import DiagonalCard from '@/components/DiagonalCard';
import ImageWithFallback from '@/components/ImageWithFallback';
import heroImg from '@/assets/hero-archery.jpg';
import tournament1 from '@/assets/VeldOorlogsMuseum-7668.jpg';

const tournaments = [
  { title: 'Field War Museum', location: 'Oorlogsmuseum Overloon', date: '4-5 April 2024', type: 'Field', image: tournament1 },
];

const albums = [
  { title: 'Field War Museum', photos: 298, image: tournament1 },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Field archery action" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/30" />
        </div>
        {/* Diagonal accents */}
        <div className="absolute top-20 right-1/4 w-1 h-40 bg-accent rotate-[25deg] opacity-60" />
        <div className="absolute bottom-40 right-1/3 w-1 h-32 bg-primary rotate-[-20deg] opacity-40" />
        <div className="absolute top-1/3 right-[15%] w-3 h-3 bg-accent rotate-45 opacity-80" />
        <div className="absolute bottom-1/4 right-[20%] w-2 h-2 bg-highlight rotate-45 opacity-60" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase tracking-wider leading-[0.9] mb-6">
              <span className="text-secondary-foreground">Inside Out</span>
              <br />
              <span className="text-accent">Archery Media</span>
            </h1>
            <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-lg mb-8 font-body">
              Professional photography, event branding, and livestream coverage — promoting field archery to the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary inline-flex items-center gap-2">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Trophy className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="section-heading mb-6">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe field archery deserves world-class media coverage. From the quiet forests to the buzzing plains,
            we capture the precision, passion, and community that make this sport extraordinary.
          </p>
        </div>
      </section>

      {/* Latest Albums */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-1/4 left-10 w-0.5 h-40 bg-accent/20 rotate-[20deg]" />
        <div className="absolute bottom-1/3 right-20 w-0.5 h-32 bg-primary/30 rotate-[-15deg]" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-accent rotate-45" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary-foreground/60">Latest</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black uppercase tracking-wider text-secondary-foreground">Photo Albums</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {albums.map((a, i) => (
              <a key={i} href="https://flickr.com" target="_blank" rel="noopener noreferrer" className="group relative block">
                <DiagonalCard accentColor="accent">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback src={a.image} alt={a.title} className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={800} height={600} />
                    <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <div className="absolute bottom-3 left-3 badge bg-accent text-accent-foreground">
                      <Image className="w-3 h-3 mr-1" /> {a.photos} Photos
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-secondary">{a.title}</h3>
                  </div>
                </DiagonalCard>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for Organizers */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5" style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)' }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Calendar className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black uppercase tracking-wider text-primary-foreground mb-6">
            Tournament Organizer?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Let us capture your event with professional photography, create compelling event branding, or provide full livestream coverage. We'll help you promote field archery to a wider audience.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
