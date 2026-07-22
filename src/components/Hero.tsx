"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Button, GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

function useTypingEffect(text: string, speed = 60, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    setIsDone(false);
    indexRef.current = 0;

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current++;
        if (indexRef.current <= text.length) {
          setDisplayed(text.slice(0, indexRef.current));
        } else {
          setIsDone(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [text, speed, startDelay]);

  return { displayed, isDone };
}

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
    href: "mailto:rodrigo.facultad.unsj@gmail.com",
    icon: EmailIcon,
  },
];

export function Hero() {
  const { t } = useLanguage();
  
  const firstName = "Rodrigo";
  const lastName = "Suárez";
  const role = t("hero.role");
  
  const { displayed: typedFirst, isDone: firstDone } = useTypingEffect(firstName, 70, 300);
  const { displayed: typedLast, isDone: lastDone } = useTypingEffect(lastName, 80, 300 + firstName.length * 70 + 200);
  const { displayed: typedRole, isDone: roleDone } = useTypingEffect(role, 50, 300 + (firstName.length + lastName.length) * 75 + 400);
  
  return (
    <section className="py-16 md:py-24 relative">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Terminal-style role badge */}
          <div className="animate-fade-in-up stagger-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5">
            <span className="status-dot" />
            <span className="font-mono text-sm text-[var(--color-accent)]">
              {typedRole}
              {!roleDone && <span className="animate-blink">▌</span>}
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in-up stagger-2 text-5xl md:text-7xl font-bold text-[var(--color-foreground)] tracking-tight leading-[1.1]">
            {typedFirst}
            {!firstDone && <span className="animate-blink text-[var(--color-accent)]">▌</span>}
            <br />
            <span className="text-[var(--color-accent)] glow-text">
              {typedLast}
              {firstDone && !lastDone && <span className="animate-blink">▌</span>}
            </span>
            {lastDone && <span className="animate-blink text-[var(--color-accent)] opacity-0">▌</span>}
          </h1>
          
          {/* Description */}
          <p className="animate-fade-in-up stagger-3 text-lg md:text-xl text-[var(--color-muted)] max-w-2xl leading-relaxed font-light">
            {t("hero.description")}
          </p>

          {/* Social links */}
          <div className="animate-fade-in-up stagger-4 flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2.5 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)] border border-transparent hover:border-[var(--color-border)] transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Action buttons */}
          <div className="animate-fade-in-up stagger-5 flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  history.pushState(null, "", "#projects");
                }
              }}
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 bg-[var(--color-accent)] text-[var(--color-background)] hover:bg-[var(--color-accent-hover)] hover:shadow-[0_0_20px_var(--color-glow)] shadow-[0_0_8px_var(--color-glow)] px-6 py-3 text-sm btn-glitch"
            >
              {t("hero.viewProjects")}
            </button>
            <Button href={t("hero.cvPath")} variant="secondary" size="lg" external>
              <DownloadIcon className="w-4 h-4 mr-2" />
              {t("hero.downloadCV")}
            </Button>
          </div>
        </div>

        {/* Profile image — terminal frame */}
        <div className="animate-fade-in-right stagger-3 flex-shrink-0">
          <div className="relative">
            {/* Terminal window chrome */}
            <div className="absolute -top-8 left-0 right-0 flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-surface)] rounded-t-lg border border-b-0 border-[var(--color-border)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-2 font-mono text-[10px] text-[var(--color-muted)]">~/profile</span>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-b-lg rounded-tr-lg overflow-hidden border border-[var(--color-border)] animate-pulse-glow profile-glitch">
              <Image
                src="/images/profile.png"
                alt="Rodrigo Suárez"
                fill
                className="object-cover"
                priority
              />
              {/* Signal loss overlay */}
              <div className="profile-glitch-signal" />
            </div>
            {/* Decorative corner brackets */}
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-[var(--color-accent)]/40 rounded-br-sm" />
            <div className="absolute -top-11 -left-3 w-6 h-6 border-l-2 border-t-2 border-[var(--color-accent)]/40 rounded-tl-sm" />
          </div>
        </div>
      </div>

      {/* Decorative terminal line at bottom */}
      <div className="mt-16 flex items-center gap-3 text-[var(--color-muted)] font-mono text-xs opacity-60">
        <span className="text-[var(--color-accent)]">$</span>
        <span>node --version</span>
        <span className="text-[var(--color-foreground)]">v22.x</span>
        <span className="text-[var(--color-accent)] ml-4">$</span>
        <span>docker ps</span>
        <span className="status-dot ml-1" />
        <span className="text-[var(--color-accent-tertiary)]">running</span>
      </div>
    </section>
  );
}
