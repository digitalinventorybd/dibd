"use client"

import { Check } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      title: "Extensive Expertise",
      description:
        "Benefit from a diverse team of seasoned professionals well-versed in a wide array of digital marketing disciplines, ensuring comprehensive support for all your online needs.",
    },
    {
      title: "Proven Track Record",
      description:
        "Our portfolio showcases successful projects and satisfied clients, demonstrating our ability to deliver measurable results.",
    },
    {
      title: "Innovative Strategies",
      description:
        "Stay ahead of the competition with cutting-edge approaches, leveraging AI, automation, and creative visuals.",
    },
    {
      title: "Personalized Solutions",
      description: "Every strategy is tailored to your business, audience, and objectives, ensuring maximum impact.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We work closely with you to understand your goals and deliver exceptional results.",
    },
  ]

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-fade-in-up">
          Discover the <span className="text-primary">Benefits</span> with Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          {/* Left - Benefits list */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex gap-4 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-pretty">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Office image */}
          <div className="relative animate-scale-in">
            <div className="aspect-4/3 rounded-lg overflow-hidden">
              <img
                src="/modern-digital-agency-office-with-plants-and-team-.jpg"
                alt="digitalinventorybd Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute top-8 left-8 bg-primary text-white px-6 py-3 rounded font-bold text-lg">
                digitalinventorybd
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
