import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/image-removebg-preview.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const sections = ['services', 'industries', 'testimonials', 'faq', 'contact'];
        let currentSection = '';
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              currentSection = section;
              break;
            }
          }
        }
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);
  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/#services' },
    { name: 'Industries', path: '/#industries' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'FAQ', path: '/#faq' },
  ];

  const isActive = (path) => {
    if (location.pathname !== '/') {
      return location.pathname === path;
    }
    
    if (path === '/') {
      return !activeSection && window.scrollY < 200;
    }
    
    if (path.startsWith('/#')) {
      const sectionName = path.substring(2);
      if (activeSection) {
        return activeSection === sectionName;
      }
      return location.hash === '#' + sectionName;
    }
    
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-8 lg:px-24 mx-auto transition-all duration-300 ${
        isScrolled ? 'py-4 bg-white text-primary shadow-md' : 'py-6 bg-transparent text-white'
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center cursor-pointer group z-50">
        <img src={logoImg} alt="Finzo Logo" className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
      </Link>

      {/* Center Links */}
      <div className={`hidden lg:flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-1.5 ${isScrolled ? 'bg-black/5' : 'bg-white/10'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${isActive(link.path)
              ? (isScrolled ? 'bg-primary/10 text-primary font-bold' : 'bg-white/20 text-white font-bold')
              : (isScrolled ? 'text-primary/70 hover:bg-primary/5 hover:text-primary' : 'text-white/80 hover:bg-white/10 hover:text-white')
              }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* <button className={`transition-colors hidden sm:block ${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'}`}>
          <Search className="w-5 h-5" />
        </button> */}
        <Link to="/#contact" className="hidden md:flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-secondary/90 transition-transform hover:scale-105 shadow-lg">
          Contact Us
          <div className="w-1.5 h-1.5 bg-white rounded-full ml-1"></div>
        </Link>
        <button 
          className={`transition-colors lg:hidden ${isScrolled ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-primary flex flex-col justify-center items-center p-6 gap-6 shadow-2xl overflow-y-auto"
          >
            {/* Close Button Inside Menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-secondary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1) }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-bold transition-colors block ${isActive(link.path) ? 'text-secondary' : 'text-white hover:text-secondary'}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <Link 
              to="/#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + (navLinks.length * 0.1) }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-secondary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-transform mt-6 shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
