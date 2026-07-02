import {
  Header,
  Footer,
  Hero,
  About,
  Experience,
  Projects,
  Stack,
  NowSection,
  Philosophy,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <div className="relative z-10">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <div className="border-t border-[var(--color-border)]">
          <About />
        </div>
        <div className="border-t border-[var(--color-border)]">
          <Experience />
        </div>
        <div className="border-t border-[var(--color-border)]">
          <Projects />
        </div>
        <div className="border-t border-[var(--color-border)]">
          <Stack />
        </div>
        <div className="border-t border-[var(--color-border)]">
          <NowSection />
        </div>
        <div className="border-t border-[var(--color-border)]">
          <Philosophy />
        </div>
        <div className="border-t border-[var(--color-border)]">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
