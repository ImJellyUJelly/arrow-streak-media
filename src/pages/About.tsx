import { Target, Heart, Users, TrendingUp } from 'lucide-react';
import DiagonalCard from '@/components/DiagonalCard';
import ImageWithFallback from '@/components/ImageWithFallback';
import aboutImg from '@/assets/about-photographer.jpg';
import tournament1 from '@/assets/VeldOorlogsMuseum-7668.jpg';

const values = [
  { icon: Heart, title: 'Discipline', description: 'Field archery demands focus, patience, and precision. We capture the dedication behind every shot.' },
  { icon: Users, title: 'Community', description: 'From local clubs to international championships, the archery community is our family.' },
  { icon: TrendingUp, title: 'Growth', description: 'We\'re committed to growing field archery\'s visibility and attracting new participants to the sport.' },
];

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-secondary py-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-accent rotate-45" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary-foreground/60">Who We Are</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-wider text-secondary-foreground">About Us</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image with diagonal accents */}
            <div className="lg:w-5/12 relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20" style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)' }} />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }} />
              <ImageWithFallback src={aboutImg} alt="Inside Out Archery Media photographer" className="relative z-10 w-full aspect-[4/5] object-cover" width={800} height={1000} />
            </div>

            {/* Text */}
            <div className="lg:w-7/12">
              <h2 className="section-heading mb-6">The Story Behind the Lens</h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Inside Out Archery Media was born from a passion for field archery and a frustration with the lack of professional media coverage in the sport.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As both archers and media professionals, we understood that field archery — with its stunning woodland courses, technical challenges, and incredible community — deserved to be showcased to a wider audience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we provide tournament photography, event branding, and livestream production services to archery clubs and organizations across the UK and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Target className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-wider text-secondary-foreground mb-6">Our Mission</h2>
          <p className="text-secondary-foreground/70 text-lg leading-relaxed">
            To promote and celebrate field archery through world-class media coverage, making the sport more accessible, visible, and inspiring for archers and fans worldwide.
          </p>
        </div>
      </section>

      {/* Why Field Archery Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Why Field Archery Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <DiagonalCard key={i} accentColor={i === 0 ? 'accent' : i === 1 ? 'primary' : 'highlight'}>
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-secondary mx-auto mb-6 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-heading font-black text-xl uppercase tracking-wide text-secondary mb-3">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                  </div>
                </DiagonalCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-7/12">
              <h2 className="section-heading mb-6">Our Vision</h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                We envision a future where field archery receives the same level of professional media coverage as any mainstream sport.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through compelling photography, dynamic branding, and engaging livestreams, we're building a bridge between the archery community and a global audience hungry for authentic, skill-based sporting content.
              </p>
            </div>
            <div className="lg:w-5/12 relative">
              <div className="absolute -top-3 -right-3 w-full h-full bg-highlight/20" style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }} />
              <ImageWithFallback src={tournament1} alt="Field archery vision" className="relative z-10 w-full aspect-video object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
