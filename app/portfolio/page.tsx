"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    description: "Complete digital transformation for a leading retail brand, resulting in 320% ROI increase.",
    image: "/modern-ecommerce-dashboard.png",
    stats: { revenue: "+320%", traffic: "2.4M", conversion: "8.7%" },
    link: "#",
  },
  {
    id: 2,
    title: "Social Media Campaign",
    category: "VSMM",
    description: "Viral social media strategy that generated 5.2M impressions and 3x lead growth.",
    image: "/social-media-marketing-dashboard-analytics.jpg",
    stats: { impressions: "5.2M", engagement: "+215%", leads: "18.5K" },
    link: "#",
  },
  {
    id: 3,
    title: "SEO Optimization Project",
    category: "SEO",
    description: "Strategic SEO implementation that propelled client to top search rankings.",
    image: "/seo-analytics-dashboard-with-graphs.jpg",
    stats: { ranking: "Top 3", traffic: "+450%", keywords: "120+" },
    link: "#",
  },
  {
    id: 4,
    title: "Brand Identity Development",
    category: "Branding",
    description: "Complete brand overhaul including logo, visual identity, and brand guidelines.",
    image: "/brand-identity-design-mockups.jpg",
    stats: { awareness: "+280%", recall: "92%", engagement: "+340%" },
    link: "#",
  },
  {
    id: 5,
    title: "Mobile App Launch",
    category: "App Development",
    description: "Cross-platform mobile application with 50K+ downloads in first month.",
    image: "/mobile-app-interface.png",
    stats: { downloads: "50K+", rating: "4.8★", retention: "76%" },
    link: "#",
  },
  {
    id: 6,
    title: "Content Marketing Strategy",
    category: "Content Marketing",
    description: "Data-driven content strategy that doubled organic traffic and engagement.",
    image: "/content-marketing-strategy-dashboard.jpg",
    stats: { traffic: "+200%", engagement: "+165%", leads: "12.3K" },
    link: "#",
  },
]

const categories = ["All", "Web Development", "VSMM", "SEO", "Branding", "App Development", "Content Marketing"]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-700" />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-500" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 border border-red-500 rounded-full text-red-500 text-sm uppercase tracking-wider">
                Our Portfolio
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Our Work <span className="text-red-500">Speaks Volumes</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful digital transformations. Each project represents our commitment to
              excellence and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "150+", label: "Happy Clients" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs rounded-full">{item.category}</span>
                  </div>

                  <Link
                    href={item.link}
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </Link>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-800">
                    {Object.entries(item.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-red-500 font-bold text-sm">{value}</div>
                        <div className="text-gray-500 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your <span className="text-red-500">Success Story?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Let's create something amazing together. Contact us today to discuss your project.
            </p>
            <Link href="/#consultation-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors inline-flex items-center gap-2"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
