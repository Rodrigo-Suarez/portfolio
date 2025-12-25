import Image from "next/image";
import { Section, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from "@/components/ui";

interface ExperienceItem {
  title: string;
  company: string;
  logo?: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Científico de Datos",
    company: "Municipalidad de la Ciudad de San Juan",
    logo: "/images/companies/municipalidad_de_la_ciudad_de_san_juan_logo.jpeg",
    period: "08/2025 - Presente",
    description: "Análisis y visualización de datos para apoyar la toma de decisiones en la gestión pública municipal.",
    achievements: [
      "Diseño de gráficos e informes visuales para decisiones municipales basadas en datos",
      "Análisis de bases de datos para generar estadísticas confiable",
      "Generacion de informes técnicos y documentación clara para optimizar procesos administrativos",
      "Colaboracion con múltiples áreas municipales para transformar datos complejos en información accionable",
      "Automatización básica de procesos utilizando Python",
    ],
    technologies: ["Python", "MySQL", "Docker", "Scraping", "Grafana"],
  },
  {
    title: "Desarrollador Backend",
    company: "Solo en Preventa",
    logo: "/images/companies/solo_preventa.jpeg",
    period: "12/2024 – 06/2025",
    description: "Desarrollo y mantenimiento de servicios backend para la plataforma de comercio electrónico.",
    achievements: [
      "Diseño de la base de datos, logrando una arquitectura escalable y de alto rendimiento",
      "Implementación de API RESTful",
      "Optimización de consultas y procesos críticos, mejorando tiempos de respuesta",
    ],
    technologies: ["Xano", "REST API", "Database Design", "No-Code Tools"],
  },
  {
    title: "Trainee",
    company: "Municipalidad de la Ciudad de San Juan",
    logo: "/images/companies/municipalidad_de_la_ciudad_de_san_juan_logo.jpeg",
    period: "09/2024 – 09/2024",
    description: "Pasantías no-renumeradas en la Subsecretaria de Modernización e Innovación tecnológica de la Municipalidad de la Ciudad de San Juan.",
    achievements: [
      "Aprendizaje de metodologías ágiles y mejores prácticas de desarrollo de software",
      "Participación en reuniones de equipo y sesiones de planificación de proyectos",
    ],
    technologies: ["JavaScript", "Python", "Git", "Agile Methodologies", "Web Development"],
  }
];

export function Experience() {
  return (
    <Section id="experience" title="Experiencia">
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
                    POSICIÓN ACTUAL
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
                          alt={`${exp.company} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <CardTitle className={isCurrentJob ? "text-xl md:text-2xl text-[var(--color-accent)] font-bold" : ""}>
                        {exp.title}
                      </CardTitle>
                      <CardDescription className={isCurrentJob ? "text-base font-medium" : ""}>
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold ${isCurrentJob ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1.5 rounded-lg' : 'text-[var(--color-muted)]'}`}>
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className={`mb-4 ${isCurrentJob ? 'text-[var(--color-foreground)] text-base' : 'text-[var(--color-muted)]'}`}>
                  {exp.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={`text-sm flex items-start gap-2 ${isCurrentJob ? 'text-[var(--color-foreground)]' : 'text-[var(--color-muted)]'}`}>
                      <span className={`${isCurrentJob ? 'text-[var(--color-accent)] text-xl mt-0.5' : 'text-[var(--color-accent)] mt-1'}`}>
                        •
                      </span>
                      {achievement}
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
