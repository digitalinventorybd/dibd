"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                From Strategy To Screen: DigitalInventoryBD -{" "}
                <span className="text-primary">Fueling Your Digital Evolution</span> With Excellence.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                Since our establishment in 2016, DigitalInventoryBD has been the cornerstone of success for numerous
                international and local businesses. As your dedicated Digital Marketing Agency in Bangladesh, we've
                seamlessly blended innovation and expertise. From strategic inception to captivating screens, our
                journey has been marked by excellence. So partner with us as we continue to navigate the digital realm,
                ensuring your brand's seamless and successful evolution in this dynamic landscape.
              </motion.p>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <Image
                src="/team-working-on-digital-marketing-strategy.jpg"
                alt="Team working together"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-border"
        >
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold"
              >
                Need consultation from experts?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-primary text-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-foreground text-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-foreground/10 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services Content Section */}
        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Focused on results we seek to raise the level of our customers.
            </p>
          </motion.div>

          {/* Service Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {/* Decorative corner borders */}
            <div className="absolute -top-4 -left-4 w-32 h-1 bg-primary" />
            <div className="absolute -top-4 -left-4 w-1 h-32 bg-primary" />
            <div className="absolute -bottom-4 -right-4 w-32 h-1 bg-primary" />
            <div className="absolute -bottom-4 -right-4 w-1 h-32 bg-primary" />

            {[
              {
                title: "Digital Marketing",
                desc: "Elevate your online presence with strategic digital marketing solutions, merging proven tactics and trends.",
              },
              {
                title: "VSMM",
                desc: "Unlock the true potential of social media with comprehensive package to navigate and optimize your brand.",
              },
              {
                title: "SEO",
                desc: "Ensure your brand is seen online with expert SEO strategies, crafted to propel you to the top.",
              },
              {
                title: "Web Development",
                desc: "Create stunning, functional websites that captivate your audience and drive business growth.",
              },
              {
                title: "Graphic Design",
                desc: "Transform your vision into compelling visuals with our creative graphic design solutions.",
              },
              {
                title: "Video Production",
                desc: "Bring your story to life with professional video production services that engage and inspire.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-foreground/20 rounded-full" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
