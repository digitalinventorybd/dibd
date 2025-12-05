"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Compass as Wordpress, Code2, Globe, ChevronRight } from "lucide-react"

export default function WebDesignDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("CRM")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    websiteType: "",
    additionalNeeds: "",
    description: "",
  })

  const services = [
    {
      icon: Wordpress,
      title: "Wordpress Website",
      description:
        "Dominate the power of a content management system built with WordPress, offering user-friendly interfaces and extensive customization options that allow you to manage your site effortlessly.",
    },
    {
      icon: Code2,
      title: "Laravel Website",
      description:
        "Elevate your online presence with our expertly crafted Laravel websites, delivering robust, scalable solutions tailored to your business needs with cutting-edge functionality and seamless user experiences.",
    },
    {
      icon: Globe,
      title: "Web Application",
      description:
        "Unlock the potential of bespoke web applications designed to streamline your business processes, enhance productivity, and provide innovative solutions tailored to your specific requirements.",
    },
  ]

  const websiteTags = [
    "E-Commerce",
    "Shopping",
    "Real Estate",
    "Blog Post",
    "Restaurent",
    "Job Searching",
    "E-Learning",
    "Corporate",
    "Community Building",
    "One Page",
    "Social Networking",
    "Startup",
  ]

  const tabs = ["CRM", "POS", "Inventory Management", "LMS", "Matrimony", "HRM"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background">


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-primary">Web Design &</span>
                <br />
                <span className="text-primary">Development</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Web design and development for business is a necessary part of any company&apos;s marketing strategy.
                With over 80% of consumers using the internet, you drive to have an online presence. A well-designed,
                user-friendly website (web drive to move customers onwards from launch.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#quotation">
                  <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition-colors">
                    Get Quotation
                  </button>
                </Link>
                <Link href="#services">
                  <button className="border border-border text-foreground px-6 py-3 rounded hover:bg-muted transition-colors">
                    View Portfolio
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img src="/web-design-illustration-with-people-working-on-web.jpg" alt="Web Design Illustration" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web Services We Provide */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Services We Provide</h2>
          </motion.div>

          <div className="relative">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary -ml-4 -mt-4" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary -mr-4 -mb-4" />

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border p-8 rounded-lg hover:border-primary transition-all group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Creative Website Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Creative Website can fulfil
                <br />
                business proposes
              </h2>
              <div className="flex flex-wrap gap-3">
                {websiteTags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/modern-website-mockup-dark-theme.jpg"
                alt="Website Mockup 1"
                className="w-full h-auto rounded-lg border border-border"
              />
              <img
                src="/mobile-responsive-design.png"
                alt="Website Mockup 2"
                className="w-full h-auto rounded-lg border border-border mt-8"
              />
              <img
                src="/ecommerce-dashboard.png"
                alt="Website Mockup 3"
                className="w-full h-auto rounded-lg border border-border -mt-8"
              />
              <img
                src="/corporate-website-design.png"
                alt="Website Mockup 4"
                className="w-full h-auto rounded-lg border border-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web Applications Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Some Web Applications made by us</h2>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded transition-colors ${
                    activeTab === tab
                      ? "bg-primary text-white"
                      : "bg-card border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Application Screenshot */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <img src="/modern-dashboard-application-interface-with-data-t.jpg" alt={`${activeTab} Application`} className="w-full h-auto" />
            </motion.div>

            <div className="mt-8 text-left max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-4">
                We are delighted to offer various web applications made to cater to multiple business needs. Here are
                some of our key solutions:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Hospital Management:</strong> Simplify and automate hospital operations with our
                    comprehensive management system.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Customer Relationship Management (CRM):</strong> Enhance customer interactions and improve
                    relationships.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Human Resource Management (HRM):</strong> Efficiently manage employee records and HR tasks.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get Quotation Section */}
      <section id="quotation" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get Quotation</h2>

            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Types Of Website</label>
                  <select
                    required
                    value={formData.websiteType}
                    onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                  >
                    <option value="">Select</option>
                    <option value="corporate">Corporate Website</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="blog">Blog</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="custom">Custom Application</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Additional Needs / Customization
                  </label>
                  <input
                    type="text"
                    value={formData.additionalNeeds}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalNeeds: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Description</label>
                <textarea
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:outline-none focus:border-primary text-foreground resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded hover:bg-primary/90 transition-colors font-medium"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
