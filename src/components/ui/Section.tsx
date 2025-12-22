interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <h2 className="text-2xl font-semibold mb-8 text-[var(--color-foreground)]">
        {title}
      </h2>
      {children}
    </section>
  );
}
