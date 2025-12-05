"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const servicesItems = [
    {
      label: "Digital Marketing",
      href: "/services/digital-marketing",
      subItems: [
        { label: "VSMM", href: "/services/digital-marketing/vsmm" },
        { label: "SEO", href: "/services/digital-marketing/seo" },
      ]
    },
    {
      label: "Web Design & Development",
      href: "/services/web-design-development",
      subItems: [
        { label: "Landing Page", href: "/services/web-design-development/landing-page" },
      ]
    },
    {
      label: "Creatives Solution",
      href: "/services/creatives-solution",
      subItems: [
        { label: "GoPack", href: "/services/creatives-solution/gopack" },
        { label: "Brand Identity", href: "/services/creatives-solution/branding" },
        { label: "UI/UX Design", href: "/services/creatives-solution/ui-ux" },
        { label: "Graphic Design", href: "/services/creatives-solution/graphic-design" },
      ]
    },
    {
      label: "Video Production",
      href: "/services/video-production",
      subItems: [
        { label: "Funelkit", href: "/services/video-production/funelkit" },
        { label: "Corporate Videos", href: "/services/video-production/corporate" },
        { label: "Commercial Ads", href: "/services/video-production/commercial" },
        { label: "Animation", href: "/services/video-production/animation" },
      ]
    },
  ]

  const getInTouchItems = [
    { label: "Contact Us", href: "/contact" },
    { label: "Book Consultation", href: "/consultation" },
    { label: "Get Quote", href: "/quote" },
  ]

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
    setHoveredService(null)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-60 bg-primary/80 backdrop-blur-sm text-white text-center py-2 px-4 text-sm animate-fade-in-up">
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
                className="text-primary"
              >
                <path d="M20 5L35 15L35 25L20 35L5 25L5 15L20 5Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M20 15L28 20L20 25L12 20L20 15Z" fill="currentColor" />
              </svg>
              <span className="text-xl font-bold">
                digital<span className="text-primary">inventory</span>bd
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-primary transition-colors duration-300">
                Home
              </Link>
              
              {/* Services Dropdown - FIXED */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => {
                  setActiveDropdown(null)
                  setHoveredService(null)
                }}
              >
                <div className="flex items-center">
                  <Link 
                    href="/services"
                    className="flex items-center gap-1 text-white hover:text-primary transition-colors duration-300 py-2"
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                  </Link>
                </div>
                
                {/* Dropdown Container - Connected to trigger with gap */}
                {activeDropdown === "services" && (
                  <div 
                    className="absolute left-0 top-full pt-2" // Added pt-2 to connect with trigger
                    onMouseLeave={() => {
                      setActiveDropdown(null)
                      setHoveredService(null)
                    }}
                  >
                    <div className="w-80 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl">
                      <div className="py-2">
                        <div className="px-4 py-2 text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">
                          All Services
                        </div>
                        {servicesItems.map((service) => (
                          <div 
                            key={service.href}
                            className="relative group/item"
                            onMouseEnter={() => setHoveredService(service.label)}
                            onMouseLeave={() => setHoveredService(null)}
                          >
                            <Link
                              href={service.href}
                              className="flex items-center justify-between px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors duration-200"
                            >
                              <span>{service.label}</span>
                              <ChevronRight size={16} className={`transition-opacity ${hoveredService === service.label ? "opacity-100" : "opacity-0"}`} />
                            </Link>
                            
                            {/* Sub-items dropdown - Only show if subItems exist */}
                            {hoveredService === service.label && service.subItems && service.subItems.length > 0 && (
                              <div 
                                className="absolute left-full top-0 ml-[-8px] w-64 bg-black/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-10"
                                onMouseEnter={() => setHoveredService(service.label)}
                                onMouseLeave={() => setHoveredService(null)}
                              >
                                <div className="py-2">
                                  <div className="px-4 py-2 text-xs font-semibold text-white/60 uppercase tracking-wider">
                                    {service.label}
                                  </div>
                                  {service.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.href}
                                      href={subItem.href}
                                      className="block px-4 py-2 text-white hover:text-primary hover:bg-white/5 transition-colors duration-200"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/portfolio" className="text-white hover:text-primary transition-colors duration-300">
                Portfolio
              </Link>
              
              <Link href="/case-study" className="text-white hover:text-primary transition-colors duration-300">
                Case Study
              </Link>
              
              <Link href="/blog" className="text-white hover:text-primary transition-colors duration-300">
                Blog
              </Link>

              {/* Get In Touch Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("getInTouch")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 text-white hover:text-primary transition-colors duration-300 py-2"
                >
                  Get In Touch
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === "getInTouch" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "getInTouch" && (
                  <div 
                    className="absolute right-0 top-full pt-2"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="w-56 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl">
                      <div className="py-2">
                        {getInTouchItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                        <div className="border-t border-white/10 mt-2 pt-2">
                          <button
                            className="w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-white/5 transition-colors duration-200"
                            onClick={() => {
                              document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })
                            }}
                          >
                            Quick Consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 animate-fade-in-up">
              <div className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="px-4 py-3 text-white hover:text-primary transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
                
                {/* Mobile Services Dropdown - FIXED */}
                <div className="border-t border-white/10">
                  <div className="flex items-center justify-between">
                    {/* Separated the link and dropdown toggle */}
                    <div className="flex-1">
                      <Link
                        href="/services"
                        className="block px-4 py-3 text-white hover:text-primary transition-colors duration-300"
                        onClick={(e) => {
                          // Only navigate if not expanding dropdown
                          if (!activeDropdown || activeDropdown !== "mobileServices") {
                            handleLinkClick()
                          }
                        }}
                      >
                        Services
                      </Link>
                    </div>
                    <button 
                      className="px-4 py-3"
                      onClick={() => toggleDropdown("mobileServices")}
                    >
                      <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === "mobileServices" ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {activeDropdown === "mobileServices" && (
                    <div className="ml-6 border-l border-white/10">
                      {servicesItems.map((service) => (
                        <div key={service.href}>
                          <div className="flex items-center justify-between">
                            <Link
                              href={service.href}
                              className="block px-4 py-2 text-white/80 hover:text-primary transition-colors duration-300 flex-1"
                              onClick={handleLinkClick}
                            >
                              {service.label}
                            </Link>
                            {service.subItems && service.subItems.length > 0 && (
                              <button 
                                className="px-4 py-2"
                                onClick={() => toggleDropdown(`mobileSubService_${service.label}`)}
                              >
                                <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === `mobileSubService_${service.label}` ? "rotate-180" : ""}`} />
                              </button>
                            )}
                          </div>
                          
                          {/* Mobile Sub-items */}
                          {activeDropdown === `mobileSubService_${service.label}` && service.subItems && (
                            <div className="ml-6 border-l border-white/10">
                              {service.subItems.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-white/60 hover:text-primary transition-colors duration-300"
                                  onClick={handleLinkClick}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/portfolio"
                  className="px-4 py-3 text-white hover:text-primary transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Portfolio
                </Link>
                
                <Link
                  href="/case-study"
                  className="px-4 py-3 text-white hover:text-primary transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Case Study
                </Link>
                
                <Link
                  href="/blog"
                  className="px-4 py-3 text-white hover:text-primary transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  Blog
                </Link>

                {/* Mobile Get In Touch Dropdown */}
                <div className="border-t border-white/10">
                  <button 
                    className="w-full text-left px-4 py-3 text-white hover:text-primary transition-colors duration-300 flex items-center justify-between"
                    onClick={() => toggleDropdown("mobileGetInTouch")}
                  >
                    Get In Touch
                    <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === "mobileGetInTouch" ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === "mobileGetInTouch" && (
                    <div className="ml-6 border-l border-white/10">
                      {getInTouchItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-white/80 hover:text-primary transition-colors duration-300"
                          onClick={handleLinkClick}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <button
                        className="block w-full text-left px-4 py-2 text-white/80 hover:text-primary transition-colors duration-300"
                        onClick={() => {
                          handleLinkClick()
                          document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })
                        }}
                      >
                        Quick Consultation
                      </button>
                    </div>
                  )}
                </div>

                <div className="px-4 pt-4 border-t border-white/10">
                  <Button
                    className="bg-primary hover:bg-red-600 text-white w-full"
                    onClick={() => {
                      handleLinkClick()
                      document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}