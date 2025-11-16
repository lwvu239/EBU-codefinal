import React, { useState, useEffect } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/10 backdrop-blur-md border-b border-white/20'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <span className={isScrolled ? 'text-primary' : 'text-white'}>Vibe</span>
            <span className="text-secondary">Print</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-secondary'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-secondary'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-secondary'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-secondary'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('customize')}
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-secondary'
              }`}
            >
              Customize
            </button>
            <button
              onClick={() => scrollToSection('preview')}
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-secondary'
              }`}
            >
              3D Preview
            </button>
            <button
              onClick={() => scrollToSection('payment')}
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-secondary'
              }`}
            >
              Payment
            </button>
            <button
              onClick={() => scrollToSection('points-orders')}
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-secondary'
              }`}
            >
              Points & Orders
            </button>
            <button
              onClick={() => scrollToSection('customize')}
              className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 font-semibold flex items-center gap-2 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-blue-600'
                  : 'bg-secondary text-white hover:bg-orange-600'
              }`}
            >
              <ShoppingCart size={18} />
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white rounded-lg shadow-lg p-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('customize')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              Customize
            </button>
            <button
              onClick={() => scrollToSection('preview')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              3D Preview
            </button>
            <button
              onClick={() => scrollToSection('payment')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              Payment
            </button>
            <button
              onClick={() => scrollToSection('points-orders')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              Points & Orders
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-primary transition-colors font-medium py-2"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('customize')}
              className="block w-full bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all font-semibold text-center"
            >
              Order Now
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

