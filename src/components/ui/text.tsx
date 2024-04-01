interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function SubHeader({ children, className }: TextProps) {
  return (
    <h3
      className={`z-10 font-gothic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-800 uppercase ${className}`}
    >
      {children}
    </h3>
  );
}

export function SubHeaderLight({ children, className }: TextProps) {
  return (
    <h3
      className={`z-10 font-gothic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-zinc-100 to-zinc-300 uppercase ${className}`}
    >
      {children}
    </h3>
  );
}
