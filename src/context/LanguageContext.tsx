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
    "experience.job1.title": "Desarrollador Backend",
    "experience.job1.company": "Municipalidad de la Ciudad de San Juan",
    "experience.job1.period": "08/2025 - Presente",
    "experience.job1.description": "Backend developer especializado en arquitectura distribuida, integración de LLMs y pipelines de datos a escala. Diseño sistemas que combinan APIs de alto rendimiento, procesamiento asíncrono e inteligencia artificial para transformar datos no estructurados en información accionable en tiempo real.",
    "experience.job1.achievement1": "Arquitecturas distribuidas con NestJS + Python, 100% containerizadas con Docker",
    "experience.job1.achievement2": "APIs REST con análisis complejo, estrategias híbridas SQL + LLM y caché inteligente",
    "experience.job1.achievement3": "Pipelines de datos asíncronos con HTTP/2, multiprocessing, Redis y daemons de procesamiento continuo",
    "experience.job1.achievement4": "Scraping de redes sociales con browser automation, patrones anti-detección y arquitectura extensible por plataforma",
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
    "projects.demo": "Sitio →",
    "projects.project1.title": "CotizaX",
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
    "stack.english": "Inglés B1",

    // Contact
    "contact.title": "Contacto",
    "contact.heading": "¿Tenés un proyecto en mente?",
    "contact.description": "Estoy abierto a nuevas oportunidades y colaboraciones. Si tenés un proyecto interesante o querés discutir sobre arquitectura backend, escribime.",
    "contact.email.description": "Para consultas profesionales",
    "contact.github.description": "Mirá mi código y proyectos",
    "contact.linkedin.description": "Conectemos profesionalmente",
    "contact.chat.client": "cliente",
    "contact.chat.me": "rodrigo",
    "contact.chat.input": "escribí un mensaje...",
    "contact.chat.m1": "Hola, estamos buscando un backend developer para un proyecto nuevo...",
    "contact.chat.m2": "¡Hola! Contame más, ¿qué tipo de sistema necesitan?",
    "contact.chat.m3": "Necesitamos una API escalable con procesamiento en tiempo real y autenticación. ¿Tenés experiencia con eso?",
    "contact.chat.m4": "Sí, justo vengo de trabajar en un sistema distribuido con NestJS, Redis y pipelines asíncronos. ¿Cuál es el timeline?",
    "contact.chat.m5": "Genial. Arrancamos en 2 semanas. ¿Podemos agendar una call para definir la arquitectura?",
    "contact.chat.m6": "Perfecto, mandame un mail o escribime por LinkedIn y coordinamos. ¡Hablemos!",
    "contact.chat.m7": ";)",

    // Stats
    "stats.title": "Dashboard",
    "stats.header": "glances — system metrics",
    "stats.processes.value": "12+",
    "stats.processes.label": "Procesos optimizados",
    "stats.uptime.value": "99.9%",
    "stats.uptime.label": "Uptime",
    "stats.loc.value": "15k+",
    "stats.loc.label": "Lines of code",
    "stats.docker.value": "always",
    "stats.docker.label": "Docker containers",
    "stats.status": "All systems operational",
    "stats.refreshed": "Last refresh: just now",

    // Now
    "now.title": "Ahora mismo",
    "now.active": "active (running)",
    "now.learning": "Integración de pasarelas de pago y suscripciones con Mercado Pago",
    "now.learningTag": "building",
    "now.reading": "Scraping automatizado de redes sociales con browser automation",
    "now.readingTag": "automating",
    "now.working": "Implementación de LLMs en pipelines de procesamiento",
    "now.workingTag": "implementing",
    "now.exploring": "Administración de servidores y despliegue con Docker",
    "now.exploringTag": "managing",
    "now.since": "Active since",

    // Philosophy
    "philosophy.title": "Filosofía",
    "philosophy.header": "development manifesto",
    "philosophy.p1.text": "Clean code > Clever code",
    "philosophy.p1.detail": "El código se lee más veces de las que se escribe. La claridad siempre gana.",
    "philosophy.p2.text": "Ship > Perfect",
    "philosophy.p2.detail": "Entregar valor temprano y iterar. La perfección es el enemigo del despliegue.",
    "philosophy.p3.text": "Automate > Repeat",
    "philosophy.p3.detail": "Si lo hacés dos veces manualmente, automatizalo la tercera.",

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
    "experience.job1.title": "Backend Developer",
    "experience.job1.company": "Municipality of San Juan City",
    "experience.job1.period": "08/2025 - Present",
    "experience.job1.description": "Backend developer specialized in distributed architecture, LLM integration, and data pipelines at scale. I design systems that combine high-performance APIs, async processing, and artificial intelligence to transform unstructured data into actionable real-time information.",
    "experience.job1.achievement1": "Distributed architectures with NestJS + Python, 100% containerized with Docker",
    "experience.job1.achievement2": "REST APIs with complex analysis, hybrid SQL + LLM strategies, and smart caching",
    "experience.job1.achievement3": "Async data pipelines with HTTP/2, multiprocessing, Redis, and continuous processing daemons",
    "experience.job1.achievement4": "Social media scraping with browser automation, anti-detection patterns, and extensible per-platform architecture",
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
    "projects.demo": "Site →",
    "projects.project1.title": "CotizaX",
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
    "stack.english": "English B1",

    // Contact
    "contact.title": "Contact",
    "contact.heading": "Have a project in mind?",
    "contact.description": "I'm open to new opportunities and collaborations. If you have an interesting project or want to discuss backend architecture, reach out.",
    "contact.email.description": "For professional inquiries",
    "contact.github.description": "Check my code and projects",
    "contact.linkedin.description": "Let's connect professionally",
    "contact.chat.client": "client",
    "contact.chat.me": "rodrigo",
    "contact.chat.input": "type a message...",
    "contact.chat.m1": "Hey, we're looking for a backend developer for a new project...",
    "contact.chat.m2": "Hey! Tell me more — what kind of system do you need?",
    "contact.chat.m3": "We need a scalable API with real-time processing and auth. Do you have experience with that?",
    "contact.chat.m4": "Yes, I just came from building a distributed system with NestJS, Redis, and async pipelines. What's the timeline?",
    "contact.chat.m5": "Great. We're starting in 2 weeks. Can we schedule a call to define the architecture?",
    "contact.chat.m6": "Perfect, shoot me an email or reach out on LinkedIn and we'll set it up. Let's talk!",    "contact.chat.m7": ";)",
    // Stats
    "stats.title": "Dashboard",
    "stats.header": "glances — system metrics",
    "stats.processes.value": "12+",
    "stats.processes.label": "Optimized processes",
    "stats.uptime.value": "99.9%",
    "stats.uptime.label": "Uptime",
    "stats.loc.value": "15k+",
    "stats.loc.label": "Lines of code",
    "stats.docker.value": "always",
    "stats.docker.label": "Docker containers",
    "stats.status": "All systems operational",
    "stats.refreshed": "Last refresh: just now",

    // Now
    "now.title": "Right now",
    "now.active": "active (running)",
    "now.learning": "Payment gateway and subscription integration with Mercado Pago",
    "now.learningTag": "building",
    "now.reading": "Automated social media scraping with browser automation",
    "now.readingTag": "automating",
    "now.working": "LLM implementation in processing pipelines",
    "now.workingTag": "implementing",
    "now.exploring": "Server administration and Docker deployment",
    "now.exploringTag": "managing",
    "now.since": "Active since",

    // Philosophy
    "philosophy.title": "Philosophy",
    "philosophy.header": "development manifesto",
    "philosophy.p1.text": "Clean code > Clever code",
    "philosophy.p1.detail": "Code is read more times than it's written. Clarity always wins.",
    "philosophy.p2.text": "Ship > Perfect",
    "philosophy.p2.detail": "Deliver value early and iterate. Perfection is the enemy of deployment.",
    "philosophy.p3.text": "Automate > Repeat",
    "philosophy.p3.detail": "If you do it twice manually, automate it the third time.",

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
