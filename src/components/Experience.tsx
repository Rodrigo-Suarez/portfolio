"use client";

import Image from "next/image";
import { Section, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

interface ExperienceItem {
  titleKey: string;
  companyKey: string;
  logo?: string;
  periodKey: string;
  descriptionKey: string;
  achievementKeys: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    titleKey: "experience.job1.title",
    companyKey: "experience.job1.company",
    logo: "/images/companies/municipalidad_de_la_ciudad_de_san_juan_logo.jpeg",
    periodKey: "experience.job1.period",
    descriptionKey: "experience.job1.description",
    achievementKeys: [
      "experience.job1.achievement1",
      "experience.job1.achievement2",
      "experience.job1.achievement3",
      "experience.job1.achievement4",
    ],
    technologies: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Python", "Redis", "LLMs", "Docker", "Playwright"],
  },
  {
    titleKey: "experience.job2.title",
    companyKey: "experience.job2.company",
    logo: "/images/companies/solo_preventa.jpeg",
    periodKey: "experience.job2.period",
    descriptionKey: "experience.job2.description",
    achievementKeys: [
      "experience.job2.achievement1",
      "experience.job2.achievement2",
      "experience.job2.achievement3",
    ],
    technologies: ["Xano", "REST API", "Database Design", "No-Code Tools"],
  },
  {
    titleKey: "experience.job3.title",
    companyKey: "experience.job3.company",
    logo: "/images/companies/municipalidad_de_la_ciudad_de_san_juan_logo.jpeg",
    periodKey: "experience.job3.period",
    descriptionKey: "experience.job3.description",
    achievementKeys: [
      "experience.job3.achievement1",
      "experience.job3.achievement2",
    ],
    technologies: ["JavaScript", "Python", "Git", "Agile Methodologies", "Web Development"],
  }
];

export function Experience() {
  const { t } = useLanguage();
  
  return (
    <Section id="experience" title={t("experience.title")}>
      {/* Timeline */}
      <div className="relative">
        {/* Vertical line — hidden on mobile, starts from center of first node (w-22/2 = 44px) */}
        <div className="hidden md:block absolute left-[44px] top-[44px] bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent" />
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isCurrentJob = index === 0;
            return (
              <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Mobile: logo + title row */}
                <div className="md:hidden flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${isCurrentJob ? 'bg-[var(--color-accent)]/15 ring-2 ring-[var(--color-accent)]/50 animate-pulse-glow' : 'bg-[var(--color-surface)] border border-[var(--color-border)]'}`}>
                    {exp.logo ? (
                      <div className={`relative w-9 h-9 rounded-full overflow-hidden`}>
                        <Image
                          src={exp.logo}
                          alt={`${t(exp.companyKey)} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <span className="font-mono text-sm text-[var(--color-muted)]">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className={isCurrentJob ? "text-[var(--color-accent)] text-lg" : "text-lg"}>{t(exp.titleKey)}</CardTitle>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <CardDescription className={isCurrentJob ? "text-[var(--color-foreground)] font-medium" : ""}>{t(exp.companyKey)}</CardDescription>
                      <span className={`text-xs ${isCurrentJob ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-md' : 'text-[var(--color-muted)] bg-[var(--color-surface-hover)] px-2 py-0.5 rounded-md'}`}>
                        {t(exp.periodKey)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop: timeline node */}
                <div className="hidden md:flex flex-shrink-0 relative z-10">
                  <div className={`w-22 h-22 rounded-full flex items-center justify-center ${isCurrentJob ? 'bg-[var(--color-accent)]/15 ring-2 ring-[var(--color-accent)]/50 animate-pulse-glow' : 'bg-[var(--color-surface)] border border-[var(--color-border)]'}`}>
                    {exp.logo ? (
                      <div className={`relative ${isCurrentJob ? 'w-15 h-15' : 'w-14 h-14'} rounded-full overflow-hidden`}>
                        <Image
                          src={exp.logo}
                          alt={`${t(exp.companyKey)} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <span className="font-mono text-sm text-[var(--color-muted)]">{index + 1}</span>
                    )}
                  </div>
                </div>

                {/* Card */}
                <Card 
                  className={`flex-1 ${isCurrentJob ? 'border-[var(--color-accent)]/40 bg-[var(--color-surface)] glow-border' : 'bg-[var(--color-surface)] hover:border-[var(--color-accent)]/20'} transition-all duration-300`}
                >
                  {isCurrentJob && (
                    <div className="absolute -top-3 right-4 z-10">
                      <Badge className="bg-[var(--color-accent)] text-[var(--color-background)] border-none text-xs font-bold px-3 py-1">
                        <span className="status-dot mr-2" />
                        {t("experience.currentBadge")}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="hidden md:block">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className={isCurrentJob ? "text-[var(--color-accent)]" : ""}>
                          {t(exp.titleKey)}
                        </CardTitle>
                        <CardDescription className={isCurrentJob ? "text-[var(--color-foreground)] font-medium" : ""}>
                          {t(exp.companyKey)}
                        </CardDescription>
                      </div>
                      <span className={`text-xs ${isCurrentJob ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1.5 rounded-md' : 'text-[var(--color-muted)] bg-[var(--color-surface-hover)] px-3 py-1.5 rounded-md'}`}>
                        {t(exp.periodKey)}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className={`mb-4 text-sm leading-relaxed ${isCurrentJob ? 'text-[var(--color-foreground)]' : 'text-[var(--color-muted)]'}`}>
                      {t(exp.descriptionKey)}
                    </p>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.achievementKeys.map((achievementKey, i) => (
                        <li key={i} className={`text-sm flex items-start gap-2 ${isCurrentJob ? 'text-[var(--color-foreground)]' : 'text-[var(--color-muted)]'}`}>
                          <span className="text-[var(--color-accent)] mt-1.5 flex-shrink-0">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12"><path d="M6 0l1.5 4.5L12 6l-4.5 1.5L6 12l-1.5-4.5L0 6l4.5-1.5z"/></svg>
                          </span>
                          {t(achievementKey)}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className={isCurrentJob ? "border-[var(--color-accent)]/30 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10" : ""}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
