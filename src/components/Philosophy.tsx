"use client";

import { Section } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

interface Principle {
  number: string;
  textKey: string;
  detailKey: string;
}

const principles: Principle[] = [
  { number: "01", textKey: "philosophy.p1.text", detailKey: "philosophy.p1.detail" },
  { number: "02", textKey: "philosophy.p2.text", detailKey: "philosophy.p2.detail" },
  { number: "03", textKey: "philosophy.p3.text", detailKey: "philosophy.p3.detail" },
];

export function Philosophy() {
  const { t } = useLanguage();

  return (
    <Section id="philosophy" title={t("philosophy.title")}>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-background)]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 font-mono text-xs text-[var(--color-muted)]">
              cat ~/manifesto.md
            </span>
          </div>

          <div className="p-4 md:p-6">
            {/* Manifesto header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--color-border)]/50">
              <span className="font-mono text-sm text-[var(--color-accent)]">#</span>
              <span className="font-mono text-sm text-[var(--color-foreground)]">{t("philosophy.header")}</span>
            </div>

            {/* Principles */}
            <div className="space-y-4">
              {principles.map((p, i) => (
                <div
                  key={i}
                  className="group relative p-4 rounded-md border border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-accent)]/30 hover:shadow-[0_0_16px_var(--color-glow)] transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    {/* Number */}
                    <span className="font-mono text-xs text-[var(--color-accent)]/50 group-hover:text-[var(--color-accent)] transition-colors shrink-0 pt-0.5">
                      {p.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      {/* Principle text */}
                      <div className="font-mono text-sm md:text-base text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
                        <span className="text-[var(--color-accent)] mr-1">&gt;</span>
                        {t(p.textKey)}
                      </div>
                      {/* Detail */}
                      <div className="font-mono text-xs text-[var(--color-muted)] mt-2 pl-4 border-l border-[var(--color-border)]/50">
                        {t(p.detailKey)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-4 pt-3 border-t border-[var(--color-border)]/50 flex items-center gap-2">
              <span className="font-mono text-xs text-[var(--color-muted)]">---</span>
              <span className="font-mono text-xs text-[var(--color-accent)]">EOF</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
