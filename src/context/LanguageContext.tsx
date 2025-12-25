"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Header
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.stack": "Stack",
    "nav.contact": "Contacto",
    "nav.contactBtn": "Contactar",

    // Hero
    "hero.role": "Backend Developer",
    "hero.description": "Diseño y desarrollo sistemas backend robustos, APIs escalables y arquitecturas que resuelven problemas de negocio reales.",
    "hero.viewProjects": "Ver proyectos",
    "hero.downloadCV": "Descargar CV",
    "hero.cvPath": "/CV-ES-Rodrigo-Suarez-Backend.pdf",

    // About
    "about.title": "Sobre mí",
    "about.p1": "Soy Backend Developer con <strong>1 año de experiencia</strong> construyendo sistemas que escalan. Mi enfoque está en diseñar arquitecturas limpias, escribir código mantenible y resolver problemas complejos de manera elegante.",
    "about.p2": "Trabajo principalmente con <strong>Node.js, Nestjs, Docker y bases de datos SQL/NoSQL</strong>. Me interesa especialmente el diseño de APIs RESTful, la optimización de consultas y la implementación de patrones que faciliten el crecimiento del sistema.",
    "about.p3": "Creo que el mejor código es el que otros pueden entender y mantener. Priorizo la claridad sobre la complejidad y las soluciones pragmáticas sobre las teóricamente perfectas.",

    // Experience
    "experience.title": "Experiencia",
    "experience.currentBadge": "POSICIÓN ACTUAL",
    "experience.job1.title": "Científico de Datos",
    "experience.job1.company": "Municipalidad de la Ciudad de San Juan",
    "experience.job1.period": "08/2025 - Presente",
    "experience.job1.description": "Análisis y visualización de datos para apoyar la toma de decisiones en la gestión pública municipal.",
    "experience.job1.achievement1": "Diseño de gráficos e informes visuales para decisiones municipales basadas en datos",
    "experience.job1.achievement2": "Análisis de bases de datos para generar estadísticas confiable",
    "experience.job1.achievement3": "Generacion de informes técnicos y documentación clara para optimizar procesos administrativos",
    "experience.job1.achievement4": "Colaboracion con múltiples áreas municipales para transformar datos complejos en información accionable",
    "experience.job1.achievement5": "Automatización básica de procesos utilizando Python",
    "experience.job2.title": "Desarrollador Backend",
    "experience.job2.company": "Solo en Preventa",
    "experience.job2.period": "12/2024 – 06/2025",
    "experience.job2.description": "Desarrollo y mantenimiento de servicios backend para la plataforma de comercio electrónico.",
    "experience.job2.achievement1": "Diseño de la base de datos, logrando una arquitectura escalable y de alto rendimiento",
    "experience.job2.achievement2": "Implementación de API RESTful",
    "experience.job2.achievement3": "Optimización de consultas y procesos críticos, mejorando tiempos de respuesta",
    "experience.job3.title": "Trainee",
    "experience.job3.company": "Municipalidad de la Ciudad de San Juan",
    "experience.job3.period": "09/2024 – 09/2024",
    "experience.job3.description": "Pasantías no-renumeradas en la Subsecretaria de Modernización e Innovación tecnológica de la Municipalidad de la Ciudad de San Juan.",
    "experience.job3.achievement1": "Aprendizaje de metodologías ágiles y mejores prácticas de desarrollo de software",
    "experience.job3.achievement2": "Participación en reuniones de equipo y sesiones de planificación de proyectos",

    // Projects
    "projects.title": "Proyectos",
    "projects.problem": "Problema",
    "projects.solution": "Solución",
    "projects.viewCode": "Ver código →",
    "projects.demo": "Demo →",
    "projects.project1.title": "CotizaFácil",
    "projects.project1.description": "Plataforma SaaS con gestión de cotizaciones, generación de PDFs y dashboard en tiempo real.",
    "projects.project1.problem": "Muchos trabajadores de oficios cotizan de forma informal, desordenada y sin métodos de pago digitales.",
    "projects.project1.solution": "Estandariza el proceso de cotización mediante plantillas, flujos guiados y estados, centralizando clientes, presupuestos y pagos en un sistema digital.",
    "projects.project2.title": "LockBox",
    "projects.project2.description": "Sistema de almacenamiento de archivos con control de versiones en Google Cloud Storage.",
    "projects.project2.problem": "No existe una forma simple de mantener historial y reversión de cambios en archivos personales de manera segura.",
    "projects.project2.solution": "Versiona automáticamente cada modificación, registra metadatos de cambios y permite restaurar estados anteriores sin intervención manual del usuario.",
    "projects.project3.title": "Ticket Flow",
    "projects.project3.description": "Gestión de eventos y tickets digitales con QR únicos e integración de pagos (Mercado Pago).",
    "projects.project3.problem": "La gestión manual de entradas genera errores, fraude y falta de control en eventos.",
    "projects.project3.solution": "Automatiza el ciclo completo del ticket mediante generación única, validación en tiempo real y control de acceso centralizado.",

    // Stack
    "stack.title": "Stack técnico",
    "stack.languages": "Lenguajes",
    "stack.frameworks": "Frameworks",
    "stack.databases": "Bases de datos",
    "stack.tools": "Herramientas",
    "stack.spoken": "Idiomas",
    "stack.practices": "Prácticas",
    "stack.spanish": "Español",
    "stack.english": "Inglés A2/B1",

    // Contact
    "contact.title": "Contacto",
    "contact.heading": "¿Tenés un proyecto en mente?",
    "contact.description": "Estoy abierto a nuevas oportunidades y colaboraciones. Si tenés un proyecto interesante o querés discutir sobre arquitectura backend, escribime.",
    "contact.email.description": "Para consultas profesionales",
    "contact.github.description": "Mirá mi código y proyectos",
    "contact.linkedin.description": "Conectemos profesionalmente",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "nav.contactBtn": "Contact",

    // Hero
    "hero.role": "Backend Developer",
    "hero.description": "I design and develop robust backend systems, scalable APIs, and architectures that solve real business problems.",
    "hero.viewProjects": "View projects",
    "hero.downloadCV": "Download CV",
    "hero.cvPath": "/CV-EN-Rodrigo-Suarez-Backend.pdf",

    // About
    "about.title": "About me",
    "about.p1": "I'm a Backend Developer with <strong>1 year of experience</strong> building systems that scale. My focus is on designing clean architectures, writing maintainable code, and solving complex problems elegantly.",
    "about.p2": "I mainly work with <strong>Node.js, NestJS, Docker, and SQL/NoSQL databases</strong>. I'm especially interested in RESTful API design, query optimization, and implementing patterns that facilitate system growth.",
    "about.p3": "I believe the best code is code that others can understand and maintain. I prioritize clarity over complexity and pragmatic solutions over theoretically perfect ones.",

    // Experience
    "experience.title": "Experience",
    "experience.currentBadge": "CURRENT POSITION",
    "experience.job1.title": "Data Scientist",
    "experience.job1.company": "Municipality of San Juan City",
    "experience.job1.period": "08/2025 - Present",
    "experience.job1.description": "Data analysis and visualization to support decision-making in municipal public management.",
    "experience.job1.achievement1": "Design of charts and visual reports for data-driven municipal decisions",
    "experience.job1.achievement2": "Database analysis to generate reliable statistics",
    "experience.job1.achievement3": "Generation of technical reports and clear documentation to optimize administrative processes",
    "experience.job1.achievement4": "Collaboration with multiple municipal areas to transform complex data into actionable information",
    "experience.job1.achievement5": "Basic process automation using Python",
    "experience.job2.title": "Backend Developer",
    "experience.job2.company": "Solo en Preventa",
    "experience.job2.period": "12/2024 – 06/2025",
    "experience.job2.description": "Development and maintenance of backend services for the e-commerce platform.",
    "experience.job2.achievement1": "Database design, achieving a scalable and high-performance architecture",
    "experience.job2.achievement2": "RESTful API implementation",
    "experience.job2.achievement3": "Optimization of queries and critical processes, improving response times",
    "experience.job3.title": "Trainee",
    "experience.job3.company": "Municipality of San Juan City",
    "experience.job3.period": "09/2024 – 09/2024",
    "experience.job3.description": "Unpaid internship at the Modernization and Technological Innovation Undersecretariat of the Municipality of San Juan City.",
    "experience.job3.achievement1": "Learning agile methodologies and software development best practices",
    "experience.job3.achievement2": "Participation in team meetings and project planning sessions",

    // Projects
    "projects.title": "Projects",
    "projects.problem": "Problem",
    "projects.solution": "Solution",
    "projects.viewCode": "View code →",
    "projects.demo": "Demo →",
    "projects.project1.title": "CotizaFácil",
    "projects.project1.description": "SaaS platform with quote management, PDF generation, and real-time dashboard.",
    "projects.project1.problem": "Many tradespeople quote informally, disorganized, and without digital payment methods.",
    "projects.project1.solution": "Standardizes the quoting process through templates, guided flows, and statuses, centralizing clients, budgets, and payments in a digital system.",
    "projects.project2.title": "LockBox",
    "projects.project2.description": "File storage system with version control in Google Cloud Storage.",
    "projects.project2.problem": "There's no simple way to maintain history and revert changes in personal files securely.",
    "projects.project2.solution": "Automatically versions each modification, records change metadata, and allows restoring previous states without user manual intervention.",
    "projects.project3.title": "Ticket Flow",
    "projects.project3.description": "Event and digital ticket management with unique QR codes and payment integration (Mercado Pago).",
    "projects.project3.problem": "Manual ticket management generates errors, fraud, and lack of control at events.",
    "projects.project3.solution": "Automates the complete ticket cycle through unique generation, real-time validation, and centralized access control.",

    // Stack
    "stack.title": "Tech Stack",
    "stack.languages": "Programming Languages",
    "stack.frameworks": "Frameworks",
    "stack.databases": "Databases",
    "stack.tools": "Tools",
    "stack.spoken": "Spoken Languages",
    "stack.practices": "Practices",
    "stack.spanish": "Spanish",
    "stack.english": "English A2/B1",

    // Contact
    "contact.title": "Contact",
    "contact.heading": "Have a project in mind?",
    "contact.description": "I'm open to new opportunities and collaborations. If you have an interesting project or want to discuss backend architecture, reach out.",
    "contact.email.description": "For professional inquiries",
    "contact.github.description": "Check my code and projects",
    "contact.linkedin.description": "Let's connect professionally",

    // Footer
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang && (savedLang === "es" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
