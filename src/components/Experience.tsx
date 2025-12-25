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
      "experience.job1.achievement5",
    ],
    technologies: ["Python", "MySQL", "Docker", "Scraping", "Grafana"],
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
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const isCurrentJob = index === 0;
          return (
            <Card 
              key={index}
              className={isCurrentJob ? "relative border-[3px] border-[var(--color-accent)] bg-gradient-to-br from-[var(--color-accent)]/10 via-[var(--color-accent)]/5 to-transparent shadow-2xl shadow-[var(--color-accent)]/20 hover:shadow-[var(--color-accent)]/30 transition-all duration-300" : "hover:border-[var(--color-border)] transition-colors"}
            >
              {/* Badge flotante para trabajo actual */}
              {isCurrentJob && (
                <div className="absolute -top-3 -right-3 z-10">
                  <Badge className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] text-white border-none shadow-lg shadow-[var(--color-accent)]/40 px-4 py-2 text-sm font-bold">
                    {t("experience.currentBadge")}
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Logo de empresa */}
                    {exp.logo && (
                      <div className={`relative ${isCurrentJob ? 'w-16 h-16' : 'w-12 h-12'} rounded-xl overflow-hidden ${isCurrentJob ? 'ring-2 ring-[var(--color-accent)]/50 shadow-lg' : 'bg-[var(--color-border)]'} flex-shrink-0 transition-all`}>
                        <Image
                          src={exp.logo}
                          alt={`${t(exp.companyKey)} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <CardTitle className={isCurrentJob ? "text-xl md:text-2xl text-[var(--color-accent)] font-bold" : ""}>
                        {t(exp.titleKey)}
                      </CardTitle>
                      <CardDescription className={isCurrentJob ? "text-base font-medium" : ""}>
                        {t(exp.companyKey)}
                      </CardDescription>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold ${isCurrentJob ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1.5 rounded-lg' : 'text-[var(--color-muted)]'}`}>
                    {t(exp.periodKey)}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className={`mb-4 ${isCurrentJob ? 'text-[var(--color-foreground)] text-base' : 'text-[var(--color-muted)]'}`}>
                  {t(exp.descriptionKey)}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {exp.achievementKeys.map((achievementKey, i) => (
                    <li key={i} className={`text-sm flex items-start gap-2 ${isCurrentJob ? 'text-[var(--color-foreground)]' : 'text-[var(--color-muted)]'}`}>
                      <span className={`${isCurrentJob ? 'text-[var(--color-accent)] text-xl mt-0.5' : 'text-[var(--color-accent)] mt-1'}`}>
                        •
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
                      className={isCurrentJob ? "border-[var(--color-accent)] text-[var(--color-accent)] font-semibold hover:bg-[var(--color-accent)]/10 transition-colors" : ""}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
