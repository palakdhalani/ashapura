import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const navLinks = ['Home', 'About', 'Services', 'Industries', 'Insights', 'Pages'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 flex items-center justify-between py-6 px-4 md:px-8 lg:px-24 w-full mx-auto text-white"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold cursor-pointer group">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6 text-secondary group-hover:rotate-12 transition-transform duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5h16v14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 15l4-4 4 4 4-4 4 4" />
        </svg>
        Finzo
      </div>

      {/* Center Links */}
      <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-1.5">
        {navLinks.map((link, index) => (
          <a
            key={link}
            href="#"
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${index === 0
              ? 'bg-white/20 text-white'
              : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="text-white hover:text-secondary transition-colors hidden sm:block">
          <Search className="w-5 h-5" />
        </button>
        <button className="hidden md:flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-secondary/90 transition-transform hover:scale-105 shadow-lg">
          Contact Us
          <div className="w-1.5 h-1.5 bg-primary rounded-full ml-1"></div>
        </button>
        <button 
          className="text-white hover:text-secondary transition-colors lg:hidden"
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
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (i * 0.1) }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-secondary text-3xl font-bold transition-colors"
              >
                {link}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + (navLinks.length * 0.1) }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-secondary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-transform mt-6 shadow-lg"
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
