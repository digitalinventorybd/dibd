import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ClientRatings } from "@/components/client-ratings"
import { BenefitsSection } from "@/components/benefits-section"
import { ServicesSection } from "@/components/services-section"
import { ConsultationForm } from "@/components/consultation-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ClientRatings />
      <BenefitsSection />
      <ServicesSection />
      <ConsultationForm />
      <Footer />
    </main>
  )
}
