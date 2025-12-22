interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors";
  
  const variants = {
    default: "bg-[var(--color-border)] text-[var(--color-foreground)]",
    outline: "border border-[var(--color-border)] text-[var(--color-muted)]",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </span>
  );
}
