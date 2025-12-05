"use client"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactUsPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
              <div className="text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Contact Us</span>
              </div>
            </div>
          </div>
        </section>

        {/* How Can We Help Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Can We Help?</h2>
                <p className="text-muted-foreground">
                  Talk to one of our consultants today and learn how to start leveraging your business.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 hidden md:block">
                GET IN TOUCH
              </Button>
            </div>

            {/* Contact Cards with Corner Decorations */}
            <div className="relative">
              {/* Top-left corner decoration */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-l-4 border-t-4 border-primary pointer-events-none"></div>

              {/* Bottom-right corner decoration */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-primary pointer-events-none"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Phone Card */}
                <div className="bg-card border border-border p-8 text-center">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">+880 1957159967</h3>
                  <p className="text-sm text-muted-foreground">
                    We answer by phone from Saturday to Thursday from 10:00 am until 6:00 pm.
                  </p>
                </div>

                {/* Email Card */}
                <div className="bg-card border border-border p-8 text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">digitalinventorybd@gmail.com</h3>
                  <p className="text-sm text-muted-foreground">
                    We will respond to your email within 8 hours on business days.
                  </p>
                </div>

                {/* Address Card */}
                <div className="bg-card border border-border p-8 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Block A, Lalmatia, 
                    <br />
                    Dhaka-1207, Bangladesh
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Come visit us from Saturday to Thursday from 10:30 am to 5:00 pm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-0">
          <div className="w-full h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7303.521023058645!2d90.36843895!3d23.75591815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x63d71bd1278e9b47%3A0xa310e5aca2034021!2sDigital%20Inventory%20BD!5e0!3m2!1sen!2sbd!4v1764952993543!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Talk?</h2>
              <p className="text-muted-foreground">
                Talk to one of our consultants today and learn how to start leveraging your business.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-card border border-border text-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-card border border-border text-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-card border border-border text-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-card border border-border text-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-card border border-border text-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>

              {/* Captcha Placeholder */}
              <div className="bg-card border border-border p-8 flex items-center justify-center">
                <p className="text-muted-foreground">CAPTCHA Verification</p>
              </div>

              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg">
                Send
              </Button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
