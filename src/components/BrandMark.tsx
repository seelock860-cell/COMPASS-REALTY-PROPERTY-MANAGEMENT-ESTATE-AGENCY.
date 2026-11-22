interface BrandMarkProps {
  className?: string;
  tone?: 'dark' | 'light';
}

export function BrandMark({ className = 'h-7 w-7', tone = 'dark' }: BrandMarkProps) {
  const ringColor = tone === 'light' ? '#FFFFFF' : '#0B192C';
  const southNeedle = tone === 'light' ? '#CBD5E1' : '#334155';

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="17.5" stroke="#C8A253" strokeWidth="1.75" />
      <circle cx="20" cy="20" r="13.5" stroke={ringColor} strokeOpacity="0.22" strokeWidth="1" />
      <polygon points="20,6.5 24.5,20 20,17.2 15.5,20" fill="#C8A253" />
      <polygon points="20,33.5 15.5,20 20,22.8 24.5,20" fill={southNeedle} />
      <circle cx="20" cy="20" r="2" fill="#C8A253" />
    </svg>
  );
}
