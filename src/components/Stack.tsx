"use client";

import { Section } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

interface StackCategory {
  nameKey: string;
  dir: string;
  items: { key?: string; value: string; ext?: string }[];
}

const stack: StackCategory[] = [
  {
    nameKey: "stack.languages",
    dir: "languages",
    items: [
      { value: "Node.js", ext: "js" },
      { value: "TypeScript", ext: "ts" },
      { value: "JavaScript", ext: "js" },
      { value: "Python", ext: "py" },
      { value: "SQL", ext: "sql" },
    ],
  },
  {
    nameKey: "stack.frameworks",
    dir: "frameworks",
    items: [
      { value: "NestJS", ext: "ts" },
      { value: "FastAPI", ext: "py" },
    ],
  },
  {
    nameKey: "stack.databases",
    dir: "databases",
    items: [
      { value: "PostgreSQL", ext: "sql" },
      { value: "MySQL", ext: "sql" },
      { value: "Redis", ext: "rdb" },
    ],
  },
  {
    nameKey: "stack.tools",
    dir: "tools",
    items: [
      { value: "Git" },
      { value: "GitHub" },
      { value: "Docker" },
      { value: "Linux" },
      { value: "Postman" },
    ],
  },
  {
    nameKey: "stack.spoken",
    dir: "spoken",
    items: [
      { key: "stack.spanish", value: "Español", ext: "es" },
      { key: "stack.english", value: "Inglés A2/B1", ext: "en" },
    ],
  },
  {
    nameKey: "stack.practices",
    dir: "practices",
    items: [
      { value: "REST APIs", ext: "api" },
      { value: "Clean Code", ext: "md" },
      { value: "Documentación", ext: "md" },
    ],
  },
];

export function Stack() {
  const { t } = useLanguage();

  return (
    <Section id="stack" title={t("stack.title")}>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border)] bg-[var(--color-background)]">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 font-mono text-xs text-[var(--color-muted)]">
              tree ~/stack — rodrigo@dev
            </span>
          </div>

          <div className="p-4 md:p-6">
            {/* Root directory */}
            <div className="font-mono text-sm">
              <div className="flex items-center gap-1.5 text-[var(--color-foreground)] mb-1">
                <span className="text-[var(--color-accent)]">📁</span>
                <span className="text-[var(--color-accent)]">~/stack</span>
              </div>

              {stack.map((category, catIndex) => {
                const isLastDir = catIndex === stack.length - 1;
                const prefix = isLastDir ? "└── " : "├── ";
                const childPrefix = isLastDir ? "    " : "│   ";

                return (
                  <div key={category.nameKey}>
                    {/* Directory entry */}
                    <div className="flex items-center gap-1 text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors">
                      <span className="text-[var(--color-muted)]">{prefix}</span>
                      <span className="text-[var(--color-accent)]">📁</span>
                      <span className="text-[var(--color-accent)]">{category.dir}/</span>
                    </div>

                    {/* Files inside directory */}
                    {category.items.map((item, itemIndex) => {
                      const isLastItem = itemIndex === category.items.length - 1;
                      const filePrefix = isLastItem ? "└── " : "├── ";
                      const ext = item.ext || "cfg";

                      return (
                        <div
                          key={item.value}
                          className="flex items-center gap-1 group hover:bg-[var(--color-accent)]/5 -mx-1 px-1 rounded transition-colors"
                        >
                          <span className="text-[var(--color-muted)]">{childPrefix}{filePrefix}</span>
                          <span className="text-[var(--color-muted)] group-hover:text-[var(--color-foreground)] transition-colors">
                            {item.key ? t(item.key) : item.value}
                          </span>
                          <span className="text-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)]/70 transition-colors">
                            .{ext}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

              {/* Closing line */}
              <div className="text-[var(--color-muted)] mt-1">
                {stack.length} directories, {stack.reduce((acc, cat) => acc + cat.items.length, 0)} files
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
