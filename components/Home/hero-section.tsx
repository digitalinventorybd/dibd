"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { HeroAnimatedIllustration } from "./hero-animated-illustration"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] sm:h-[500px] lg:h-[600px] relative order-1 lg:order-2">
            <HeroAnimatedIllustration />
          </div>

          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">{t("hero.title")}</h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-pretty">
              {t("hero.subtitle")} {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
              >
                📅 {t("hero.bookConsultation")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-foreground hover:bg-primary/10 px-8 py-6 text-lg bg-transparent"
              >
                {t("hero.workingScope")}
              </Button>
            </div>

            {/* Partner logos */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-card rounded flex items-center justify-center">
                  <span className="text-xs font-bold">BASIS</span>
                </div>
                <div className="w-16 h-16 bg-card rounded flex items-center justify-center">
                  <span className="text-xs font-bold">e-CAB</span>
                </div>
                <div className="w-16 h-16 bg-card rounded flex items-center justify-center">
                  <span className="text-xs font-bold">ECLUB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}