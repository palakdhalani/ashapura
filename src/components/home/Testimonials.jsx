import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Ramesh Patel",
    role: "Foundry Owner, Rajkot",
    text: "Shree Ashapura Enterprise has been our go-to supplier for Cast Iron and Copper scrap. Their grading accuracy, low melting loss, and prompt weighbridge slips make trade completely reliable.",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: 2,
    name: "Suresh Shah",
    role: "Paper Mill Procurement Head, Morbi",
    text: "We procure Old Newspaper (ONP) and Kraft paper scrap in regular monthly bulk lots. The baling density and moisture control consistently meet our strict recycling requirements.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Jayesh Vora",
    role: "Aluminum Extrusions & Castings, Gujarat",
    text: "Spot pricing transparency and zero hassle in logistics. Sourcing high-purity aluminum scrap from Shree Ashapura Enterprise has significantly optimized our furnace yield.",
    image: "https://randomuser.me/api/portraits/men/68.jpg"
  }
];

const Testimonials = () => {
  const carouselRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress);
    }
  };

  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 450;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white text-primary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 container">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <Quote className="w-12 h-12 text-secondary mb-6 rotate-180 opacity-80" />
          <motion.h2 
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
          >
            {"Why Clients Rely on Us".split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={blurVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 leading-relaxed text-sm md:text-base max-w-xl"
          >
            Our clients trust us to deliver expert financial strategies, wealth management, and seamless loan solutions that ensure long-term growth and success.
          </motion.p>
        </div>

        {/* Carousel Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div 
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-[#F8F9FA] p-8 md:p-12 rounded-2xl flex flex-col w-[85vw] sm:w-[320px] md:w-auto md:min-w-[450px] lg:min-w-[550px] shrink-0 snap-start shadow-sm border border-gray-100"
              >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div>
                      <h4 className="font-bold text-primary text-sm md:text-base">{testimonial.name}</h4>
                      <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-secondary opacity-50" />
                </div>
                
                {/* Card Body */}
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-primary leading-snug mt-auto">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
          {/* Progress Bar */}
          <div className="w-full max-w-2xl h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-secondary transition-all duration-300 ease-out rounded-full"
              style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
            ></div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4 shrink-0">
            <button 
              onClick={() => scroll('left')} 
              className="w-12 h-12 flex items-center justify-center bg-[#F8F9FA] hover:bg-secondary text-primary hover:text-white rounded-md transition-colors shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-12 h-12 flex items-center justify-center bg-[#F8F9FA] hover:bg-secondary text-primary hover:text-white rounded-md transition-colors shadow-sm"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
