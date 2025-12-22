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
    title: "Backend Developer Senior",
    company: "Empresa Actual",
    logo: "/images/companies/empresa-actual.png",
    period: "2022 - Presente",
    description: "Liderazgo técnico del equipo backend. Diseño e implementación de microservicios para el core del producto.",
    achievements: [
      "Rediseñé el sistema de autenticación reduciendo latencia en 40%",
      "Implementé pipeline de CI/CD que redujo el tiempo de deploy de 2h a 15min",
      "Diseñé arquitectura de eventos para comunicación entre servicios",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    title: "Backend Developer",
    company: "Empresa Anterior",
    logo: "/images/companies/empresa-anterior.png",
    period: "2020 - 2022",
    description: "Desarrollo y mantenimiento de APIs RESTful para aplicaciones de e-commerce.",
    achievements: [
      "Desarrollé sistema de inventario en tiempo real para +50k productos",
      "Optimicé queries críticas reduciendo tiempo de respuesta de 3s a 200ms",
      "Integré pasarelas de pago procesando +$1M mensuales",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "RabbitMQ", "Docker"],
  },
  {
    title: "Desarrollador Full Stack Jr",
    company: "Primera Empresa",
    logo: "/images/companies/primera-empresa.png",
    period: "2018 - 2020",
    description: "Desarrollo de aplicaciones web internas y automatización de procesos.",
    achievements: [
      "Automaticé reportes manuales ahorrando 20h semanales al equipo",
      "Desarrollé dashboard interno usado por +100 empleados",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "JavaScript"],
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Experiencia">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Logo de empresa */}
                  {exp.logo && (
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-[var(--color-border)] flex-shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                </div>
                <span className="text-sm text-[var(--color-muted)]">{exp.period}</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-[var(--color-muted)] mb-4">{exp.description}</p>
              
              <ul className="space-y-2 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm text-[var(--color-muted)] flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
