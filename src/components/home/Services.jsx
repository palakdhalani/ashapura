import React, { useRef } from 'react';
import { ArrowUpRight, BarChart3, Shield, FileText, PieChart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Financial planning',
    description: 'Plan, invest, and grow your wealth with expert financial guidance.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Risk Management',
    description: 'Comprehensive strategies to manage financial, and strategic risks.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Tax Advisory',
    description: 'Minimize liabilities through smart, tailored tax solutions.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Asset Management',
    description: 'Grow and protect wealth with expert asset management strategies.',
    icon: PieChart,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Wealth Strategy',
    description: 'Customized approaches to build and preserve long-term generational wealth.',
    icon: ArrowUpRight,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Services = () => {
  const ref = useRef(null);
  const carouselRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section ref={ref} className="py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="md:w-2/3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1  text-md font-bold tracking-wider text-red-500 uppercase mb-6"
            >
              What We Do
            </motion.span>

            <motion.h2
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {}
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
            >
              {"Covering the Full Spectrum of Global ".split(" ").map((word, index) => (
                <motion.span
                  key={`w1-${index}`}
                  variants={blurVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
              <span className="text-secondary inline-block">
                {"Financial Services".split(" ").map((word, index) => (
                  <motion.span
                    key={`w2-${index}`}
                    variants={blurVariants}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/#services" className="flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform duration-300 inline-flex">
              View all services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Cards Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pt-6 pb-8 -mt-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative overflow-hidden bg-white/10 border border-white/5 backdrop-blur-sm p-8 lg:p-10 rounded-lg flex flex-col min-h-[380px] md:min-h-[450px] w-[280px] md:w-[330px] shrink-0 snap-start group hover:border-transparent transition-all cursor-pointer"
            >
              {/* Hover Background Image */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="absolute inset-0 bg-primary/50 z-10"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full w-full">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors shrink-0">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed min-h-[80px] group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Area: Line and Nav Buttons */}
        <div className="flex justify-between items-center mt-12">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-secondary rounded-full w-full max-w-[200px]"
          ></motion.div>

          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
