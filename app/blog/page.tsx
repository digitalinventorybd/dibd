"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Marketing in Bangladesh",
    excerpt:
      "Explore emerging trends and technologies shaping the digital marketing landscape in Bangladesh for 2025 and beyond.",
    image: "/digital-marketing-future-technology.jpg",
    category: "Digital Marketing",
    author: "DigitalInventoryBD Team",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "10 SEO Strategies That Actually Work in 2025",
    excerpt: "Discover proven SEO techniques that drive organic traffic and improve search rankings for businesses.",
    image: "/seo-strategy-analytics-dashboard.jpg",
    category: "SEO",
    author: "Sarah Ahmed",
    date: "Jan 12, 2025",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Social Media Marketing: A Complete Guide",
    excerpt: "Master social media marketing with actionable strategies for Facebook, Instagram, LinkedIn, and more.",
    image: "/social-media-marketing-strategy.jpg",
    category: "Social Media",
    author: "Rakib Hasan",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 4,
    title: "How to Build a High-Converting Landing Page",
    excerpt: "Learn the essential elements of landing pages that convert visitors into customers.",
    image: "/landing-page-mockup.png",
    category: "Web Design",
    author: "Nadia Khan",
    date: "Jan 8, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Content Marketing Best Practices for B2B",
    excerpt: "Effective content marketing strategies specifically tailored for B2B businesses.",
    image: "/content-marketing-b2b-strategy.jpg",
    category: "Content Marketing",
    author: "Imran Ali",
    date: "Jan 5, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Email Marketing Automation: Complete Tutorial",
    excerpt: "Automate your email campaigns and nurture leads with these proven automation strategies.",
    image: "/email-marketing-dashboard.png",
    category: "Email Marketing",
    author: "Fatima Rahman",
    date: "Jan 3, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 7,
    title: "Google Ads vs Facebook Ads: Which is Better?",
    excerpt: "A comprehensive comparison to help you choose the right advertising platform for your business.",
    image: "/google-ads-vs-facebook-ads-comparison.jpg",
    category: "Paid Advertising",
    author: "Kamal Uddin",
    date: "Dec 30, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 8,
    title: "Building Brand Authority Through Thought Leadership",
    excerpt: "Establish your brand as an industry leader with these thought leadership strategies.",
    image: "/brand-authority-thought-leadership.jpg",
    category: "Branding",
    author: "Aisha Siddiqui",
    date: "Dec 28, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 9,
    title: "Video Marketing Trends You Can't Ignore",
    excerpt: "Stay ahead with the latest video marketing trends that are transforming digital engagement.",
    image: "/video-marketing-trends-production.jpg",
    category: "Video Marketing",
    author: "Mehedi Hasan",
    date: "Dec 25, 2024",
    readTime: "5 min read",
    featured: false,
  },
]

const categories = [
  "All",
  "Digital Marketing",
  "SEO",
  "Social Media",
  "Web Design",
  "Content Marketing",
  "Email Marketing",
  "Paid Advertising",
  "Branding",
  "Video Marketing",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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
                Our Blog
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Insights & <span className="text-red-500">Expertise</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends, tips, and strategies in digital marketing from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Featured <span className="text-red-500">Articles</span>
            </h2>
            <p className="text-gray-400">Our most popular and impactful content</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zinc-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-xs rounded-full font-medium">Featured</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span className="px-2 py-1 bg-gray-800 rounded text-red-500">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-400">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-4 flex items-center gap-2 text-red-500 text-sm font-semibold group-hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Recent <span className="text-red-500">Posts</span>
            </h2>
            <p className="text-gray-400">Latest insights from our digital marketing experts</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zinc-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span className="px-2 py-1 bg-gray-800 rounded text-red-500">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500" />
                      <span className="text-xs text-gray-400">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="mt-4 flex items-center gap-2 text-red-500 text-sm font-semibold group-hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Stay Updated with <span className="text-red-500">Our Newsletter</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Get the latest digital marketing insights, tips, and strategies delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-zinc-900 border border-gray-800 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
