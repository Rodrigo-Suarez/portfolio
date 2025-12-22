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
    title: "API Gateway para Microservicios",
    description: "Gateway centralizado para gestionar autenticación, rate limiting y routing de +10 microservicios.",
    problem: "Cada servicio manejaba su propia autenticación, generando inconsistencias y duplicación de lógica.",
    solution: "Implementé un API Gateway con Kong que centraliza JWT validation, rate limiting por usuario y logging unificado.",
    technologies: ["Python", "Kong", "Redis", "PostgreSQL", "Docker"],
    github: "https://github.com/tu-usuario/api-gateway",
  },
  {
    title: "Sistema de Procesamiento de Pagos",
    description: "Pipeline asíncrono para procesar transacciones con reintentos automáticos y conciliación.",
    problem: "El sistema existente perdía transacciones durante picos de tráfico y no tenía trazabilidad.",
    solution: "Diseñé arquitectura event-driven con RabbitMQ, dead letter queues para reintentos y dashboard de monitoreo.",
    technologies: ["Node.js", "RabbitMQ", "MongoDB", "Stripe API", "Grafana"],
    github: "https://github.com/tu-usuario/payment-processor",
  },
  {
    title: "CLI para Migración de Datos",
    description: "Herramienta de línea de comandos para migrar datos entre diferentes bases de datos con validación.",
    problem: "Las migraciones manuales tomaban días y eran propensas a errores de integridad.",
    solution: "Desarrollé CLI con validaciones pre/post migración, rollback automático y reportes de discrepancias.",
    technologies: ["Python", "Click", "SQLAlchemy", "PostgreSQL", "MySQL"],
    github: "https://github.com/tu-usuario/data-migrator",
  },
];

export function Projects() {
  return (
    <Section id="projects" title="Proyectos">
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
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
