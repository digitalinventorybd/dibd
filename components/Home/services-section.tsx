"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: "🎯",
      title: "Digital Marketing",
      slug: "services/digital-marketing",
      description:
        "Elevate your online presence with our strategic digital marketing solutions, merging proven tactics and the latest trends to navigate your brand toward substantial growth.",
    },
    {
      icon: "📱",
      title: "VSMM",
      subtitle: "(Virtual Social Media Marketing)",
      slug: "services/digital-marketing/vsmm",
      description:
        "Unlock the true potential of social media with VSMM, your comprehensive package to navigate, manage, and optimize your brand's social landscape for optimal engagement.",
    },
    {
      icon: "🔍",
      title: "SEO",
      subtitle: "(Search Engine Optimization)",
      slug: "services/digital-marketing/seo",
      description:
        "Ensure your brand is seen and heard online with our expert SEO strategies, crafted to propel you to the top of search results, enhancing visibility and engagement.",
    },
    {
      icon: "💻",
      title: "Web Design and Development",
      slug: "services/web-design-development",
      description:
        "Crafting bespoke websites that enchant and engage, our web design and development team fuses aesthetics with functionality, ensuring your online space is truly yours.",
    },
    {
      icon: "📝",
      title: "Content Solutions",
      slug: "services/content-solutions",
      description:
        "Enticing stories told right – your brand narratives crafted with precision, ensuring every word resonates with your audience, forging deeper, lasting connections.",
    },
    {
      icon: "📹",
      title: "Video Production",
      subtitle: "(OVC/TVC)",
      slug: "services/video-production",
      description:
        "Crafting visual narratives that resonate; our video production team curates compelling visuals, ensuring your brand story is told in the most enchanting way.",
    },
    {
      icon: "✨",
      title: "Creative Solutions",
      slug: "services/creative-solutions",
      description:
        "Imaginative, innovative, and impactful; our creative solutions breathe life into your brand, carving a unique space in the crowded digital domain.",
    },
    {
      icon: "🎬",
      title: "Animation",
      slug: "animation",
      description:
        "Bringing stories to life with dynamic motion and animation, ensuring your brand messages are not only heard but truly seen and remembered.",
    },
    {
      icon: "💼",
      title: "Marketing Consultancy",
      slug: "marketing-consultancy",
      description:
        "Guiding your brand with expert insights and strategic paths, our marketing consultancy ensures your journey is not just directed but destined for success.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold animate-fade-in-up">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-2 animate-fade-in-up">
              Focused on results we seek to raise the level of our customers.
            </p>
          </div>
          <Link href="/services">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hidden lg:inline-flex bg-transparent uppercase text-xs font-semibold px-6"
            >
              VIEW ALL
            </Button>
          </Link>
        </div>

        <div className="relative">
          {/* Top left corner decoration */}
          <div className="absolute -top-4 -left-4 w-32 h-32 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          </div>

          {/* Bottom right corner decoration */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-1 bg-primary"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={service.title} href={`/${service.slug}`} className="block">
                <div
                  className="bg-card backdrop-blur-sm border border-border rounded-lg p-8 hover:bg-card/70 hover:border-primary transition-all duration-300 group animate-scale-in opacity-0 cursor-pointer h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-center lg:text-left group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-sm text-muted-foreground mb-3 text-center lg:text-left">{service.subtitle}</p>
                  )}

                  <p className="text-muted-foreground leading-relaxed text-justify text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
