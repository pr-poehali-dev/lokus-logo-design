const BrandIcons = () => {
  const icons = [
    {
      name: 'Проектирование',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2" />
          <line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: 'Строительство',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="12" y="20" width="12" height="20" fill="currentColor" />
          <rect x="28" y="12" width="12" height="28" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Инфраструктура',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="24" cy="24" r="3" fill="currentColor" />
          <line x1="24" y1="8" x2="24" y2="16" stroke="currentColor" strokeWidth="2" />
          <line x1="24" y1="32" x2="24" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="24" x2="16" y2="24" stroke="currentColor" strokeWidth="2" />
          <line x1="32" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: 'Точность',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <line x1="24" y1="8" x2="24" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="4" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Локация',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8C18.48 8 14 12.48 14 18C14 26 24 40 24 40C24 40 34 26 34 18C34 12.48 29.52 8 24 8Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="24" cy="18" r="4" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Качество',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8L32 16L24 24L16 16L24 8Z" fill="currentColor" />
          <path d="M8 24L16 32L24 24L16 16L8 24Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M40 24L32 32L24 24L32 16L40 24Z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {icons.map((icon, index) => (
        <div key={index} className="flex flex-col items-center gap-3">
          <div className="text-primary transition-transform hover:scale-110 duration-300">
            {icon.svg}
          </div>
          <span className="text-sm font-medium text-muted-foreground">{icon.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BrandIcons;
