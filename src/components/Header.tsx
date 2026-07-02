"use client";

import { useState } from "react";
import { Button, ThemeToggle, LanguageToggle } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.stack"), href: "#stack" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo — terminal style */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-[var(--color-accent)] font-mono text-sm">~</span>
          <span className="font-mono font-bold text-lg text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
            rsuarez
          </span>
          <span className="animate-blink text-[var(--color-accent)] font-mono">_</span>
        </a>
        
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 py-2 text-sm font-mono text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors relative group"
              >
                <span className="text-[var(--color-accent)] opacity-50 mr-1 text-xs">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[var(--color-accent)] group-hover:w-3/4 transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button href="#contact" size="sm" className="hidden sm:inline-flex btn-glitch">
            {t("nav.contactBtn")}
          </Button>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-md">
          <ul className="px-6 py-4 space-y-1">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-mono text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)] rounded-lg transition-all"
                >
                  <span className="text-[var(--color-accent)] opacity-50 text-xs">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
