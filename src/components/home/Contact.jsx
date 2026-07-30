import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

import InquiryForm from './InquiryForm';

const Contact = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-[#F8F9FA] text-primary">
      <div className="container mx-auto px-6 lg:px-8 container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-1.5 rounded-full text-md font-bold tracking-wider text-red-500 uppercase mb-8"
          >
            Contact Us
          </motion.span>
          
          <motion.h2 
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-medium mb-16 max-w-4xl leading-tight"
          >
            {"Get in touch, let us know how we can help".split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={blurVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Contact Info Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
          >
            {/* Email Card */}
            <motion.div variants={fadeUpVariants} className="bg-white p-6 rounded-2xl flex items-center gap-5 shadow-sm border border-gray-50 hover:border-secondary/20 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                <Mail className="text-secondary w-5 h-5 group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 mb-1 font-medium">Email Address</p>
                <p className="font-bold text-sm md:text-base group-hover:text-secondary transition-colors">official@vwdc.in</p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div variants={fadeUpVariants} className="bg-white p-6 rounded-2xl flex items-center gap-5 shadow-sm border border-gray-50 hover:border-secondary/20 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                <Phone className="text-secondary w-5 h-5 group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 mb-1 font-medium">Phone Number</p>
                <p className="font-bold text-sm md:text-base group-hover:text-secondary transition-colors">+91 90811 14222</p>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div variants={fadeUpVariants} className="bg-white p-6 rounded-2xl flex items-center gap-5 shadow-sm border border-gray-50 hover:border-secondary/20 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                <MapPin className="text-secondary w-5 h-5 group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 mb-1 font-medium">Our Office</p>
                <p className="font-bold text-sm md:text-base group-hover:text-secondary transition-colors">Pride Signet, Rajkot, Gujarat</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section: Map & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] overflow-hidden shadow-xl shadow-gray-200/40 border border-gray-100/80 bg-gray-100 min-h-[450px] lg:min-h-full h-full flex flex-col"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d193595.2528001097!2d-74.14448744577884!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1709664531393!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full flex-1"
            ></iframe>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full flex flex-col"
          >
            <InquiryForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
