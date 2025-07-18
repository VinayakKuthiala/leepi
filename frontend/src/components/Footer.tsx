import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const SocialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: <Facebook size={20} />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <Twitter size={20} />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <Instagram size={20} />,
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com",
      icon: <Linkedin size={20} />,
    },
  ];

  const QuickLinks = [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    // {
    //   label: "Blog",
    //   href: "#",
    // },
    {
      label: "FAQ",
      href: "/about#faq",
    },
  ];

  const Legal = [
    {
      label: "Terms & Conditions",
      href: "/terms-and-conditions",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Refund Policy",
      href: "#",
    },
    {
      label: "Shipping Policy",
      href: "#",
    },
  ];

  const ContactInfo = [
    {
      label: "Kolkata, 700001, India",
      icon: <MapPin size={16} className="text-gray-400" />,
    },
    {
      label: "+000000000",
      icon: <Phone size={16} className="text-gray-400" />,
    },
    {
      label: "info@leepi.com",
      icon: <Mail size={16} className="text-gray-400" />,
    },
  ];

  const BottomFooter = [
    {
      label: "Terms & Conditions",
      href: "/terms-and-conditions",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    // {
    //   label: "Sitemap",
    //   href: "/sitemap",
    // },
  ];
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
              Leepi is your trusted platform for quality products and
              exceptional service. We're committed to bringing you the best
              shopping experience.
            </p>
            <div className="flex space-x-4">
              {SocialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {QuickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    prefetch={true}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              {Legal.map((link) => (
                <li key={link.label}>
                  <Link
                    prefetch={true}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              {ContactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-2">
                  {info.icon}
                  <span className="text-gray-300">{info.label}</span>
                </div>
              ))}
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
              {BottomFooter.map((link) => (
                <Link
                  prefetch={true}
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
