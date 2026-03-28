import { useState } from 'react';
import { X, Image, Sparkles, Video, Radio } from 'lucide-react';

export type BannerType = 'new-album' | 'album-updated' | 'livestream-upcoming' | 'livestream-live';

interface NotificationBannerProps {
  type: BannerType;
  title: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
  onDismiss?: () => void;
}

const bannerConfig = {
  'new-album': {
    bg: 'bg-primary',
    accentTop: 'bg-accent',
    accentBottom: 'bg-accent',
    icon: Image,
    textColor: 'text-primary-foreground',
  },
  'album-updated': {
    bg: 'bg-secondary',
    accentTop: 'bg-highlight',
    accentBottom: 'bg-highlight',
    icon: Sparkles,
    textColor: 'text-secondary-foreground',
  },
  'livestream-upcoming': {
    bg: 'bg-primary',
    accentTop: 'bg-highlight',
    accentBottom: 'bg-highlight',
    icon: Video,
    textColor: 'text-primary-foreground',
  },
  'livestream-live': {
    bg: 'bg-secondary',
    accentTop: 'bg-accent',
    accentBottom: 'bg-accent',
    icon: Radio,
    textColor: 'text-secondary-foreground',
  },
};

const NotificationBanner = ({ type, title, message, actionLabel, actionHref, onDismiss }: NotificationBannerProps) => {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  const config = bannerConfig[type];
  const Icon = config.icon;
  const isLive = type === 'livestream-live';

  return (
    <div className={`relative ${config.bg} overflow-hidden`}>
      <div className={`absolute top-0 left-0 right-0 h-1 ${config.accentTop}`} style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`relative ${isLive ? 'animate-pulse-live' : ''}`}>
            <Icon className={`w-5 h-5 ${config.textColor}`} />
          </div>
          <div>
            <span className={`font-heading font-bold uppercase tracking-wider text-sm ${config.textColor}`}>{title}</span>
            <span className={`ml-2 text-sm ${config.textColor} opacity-80`}>{message}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {actionLabel && actionHref && (
            <a href={actionHref} className="btn-primary text-xs py-2 px-4 inline-block">
              {actionLabel}
            </a>
          )}
          {!isLive && (
            <button onClick={() => { setDismissed(true); onDismiss?.(); }} className={`${config.textColor} opacity-60 hover:opacity-100 transition-opacity`}>
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${config.accentBottom}`} style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)' }} />
    </div>
  );
};

export default NotificationBanner;
