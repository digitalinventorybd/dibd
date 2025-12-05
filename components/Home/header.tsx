"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  const servicesMenu = [
    {
      title: "Digital Marketing",
      href: "/services/digital-marketing",
      submenu: [
        { title: "VSMM", href: "/services/digital-marketing/vsmm" },
        { title: "SEO Next", href: "/services/digital-marketing/seo-next" },
        { title: "GoPack", href: "/services/digital-marketing/gopack" },
        { title: "FunelKit", href: "/services/digital-marketing/funelkit" },
        { title: "IMBD SmartTrack", href: "/services/digital-marketing/smarttrack" },
      ],
    },
    {
      title: "Web Design & Development",
      href: "/services/web-design-development",
      submenu: [{ title: "Landing Page", href: "/services/web-design-development/landing-page" }],
    },
    {
      title: "Creatives Solution",
      href: "/services/creative-solutions",
      submenu: [],
    },
    {
      title: "Video Production",
      href: "/services/video-production",
      submenu: [
        { title: "TVC/OVC", href: "/services/video-production/tvc-ovc" },
        { title: "Explainer Video", href: "/services/video-production/explainer" },
        { title: "Animation & Motion", href: "/services/video-production/animation" },
      ],
    },
  ]

  const toggleMobileSubService = (index: number) => {
    const dropdownName = `mobile-service-${index}`
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
    setHoveredServiceIndex(null)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary/90 backdrop-blur-sm text-primary-foreground text-center py-2 px-4 text-sm animate-fade-in-up">
        <p className="font-medium">⚠️ {t("banner.underDevelopment")}</p>
      </div>
      <header className="fixed top-10 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
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
              <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300">
                {t("nav.home")}
              </Link>

              {/* Services Dropdown - Desktop - FIXED HOVER */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => {
                  setActiveDropdown(null)
                  setHoveredServiceIndex(null)
                }}
              >
                <div className="relative">
                  <button className="text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1 py-2">
                    {t("nav.services")}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                
                {/* Dropdown Container with connecting gap */}
                {activeDropdown === "services" && (
                  <div 
                    className="absolute left-0 top-full pt-2" // Added pt-2 to bridge the gap
                    onMouseEnter={() => setActiveDropdown("services")}
                    onMouseLeave={() => {
                      setActiveDropdown(null)
                      setHoveredServiceIndex(null)
                    }}
                  >
                    <div className="w-72 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg animate-fade-in-up">
                      {servicesMenu.map((service, index) => (
                        <div
                          key={index}
                          className="relative group"
                          onMouseEnter={() => setHoveredServiceIndex(index)}
                          onMouseLeave={() => setHoveredServiceIndex(null)}
                        >
                          <div className="flex items-center justify-between hover:bg-primary/5 transition-colors duration-200">
                            <Link
                              href={service.href}
                              className={`flex-1 px-4 py-3 text-foreground hover:text-primary transition-all duration-200 ${
                                index === 0 ? "rounded-t-lg" : ""
                              }`}
                            >
                              {service.title}
                            </Link>
                            {service.submenu.length > 0 && (
                              <ChevronRight className="w-4 h-4 mr-3 text-muted-foreground" />
                            )}
                          </div>

                          {/* Submenu - Desktop */}
                          {service.submenu.length > 0 && hoveredServiceIndex === index && (
                            <div 
                              className="absolute left-full top-0 ml-[-8px] w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg animate-fade-in-up z-10"
                              onMouseEnter={() => setHoveredServiceIndex(index)}
                              onMouseLeave={() => setHoveredServiceIndex(null)}
                            >
                              {service.submenu.map((subitem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subitem.href}
                                  className={`block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 ${
                                    subIndex === 0 ? "rounded-t-lg" : ""
                                  } ${subIndex === service.submenu.length - 1 ? "rounded-b-lg" : ""}`}
                                >
                                  {subitem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors duration-300">
                {t("nav.portfolio")}
              </Link>
              <Link href="/case-study" className="text-foreground hover:text-primary transition-colors duration-300">
                {t("nav.caseStudy")}
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors duration-300">
                {t("nav.blog")}
              </Link>
              <Link href="/contact-us" className="text-foreground hover:text-primary transition-colors duration-300">
                {t("nav.contact")}
              </Link>
              <LanguageSwitcher />
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("nav.getInTouch")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 animate-fade-in-up">
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="px-4 py-3 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  {t("nav.home")}
                </Link>

                {/* Services Dropdown - Mobile */}
                <div className="border-t border-border/50">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === "mobile-services" ? null : "mobile-services")}
                    className="w-full px-4 py-3 text-foreground hover:text-primary transition-colors duration-300 flex items-center justify-between"
                  >
                    <span>{t("nav.services")}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "mobile-services" ? "rotate-180" : ""}`}
                    />
                  </button>

                  {activeDropdown === "mobile-services" && (
                    <div className="flex flex-col pl-6 border-l border-border/30 ml-4">
                      {servicesMenu.map((service, index) => (
                        <div key={index} className="border-b border-border/30 last:border-b-0">
                          <div className="flex items-center justify-between">
                            <Link
                              href={service.href}
                              className="flex-1 px-4 py-3 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm"
                              onClick={handleLinkClick}
                            >
                              {service.title}
                            </Link>
                            {service.submenu.length > 0 && (
                              <button
                                onClick={() => toggleMobileSubService(index)}
                                className="px-4 py-3 text-foreground/60 hover:text-primary transition-colors duration-300"
                              >
                                <ChevronDown
                                  className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === `mobile-service-${index}` ? "rotate-180" : ""}`}
                                />
                              </button>
                            )}
                          </div>

                          {/* Submenu - Mobile */}
                          {service.submenu.length > 0 && activeDropdown === `mobile-service-${index}` && (
                            <div className="flex flex-col pl-6 border-l border-border/30 ml-4">
                              {service.submenu.map((subitem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subitem.href}
                                  className="px-4 py-2 text-foreground/60 hover:text-primary transition-colors duration-300 text-sm"
                                  onClick={handleLinkClick}
                                >
                                  {subitem.title}
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
                  className="px-4 py-3 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  {t("nav.portfolio")}
                </Link>
                <Link
                  href="/case-study"
                  className="px-4 py-3 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  {t("nav.caseStudy")}
                </Link>
                <Link
                  href="/blog"
                  className="px-4 py-3 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  {t("nav.blog")}
                </Link>
                <Link
                  href="/contact-us"
                  className="px-4 py-3 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  {t("nav.contact")}
                </Link>
                
                <div className="px-4 py-3 flex items-center gap-3 border-t border-border/50">
                  <span className="text-foreground text-sm">Language:</span>
                  <LanguageSwitcher />
                </div>
                
                <div className="px-4 pt-2 border-t border-border/50">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                    onClick={() => {
                      handleLinkClick()
                      document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {t("nav.getInTouch")}
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

export default Header