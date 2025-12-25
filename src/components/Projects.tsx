import { Section, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, Button } from "@/components/ui";

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "CotizaFácil",
    description: "Plataforma SaaS con gestión de cotizaciones, generación de PDFs y dashboard en tiempo real.",
    problem: "Muchos trabajadores de oficios cotizan de forma informal, desordenada y sin métodos de pago digitales.",
    solution: "Estandariza el proceso de cotización mediante plantillas, flujos guiados y estados, centralizando clientes, presupuestos y pagos en un sistema digital.",
    technologies: ["Node.js", "TypeScript", "NestJS", "PostgreSQL", "Docker", "Redis"],
    github: "",
  },
  {
    title: "LockBox",
    description: "Sistema de almacenamiento de archivos con control de versiones en Google Cloud Storage.",
    problem: "No existe una forma simple de mantener historial y reversión de cambios en archivos personales de manera segura.",
    solution: "Versiona automáticamente cada modificación, registra metadatos de cambios y permite restaurar estados anteriores sin intervención manual del usuario.",
    technologies: ["Python", "Django", "PostgreSQL", "Google Cloud Storage"],
    github: "https://github.com/Rodrigo-Suarez/Lock-Box",
  },
  {
    title: "Ticket Flow",
    description: "Gestión de eventos y tickets digitales con QR únicos e integración de pagos (Mercado Pago).",
    problem: "La gestión manual de entradas genera errores, fraude y falta de control en eventos.",
    solution: "Automatiza el ciclo completo del ticket mediante generación única, validación en tiempo real y control de acceso centralizado.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Mercado Pago"],
    github: "https://github.com/Rodrigo-Suarez/Ticket-Flow",
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Proyectos">
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:border-[var(--color-accent)]/50 transition-all duration-300">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-[var(--color-foreground)] mb-1">Problema</h4>
                  <p className="text-sm text-[var(--color-muted)]">{project.problem}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-[var(--color-foreground)] mb-1">Solución</h4>
                  <p className="text-sm text-[var(--color-muted)]">{project.solution}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <Button href={project.github} variant="ghost" size="sm" external>
                      Ver código →
                    </Button>
                  )}
                  {project.demo && (
                    <Button href={project.demo} variant="ghost" size="sm" external>
                      Demo →
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
