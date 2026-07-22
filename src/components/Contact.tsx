"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Section, GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:rodrigo.facultad.unsj@gmail.com",
    icon: EmailIcon,
  },
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
];

type ChatMessage = {
  sender: "client" | "me";
  textKey: string;
  delay: number;
  time: string;
};

const chatFlow: ChatMessage[] = [
  { sender: "client", textKey: "contact.chat.m1", delay: 0, time: "09:41" },
  { sender: "me", textKey: "contact.chat.m2", delay: 800, time: "09:41" },
  { sender: "client", textKey: "contact.chat.m3", delay: 1800, time: "09:42" },
  { sender: "me", textKey: "contact.chat.m4", delay: 3000, time: "09:43" },
  { sender: "client", textKey: "contact.chat.m5", delay: 4200, time: "09:44" },
  { sender: "me", textKey: "contact.chat.m6", delay: 5400, time: "09:44" },
  { sender: "me", textKey: "contact.chat.m7", delay: 6400, time: "09:44" },
];

export function Contact() {
  const { t } = useLanguage();
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState<"client" | "me" | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer — start animation when section is in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Chat animation — only runs after section is visible
  useEffect(() => {
    if (!hasStarted) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    chatFlow.forEach((msg, i) => {
      // Show typing indicator before message appears
      timers.push(
        setTimeout(() => {
          setTypingSender(msg.sender);
          setIsTyping(true);
        }, msg.delay)
      );
      // Show the message
      timers.push(
        setTimeout(() => {
          setIsTyping(false);
          setTypingSender(null);
          setVisibleMessages(i + 1);
        }, msg.delay + 600)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleMessages, isTyping, hasStarted]);

  return (
    <Section id="contact" title={t("contact.title")}>
      <div ref={sectionRef} className="relative max-w-3xl mx-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
        {/* Chat window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-background)]">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 font-mono text-xs text-[var(--color-muted)]">
            ~/chat — rodrigo-suarez
          </span>
        </div>

        {/* Chat messages */}
        <div className="p-4 md:p-6 space-y-4 min-h-[320px]">
          {chatFlow.slice(0, visibleMessages).map((msg, i) => (
            <div
              key={i}
              className={`flex items-end gap-2.5 ${msg.sender === "me" ? "justify-end" : "justify-start"} animate-fade-in-up`}
            >
              {/* Client avatar (left) */}
              {msg.sender === "client" && (
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[var(--color-border)] shrink-0">
                  <Image
                    src="https://api.dicebear.com/9.x/initials/svg?seed=CL&backgroundColor=1e1e2e&textColor=6b6b80"
                    alt="Client"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              )}
              <div
                className={`max-w-[80%] md:max-w-[70%] ${
                  msg.sender === "me"
                    ? "bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-tl-lg rounded-bl-lg rounded-tr-lg"
                    : "bg-[var(--color-background)] border border-[var(--color-border)] rounded-tr-lg rounded-br-lg rounded-tl-lg"
                } px-4 py-3`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-mono text-[10px] uppercase tracking-wider ${msg.sender === "me" ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]"}`}>
                    {msg.sender === "me" ? t("contact.chat.me") : t("contact.chat.client")}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--color-muted)]/50">
                    {msg.time}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${msg.sender === "me" ? "text-[var(--color-foreground)]" : "text-[var(--color-muted)]"}`}>
                  {t(msg.textKey)}
                </p>
              </div>
              {/* My avatar (right) */}
              {msg.sender === "me" && (
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[var(--color-accent)]/30 shrink-0 shadow-[0_0_8px_var(--color-glow)]">
                  <Image
                    src="/images/profile.png"
                    alt="Rodrigo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && typingSender && (
            <div className={`flex items-end gap-2.5 ${typingSender === "me" ? "justify-end" : "justify-start"}`}>
              {typingSender === "client" && (
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[var(--color-border)] shrink-0">
                  <Image
                    src="https://api.dicebear.com/9.x/initials/svg?seed=CL&backgroundColor=1e1e2e&textColor=6b6b80"
                    alt="Client"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              )}
              <div className={`px-4 py-3 rounded-lg ${
                typingSender === "me"
                  ? "bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20"
                  : "bg-[var(--color-background)] border border-[var(--color-border)]"
              }`}>
                <div className="flex items-center gap-1.5">
                  <span className={`font-mono text-[10px] uppercase tracking-wider ${typingSender === "me" ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]"}`}>
                    {typingSender === "me" ? t("contact.chat.me") : t("contact.chat.client")}
                  </span>
                  <div className="flex gap-1 ml-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
              {typingSender === "me" && (
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[var(--color-accent)]/30 shrink-0 shadow-[0_0_8px_var(--color-glow)]">
                  <Image
                    src="/images/profile.png"
                    alt="Rodrigo"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input bar with contact links */}
        <div className="border-t border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[var(--color-accent)]">$</span>
            <div className="flex-1 flex items-center gap-2">
              <span className="font-mono text-sm text-[var(--color-muted)]">
                {t("contact.chat.input")}
              </span>
              <span className="font-mono text-sm text-[var(--color-accent)] animate-blink">▌</span>
            </div>
          </div>
          {/* Contact method buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 hover:shadow-[0_0_12px_var(--color-glow)] transition-all duration-300"
              >
                <link.icon className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:scale-110 transition-transform shrink-0" />
                <span className="font-mono text-xs text-[var(--color-muted)] group-hover:text-[var(--color-foreground)] transition-colors whitespace-nowrap">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
