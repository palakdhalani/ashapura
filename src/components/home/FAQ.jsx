import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What types of metal scrap do you supply?",
    answer: "We supply high-purity Copper Scrap (Millberry wire, copper pipes, turnings), Iron Scrap (Heavy Melting Scrap HMS 1 & 2, cast iron, structural steel), and Aluminum Scrap (6063 extrusions, sheets, wire scrap) in custom or bulk lots."
  },
  {
    question: "What grades of waste paper do you trade?",
    answer: "We provide Old News Paper Scrap (ONP), News Paper Scrap (OINP / unprinted newsprint waste), and Waste Paper Craft (OCC corrugated cardboard and kraft clippings) baled for paper mills."
  },
  {
    question: "How are scrap weight and quality verified?",
    answer: "All shipments undergo weighbridge measurement on government-certified digital scales with instant weight slips. We inspect purity, moisture, and grading before dispatch to guarantee minimal melting loss."
  },
  {
    question: "Do you supply bulk orders across Gujarat and India?",
    answer: "Yes, we handle daily and monthly contract supplies for foundries, induction furnaces, and paper recycling plants across Rajkot, Morbi, Ahmedabad, Gujarat, and pan-India."
  },
  {
    question: "How can I get current spot rates or request a quotation?",
    answer: "You can reach us directly at +91 93750 77636, connect with us on WhatsApp, or submit an inquiry using our online form for real-time market quotations."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24  text-primary">
      <div className="container mx-auto px-6 lg:px-8 container">
        
        {/* Main White Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Headings & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 py-1 rounded-full text-xl font-bold tracking-wider text-secondary uppercase mb-8"
                >FAQ
                 
                </motion.span>
                
                <motion.h2 
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                    hidden: {}
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl lg:text-5xl font-medium leading-[1.15] text-primary"
                >
                  {"Frequently Asked Questions".split(" ").map((word, index) => (
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

              {/* Bottom CTA Area */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-16 lg:mt-32"
              >
                <h4 className="text-xl font-bold text-primary mb-3">Still have a question?</h4>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                  Don't worry we're free for consultation. Contact us and our team will get back to you shortly.
                </p>
                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Link to="/#contact" className="flex items-center gap-3 bg-secondary text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg group inline-flex">
                    Contact Us
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                </Link>
            </motion.div>
              </motion.div>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-7">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                        isOpen ? 'bg-white border-2 border-primary shadow-md' : 'bg-[#F8F9FA] border-2 border-transparent hover:border-gray-200'
                      }`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <div className="p-6 md:p-8 flex items-start gap-4 md:gap-6">
                        {/* Number */}
                        <span className={`text-sm md:text-base font-bold shrink-0 mt-1 ${isOpen ? 'text-primary' : 'text-gray-400'}`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        
                        <div className="flex-1">
                          {/* Question */}
                          <div className="flex justify-between items-center gap-4">
                            <h3 className={`text-base md:text-lg lg:text-xl font-bold transition-colors ${isOpen ? 'text-primary' : 'text-primary/90'}`}>
                              {faq.question}
                            </h3>
                            <button className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-white text-primary shadow-sm hover:bg-gray-100'}`}>
                              {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </button>
                          </div>
                          
                          {/* Answer */}
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                <p className="pt-4 text-gray-500 text-sm md:text-base leading-relaxed pr-8">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
