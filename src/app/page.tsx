import { Hero, About, HowItWorks, Services, Testimonials, LatestWorks, FinalCTA, Contact } from '@/components';

export default function Home() {
  return (
    <main>
      <Hero 
        title="Tecnologia que resolve, sem complicar."
        subtitle="Entendemos as necessidades da sua empresa e criamos soluções digitais sob medida para promover eficiência e crescimento."
        ctaText="Agende uma conversa"
        ctaLink="#contato"
        backgroundImage='/images/hero.png'
      />
      <About />
      <HowItWorks />
      <Services />
      <Testimonials />
      <LatestWorks />
      <FinalCTA />
      <Contact />
    </main>
  );
}
