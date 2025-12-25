"use client";

import { Section, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, Button } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
  titleKey: string;
  descriptionKey: string;
  problemKey: string;
  solutionKey: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    titleKey: "projects.project1.title",
    descriptionKey: "projects.project1.description",
    problemKey: "projects.project1.problem",
    solutionKey: "projects.project1.solution",
    technologies: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "Docker", "Redis"],
    github: "",
  },
  {
    titleKey: "projects.project2.title",
    descriptionKey: "projects.project2.description",
    problemKey: "projects.project2.problem",
    solutionKey: "projects.project2.solution",
    technologies: ["Python", "Django", "PostgreSQL", "Google Cloud Storage"],
    github: "https://github.com/Rodrigo-Suarez/Lock-Box",
  },
  {
    titleKey: "projects.project3.title",
    descriptionKey: "projects.project3.description",
    problemKey: "projects.project3.problem",
    solutionKey: "projects.project3.solution",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Mercado Pago"],
    github: "https://github.com/Rodrigo-Suarez/Ticket-Flow",
  },
];

export function Projects() {
  const { t } = useLanguage();
  
  return (
    <Section id="projects" title={t("projects.title")}>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:border-[var(--color-accent)]/50 transition-all duration-300">
            <CardHeader>
              <CardTitle>{t(project.titleKey)}</CardTitle>
              <CardDescription>{t(project.descriptionKey)}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-[var(--color-foreground)] mb-1">{t("projects.problem")}</h4>
                  <p className="text-sm text-[var(--color-muted)]">{t(project.problemKey)}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-[var(--color-foreground)] mb-1">{t("projects.solution")}</h4>
                  <p className="text-sm text-[var(--color-muted)]">{t(project.solutionKey)}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <Button href={project.github} variant="ghost" size="sm" external>
                      {t("projects.viewCode")}
                    </Button>
                  )}
                  {project.demo && (
                    <Button href={project.demo} variant="ghost" size="sm" external>
                      {t("projects.demo")}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
