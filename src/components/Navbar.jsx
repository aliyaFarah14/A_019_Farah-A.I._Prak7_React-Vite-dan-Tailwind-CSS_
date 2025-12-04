import React from 'react'
import logo from '../assets/logo/logobiru.png'

const Navbar = () => {
  const navItems = ['Home', 'About', 'Program', 'Project', 'Testimonials', 'Contact']

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="Ruang Ekspresi Logo" className="w-10 h-10" />
          <div className="text-xs font-semibold leading-tight">
            <div>ruang</div>
            <div>ekspresi</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
    </header>
  )
}

export default Navbar