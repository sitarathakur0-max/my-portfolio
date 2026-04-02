'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // SCROLL EFFECT - always active from the beginning
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // NAV ITEMS
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="relative group">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110
                ${scrolled 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg' 
                  : pathname === '/'
                    ? 'bg-white/20 backdrop-blur-sm border-2 border-white'
                    : 'bg-white/20 backdrop-blur-sm border-2 border-white'
                }`}>
                <span className={`text-2xl font-black ${scrolled ? 'text-white' : 'text-gray-800'}`}>
                  ST
                </span>
              </div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-gray-800'
                }`}>
                  Sitara Thakur
                </span>
                <span className={`text-xs transition-colors duration-300 ${
                  scrolled ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Web Developer
                </span>
              </div>
            </div>
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
              scrolled ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-white'
            }`} />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group
                  ${pathname === item.path
                    ? scrolled
                      ? 'text-blue-700 bg-blue-50 shadow-inner'
                      : 'text-black bg-white/20 backdrop-blur-sm'
                    : scrolled
                      ? 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-white/20'
                  }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                    scrolled ? 'bg-blue-600' : 'bg-blue-600'
                  }`} />
                )}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 px-5 py-2 text-sm font-medium rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg
                ${scrolled
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
            >
              Resume
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
              scrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-gray-800 hover:bg-gray-100'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE NAV */}
        <div
          className={`md:hidden fixed inset-x-4 top-24 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform ${
            isMenuOpen
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
          }`}
        >
          <nav className="p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block py-3 px-4 font-medium rounded-xl transition-all duration-200
                  ${pathname === item.path
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 py-3 px-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header