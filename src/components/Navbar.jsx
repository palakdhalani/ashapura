import React from 'react';
import { Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Services', 'Industries', 'Insights', 'Pages'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 flex items-center justify-between py-6 px-6 lg:px-30 w-full px-5 mx-auto text-white"
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
        <button className="text-white hover:text-secondary transition-colors">
          <Menu className="w-7 h-7" />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
