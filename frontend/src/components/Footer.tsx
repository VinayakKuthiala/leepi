import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/leepi_english_logo.jpg" 
                alt="Leepi Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Leepi is your trusted platform for quality products and exceptional service. 
              We're committed to bringing you the best shopping experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300">
                  Kolkata, 700001, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-300">+000000000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-300">info@leepi.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Leepi. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer