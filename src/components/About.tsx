"use client";

import { Section } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();
  
  return (
    <Section id="about" title={t("about.title")}>
      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Terminal code block */}
        <div className="md:col-span-2">
          <div className="rounded-lg border border-[var(--color-border)] overflow-hidden bg-[var(--color-surface)]">
            {/* Terminal header */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[var(--color-border)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-2 font-mono text-[10px] text-[var(--color-muted)]">about.ts</span>
            </div>
            {/* Code content */}
            <div className="p-4 font-mono text-xs leading-6 text-[var(--color-muted)]">
              <div><span className="text-[var(--color-accent-secondary)]">const</span> <span className="text-[var(--color-foreground)]">developer</span> = {'{'}</div>
              <div className="pl-4"><span className="text-[var(--color-accent-tertiary)]">role</span>: <span className="text-[var(--color-accent-secondary)]">&quot;Backend&quot;</span>,</div>
              <div className="pl-4"><span className="text-[var(--color-accent-tertiary)]">focus</span>: [<span className="text-[var(--color-accent-secondary)]">&quot;APIs&quot;</span>, <span className="text-[var(--color-accent-secondary)]">&quot;Scale&quot;</span>],</div>
              <div className="pl-4"><span className="text-[var(--color-accent-tertiary)]">stack</span>: <span className="text-[var(--color-accent-secondary)]">&quot;NestJS&quot;</span>,</div>
              <div className="pl-4"><span className="text-[var(--color-accent-tertiary)]">status</span>: <span className="text-[var(--color-accent-tertiary)]">online</span> <span className="status-dot ml-1" />,</div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="md:col-span-3 space-y-4 text-[var(--color-muted)] leading-relaxed">
          <p dangerouslySetInnerHTML={{ __html: t("about.p1").replace(/<strong>/g, '<strong class="text-[var(--color-foreground)] font-semibold">') }} />
          <p dangerouslySetInnerHTML={{ __html: t("about.p2").replace(/<strong>/g, '<strong class="text-[var(--color-foreground)] font-semibold">') }} />
          <p>{t("about.p3")}</p>
        </div>
      </div>
    </Section>
  );
}
