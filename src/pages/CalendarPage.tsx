import { Calendar as CalendarIcon, MapPin, Clock, Video, AlertTriangle } from 'lucide-react';
import DiagonalCard from '@/components/DiagonalCard';

const events = [
  { title: 'Training Camp: Mullenborn', date: 'April 24-27, 2026', location: 'Mullenborn, Germany', type: 'Field', livestream: true, tentative: false },
  { title: '5 Nations: Vertus', date: 'May 9-10, 2026', location: 'Vertus, France', type: 'Field', livestream: true, tentative: false },
  { title: '5 Nations: Trier', date: 'May 23-24, 2026', location: 'Trier, Germany', type: 'Field', livestream: true, tentative: false },
  { title: 'Veld Hapert', date: 'June 13-14, 2026', location: 'Hapert, Netherlands', type: 'Field', livestream: false, tentative: false },
  { title: 'Veld Amersfoort', date: 'June 20-21, 2026', location: 'Amersfoort, Netherlands', type: 'Field', livestream: false, tentative: true },
  { title: 'Veld Haaksbergen', date: 'July 4-5, 2026', location: 'Haaksbergen, Netherlands', type: 'Field', livestream: false, tentative: false },
  { title: '5 Nations: Sint-Oedenrode', date: 'July 11-12, 2026', location: 'Sint-Oedenrode, Netherlands', type: 'Field', livestream: true, tentative: true },
  { title: '5 Nations: Esch-sur-Alzette', date: 'Augustus 29-30, 2026', location: 'Esch-sur-Alzette, Luxembourg', type: 'Field', livestream: true, tentative: false },
];

const typeBadgeColors: Record<string, string> = {
  'Field': 'bg-accent text-accent-foreground',
  '3D': 'bg-highlight text-highlight-foreground',
  'Indoor': 'bg-primary text-primary-foreground',
  'Outdoor': 'bg-secondary text-secondary-foreground',
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
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 hidden md:block" />

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
                        {event.tentative && (
                          <span className="badge bg-yellow-200 text-yellow-800 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> Tentative
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-black text-lg uppercase tracking-wide text-secondary mb-3">{event.title}</h3>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <CalendarIcon className="w-3.5 h-3.5" /> {event.date}
                        </span>
                        {/* <span className="flex items-center gap-1.5" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                          <Clock className="w-3.5 h-3.5" /> {event.time}
                        </span> */}
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
                  {event.tentative && <AlertTriangle className="w-4 h-4 text-yellow-600" />}
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
