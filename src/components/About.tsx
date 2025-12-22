import { Section } from "@/components/ui";

export function About() {
  return (
    <Section id="about" title="Sobre mí">
      <div className="space-y-4 text-[var(--color-muted)] leading-relaxed max-w-3xl">
        <p>
          Soy Backend Developer con <strong className="text-[var(--color-foreground)]">1 año de experiencia</strong> construyendo 
          sistemas que escalan. Mi enfoque está en diseñar arquitecturas limpias, 
          escribir código mantenible y resolver problemas complejos de manera elegante.
        </p>
        
        <p>
          Trabajo principalmente con <strong className="text-[var(--color-foreground)]">Node.js, Nestjs, Docker y bases de datos SQL/NoSQL</strong>. 
          Me interesa especialmente el diseño de APIs RESTful, la optimización de 
          consultas y la implementación de patrones que faciliten el crecimiento del sistema.
        </p>

        <p>
          Creo que el mejor código es el que otros pueden entender y mantener. 
          Priorizo la claridad sobre la complejidad y las soluciones pragmáticas 
          sobre las teóricamente perfectas.
        </p>
      </div>
    </Section>
  );
}
