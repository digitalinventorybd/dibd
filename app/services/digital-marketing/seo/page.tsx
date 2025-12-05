"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Search,
  FileText,
  Settings,
  Link,
  BarChart3,
  MapPin,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Sparkles,
  Brain,
  Target,
  Zap,
} from "lucide-react"
import Link2 from "next/link"

export default function SEONextPage() {
  const [calculatorInputs, setCalculatorInputs] = useState({
    monthlyVisitors: "",
    conversionRate: "",
    averageOrderValue: "",
    currentRanking: "",
  })

  const aiServices = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "AI-Powered Research",
      description:
        "Harness the power of AI-based keyword research tools to uncover hidden opportunities and stay ahead of trends.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Optimization",
      description:
        "AI-driven content analysis ensures your content is optimized for search engines and resonates with your audience.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Technical SEO",
      description:
        "Automated technical audits identify and fix critical issues that impact your search engine performance.",
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Link Building",
      description:
        "Strategic link building campaigns that establish authority and drive qualified traffic to your website.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description:
        "Real-time performance tracking with AI-powered insights to measure and improve your SEO effectiveness.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local SEO",
      description:
        "Dominate local search results with optimized Google Business Profile and location-based strategies.",
    },
  ]

  const seoProcess = [
    {
      number: "01",
      title: "Audit",
      description: "Comprehensive analysis of your current SEO performance and opportunities.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Custom SEO strategy tailored to your business goals and target audience.",
    },
    {
      number: "03",
      title: "Implementation",
      description: "Execute optimization tactics across technical, on-page, and off-page SEO.",
    },
    {
      number: "04",
      title: "Monitoring",
      description: "Continuous tracking and refinement to maximize your SEO ROI.",
    },
  ]

  const transformationMetrics = [
    { label: "Organic Traffic", before: "5,200", after: "18,500", increase: "+256%" },
    { label: "Keyword Rankings", before: "38", after: "147", increase: "+287%" },
    { label: "Conversion Rate", before: "2.1%", after: "4.8%", increase: "+129%" },
    { label: "Monthly Revenue", before: "$12K", after: "$38K", increase: "+217%" },
  ]

  const aiFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Keyword Prediction",
      description:
        "AI algorithms predict trending keywords and search patterns before they peak, giving you a competitive advantage.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Smart Content Generation",
      description: "Generate SEO-optimized content ideas and outlines based on search intent and competitor analysis.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Behavior Analytics",
      description: "Understand how users interact with your site and optimize for better engagement and conversions.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Search Results",
      description:
        "AI helps optimize for personalized search experiences, ensuring your content reaches the right audience.",
    },
  ]

  const pricingPackages = [
    {
      name: "3-Month SEO Boost",
      price: "$1,299",
      duration: "3 Months",
      popular: false,
      features: [
        { name: "SEO Audit", included: true },
        { name: "Keyword Research (50 keywords)", included: true },
        { name: "On-Page SEO (10 pages)", included: true },
        { name: "Technical SEO Fixes", included: true },
        { name: "Content Creation (5 blog posts)", included: true },
        { name: "Link Building (15 backlinks)", included: true },
        { name: "Monthly Performance Report", included: true },
        { name: "Google Analytics Setup", included: true },
      ],
    },
    {
      name: "6-Month Authority & Conversion",
      price: "$2,499",
      duration: "6 Months",
      popular: true,
      features: [
        { name: "Comprehensive SEO Audit", included: true },
        { name: "Keyword Research (100+ keywords)", included: true },
        { name: "On-Page SEO (25 pages)", included: true },
        { name: "Technical SEO Optimization", included: true },
        { name: "Content Strategy & Creation (12 blog posts)", included: true },
        { name: "Advanced Link Building (40 backlinks)", included: true },
        { name: "Local SEO Optimization", included: true },
        { name: "Conversion Rate Optimization", included: true },
        { name: "Competitor Analysis", included: true },
        { name: "Bi-weekly Performance Reports", included: true },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary rounded-full mb-6">
                <span className="text-primary font-semibold">AI-Powered SEO</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                See How AI Boosts Your <span className="text-primary">SEO</span>
                <br />
                <span className="text-primary">in Real-Time</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your search visibility with cutting-edge AI technology. Our advanced SEO solutions combine
                machine learning, predictive analytics, and automation to accelerate your growth and dominate search
                rankings.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Free Analysis
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-lg p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">AI Analytics Dashboard</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">Live</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Organic Traffic</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">+156%</p>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Search className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Keywords</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">247</p>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Domain Authority</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">68</p>
                  </div>

                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Conversions</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">+94%</p>
                  </div>
                </div>

                <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 rounded-lg flex items-end justify-around p-4">
                  <div className="w-8 bg-primary/60 rounded-t" style={{ height: "40%" }} />
                  <div className="w-8 bg-primary/70 rounded-t" style={{ height: "60%" }} />
                  <div className="w-8 bg-primary/80 rounded-t" style={{ height: "75%" }} />
                  <div className="w-8 bg-primary rounded-t" style={{ height: "90%" }} />
                  <div className="w-8 bg-primary rounded-t" style={{ height: "100%" }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI-Powered SEO Services */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">AI-Powered Solutions</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our AI-Powered <span className="text-primary">SEO Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore All Services
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">Our Methodology</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">SEO Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven 4-step framework that delivers measurable results and sustainable growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO ROI Calculator */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">ROI Estimator</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Calculate Your <span className="text-primary">SEO ROI</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how much revenue you could generate with improved search rankings
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">SEO ROI Calculator</h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="monthlyVisitors" className="text-foreground mb-2 block">
                    Current Monthly Visitors
                  </Label>
                  <Input
                    id="monthlyVisitors"
                    type="number"
                    placeholder="e.g., 5000"
                    value={calculatorInputs.monthlyVisitors}
                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, monthlyVisitors: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="conversionRate" className="text-foreground mb-2 block">
                    Current Conversion Rate (%)
                  </Label>
                  <Input
                    id="conversionRate"
                    type="number"
                    placeholder="e.g., 2.5"
                    value={calculatorInputs.conversionRate}
                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, conversionRate: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="averageOrderValue" className="text-foreground mb-2 block">
                    Average Order Value ($)
                  </Label>
                  <Input
                    id="averageOrderValue"
                    type="number"
                    placeholder="e.g., 150"
                    value={calculatorInputs.averageOrderValue}
                    onChange={(e) =>
                      setCalculatorInputs({
                        ...calculatorInputs,
                        averageOrderValue: e.target.value,
                      })
                    }
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="currentRanking" className="text-foreground mb-2 block">
                    Current Average Ranking
                  </Label>
                  <Input
                    id="currentRanking"
                    type="number"
                    placeholder="e.g., 15"
                    value={calculatorInputs.currentRanking}
                    onChange={(e) => setCalculatorInputs({ ...calculatorInputs, currentRanking: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Calculate Potential ROI
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Your Potential Growth</h3>

              <div className="h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-lg flex items-end justify-center p-8">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Enter your data to see potential revenue increase</p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="text-muted-foreground">Projected Monthly Traffic</span>
                  <span className="text-2xl font-bold text-primary">--</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="text-muted-foreground">Estimated Monthly Revenue</span>
                  <span className="text-2xl font-bold text-primary">--</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <span className="text-muted-foreground">Potential ROI</span>
                  <span className="text-2xl font-bold text-primary">--</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real SEO Transformation */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">Success Story</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Real <span className="text-primary">SEO Transformation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See the dramatic results we achieved for a client in just 6 months
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Before SEO</h3>
              <div className="space-y-4">
                {transformationMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg">
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className="text-xl font-bold text-foreground">{metric.before}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">After SEO</h3>
              <div className="space-y-4">
                {transformationMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg">
                    <span className="text-muted-foreground">{metric.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-foreground">{metric.after}</span>
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold">
                        {metric.increase}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View Full Case Study
            </Button>
          </div>
        </div>
      </section>

      {/* How AI Changes SEO */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">Innovation</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How <span className="text-primary">AI Changes SEO</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the cutting-edge AI technologies revolutionizing search engine optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-colors group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free SEO Checklist */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary rounded-2xl p-12 text-center"
          >
            <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get Your <span className="text-primary">Free SEO Checklist</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download our comprehensive SEO checklist and start optimizing your website today. Includes 50+ actionable
              items to improve your search rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-background border-border" />
              <Button size="lg" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Download Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">Pricing Plans</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your <span className="text-primary">SEO Package</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Flexible pricing options designed to fit your business needs and budget
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card border-2 rounded-2xl p-8 ${
                  pkg.popular ? "border-primary" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground">/ {pkg.duration}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature.name}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    pkg.popular ? "bg-primary hover:bg-primary/90" : "bg-background hover:bg-muted border border-border"
                  }`}
                  size="lg"
                >
                  Get Started Now
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Need a custom solution? We can create a tailored package for your specific needs.
            </p>
            <Link2 href="/contact" className="text-primary hover:underline font-semibold">
              Contact us for custom pricing
            </Link2>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
