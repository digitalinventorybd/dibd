"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-red-500/90 backdrop-blur-sm text-white text-center py-2 px-4 text-sm animate-fade-in-up">
        <p className="font-medium">⚠️ This website is under development</p>
      </div>
      <header className="fixed top-10 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 animate-fade-in-up">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-red-500"
              >
                <path d="M20 5L35 15L35 25L20 35L5 25L5 15L20 5Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 15L28 20L20 25L12 20L20 15Z" fill="currentColor" />
              </svg>
              <span className="text-xl font-bold">
                digital<span className="text-red-500">inventory</span>bd
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-red-500 transition-colors duration-300">
                Home
              </Link>
              <Link href="/services" className="text-white hover:text-red-500 transition-colors duration-300">
                Services
              </Link>
              <Link href="/portfolio" className="text-white hover:text-red-500 transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="/case-study" className="text-white hover:text-red-500 transition-colors duration-300">
                Case Study
              </Link>
              <Link href="/blog" className="text-white hover:text-red-500 transition-colors duration-300">
                Blog
              </Link>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 animate-fade-in-up">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-white hover:text-red-500 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:text-red-500 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-white hover:text-red-500 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/case-study"
                  className="text-white hover:text-red-500 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Study
                </Link>
                <Link
                  href="/blog"
                  className="text-white hover:text-red-500 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white w-full"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
