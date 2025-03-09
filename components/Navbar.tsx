// components/Navbar.tsx
"use client"
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          August Languepin
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none text-white"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-blue-200 transition">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-200 transition">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-200 transition">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-200 transition">
            Contact
          </Link>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-blue-700">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-blue-200 transition py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-200 transition py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/projects" className="text-white hover:text-blue-200 transition py-2" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-200 transition py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar