"use client"

import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Mail } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CaseStudyPage() {
  const stats = [
    { value: "+320%", label: "ROI INCREASE" },
    { value: "5.2M", label: "IMPRESSIONS" },
    { value: "3x", label: "LEAD GROWTH" },
  ]

  const metrics = [
    { label: "TOTAL REVENUE", value: "$2.4M", change: "↑ 320% increase", color: "text-red-500" },
    { label: "CONVERSION RATE", value: "8.7%", change: "↑ 158% increase", color: "text-green-500" },
    { label: "AVG. CTR", value: "12.4%", change: "↑ 215% increase", color: "text-green-500" },
    { label: "TOTAL LEADS", value: "18.5K", change: "↑ 287% increase", color: "text-green-500" },
  ]

  const floatingIcons = [
    { Icon: TrendingUp, delay: 0, position: "top-20 right-32" },
    { Icon: Mail, delay: 0.2, position: "top-80 right-20" },
    { Icon: BarChart3, delay: 0.4, position: "bottom-40 right-28" },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20">
        {/* Animated Background Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [Math.random() * 100, Math.random() * 100 + 50],
              y: [Math.random() * 100, Math.random() * 100 + 50],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-6 py-2 border-2 border-red-500 rounded-full text-red-500 text-sm font-semibold tracking-wider">
                  CASE STUDY
                </span>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Transforming Digital Presence <span className="text-red-500">Into Measurable Growth</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 text-lg leading-relaxed"
              >
                Discover how we helped our client achieve remarkable results through strategic digital marketing,
                data-driven campaigns, and innovative solutions.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-500 text-white rounded-full font-semibold text-lg hover:bg-red-600 transition-colors"
              >
                View Case Studies
              </motion.button>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-3 gap-8 pt-12"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-red-500">{stat.value}</div>
                    <div className="text-xs text-gray-400 tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Analytics Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, delay, position }, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${position} w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-500/30 hidden lg:flex`}
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: delay,
                  }}
                >
                  <Icon className="w-8 h-8 text-red-500" />
                </motion.div>
              ))}

              {/* Analytics Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">Performance Analytics</h3>
                  <span className="text-sm text-gray-400">Last 6 Months</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="bg-black/50 border border-zinc-800 rounded-xl p-6 space-y-3 relative overflow-hidden group hover:border-red-500/50 transition-colors"
                    >
                      {/* Top Red Line */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="text-xs text-gray-400 tracking-wider">{metric.label}</div>
                      <div className="text-3xl font-bold text-red-500">{metric.value}</div>
                      <div className={`text-xs ${metric.color} font-medium`}>{metric.change}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
