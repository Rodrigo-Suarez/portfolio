"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-[var(--color-accent)]">~</span>
          <p className="text-xs text-[var(--color-muted)]">
            © {currentYear} rodrigo.suarez
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/rodrigo-suarez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-suarez-85225a318"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
          >
            linkedin
          </a>
        </div>

        <p className="text-[10px] text-[var(--color-muted)] opacity-50">
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
