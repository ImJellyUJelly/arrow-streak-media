import { Link } from 'react-router-dom';
import { Camera, Palette, Video, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Tournament Photography',
    color: 'primary',
    colorClass: 'text-primary',
    bgClass: 'bg-primary/10',
    accentClass: 'bg-primary',
    description: 'Professional photography capturing every moment of your tournament. From the practice field, to the sponsor promotion, to the final podium.',
    features: [
      'High-resolution action shots',
      'Competitor portraits and group photos',
      'Full event coverage from practice to awards',
      'Fast turnaround Flickr gallery delivery',
      'High-quality files available',
    ],
  },
  // {
  //   icon: Palette,
  //   title: 'Event Branding & Promotion',
  //   color: 'accent',
  //   colorClass: 'text-accent',
  //   bgClass: 'bg-accent/10',
  //   accentClass: 'bg-accent',
  //   description: 'Create a professional identity for your tournament that attracts competitors and sponsors alike.',
  //   features: [
  //     'Pre-event promotional content',
  //     'On-site signage and banners',
  //     'Post-event highlight reels',
  //     'Sponsor integration packages',
  //   ],
  // },
  {
    icon: Video,
    title: 'Livestream Production',
    color: 'highlight',
    colorClass: 'text-highlight',
    bgClass: 'bg-highlight/10',
    accentClass: 'bg-highlight',
    description: 'Bring your tournament to a global audience with livestream production.',
    features: [
      'Single-camera POV livestream setup',
      'Professional commentary integration',
      'Platform streaming (Twitch)',
      'Audience engagement tools',
    ],
  },
];

const Services = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-secondary py-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-accent rotate-45" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary-foreground/60">What We Do</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-wider text-secondary-foreground">Services</h1>
          <p className="text-secondary-foreground/60 mt-3 max-w-xl">Professional media services designed specifically for the archery community.</p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const reversed = i % 2 !== 0;
        return (
          <section key={i} className={`py-20 ${i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
            <div className="container mx-auto px-4">
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Icon Block */}
                <div className="lg:w-5/12 flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-secondary flex items-center justify-center">
                      <Icon className={`w-20 h-20 ${service.colorClass}`} />
                    </div>
                    <div className={`card-diagonal-accent -top-2 -right-2 ${service.accentClass}`} />
                    <div className={`card-diagonal-accent -bottom-2 -left-2 ${service.accentClass}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-7/12">
                  <div className="relative border-4 border-secondary p-8">
                    <div className={`card-diagonal-accent -top-2 -right-2 ${service.accentClass}`} />
                    <h2 className="section-heading mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <div className={`w-2 h-2 mt-1.5 ${service.accentClass} rotate-45 shrink-0`} />
                          <span className="text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5" style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0 100%)' }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-wider text-primary-foreground mb-6">
            Ready to Elevate Your Event?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how I can provide professional media coverage for your next tournament.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
