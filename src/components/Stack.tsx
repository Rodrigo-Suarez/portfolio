import { Section, Badge } from "@/components/ui";

interface StackCategory {
  name: string;
  items: string[];
}

const stack: StackCategory[] = [
  {
    name: "Lenguajes",
    items: ["Node.js", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    name: "Frameworks",
    items: ["NestJS", "FastAPI"],
  },
  {
    name: "Bases de datos",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    name: "Herramientas",
    items: ["Git", "GitHub", "Docker", "Linux", "Postman"],
  },
  {
    name: "Idiomas",
    items: ["Español", "Inglés A2/B1"],
  },
  {
    name: "Prácticas",
    items: ["REST APIs", "Clean Code", "Documentación"],
  },
];

export function Stack() {
  return (
    <Section id="stack" title="Stack técnico">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stack.map((category) => (
          <div key={category.name}>
            <h3 className="text-sm font-medium text-[var(--color-foreground)] mb-3">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Badge key={item} variant="outline">{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
