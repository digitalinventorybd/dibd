import { BenefitsSection } from "@/components/Home/benefits-section";
import { ClientRatings } from "@/components/Home/client-ratings";
import { ConsultationForm } from "@/components/Home/consultation-form";
import { HeroSection } from "@/components/Home/hero-section";
import { ServicesSection } from "@/components/Home/services-section";

export default function Home() {
  return (
   <>
      <HeroSection />
      <ClientRatings />
      <BenefitsSection />
      <ServicesSection />
      <ConsultationForm />
   </>
  );
}
