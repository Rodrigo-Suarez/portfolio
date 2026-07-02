interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium transition-colors";
  
  const variants = {
    default: "bg-[var(--color-surface-hover)] text-[var(--color-foreground)] border border-[var(--color-border)]",
    outline: "border border-[var(--color-border)] text-[var(--color-muted)]",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
