import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteImage } from '../hooks/useSiteImage';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const location = useLocation();
  const logoUrl = useSiteImage('settings', 'logoUrl', '/images/company-logo.png');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Company', href: '#', hasDropdown: true, children: [
      { name: 'About Us', href: '/about' },
      { name: 'Career', href: '/career' },
      { name: 'Gallery', href: '/gallery' },
    ]},
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <nav className="fixed w-full z-50 bg-primary-dark/90 backdrop-blur-md">
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 2xl:px-32">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoUrl} alt="Gravity Tech World" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setCompanyOpen(true)}
                onMouseLeave={() => link.hasDropdown && setCompanyOpen(false)}
              >
                {link.hasDropdown ? (
                  <button className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                    companyOpen ? 'text-accent' : 'text-text-secondary hover:text-white'
                  }`}>
                    {link.name} <ChevronDown size={14} className={`transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link to={link.href} className={`text-sm font-medium transition-colors ${
                    isActive(link.href) ? 'text-accent' : 'text-text-secondary hover:text-white'
                  }`}>
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && companyOpen && (
                  <div className="absolute top-full left-0 pt-2 w-48 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary border border-card-border rounded-xl shadow-2xl overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setCompanyOpen(false)}
                          className="block px-4 py-3 text-sm text-text-secondary hover:text-accent hover:bg-primary-dark/50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="hidden lg:flex items-center">
            <p className="text-sm text-white">
              One Tap To <span className="text-accent font-semibold underline underline-offset-4 decoration-accent">Unlock Your Life</span>
            </p>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none cursor-pointer">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-dark border-t border-card-border"
          >
            <div className="px-4 py-4 space-y-1">
              <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-text-secondary hover:text-accent">Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-text-secondary hover:text-accent">About Us</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 text-text-secondary hover:text-accent">Services</Link>
              <Link to="/career" onClick={() => setIsOpen(false)} className="block py-2 text-text-secondary hover:text-accent">Career</Link>
              <Link to="/gallery" onClick={() => setIsOpen(false)} className="block py-2 text-text-secondary hover:text-accent">Gallery</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 text-text-secondary hover:text-accent">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
