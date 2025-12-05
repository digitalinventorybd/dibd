"use client"

import { motion } from "framer-motion"
import { Check, Info, Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function VSMMPage() {
  const packages = [
    {
      name: "Starter",
      badge: "Economy",
      badgeColor: "bg-primary",
      duration: "6 Month",
      price: "BDT 5000",
      features: {
        Features: [
          { text: "Facebook Page", info: false },
          { text: "Facebook Followers", info: true },
          { text: "Google Business", info: false },
          { text: "Q & A Upload", info: false },
          { text: "Links 3 - (Redirect Order)", info: false },
          { text: "Review", info: false },
          { text: "Personal Recommendations", info: false },
        ],
        Customization: [
          { text: "Cover Photo", info: false },
          { text: "Call to Action", info: false },
          { text: "Categories", info: false },
          { text: "Personal Info", info: false },
          { text: "Business Page Design", info: true },
          { text: "Social Media QR", info: false },
          { text: "Post/Reel", info: true },
        ],
        Responsibilities: [
          { text: "Complimentary Business Photography", info: true },
          { text: "Content Creation Support", info: false },
          { text: "Design", info: false },
          { text: "Video Shoot", info: true },
          { text: "Video Edit", info: true },
          { text: "Customer Servicing", info: true },
          { text: "Upload 15 Items", info: false },
        ],
      },
    },
    {
      name: "Growth",
      badge: "Standard",
      badgeColor: "bg-primary",
      duration: "1 Year",
      price: "BDT 9500",
      features: {
        Features: [
          { text: "Facebook Page", info: false },
          { text: "Facebook Followers", info: true },
          { text: "Facebook & Instagram", info: false },
          { text: "Google Business", info: false },
          { text: "Q & A Upload", info: false },
          { text: "Links - 3 (Redirect Order)", info: false },
          { text: "Catalog - 3 Custom Photos", info: true },
          { text: "Google Embedded Website", info: true },
          { text: "Review", info: false },
          { text: "Personal Recommendations", info: false },
        ],
        Customization: [
          { text: "Cover Photo", info: false },
          { text: "Call to Action", info: false },
          { text: "Categories", info: false },
          { text: "Personal Info", info: false },
          { text: "Business Page Design", info: true },
          { text: "Social Media QR", info: false },
          { text: "4 Visual Reels", info: true },
          { text: "4 Banner Posts", info: true },
        ],
        Responsibilities: [
          { text: "Complimentary Business Photography", info: true },
          { text: "Creative Photoshoot Supported", info: true },
          { text: "Content Creation Support", info: false },
          { text: "Design", info: false },
          { text: "Video Shoot", info: true },
          { text: "Video Edit", info: true },
          { text: "Customer Servicing", info: true },
          { text: "3 Motion", info: true },
          { text: "Upload 25 Items", info: false },
        ],
      },
    },
    {
      name: "Advanced",
      badge: "Signature",
      badgeColor: "bg-primary",
      duration: "1 Year",
      price: "BDT 15000",
      features: {
        Features: [
          { text: "Facebook Page", info: false },
          { text: "Facebook Followers", info: true },
          { text: "Facebook & Instagram", info: false },
          { text: "Google Business", info: false },
          { text: "Q & A Upload", info: false },
          { text: "Links - 4 (Redirect Order)", info: false },
          { text: "Catalog - Custom Photos - 20 Photo", info: true },
          { text: "Google Embedded Website - 5 Product", info: true },
          { text: "Review", info: false },
          { text: "Personal Recommendations", info: false },
          { text: "Upload 40 Items", info: false },
        ],
        Customization: [
          { text: "Cover Photo", info: false },
          { text: "Call to Action", info: false },
          { text: "Categories", info: false },
          { text: "Personal Info", info: false },
          { text: "Business Page Design", info: true },
          { text: "Social Media QR", info: false },
          { text: "8 Visual Reels", info: true },
          { text: "8 Banner Posts", info: true },
        ],
        Responsibilities: [
          { text: "Complimentary Business Photography (Full Day)", info: true },
          { text: "Creative Photoshoot Supported", info: true },
          { text: "Content Creation Support", info: false },
          { text: "Design", info: false },
          { text: "Video Shoot", info: true },
          { text: "Video Edit", info: true },
          { text: "Customer Servicing", info: true },
          { text: "6 Motion", info: true },
        ],
      },
    },
  ]

  const industries = [
    { name: "Restaurant", image: "/restaurant-interior.jpg" },
    { name: "Hotel/Resort", image: "/hotel-resort-dining.jpg" },
    { name: "Real Estate", image: "/real-estate-office.jpg" },
    { name: "Apparel", image: "/apparel-store.jpg" },
    { name: "Doctors", image: "/medical-office.jpg" },
    { name: "Gym/Parlour", image: "/gym-interior.jpg" },
    { name: "Tech/IT", image: "/tech-office.jpg" },
    { name: "E-Commerce", image: "/ecommerce-warehouse.jpg" },
  ]

  return (
    <div className="min-h-screen bg-background">


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-primary">Save Time, Money, And Resources</span>{" "}
                <span className="text-foreground">By Choosing Our Cost-Effective VSMM Service.</span>
              </h1>

              <p className="text-muted-foreground mb-8 text-lg leading-relaxed text-justify">
                Unleash the power of our VSMM service and grow your online growth exponentially! With our blend of
                strategy, innovation and cutting-edge technologies, we empower businesses to thrive in the digital
                landscape. Experience the transformative potential of intelligent VSMM solutions that help to digital
                success.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6 flex-1 min-w-[150px]">
                  <div className="text-4xl font-bold text-primary mb-2">10</div>
                  <div className="text-sm text-muted-foreground">Business Catalog</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 flex-1 min-w-[150px]">
                  <div className="text-4xl font-bold text-primary mb-2">814</div>
                  <div className="text-sm text-muted-foreground">Review</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 flex-1 min-w-[150px]">
                  <div className="text-4xl font-bold text-primary mb-2">255</div>
                  <div className="text-sm text-muted-foreground">Total Order</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View VSMM Pack
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Share Us The Req
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-4">Data System</div>
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg aspect-video flex items-center justify-center mb-4">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2"></div>
                      <div className="text-xs">Virtual Presenter</div>
                    </div>
                  </div>
                  <div className="text-xs text-primary font-semibold">Without VSMM</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-4">Data System</div>
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg aspect-video flex items-center justify-center mb-4">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2"></div>
                      <div className="text-xs">Virtual Presenter</div>
                    </div>
                  </div>
                  <div className="text-xs text-primary font-semibold">With VSMM</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VSMM Packages Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="text-foreground">VSMM</span> <span className="text-primary">Packages</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <span className={`${pkg.badgeColor} text-white text-xs px-3 py-1 rounded-full`}>{pkg.badge}</span>
                </div>

                <div className="mb-6">
                  <div className="text-muted-foreground text-sm mb-2">{pkg.duration}</div>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                </div>

                {Object.entries(pkg.features).map(([category, features]) => (
                  <div key={category} className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">{category}:</h4>
                    <ul className="space-y-2">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground flex-1">{feature.text}</span>
                          {feature.info && <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <Button className="w-full bg-primary hover:bg-primary/90 mt-4">Try It</Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
              Looking for a best fit? <ArrowRight className="ml-2 w-4 h-4" /> Customize Here
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How VSMM Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            <span className="text-foreground">How</span> <span className="text-primary">VSMM works?</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
              <Button size="icon" className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 relative z-10">
                <Play className="w-8 h-8" fill="currentColor" />
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-muted-foreground text-lg leading-relaxed text-justify mb-6">
                Virtual Social Media Marketing as known as VSMM. It's a humble Step out.com Task will setup your
                World-wide review. Through VSMM we are helping businessperson to set up all the social media account
                with Google account And not just setup and verification but also be is going to finish the full setup
                with order link. Our team will do branding design & development from logo your business to ensure the
                smooth journey by digital marketing.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                Not just the first but our team will take care of your BUSINESS PAGES AND CREATE AND UPLOAD Content
                also. In VSMM, Our team take photos & videos of your Business, So our design & development team will
                design & creative motion that will give your online marketing Trust your package and make you on
                Business growth Opportunities. VIRTUAL SOCIAL MEDIA MARKETING PACKAGE.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VSMM for Industries Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
          >
            VSMM for Industries
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-xs text-muted-foreground mb-1">VSMM For</div>
                  <h3 className="text-lg font-bold text-white">{industry.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VSMM Clients Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="text-foreground">Some of our</span> <span className="text-primary">VSMM Clients</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-7 gap-6 mb-8"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl text-muted-foreground/20 font-bold">Logo</div>
              </div>
            ))}
          </motion.div>

          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === 1 ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Watch Detail Presentation CTA */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Play className="mr-2 w-5 h-5" fill="currentColor" />
              Watch Detail Presentation
            </Button>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
