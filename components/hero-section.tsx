"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { HeroAnimatedIllustration } from "./hero-animated-illustration"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
              {"Your "}
              <span className="text-red-500">Strategic</span>
              {" Digital "}
              <span className="text-red-500">Partner</span>
              {" For Ultimate Success."}
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl text-pretty">
              Welcome to digitalinventorybd, one of the leading Digital Marketing agencies in Bangladesh. With our
              innovative strategies and results-oriented approach, we help businesses thrive in the digital world.
              Partner with us to achieve measurable results and drive your business growth. Explore the transformative
              power of digitalinventorybd and unlock the full potential of your online success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
              >
                📅 Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-white hover:bg-red-500/10 px-8 py-6 text-lg bg-transparent"
              >
                Working Scope With You
              </Button>
            </div>

            {/* Partner logos */}
          
          </div>

          <div className="hidden lg:block h-[600px] relative">
            <HeroAnimatedIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
