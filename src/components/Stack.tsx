"use client";

import { Section, Badge } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

interface StackCategory {
  nameKey: string;
  items: { key?: string; value: string }[];
}

const stack: StackCategory[] = [
  {
    nameKey: "stack.languages",
    items: [
      { value: "Node.js" },
      { value: "TypeScript" },
      { value: "JavaScript" },
      { value: "Python" },
      { value: "SQL" },
    ],
  },
  {
    nameKey: "stack.frameworks",
    items: [
      { value: "NestJS" },
      { value: "FastAPI" },
    ],
  },
  {
    nameKey: "stack.databases",
    items: [
      { value: "PostgreSQL" },
      { value: "MySQL" },
      { value: "Redis" },
    ],
  },
  {
    nameKey: "stack.tools",
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
    items: [
      { key: "stack.spanish", value: "Español" },
      { key: "stack.english", value: "Inglés A2/B1" },
    ],
  },
  {
    nameKey: "stack.practices",
    items: [
      { value: "REST APIs" },
      { value: "Clean Code" },
      { value: "Documentación" },
    ],
  },
];

export function Stack() {
  const { t } = useLanguage();
  
  return (
    <Section id="stack" title={t("stack.title")}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stack.map((category) => (
          <div key={category.nameKey}>
            <h3 className="text-sm font-medium text-[var(--color-foreground)] mb-3">
              {t(category.nameKey)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Badge key={item.value} variant="outline">
                  {item.key ? t(item.key) : item.value}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
