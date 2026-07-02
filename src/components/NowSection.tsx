"use client";

import { Section } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

interface NowItem {
  icon: string;
  textKey: string;
  tagKey: string;
}

const nowItems: NowItem[] = [
  { icon: "▸", textKey: "now.learning", tagKey: "now.learningTag" },
  { icon: "▸", textKey: "now.reading", tagKey: "now.readingTag" },
  { icon: "▸", textKey: "now.working", tagKey: "now.workingTag" },
  { icon: "▸", textKey: "now.exploring", tagKey: "now.exploringTag" },
];

export function NowSection() {
  const { t } = useLanguage();

  return (
    <Section id="now" title={t("now.title")}>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-background)]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 font-mono text-xs text-[var(--color-muted)]">
              systemctl status rodrigo.service
            </span>
          </div>

          <div className="p-4 md:p-6 space-y-3">
            {/* Service header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-sm text-[var(--color-accent)]">●</span>
              <span className="font-mono text-sm text-[var(--color-foreground)]">rodrigo.service</span>
              <span className="font-mono text-xs text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                {t("now.active")}
              </span>
            </div>

            {/* Status lines */}
            <div className="space-y-2 pl-4 border-l-2 border-[var(--color-accent)]/20">
              {nowItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2 group">
                  <span className="font-mono text-sm text-[var(--color-accent)] shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-[var(--color-foreground)]">{t(item.textKey)}</span>
                    <span className="ml-2 font-mono text-[10px] text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-1.5 py-0.5 rounded">
                      {t(item.tagKey)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-3 mt-3 border-t border-[var(--color-border)]/50">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[var(--color-muted)]">{t("now.since")}</span>
                <span className="font-mono text-xs text-[var(--color-accent)]">2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
