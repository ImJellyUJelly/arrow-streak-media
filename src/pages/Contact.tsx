import { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().trim().max(20).optional(),
  organization: z.string().trim().max(100).optional(),
  eventDate: z.string().optional(),
  eventType: z.string().optional(),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', organization: '', eventDate: '', eventType: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (err.path[0]) fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  if (submitted) {
    return (
      <div>
        <section className="bg-secondary py-16 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-wider text-secondary-foreground">Contact</h1>
          </div>
        </section>
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4 text-center">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="section-heading mb-4">Thank You!</h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">Your message has been sent. We'll get back to you within 24 hours.</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <section className="bg-secondary py-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-accent rotate-45" />
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-secondary-foreground/60">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-wider text-secondary-foreground">Contact</h1>
          <p className="text-secondary-foreground/60 mt-3 max-w-xl">Ready to discuss coverage for your next event? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="border-4 border-secondary p-6 md:p-8 relative">
                <div className="card-diagonal-accent -top-2 -right-2 bg-accent" />
                <h2 className="font-heading font-black text-2xl uppercase tracking-wider text-secondary mb-6">Send Us a Message</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-heading font-bold uppercase tracking-wider text-secondary mb-1">Name *</label>
                    <input type="text" value={form.name} onChange={(e) => handleChange('name', e.target.value)} className="w-full border-2 border-secondary bg-background px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors" />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-bold uppercase tracking-wider text-secondary mb-1">Email *</label>
                    <input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className="w-full border-2 border-secondary bg-background px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors" />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-bold uppercase tracking-wider text-secondary mb-1">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} className="w-full border-2 border-secondary bg-background px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-bold uppercase tracking-wider text-secondary mb-1">Organization</label>
                    <input type="text" value={form.organization} onChange={(e) => handleChange('organization', e.target.value)} className="w-full border-2 border-secondary bg-background px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-bold uppercase tracking-wider text-secondary mb-1">Event Date</label>
                    <input type="date" value={form.eventDate} onChange={(e) => handleChange('eventDate', e.target.value)} className="w-full border-2 border-secondary bg-background px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-heading font-bold uppercase tracking-wider text-secondary mb-1">Event Type</label>
                    <select value={form.eventType} onChange={(e) => handleChange('eventType', e.target.value)} className="w-full border-2 border-secondary bg-background px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors">
                      <option value="">Select type...</option>
                      <option value="field">Field Archery</option>
                      <option value="3d">3D Archery</option>
                      <option value="indoor">Indoor</option>
                      <option value="target">Target</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-heading font-bold uppercase tracking-wider text-secondary mb-1">Message *</label>
                  <textarea rows={5} value={form.message} onChange={(e) => handleChange('message', e.target.value)} className="w-full border-2 border-secondary bg-background px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors resize-none" />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary inline-flex items-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              {/* Direct Contact */}
              <div className="bg-secondary p-6 relative">
                <div className="card-diagonal-accent -top-2 -right-2 bg-accent" />
                <h3 className="font-heading font-black text-lg uppercase tracking-wider text-secondary-foreground mb-4">Direct Contact</h3>
                <div className="flex flex-col gap-3">
                  <a href="mailto:info@insideoutarcherymedia.com" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-accent transition-colors text-sm">
                    <Mail className="w-4 h-4 shrink-0" /> info@insideoutarcherymedia.com
                  </a>
                  <a href="tel:+441234567890" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-accent transition-colors text-sm">
                    <Phone className="w-4 h-4 shrink-0" /> +31 6 39 37 95 12
                  </a>
                  <span className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
                    <MapPin className="w-4 h-4 shrink-0" /> Eindhoven, Netherlands
                  </span>
                </div>
              </div>

              {/* Social */}
              <div className="border-4 border-secondary p-6 relative">
                <div className="card-diagonal-accent -top-2 -right-2 bg-highlight" />
                <h3 className="font-heading font-black text-lg uppercase tracking-wider text-secondary mb-4">Social Media</h3>
                <div className="flex flex-col gap-3">

                  <a href="https://www.instagram.com/insideoutarcherymedia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                    <Instagram className="w-4 h-4" /> Instagram
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61576683440025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                    <Facebook className="w-4 h-4" /> Facebook
                  </a>
                  <a href="https://flickr.com/photos/198763833@N05/albums" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="12" r="5" /><circle cx="17" cy="12" r="5" /></svg> Flickr
                  </a>
                  <a href="https://twitch.tv/insideoutarchery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg> Twitch
                  </a>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-accent p-6 relative">
                <div className="card-diagonal-accent -top-2 -right-2 bg-secondary" />
                <h3 className="font-heading font-black text-lg uppercase tracking-wider text-accent-foreground mb-2">Quick Response</h3>
                <p className="text-accent-foreground/80 text-sm">I typically respond within 24 hours. For urgent inquiries, please call me directly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
