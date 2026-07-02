"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="px-2 py-1 rounded-lg text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)] transition-colors"
      aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}
