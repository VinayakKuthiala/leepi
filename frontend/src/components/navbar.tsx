"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2 flex space-x-1">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
          {/* <span className="font-bold text-lg text-gray-800">YourCompany</span> */}
          <Link prefetch={true} href="/">
            <Image
              src="/leepi_hindi_logo_trimmed.jpg"
              alt="leepi Logo"
              width={130}
              height={0}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu items */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium font-sans">
          <Link prefetch={true} href="/">
            Home
          </Link>
          <Link prefetch={true} href="/about">
            About
          </Link>
          <Link prefetch={true} href="/services">
            Services
          </Link>
          <Link prefetch={true} href="/contact">
            Contact
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-gray-700 font-medium px-2 flex flex-col">
          <Link prefetch={true} href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link prefetch={true} href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link
            prefetch={true}
            href="/services"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            prefetch={true}
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
