import React, { useRef, useState } from 'react';
import { 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight,
  Layers,
  Recycle,
  Sparkles,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  // Metal Scrap
  {
    id: 'copper-scrap',
    title: 'Copper Scrap',
    category: 'Metal Scrap',
    tag: 'Highest Demand',
    description: 'High-purity copper scrap including Millberry bright copper wire, copper pipes, radiator tubes, and industrial turnings. Minimum 99% copper purity, ideal for smelting and foundry ingots.',
    specs: ['99%+ Copper Purity', 'Millberry / Tube / Wire', 'Moisture Free & Unalloyed', 'Custom Baling Available'],
    image: '/images/copper-scrap.jpg',
    inquiryMsg: 'Hello Shree Ashapura Enterprise, I want an inquiry regarding Copper Scrap supply.'
  },
  {
    id: 'iron-scrap',
    title: 'Iron Scrap',
    category: 'Metal Scrap',
    tag: 'Heavy Melting',
    description: 'Premium heavy melting scrap (HMS 1 & 2), cast iron foundry scrap, structural steel offcuts, and industrial shredded iron. Sourced from certified fabrication units and dismantling projects.',
    specs: ['HMS 1 & 2 Standards', 'Cast Iron & Structural', 'Certified Weighbridge Slips', 'Bulk Volume Supply'],
    image: '/images/iron-scrap.jpg',
    inquiryMsg: 'Hello Shree Ashapura Enterprise, I want an inquiry regarding Iron Scrap supply.'
  },
  {
    id: 'aluminum-scrap',
    title: 'Aluminum Scrap',
    category: 'Metal Scrap',
    tag: 'Industrial Grade',
    description: 'Sorted aluminum extrusion profiles (alloy 6063), clean aluminum sheets (3000/5000 series), aluminum wire scrap, and clean engine casings with low iron contamination.',
    specs: ['6063 Extrusion / Sheets', 'Low Contamination (<1%)', 'High Melt Recovery Yield', 'Loose or Bundled'],
    image: '/images/aluminum-scrap.jpg',
    inquiryMsg: 'Hello Shree Ashapura Enterprise, I want an inquiry regarding Aluminum Scrap supply.'
  },

  // Waste Paper
  {
    id: 'old-news-paper-scrap',
    title: 'Old News Paper Scrap (ONP)',
    category: 'Waste Paper',
    tag: 'Recycling Grade',
    description: 'Sorted Old Newspaper Scrap (ONP) collected and baled for paper manufacturing mills, duplex board production, egg tray manufacturing, and recycled pulp applications.',
    specs: ['Sorted Clean ONP Grade', 'High Density Bales', 'Low Moisture Content', 'Direct Mill Delivery'],
    image: '/images/newspaper-scrap.jpg',
    inquiryMsg: 'Hello Shree Ashapura Enterprise, I want an inquiry regarding Old News Paper Scrap (ONP).'
  },

  // Other Products
  {
    id: 'news-paper-scrap',
    title: 'News Paper Scrap',
    category: 'Other Products',
    tag: 'Bulk Supply',
    description: 'Over-issue newsprint scrap (OINP), unprinted newsprint roll cut-offs, and fresh printer waste. Free from non-paper contaminants, ensuring superior fiber yield for paper recycling units.',
    specs: ['Over-Issue Newsprint (OINP)', 'Long Fiber Strength', 'Mechanically Baled', 'Available in Bulk Lots'],
    image: '/images/newspaper-scrap.jpg',
    inquiryMsg: 'Hello Shree Ashapura Enterprise, I want an inquiry regarding News Paper Scrap supply.'
  },
  {
    id: 'waste-paper-craft',
    title: 'Waste Paper Craft',
    category: 'Other Products',
    tag: 'Packaging Grade',
    description: 'Industrial Kraft paper scrap, corrugated box cuttings (OCC), brown cardboard waste, and craft paper reels. Ideal for kraft paper mills, packaging material manufacturers, and carton plants.',
    specs: ['OCC Corrugated Scrap', 'Brown Kraft Clippings', 'Heavy Compressed Bales', 'Consistent Supply'],
    image: '/images/waste-paper-craft.jpg',
    inquiryMsg: 'Hello Shree Ashapura Enterprise, I want an inquiry regarding Waste Paper Craft supply.'
  }
];

const categories = ['All Products', 'Metal Scrap', 'Waste Paper', 'Other Products'];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const carouselRef = useRef(null);

  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="py-24 bg-primary text-white overflow-hidden" id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="md:w-3/4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 text-md font-bold tracking-wider text-secondary uppercase mb-4"
            >
              Our Products
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight"
            >
              High-Grade <span className="text-secondary">Metal Scrap & Waste Paper</span> Products
            </motion.h2>
            <p className="text-white/70 text-base md:text-lg mt-4 max-w-2xl">
              Reliable sourcing, strict quality grading, and certified weighbridge dispatch for foundries, smelters, and recycling mills.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/#contact" className="flex items-center gap-2 bg-secondary text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-secondary-hover transition-colors shadow-lg hover:scale-105 transform duration-300 inline-flex shrink-0">
              Get Quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/25'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pt-2 pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full snap-x snap-mandatory"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative overflow-hidden bg-white/10 border border-white/15 backdrop-blur-md rounded-3xl flex flex-col w-[300px] sm:w-[350px] md:w-[380px] shrink-0 snap-start justify-between group hover:border-secondary transition-all shadow-xl hover:shadow-2xl"
              >
                {/* Product Image Box */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-3xl">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
                  
                  {/* Category & Tag Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-primary/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                      {product.category}
                    </span>
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      {product.tag}
                    </span>
                  </div>

                  <a 
                    href={`https://wa.me/919375077636?text=${encodeURIComponent(product.inquiryMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-secondary backdrop-blur-md flex items-center justify-center text-white transition-all shadow-md group-hover:scale-110"
                    title="Inquire on WhatsApp"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl font-bold mb-2.5 text-white group-hover:text-secondary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Specifications List */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={`https://wa.me/919375077636?text=${encodeURIComponent(product.inquiryMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs sm:text-sm font-bold text-secondary hover:text-white transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      Inquire on WhatsApp
                    </a>

                    <Link
                      to="/#contact"
                      className="text-xs font-semibold px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      Send RFQ
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Navigation & Controls */}
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm text-white/60 font-medium">
              Showing {filteredProducts.length} of {products.length} products
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')} 
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all cursor-pointer text-white"
              aria-label="Previous Product"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all cursor-pointer text-white"
              aria-label="Next Product"
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
