import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300";
  
  const variants = {
    primary: "bg-[var(--color-accent)] text-[var(--color-background)] hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_20px_var(--color-glow)] shadow-[0_0_8px_var(--color-glow)]",
    secondary: "bg-[var(--color-surface)] text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]",
    ghost: "text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-sm",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}
