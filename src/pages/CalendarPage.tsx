import { Calendar as CalendarIcon, MapPin, Clock, Video } from 'lucide-react';
import DiagonalCard from '@/components/DiagonalCard';

const events = [
  { title: 'Southern Counties Field Shoot', date: 'May 4-5, 2024', time: '09:00 - 17:00', location: 'New Forest, Hampshire', type: 'Field', livestream: false },
  { title: 'UK Masters 3D Championship', date: 'June 1-2, 2024', time: '08:30 - 18:00', location: 'Delamere Forest, Cheshire', type: '3D', livestream: true },
  { title: 'Target Nationals 2024', date: 'July 5-7, 2024', time: '09:00 - 17:30', location: 'Lilleshall, Shropshire', type: 'Target', livestream: true },
  { title: 'World Field Archery Championship', date: 'August 12-18, 2024', time: 'All Day', location: 'Cortina d\'Ampezzo, Italy', type: 'Field', livestream: true },
  { title: 'Woodland 3D Safari Shoot', date: 'September 14-15, 2024', time: '09:00 - 16:00', location: 'Forest of Dean', type: '3D', livestream: false },
  { title: 'Autumn Indoor Series Rd 1', date: 'October 5, 2024', time: '10:00 - 16:00', location: 'Leicester Arena', type: 'Indoor', livestream: false },
];

const typeBadgeColors: Record<string, string> = {
  'Field': 'bg-accent text-accent-foreground',
  '3D': 'bg-highlight text-highlight-foreground',
  'Indoor': 'bg-primary text-primary-foreground',
  'Target': 'bg-secondary text-secondary-foreground',
};

const CalendarPage = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-secondary py-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-highlight" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-highlight rotate-45" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary-foreground/60">Schedule</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-wider text-secondary-foreground">Calendar</h1>
          <p className="text-secondary-foreground/60 mt-3 max-w-xl">Upcoming events and tournament coverage schedule.</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 hidden md:block" style={{ transform: 'skewX(-2deg)' }} />

            {events.map((event, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <DiagonalCard accentColor={event.livestream ? 'accent' : 'highlight'}>
                    <div className="p-5">
                      <div className="flex items-center gap-2 flex-wrap mb-2" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                        <span className={`badge ${typeBadgeColors[event.type]}`}>{event.type}</span>
                        {event.livestream && (
                          <span className="badge bg-accent text-accent-foreground flex items-center gap-1">
                            <Video className="w-3 h-3" /> Livestream
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-black text-lg uppercase tracking-wide text-secondary mb-3">{event.title}</h3>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <CalendarIcon className="w-3.5 h-3.5" /> {event.date}
                        </span>
                        <span className="flex items-center gap-1.5" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <Clock className="w-3.5 h-3.5" /> {event.time}
                        </span>
                        <span className="flex items-center gap-1.5" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <MapPin className="w-3.5 h-3.5" /> {event.location}
                        </span>
                      </div>
                    </div>
                  </DiagonalCard>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-accent rotate-45 relative z-10" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-black uppercase tracking-wider text-secondary-foreground text-center mb-12">Quick View</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, i) => (
              <div key={i} className="bg-secondary border-2 border-primary/20 p-5 hover:border-accent transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`badge ${typeBadgeColors[event.type]}`}>{event.type}</span>
                  {event.livestream && <Video className="w-4 h-4 text-accent" />}
                </div>
                <h3 className="font-heading font-bold text-sm uppercase tracking-wide text-secondary-foreground mb-2">{event.title}</h3>
                <p className="text-secondary-foreground/60 text-xs">{event.date} · {event.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;
