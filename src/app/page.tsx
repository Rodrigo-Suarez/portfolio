import {
  Header,
  Footer,
  Hero,
  About,
  Experience,
  Projects,
  Stack,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6">
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
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
