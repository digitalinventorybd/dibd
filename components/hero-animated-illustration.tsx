"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Video, Users } from "lucide-react"

export function HeroAnimatedIllustration() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 blur-3xl opacity-50" />
      </div>
    )
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 blur-3xl opacity-50"
      />

      {/* Main Circle Background */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-red-950/40 to-neutral-900/60"
      />

      {/* Astronaut Character */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Astronaut Body */}
          <div className="relative w-32 h-40">
            {/* Helmet */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-neutral-300">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-400/30 to-transparent rounded-full" />
              {/* Visor Reflection */}
              <div className="absolute top-6 left-4 w-8 h-3 bg-white/80 rounded-full blur-sm" />
            </div>

            {/* Body */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-20 h-24 bg-white rounded-2xl">
              {/* Red Chest Panel */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-8 bg-red-500 rounded-lg" />
              {/* Control Buttons */}
              <div className="absolute top-14 left-1/2 -translate-x-1/2 flex gap-1">
                <div className="w-2 h-2 bg-neutral-400 rounded-full" />
                <div className="w-2 h-2 bg-neutral-400 rounded-full" />
                <div className="w-2 h-2 bg-neutral-400 rounded-full" />
              </div>
            </div>

            {/* Arms */}
            <div className="absolute top-24 left-0 w-8 h-16 bg-white rounded-full transform -rotate-12" />
            <div className="absolute top-24 right-0 w-8 h-16 bg-white rounded-full transform rotate-12" />

            {/* Megaphone */}
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -right-8 top-20"
            >
              <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-red-500 rounded-r-full relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-800 rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Studio Light */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -left-20 top-10"
      >
        <motion.div
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="w-3 h-32 bg-neutral-700 rounded-full" />
          <div className="w-16 h-16 bg-neutral-800 rounded-lg relative -mt-2">
            <div className="absolute inset-2 bg-yellow-400 rounded-lg opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/50 to-transparent rounded-lg" />
          </div>
        </motion.div>
      </motion.div>

      {/* Director Chair */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -left-10 bottom-20"
      >
        <div className="relative w-16 h-20">
          <div className="absolute bottom-0 w-full h-12 bg-red-600 rounded-t-lg" />
          <div className="absolute bottom-12 w-full h-8 bg-red-600/80" />
          <div className="absolute bottom-0 left-0 w-1 h-16 bg-neutral-800" />
          <div className="absolute bottom-0 right-0 w-1 h-16 bg-neutral-800" />
        </div>
      </motion.div>

      {/* Floating Card 1 - Main Message */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-0 top-10"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotateY: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-neutral-800/90 to-neutral-900/90 backdrop-blur-md p-6 rounded-2xl border border-red-500/20 shadow-2xl max-w-xs"
        >
          <p className="text-white text-sm leading-relaxed">
            Leveraging Digital Marketing to{" "}
            <span className="text-red-500 font-semibold">Engage, Enhance, and Generate</span> Results.
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Card 2 - Video Marketing */}
      <motion.div
        initial={{ x: 100, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute right-16 top-40"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotateZ: [0, -3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="bg-gradient-to-br from-neutral-800/95 to-neutral-900/95 backdrop-blur-md p-5 rounded-xl border border-red-500/20 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
              <Video className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-12 h-2 bg-red-400 rounded-full" />
              <div className="w-16 h-2 bg-neutral-600 rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Card 3 - Analytics */}
      <motion.div
        initial={{ x: 100, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute right-8 bottom-32"
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotateZ: [0, 2, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="bg-gradient-to-br from-neutral-800/95 to-neutral-900/95 backdrop-blur-md p-5 rounded-xl border border-red-500/20 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <div className="flex-1">
              <div className="h-8 bg-purple-500/30 rounded" />
            </div>
            <div className="flex-1">
              <div className="h-8 bg-red-500/30 rounded" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Small Robot/Camera */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute left-10 bottom-20"
      >
        <motion.div
          animate={{
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="w-10 h-10 bg-neutral-700 rounded-lg relative">
            <div className="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-neutral-900 rounded-full" />
            </div>
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-neutral-800 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -30, 0],
            x: Math.sin(i) * 20,
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 bg-red-500/50 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
        />
      ))}
    </div>
  )
}
