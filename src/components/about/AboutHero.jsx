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
        Discover
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
        {"About Us".split(" ").map((word, index) => (
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
          src="https://images.unsplash.com/photo-1555992828-ca4dbe41d294?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80" 
          alt="Acropolis in Greece" 
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
            {"Armonia Excursions was created with a clear purpose: to make every journey comfortable, seamless, and memorable.".split(" ").map((word, index) => (
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
            With many years of experience in the tourism industry, our team is driven by a passion for hospitality and a deep love for Greece.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
