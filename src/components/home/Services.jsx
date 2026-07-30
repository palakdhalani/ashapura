import React, { useRef } from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  HeartPulse, 
  TrendingUp, 
  Car, 
  Bike, 
  Users, 
  Lock, 
  GraduationCap, 
  Sun, 
  PieChart, 
  FileText, 
  Coins, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Term Life Insurance',
    description: "Comprehensive financial protection for your family's future with high life coverage at affordable premiums.",
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Health Insurance',
    description: 'Complete medical cover protecting you and your family against rising hospitalization expenses.',
    icon: HeartPulse,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Investment Plans',
    description: 'Tailored wealth creation strategies designed to grow your capital and achieve key financial milestones.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Car Insurance',
    description: 'Comprehensive auto insurance coverage protecting your vehicle against accidents, theft, and third-party damages.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '2 Wheeler Insurance',
    description: 'Fast, hassle-free insurance coverage for your two-wheeler with instant policy issuance and cashless claims.',
    icon: Bike,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Family Health Insurance',
    description: 'Single floater health plan giving all family members cashless hospitalization and preventive checkups.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Guaranteed Return Plans',
    description: 'Risk-free financial products offering fixed, guaranteed capital growth and tax-free returns.',
    icon: Lock,
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Child Saving Plans',
    description: "Targeted savings and insurance solutions to secure your child's higher education and dream career.",
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Retirement Plans',
    description: 'Robust pension and annuity plans ensuring a steady income stream for a comfortable post-retirement life.',
    icon: Sun,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mutual Fund',
    description: 'Professionally managed fund portfolios customized to your risk profile and long-term financial goals.',
    icon: PieChart,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Bond',
    description: 'Secure government and corporate bond instruments delivering regular fixed income with capital safety.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'SIP (Systematic Investment)',
    description: 'Disciplined monthly investment option in mutual funds allowing power of compounding with low starting capital.',
    icon: Coins,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Services = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 360;
      carouselRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="md:w-2/3">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 text-md font-bold tracking-wider text-red-500 uppercase mb-4"
            >
              What We Do
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight"
            >
              Comprehensive & Trusted <span className="text-secondary">Financial & Insurance Services</span>
            </motion.h2>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/#contact" className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform duration-300 inline-flex shrink-0">
              Inquire Now
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pt-4 pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full snap-x snap-mandatory"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative overflow-hidden bg-white/10 border border-white/10 backdrop-blur-md p-8 rounded-2xl flex flex-col min-h-[380px] md:min-h-[410px] w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start justify-between group hover:border-white/30 transition-all cursor-pointer shadow-lg"
            >
              {/* Hover Background Image Overlay */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <div className="absolute inset-0 bg-primary/85 z-10"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Card Header & Icon */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <Link to="/#contact" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/20 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Card Body Text */}
              <div className="relative z-10 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed min-h-[75px] group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation & Controls */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm text-white/60 font-medium">Use arrows to browse all 12 services</span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')} 
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all cursor-pointer text-white"
              aria-label="Previous Service"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all cursor-pointer text-white"
              aria-label="Next Service"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
