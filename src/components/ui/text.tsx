interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function SubHeader({ children, className }: TextProps) {
  return (
    <h3
      className={`z-10 font-gothic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-slate-950 to-slate-800 uppercase ${className}`}
    >
      {children}
    </h3>
  );
}

export function SubHeaderLight({ children, className }: TextProps) {
  return (
    <div
      className={`z-10 font-gothic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-300 uppercase ${className}`}
    >
      {children}
    </div>
  );
}
