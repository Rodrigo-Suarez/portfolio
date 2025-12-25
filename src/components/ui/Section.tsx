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
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-3">
          {title}
        </h2>
        <div className="w-32 sm:w-40 md:w-150 h-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent rounded-full"></div>
      </div>
      {children}
    </section>
  );
}
