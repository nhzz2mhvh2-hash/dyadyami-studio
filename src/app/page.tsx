import Hero from "@/components/hero/Hero";
import Work from "@/components/sections/Work";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Work />
      <Philosophy />
      <Services />
      <Contact />
    </div>
  );
}
