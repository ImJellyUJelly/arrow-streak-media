import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import DiagonalCard from '@/components/DiagonalCard';
import ImageWithFallback from '@/components/ImageWithFallback';
import tournament1 from '@/assets/tournament-1.jpg';
import tournament2 from '@/assets/tournament-2.jpg';
import tournament3 from '@/assets/tournament-3.jpg';

const tournaments = [
  { title: 'National Field Championships 2024', location: 'Sherwood Forest, UK', date: 'March 15-17, 2024', type: 'Field', image: tournament1 },
  { title: '3D Animal Round Open', location: 'Cwm Carn, Wales', date: 'April 6-7, 2024', type: '3D', image: tournament2 },
  { title: 'Indoor Winter Series Finals', location: 'NEC Birmingham', date: 'February 10, 2024', type: 'Indoor', image: tournament3 },
  { title: 'Southern Counties Field Shoot', location: 'New Forest, Hampshire', date: 'May 4-5, 2024', type: 'Field', image: tournament1 },
  { title: 'UK Masters 3D Championship', location: 'Delamere Forest, Cheshire', date: 'June 1-2, 2024', type: '3D', image: tournament2 },
  { title: 'National Indoor Championships', location: 'Telford International Centre', date: 'January 20-21, 2024', type: 'Indoor', image: tournament3 },
  { title: 'World Field Archery Championship', location: 'Cortina d\'Ampezzo, Italy', date: 'August 12-18, 2024', type: 'Field', image: tournament1 },
  { title: 'Target Nationals 2024', location: 'Lilleshall, Shropshire', date: 'July 5-7, 2024', type: 'Target', image: tournament3 },
  { title: 'Woodland 3D Safari Shoot', location: 'Forest of Dean', date: 'September 14-15, 2024', type: '3D', image: tournament2 },
];

const typeBadgeColors: Record<string, string> = {
  'Field': 'bg-accent text-accent-foreground',
  '3D': 'bg-highlight text-highlight-foreground',
  'Indoor': 'bg-primary text-primary-foreground',
  'Target': 'bg-secondary text-secondary-foreground',
};

const Tournaments = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-secondary py-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-accent rotate-45" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary-foreground/60">Archive</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-wider text-secondary-foreground">Tournaments</h1>
          <p className="text-secondary-foreground/60 mt-3 max-w-xl">Browse our complete archive of tournament coverage — from woodland field shoots to indoor championship finals.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((t, i) => (
              <DiagonalCard key={i} accentColor="highlight">
                <div className="relative overflow-hidden">
                  <span className={`badge ${typeBadgeColors[t.type]} absolute top-3 right-3 z-10`}>{t.type}</span>
                  <ImageWithFallback src={t.image} alt={t.title} className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110" loading="lazy" width={800} height={600} />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-black text-lg uppercase tracking-wide text-secondary mb-3">{t.title}</h3>
                  <div className="flex flex-col gap-1.5 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {t.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {t.location}</span>
                  </div>
                  <a href="https://flickr.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-2">
                    View Album <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </DiagonalCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tournaments;
