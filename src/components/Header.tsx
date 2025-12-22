import { Button } from "@/components/ui";

export function Header() {
  const navItems = [
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold text-lg text-[var(--color-foreground)]">
          RS
        </a>
        
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#contact" size="sm">
          Contactar
        </Button>
      </nav>
    </header>
  );
}
