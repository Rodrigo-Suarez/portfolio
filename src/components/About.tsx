"use client";

import { Section } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
  return (
    <Section id="about" title={t("about.title")}>
      <div className="space-y-4 text-[var(--color-muted)] leading-relaxed max-w-3xl">
        <p dangerouslySetInnerHTML={{ __html: t("about.p1").replace(/<strong>/g, '<strong class="text-[var(--color-foreground)]">') }} />
        <p dangerouslySetInnerHTML={{ __html: t("about.p2").replace(/<strong>/g, '<strong class="text-[var(--color-foreground)]">') }} />
        <p>{t("about.p3")}</p>
      </div>
    </Section>
  );
}
