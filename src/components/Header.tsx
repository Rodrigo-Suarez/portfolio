"use client";

import { useState, useEffect, useRef } from "react";
import { Button, ThemeToggle, LanguageToggle } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [typedItems, setTypedItems] = useState<string[]>([]);
  const typingRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  
  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.stack"), href: "#stack" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
    }
    setMobileOpen(false);
  };

  // Typing animation for mobile menu
  useEffect(() => {
    // Clear previous timers
    typingRef.current.forEach(clearTimeout);
    typingRef.current = [];

    if (!mobileOpen) {
      setTypedItems([]);
      return;
    }

    // Type each item one after another
    const timers: ReturnType<typeof setTimeout>[] = [];
    let totalDelay = 80; // initial delay after prompt

    navItems.forEach((item, itemIndex) => {
      const text = item.label;
      // For each character in the label
      for (let charIndex = 0; charIndex <= text.length; charIndex++) {
        timers.push(
          setTimeout(() => {
            setTypedItems(prev => {
              const next = [...prev];
              next[itemIndex] = text.slice(0, charIndex);
              return next;
            });
          }, totalDelay)
        );
        totalDelay += 18; // 18ms per character
      }
      totalDelay += 30; // small pause between items
    });

    typingRef.current = timers;
    return () => timers.forEach(clearTimeout);
  }, [mobileOpen, t("nav.about")]); // re-run when menu opens or language changes

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
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
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
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden sm:inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 bg-[var(--color-accent)] text-[var(--color-background)] hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_20px_var(--color-glow)] shadow-[0_0_8px_var(--color-glow)] px-3 py-1.5 text-xs btn-glitch"
          >
            {t("nav.contactBtn")}
          </button>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-all"
            aria-label="Menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-[5px]">
              <span className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-[2px] bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-md">
          {/* Terminal prompt line */}
          <div className="px-6 pt-4 pb-2 flex items-center gap-2">
            <span className="font-mono text-xs text-[var(--color-accent)]">$</span>
            <span className="font-mono text-xs text-[var(--color-muted)]">cd ~/nav</span>
            <span className="font-mono text-xs text-[var(--color-accent)] animate-blink">▌</span>
          </div>
          <ul className="px-6 pb-4 space-y-1">
            {navItems.map((item, i) => {
              const typed = typedItems[i] || "";
              const isTyping = typed.length < item.label.length;
              const isNextToType = i > 0
                ? (typedItems[i - 1] || "").length === navItems[i - 1].label.length && typed.length === 0
                : typed.length === 0 && typedItems.length === 0;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-mono text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)] rounded-lg transition-all"
                  >
                    <span className="text-[var(--color-accent)] opacity-50 text-xs">{String(i + 1).padStart(2, '0')}</span>
                    <span>{typed}</span>
                    {isTyping && <span className="text-[var(--color-accent)] animate-blink">▌</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
