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
    demo: "https://cotizax.com",
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
          <Card 
            key={index} 
            className="group bg-[var(--color-surface)] hover:border-[var(--color-accent)]/30 transition-all duration-500 relative overflow-hidden"
          >
            {/* Accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-tertiary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-xs text-[var(--color-accent)] opacity-60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <CardTitle>{t(project.titleKey)}</CardTitle>
                  </div>
                  <CardDescription>{t(project.descriptionKey)}</CardDescription>
                </div>
                {/* Server status indicator */}
                <div className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--color-accent-tertiary)]/10 border border-[var(--color-accent-tertiary)]/20">
                  <span className="status-dot" style={{ width: 6, height: 6 }} />
                  <span className="font-mono text-[10px] text-[var(--color-accent-tertiary)]">live</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-[var(--color-surface-hover)] border border-[var(--color-border)]">
                    <h4 className="text-xs text-[var(--color-accent-tertiary)] mb-1.5 uppercase tracking-wider">
                      {t("projects.problem")}
                    </h4>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{t(project.problemKey)}</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-[var(--color-surface-hover)] border border-[var(--color-border)]">
                    <h4 className="text-xs text-[var(--color-accent-tertiary)] mb-1.5 uppercase tracking-wider">
                      {t("projects.solution")}
                    </h4>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{t(project.solutionKey)}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-1">
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
