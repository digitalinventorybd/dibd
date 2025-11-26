"use client"

import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      icon: "🎯",
      title: "Digital Marketing",
      description:
        "Elevate your online presence with our strategic digital marketing solutions, merging proven tactics and the latest trends to navigate your brand toward substantial growth.",
    },
    {
      icon: "📱",
      title: "VSMM",
      subtitle: "(Virtual Social Media Marketing)",
      description:
        "Unlock the true potential of social media with VSMM, your comprehensive package to navigate, manage, and optimize your brand's social landscape for optimal engagement.",
    },
    {
      icon: "🔍",
      title: "SEO",
      subtitle: "(Search Engine Optimization)",
      description:
        "Ensure your brand is seen and heard online with our expert SEO strategies, crafted to propel you to the top of search results, enhancing visibility and engagement.",
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Transform your digital vision into reality with our cutting-edge web development services, creating responsive, user-friendly websites that captivate and convert.",
    },
    {
      icon: "🎨",
      title: "Graphics Design",
      description:
        "Make a lasting impression with stunning visual content. Our graphics design services bring your brand to life with creative and professional designs.",
    },
    {
      icon: "📹",
      title: "Video Production",
      description:
        "Tell your story through compelling video content. Our video production services help you engage your audience with high-quality, creative videos.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold animate-fade-in-up">
              Our <span className="text-red-500">Services</span>
            </h2>
            <p className="text-gray-400 mt-2 animate-fade-in-up">
              Focused on results we seek to raise the level of our customers.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white hidden lg:flex bg-transparent"
          >
            VIEW ALL
          </Button>
        </div>

        {/* Services grid with decorative corners */}
        <div className="relative">
          {/* Top left corner */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-red-500 rounded-tl-lg" />
          {/* Top right corner */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-red-500 rounded-tr-lg" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-zinc-900 rounded-lg p-8 hover:bg-zinc-800 transition-all duration-300 group animate-scale-in opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                {service.subtitle && <p className="text-sm text-gray-400 mb-3">{service.subtitle}</p>}
                <p className="text-gray-400 leading-relaxed text-pretty">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
