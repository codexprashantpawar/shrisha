'use client';

export function AccentCircle({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute w-16 h-16 rounded-full bg-primary opacity-80 ${className}`} />
  );
}

export function VerticalAccentLine({ className = '' }: { className?: string }) {
  return <div className={`absolute w-1 bg-gradient-to-b from-primary via-primary to-transparent ${className}`} />;
}

export function RotatedText({ 
  text, 
  className = '' 
}: { 
  text: string; 
  className?: string;
}) {
  return (
    <div className={`absolute text-text-muted text-xs tracking-widest font-semibold transform -rotate-90 origin-center whitespace-nowrap ${className}`}>
      {text}
    </div>
  );
}
