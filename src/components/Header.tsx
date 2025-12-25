"use client";

import { Button, ThemeToggle, LanguageToggle } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { t } = useLanguage();
  
  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.stack"), href: "#stack" },
    { label: t("nav.contact"), href: "#contact" },
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

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button href="#contact" size="sm">
            {t("nav.contactBtn")}
          </Button>
        </div>
      </nav>
    </header>
  );
}
