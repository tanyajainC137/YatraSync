import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { Market } from "@/components/market";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="problem">
        <Problem />
      </section>
      <section id="solution">
        <Solution />
      </section>
      <section id="market">
        <Market />
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
