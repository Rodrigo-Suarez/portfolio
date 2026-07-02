interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-sm text-[var(--color-accent)]">//</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] tracking-tight">
            {title}
          </h2>
        </div>
        <div className="w-24 h-[2px] bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-full" />
      </div>
      {children}
    </section>
  );
}
