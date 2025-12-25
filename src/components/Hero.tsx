"use client";

import Image from "next/image";
import { Button, GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rodrigo-suarez",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rodrigo-suarez-85225a318",
    icon: LinkedInIcon,
  },
  {
    name: "Email",
    href: "mailto:rodrigo.facultad.unsj@email.com",
    icon: EmailIcon,
  },
];

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 md:py-28">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Contenido */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <p className="text-[var(--color-accent)] font-medium">
              {t("hero.role")}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] tracking-tight">
              Rodrigo Suarez
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-[var(--color-muted)] max-w-2xl leading-relaxed">
            {t("hero.description")}
          </p>

          {/* Links de redes sociales */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2.5 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-border)] transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="#projects" size="lg">
              {t("hero.viewProjects")}
            </Button>
            <Button href={t("hero.cvPath")} variant="secondary" size="lg" external>
              <DownloadIcon className="w-4 h-4 mr-2" />
              {t("hero.downloadCV")}
            </Button>
          </div>
        </div>

        {/* Imagen de perfil */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-[var(--color-border)]">
            <Image
              src="/images/profile.jpg"
              alt="Rodrigo Suárez"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
