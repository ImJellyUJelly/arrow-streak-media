import { ReactNode } from 'react';

interface DiagonalCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: 'accent' | 'highlight' | 'primary';
  accentPosition?: 'top-right' | 'bottom-left' | 'both';
}

const accentColorMap = {
  accent: 'bg-accent',
  highlight: 'bg-highlight',
  primary: 'bg-primary',
};

const DiagonalCard = ({ children, className = '', accentColor = 'accent', accentPosition = 'top-right' }: DiagonalCardProps) => {
  const colorClass = accentColorMap[accentColor];

  return (
    <div className={`relative card-border card-hover ${className}`}>
      {(accentPosition === 'top-right' || accentPosition === 'both') && (
        <div className={`card-diagonal-accent -top-2 -right-2 ${colorClass}`} />
      )}
      {(accentPosition === 'bottom-left' || accentPosition === 'both') && (
        <div className={`card-diagonal-accent -bottom-2 -left-2 ${colorClass}`} />
      )}
      {children}
    </div>
  );
};

export default DiagonalCard;
