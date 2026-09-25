import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="flex-grow pt-12 md:pt-20 pb-24 px-6 md:px-12 lg:px-24 container mx-auto">
      <span className="inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wider text-secondary uppercase bg-[#F8F9FA] mb-4">
        About Us
      </span>
      <motion.h1 
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {}
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 md:mb-12"
      >
        {"About Shree Ashapura Enterprise".split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={blurVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
      
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-[2rem] overflow-hidden mb-12 md:mb-16 shadow-lg">
        <img 
          src="/images/hero-facility.jpg" 
          alt="Shree Ashapura Enterprise Recycling Facility" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-24">
        <div className="md:col-span-7 lg:col-span-8">
          <motion.h2 
            variants={{
              visible: { transition: { staggerChildren: 0.03 } },
              hidden: {}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-tight md:leading-snug"
          >
            {"Shree Ashapura Enterprise was built with a clear purpose: to deliver dependable, high-grade scrap metal and waste paper recycling solutions.".split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={blurVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        <div className="md:col-span-5 lg:col-span-4 flex items-end">
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Headquartered in Aji GIDC, Rajkot, Gujarat, we bridge major industrial foundries, steel mills, and paper manufacturers with premium graded Copper, Iron, Aluminum, and Waste Paper materials.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
