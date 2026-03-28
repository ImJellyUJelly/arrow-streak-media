import { Link } from 'react-router-dom';
import { ExternalLink, Image, ArrowRight } from 'lucide-react';
import DiagonalCard from '@/components/DiagonalCard';
import ImageWithFallback from '@/components/ImageWithFallback';
import tournament1 from '@/assets/tournament-1.jpg';
import tournament2 from '@/assets/tournament-2.jpg';
import tournament3 from '@/assets/tournament-3.jpg';

const albums = [
  { title: 'National Field Championships 2024', date: 'March 2024', photos: 248, image: tournament1, flickrUrl: 'https://flickr.com' },
  { title: '3D Animal Round Open 2024', date: 'April 2024', photos: 186, image: tournament2, flickrUrl: 'https://flickr.com' },
  { title: 'Indoor Winter Series Finals', date: 'February 2024', photos: 124, image: tournament3, flickrUrl: 'https://flickr.com' },
  { title: 'Southern Counties Field 2023', date: 'May 2023', photos: 312, image: tournament1, flickrUrl: 'https://flickr.com' },
  { title: 'UK Masters 3D 2023', date: 'June 2023', photos: 198, image: tournament2, flickrUrl: 'https://flickr.com' },
  { title: 'Target Nationals 2023', date: 'July 2023', photos: 276, image: tournament3, flickrUrl: 'https://flickr.com' },
];

const Albums = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-secondary py-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-accent rotate-45" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary-foreground/60">Gallery</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-wider text-secondary-foreground">Albums</h1>
          <p className="text-secondary-foreground/60 mt-3 max-w-xl">Browse tournament photo albums. All photos hosted on Flickr for easy viewing and downloading.</p>
        </div>
      </section>

      {/* Flickr Banner */}
      <section className="bg-primary py-4">
        <div className="container mx-auto px-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="12" r="5" /><circle cx="17" cy="12" r="5" /></svg>
            <span className="font-heading font-bold text-sm uppercase tracking-wider text-primary-foreground">All albums hosted on Flickr</span>
          </div>
          <a href="https://flickr.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-2">
            Visit Flickr Profile <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, i) => (
              <a key={i} href={album.flickrUrl} target="_blank" rel="noopener noreferrer" className="group block">
                <DiagonalCard accentColor={i % 2 === 0 ? 'accent' : 'highlight'}>
                  <div className="relative overflow-hidden">
                    <ImageWithFallback src={album.image} alt={album.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" width={800} height={600} />
                    <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <div className="absolute bottom-3 left-3 badge bg-accent text-accent-foreground">
                      <Image className="w-3 h-3 mr-1" /> {album.photos} Photos
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-black text-lg uppercase tracking-wide text-secondary mb-1">{album.title}</h3>
                    <p className="text-muted-foreground text-sm">{album.date}</p>
                  </div>
                </DiagonalCard>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary-foreground/70 mb-4">Want to see more? Browse our complete collection on Flickr.</p>
          <a href="https://flickr.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
            Browse All Albums <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Albums;
