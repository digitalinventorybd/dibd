"use client"

import { Facebook, Linkedin, Twitter, Youtube, Instagram, Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Access */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Access</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Our Concerns & Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Give Feedback
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Artist/Model List
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Quotation Request
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Our Clients
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Ad Scope Tool
                </a>
              </li>
            </ul>
          </div>

          {/* Know More */}
          <div>
            <h3 className="text-xl font-bold mb-4">Know More</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                >
                  Career
                  <span className="bg-primary text-white text-xs px-2 py-0.5 rounded">Hiring</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Company Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+880 1957159967</li>
              <li>digitalinventorybd@gmail.com</li>
              <li className="pt-2">Block A, Lalmatia, Dhaka-1207, Bangladesh</li>
            </ul>
          </div>

          {/* Registered Member */}
     
        </div>

        {/* Social Media */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">digitalinventorybd © 2016-2025</p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow:</span>
              <div className="flex items-center gap-3">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  <Music size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
