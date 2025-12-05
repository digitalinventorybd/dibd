"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import {
  Search,
  Share2,
  BarChart3,
  Mail,
  Target,
  Users,
  TrendingUp,
  MousePointerClick,
  CheckCircle2,
  ArrowRight,
  Play,
} from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
}

export default function DigitalMarketingPage() {
  const [activeTab, setActiveTab] = useState("seo")

  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Boost your online visibility with strategic SEO techniques that drive organic traffic and improve search rankings.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Engage your audience across all platforms with compelling content and data-driven social media strategies.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MousePointerClick,
      title: "Pay-Per-Click Advertising",
      description:
        "Maximize ROI with targeted PPC campaigns that convert clicks into customers across Google Ads and social platforms.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Build lasting customer relationships with personalized email campaigns that drive engagement and conversions.",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: BarChart3,
      title: "Content Marketing",
      description:
        "Create compelling content that resonates with your audience and establishes your brand as an industry leader.",
      color: "from-yellow-500 to-red-500",
    },
    {
      icon: Target,
      title: "Conversion Rate Optimization",
      description: "Optimize every touchpoint to turn visitors into customers with data-driven CRO strategies.",
      color: "from-red-500 to-orange-500",
    },
  ]

  const strategies = [
    {
      title: "Data-Driven Approach",
      description: "Every decision backed by comprehensive analytics and market research.",
      icon: BarChart3,
    },
    {
      title: "Multi-Channel Integration",
      description: "Seamless coordination across all digital marketing channels for maximum impact.",
      icon: Share2,
    },
    {
      title: "Continuous Optimization",
      description: "Ongoing testing and refinement to ensure peak performance.",
      icon: TrendingUp,
    },
    {
      title: "Audience Targeting",
      description: "Precision targeting to reach the right people at the right time.",
      icon: Users,
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "SEO Audit & Strategy",
        "Social Media Management (2 platforms)",
        "Monthly Performance Reports",
        "Email Marketing Setup",
        "Content Creation (4 posts/month)",
        "Basic Analytics Tracking",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing businesses ready to scale",
      features: [
        "Advanced SEO & Link Building",
        "Social Media Management (4 platforms)",
        "PPC Campaign Management",
        "Weekly Performance Reports",
        "Content Creation (8 posts/month)",
        "Advanced Analytics & Insights",
        "Email Marketing Campaigns",
        "Landing Page Optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Comprehensive solutions for established brands",
      features: [
        "Full-Service SEO & Technical Optimization",
        "Complete Social Media Management",
        "Multi-Channel PPC Campaigns",
        "Daily Performance Monitoring",
        "Unlimited Content Creation",
        "Dedicated Account Manager",
        "Custom Marketing Automation",
        "Conversion Rate Optimization",
        "24/7 Priority Support",
      ],
      popular: false,
    },
  ]

  const results = [
    { metric: "250%", label: "Average Traffic Increase" },
    { metric: "180%", label: "ROI Improvement" },
    { metric: "95%", label: "Client Satisfaction" },
    { metric: "500+", label: "Successful Campaigns" },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We analyze your business, competitors, and target audience to create a custom strategy.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Develop a comprehensive digital marketing roadmap aligned with your business goals.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute campaigns across all channels with precision and attention to detail.",
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Continuously track performance and optimize for better results and ROI.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              >
                <span className="text-primary font-semibold">Digital Marketing Excellence</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Digital Marketing Agency
                <span className="text-primary block mt-2">in Bangladesh</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your online presence with data-driven digital marketing strategies that deliver measurable
                results and sustainable growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#packages"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:gap-3"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center gap-2 border border-border hover:border-primary px-8 py-4 rounded-lg font-semibold transition-colors">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {services.slice(0, 4).map((service, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="p-4 bg-background/50 rounded-lg border border-border hover:border-primary/50 transition-colors"
                      >
                        <service.icon className="w-8 h-8 text-primary mb-2" />
                        <h3 className="text-sm font-semibold">{service.title.split(" ")[0]}</h3>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {results.map((result, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{result.metric}</div>
                <div className="text-muted-foreground">{result.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Digital Marketing</span> Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to amplify your brand's digital presence and drive measurable growth
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-lg bg-linear-to-br ${service.color} bg-opacity-10 mb-6`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Winning <span className="text-primary">Strategy</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {strategies.map((strategy, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="inline-flex p-6 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <strategy.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                <p className="text-muted-foreground">{strategy.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to digital marketing success
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative">
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-primary/20" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-primary">Package</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible pricing options to match your business needs and budget
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`relative p-8 rounded-2xl border ${
                  pkg.popular ? "border-primary bg-primary/5" : "border-border bg-card"
                } transition-all hover:border-primary/50`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground mb-2">{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border border-border hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="relative p-12 bg-linear-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-primary/20 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your <span className="text-primary">Digital Presence?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create a custom digital marketing strategy that drives real results for your business
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-2 border border-border hover:border-primary px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
