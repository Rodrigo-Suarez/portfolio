import { Section, Button, GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/ui";

const contactMethods = [
  {
    name: "Email",
    value: "rodrigo.facultad.unsj@email.com",
    href: "mailto:rodrigo.facultad.unsj@email.com",
    icon: EmailIcon,
    description: "Para consultas profesionales",
  },
  {
    name: "GitHub",
    value: "github.com/rodrigo-suarez",
    href: "https://github.com/rodrigo-suarez",
    icon: GitHubIcon,
    description: "Mirá mi código y proyectos",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/rodrigo-suarez",
    href: "https://www.linkedin.com/in/rodrigo-suarez-85225a318",
    icon: LinkedInIcon,
    description: "Conectemos profesionalmente",
  },
];

export function Contact() {
  return (
    <Section id="contact" title="Contacto">
      {/* Card destacada */}
      <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 rounded-2xl p-8 md:p-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)] mb-4">
            ¿Tenés un proyecto en mente?
          </h3>
          <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed max-w-2xl mx-auto">
            Estoy abierto a nuevas oportunidades y colaboraciones. Si tenés un proyecto 
            interesante o querés discutir sobre arquitectura backend, escribime.
          </p>

          {/* Grid de métodos de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            {contactMethods.map((method) => (
              <a
                key={method.name}
                href={method.href}
                target={method.name !== "Email" ? "_blank" : undefined}
                rel={method.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center p-6 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                  <method.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <span className="font-medium text-[var(--color-foreground)] mb-1">
                  {method.name}
                </span>
                <span className="text-xs text-[var(--color-muted)] text-center">
                  {method.description}
                </span>
              </a>
            ))}
          </div>  
        </div>
      </div>
    </Section>
  );
}
