import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Phone, Globe, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slideData = [
  {
    id: 1,
    title: '1. TRUSTED PARTNER',
    heading: 'Digital Wealth\nConsultant',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80'
  },
  {
    id: 2,
    title: '2. FINANCIAL SERVICES',
    heading: 'Expert Financial\nServices',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80'
  },
  {
    id: 3,
    title: '3. FINANCIAL INVESTING',
    heading: 'Strategic Investing\nSolutions',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80'
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const currentData = slideData.find(s => s.id === activeSlide);

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 3 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Dynamic Background Image with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentData.id}
            src={currentData.image}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-primary/20 z-0"></div>
      </div>

      <div className="flex-1 flex flex-col justify-between px-4 md:px-8 lg:px-24 py-12 relative w-full mx-auto h-full z-10">

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center w-full pt-10">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentData.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-bold text-white leading-[1.1] md:leading-[0.95] tracking-tight mb-10 drop-shadow-lg whitespace-pre-wrap md:whitespace-pre"
            >
              {currentData.heading}
            </motion.h1>
          </AnimatePresence>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <button className="flex items-center gap-3 bg-secondary text-white pl-6 pr-2 py-2 rounded-full text-lg font-medium hover:bg-secondary/90 transition-transform hover:scale-105 group shadow-xl">
              Financial Services
              <span className="bg-white/20 p-2.5 rounded-full group-hover:bg-white/30 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </span>
            </button>
          </motion.div>

          {/* Bottom Left Text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24 lg:mt-32"
          >
            <div className="w-12 h-0.5 bg-secondary mb-4 shadow-sm"></div>
            <p className="text-white font-bold tracking-[0.2em] text-xs uppercase max-w-[280px] leading-relaxed drop-shadow-md">
              How do you merge two financial service players?
            </p>
          </motion.div>
        </div>

        {/* Social Icons - Right Edge */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-5 z-20"
        >
          <a href="#" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-red-500 hover:bg-secondary hover:border-secondary transition-all shadow-lg hover:scale-110">
            <Mail className="w-4 h-4 font-ultrabold" />
          </a>
          <a href="#" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-red-500 hover:bg-secondary hover:border-secondary transition-all shadow-lg hover:scale-110">
            <Phone className="w-4 h-4" />
          </a>
          <a href="#" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-red-500 hover:bg-secondary hover:border-secondary transition-all shadow-lg hover:scale-110">
            <Globe className="w-4 h-4" />
          </a>
          <a href="#" className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-red-500 hover:bg-secondary hover:border-secondary transition-all shadow-lg hover:scale-110">
            <MessageCircle className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Bottom Carousel Navigation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="absolute bottom-8 right-4 md:bottom-12 md:right-12 lg:right-24 z-20 flex flex-wrap gap-6 md:gap-12 items-end justify-end w-full max-w-3xl pr-4 md:pr-12"
        >
          {slideData.map((slide) => (
            <div
              key={slide.id}
              className="flex flex-col gap-3 cursor-pointer group flex-1 max-w-[200px]"
              onClick={() => setActiveSlide(slide.id)}
            >
              <span className={`font-bold text-xs tracking-wider transition-colors ${activeSlide === slide.id ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
                {slide.title}
              </span>
              <div className="h-1 w-full bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary transition-all duration-700 ease-out"
                  style={{ width: activeSlide === slide.id ? '100%' : '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </>
  );
};

export default Hero;
