"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function LandingPageService() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    businessType: "",
    landingPageGoal: "",
    targetAudience: "",
    designPreference: [] as string[],
    budget: "",
    timeline: "",
    additionalInfo: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      designPreference: prev.designPreference.includes(value)
        ? prev.designPreference.filter((item) => item !== value)
        : [...prev.designPreference, value],
    }))
  }

  const portfolioItems = [
    { id: 1, image: "/landing-page-portfolio-1.jpg", title: "E-commerce Landing" },
    { id: 2, image: "/landing-page-portfolio-2.jpg", title: "SaaS Product Landing" },
    { id: 3, image: "/landing-page-portfolio-3.jpg", title: "Corporate Landing" },
    { id: 4, image: "/landing-page-portfolio-4.jpg", title: "App Launch Landing" },
    { id: 5, image: "/landing-page-portfolio-5.jpg", title: "Event Landing" },
    { id: 6, image: "/landing-page-portfolio-6.jpg", title: "Product Launch Landing" },
    { id: 7, image: "/landing-page-portfolio-7.jpg", title: "Service Landing" },
    { id: 8, image: "/landing-page-portfolio-8.jpg", title: "Portfolio Landing" },
    { id: 9, image: "/landing-page-portfolio-9.jpg", title: "Restaurant Landing" },
    { id: 10, image: "/landing-page-portfolio-10.jpg", title: "Real Estate Landing" },
    { id: 11, image: "/landing-page-portfolio-11.jpg", title: "Fashion Landing" },
    { id: 12, image: "/landing-page-portfolio-12.jpg", title: "Tech Startup Landing" },
    { id: 13, image: "/landing-page-portfolio-13.jpg", title: "Food Delivery Landing" },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Comparison Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* With Landing Page */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">WITH LANDING PAGE</h2>
              </div>
              <div className="relative bg-card border border-border rounded-lg p-8 h-[500px]">
                <Image
                  src="/with-landing-page-illustration.jpg"
                  alt="With Landing Page"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Without Landing Page */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-primary mb-2">WITHOUT LANDING PAGE</h2>
              </div>
              <div className="relative bg-card border border-primary/30 rounded-lg p-8 h-[500px]">
                <Image
                  src="/without-landing-page-illustration.jpg"
                  alt="Without Landing Page"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <Link
              href="#portfolio"
              className="px-6 py-3 bg-card border border-border text-foreground rounded-md hover:bg-muted transition-colors"
            >
              গ্লোবাল মার্কেট এর ল্যান্ডিং পেইজ
            </Link>
            <Link
              href="#portfolio"
              className="px-6 py-3 bg-card border border-border text-foreground rounded-md hover:bg-muted transition-colors"
            >
              গ্লোবাল মার্কেট গুলো পেইজ
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Need Landing Page Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[600px]"
            >
              <Image
                src="/mobile-landing-page-mockup.jpg"
                alt="Landing Page Mobile Mockup"
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">তোর ল্যান্ডিং পেইজ এর প্রয়োজন?</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  আপনার ব্যবসার জন্য একটি কার্যকর ল্যান্ডিং পেইজ অত্যন্ত গুরুত্বপূর্ণ। এটি আপনার টার্গেট অডিয়েন্সকে সঠিক তথ্য প্রদান করে এবং
                  তাদের গ্রাহকে রূপান্তরিত করতে সাহায্য করে। একটি পেশাদার ল্যান্ডিং পেইজ আপনার ব্র্যান্ডের বিশ্বাসযোগ্যতা বৃদ্ধি করে এবং বিক্রয়
                  বাড়াতে সাহায্য করে।
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  ডিজিটাল মার্কেটিং ক্যাম্পেইনের সফলতার জন্য একটি অপ্টিমাইজড ল্যান্ডিং পেইজ অপরিহার্য। এটি আপনার বিজ্ঞাপন খরচের রিটার্ন বাড়ায়
                  এবং কনভার্শন রেট উন্নত করে। একটি ভাল ল্যান্ডিং পেইজ ভিজিটরদের আকৃষ্ট করে এবং তাদের কাঙ্ক্ষিত অ্যাকশন নিতে উৎসাহিত করে।
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  আমরা আপনার ব্যবসায়িক লক্ষ্য অনুযায়ী কাস্টমাইজড ল্যান্ডিং পেইজ ডিজাইন করি যা আপনার টার্গেট অডিয়েন্সের সাথে সংযোগ স্থাপন করে
                  এবং তাদের গ্রাহকে পরিণত করে। প্রফেশনাল ডিজাইন, দ্রুত লোডিং, এবং মোবাইল রেস্পন্সিভ ল্যান্ডিং পেইজ পেতে আমাদের সাথে
                  যোগাযোগ করুন।
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quotation Form Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              কাস্টমাইজেবল ল্যান্ডিং পেইজ নিতে আবশ্যিক পুরন করুন
            </h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-8 space-y-6"
          >
            {/* Name and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground mb-2">নাম *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>
              <div>
                <label className="block text-foreground mb-2">ফোন নাম্বার *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                  placeholder="আপনার ফোন নাম্বার"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-foreground mb-2">ইমেইল *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                placeholder="আপনার ইমেইল ঠিকানা"
              />
            </div>

            {/* Three columns */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-foreground mb-2">বর্তমান ওয়েবসাইট লিংক দিন</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                  placeholder="www.example.com"
                />
              </div>
              <div>
                <label className="block text-foreground mb-2">কোন ধরনের ব্যবসার জন্য করবেন</label>
                <input
                  type="text"
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                  placeholder="ব্যবসার ধরন"
                />
              </div>
              <div>
                <label className="block text-foreground mb-2">ল্যান্ডিং পেইজের উদ্দেশ্য বাবা লক্ষ কি</label>
                <input
                  type="text"
                  value={formData.landingPageGoal}
                  onChange={(e) => setFormData({ ...formData, landingPageGoal: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                  placeholder="উদ্দেশ্য লিখুন"
                />
              </div>
            </div>

            {/* Target Audience */}
            <div>
              <label className="block text-foreground mb-2">টার্গেট অডিয়েন্স কারা</label>
              <input
                type="text"
                value={formData.targetAudience}
                onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                placeholder="আপনার টার্গেট অডিয়েন্স সম্পর্কে লিখুন"
              />
            </div>

            {/* Design Preferences - Checkboxes */}
            <div>
              <label className="block text-foreground mb-4">ডিজাইন স্টাইল এর পছন্দসই</label>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "আধুনিক (Modern)",
                  "মিনিমাল (Minimal)",
                  "বোল্ড এবং রঙিন (Colorful)",
                  "পেশাদার (Professional)",
                  "ক্রিয়েটিভ (Creative)",
                  "অন্যান্য",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.designPreference.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                      className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                    />
                    <span className="text-foreground">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget and Timeline */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground mb-2">বাজেট</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="">বাজেট নির্বাচন করুন</option>
                  <option value="10000-25000">১০,০০০ - ২৫,০০০ টাকা</option>
                  <option value="25000-50000">২৫,০০০ - ৫০,০০০ টাকা</option>
                  <option value="50000-100000">৫০,০০০ - ১,০০,০০০ টাকা</option>
                  <option value="100000+">১,০০,০০০+ টাকা</option>
                </select>
              </div>
              <div>
                <label className="block text-foreground mb-2">সময়সীমা</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="">সময়সীমা নির্বাচন করুন</option>
                  <option value="7days">৭ দিন</option>
                  <option value="15days">১৫ দিন</option>
                  <option value="30days">৩০ দিন</option>
                  <option value="flexible">নমনীয়</option>
                </select>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label className="block text-foreground mb-2">অতিরিক্ত তথ্য বা বিশেষ প্রয়োজনীয়তা</label>
              <textarea
                rows={5}
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
                placeholder="আপনার প্রয়োজনীয়তা সম্পর্কে বিস্তারিত লিখুন..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
            >
              Request Quotation
            </button>
          </motion.form>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
            <Link
              href="#portfolio"
              className="px-6 py-3 bg-card border border-border text-foreground rounded-md hover:bg-muted transition-colors"
            >
              গ্লোবাল মার্কেট এর ল্যান্ডিং পেইজ
            </Link>
            <Link
              href="#portfolio"
              className="px-6 py-3 bg-card border border-border text-foreground rounded-md hover:bg-muted transition-colors"
            >
              গ্লোবাল মার্কেট গুলো পেইজ
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">আমাদের গ্যালারি দেখুন</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
