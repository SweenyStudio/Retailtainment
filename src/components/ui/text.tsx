interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function SubHeader({ children, className }: TextProps) {
  return (
    <div
      className={`z-40 font-gothic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-800 uppercase ${className}`}
    >
      {children}
    </div>
  );
}

export function SubHeaderLight({ children, className }: TextProps) {
  return (
    <div
      className={`z-40 font-gothic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300 uppercase ${className}`}
    >
      {children}
    </div>
  );
}
