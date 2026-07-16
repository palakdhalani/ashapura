import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const MissionVision = () => {
  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="pb-24 px-6 md:px-12 lg:px-24 container mx-auto">
      
      {/* Vision Part */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-md font-bold tracking-wider text-secondary uppercase mb-4">
            Our Vision
          </span>
          <motion.h2 
            variants={{
              visible: { transition: { staggerChildren: 0.03 } },
              hidden: {}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
          >
            {"Empowering your financial future through strategic insight".split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={blurVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            We believe that true financial freedom is built on a foundation of trust, transparency, and tailored strategies. Our vision is to empower individuals and businesses to navigate complex financial landscapes with confidence, ensuring sustainable growth and long-term security for generations to come.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#F8F9FA] rounded-full -z-10 border border-gray-200"></div>
        </motion.div>
      </div>

      {/* Mission Part */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 relative"
        >
          {/* List of items */}
          <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0 relative z-10">
            {[
              { num: 1, title: 'Strategic Planning', active: true },
              { num: 2, title: 'Wealth Investment', active: false },
              { num: 3, title: 'Risk Management', active: false },
              { num: 4, title: 'Sustainable Growth', active: false },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-center justify-between p-5 md:p-6 rounded-2xl transition-all ${item.active ? 'bg-white shadow-xl border border-gray-100 scale-105' : 'bg-[#F8F9FA] border border-transparent hover:bg-white hover:shadow-md'}`}
              >
                <div className="flex items-center gap-5">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${item.active ? 'bg-primary text-white' : 'bg-white text-primary shadow-sm'}`}>
                    {item.num}
                  </span>
                  <span className={`font-bold text-lg ${item.active ? 'text-primary' : 'text-gray-500'}`}>
                    {item.title}
                  </span>
                </div>
                {item.active && (
                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Decorative background grid */}
          <div className="absolute inset-0 -m-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 -z-10 rounded-3xl"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <span className="inline-block text-md font-bold tracking-wider text-secondary uppercase mb-4">
            Our Mission
          </span>
          <motion.h2 
            variants={{
              visible: { transition: { staggerChildren: 0.03 } },
              hidden: {}
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
          >
            {"Delivering comprehensive wealth management solutions".split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={blurVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Rather than offering fragmented financial advice, we provide a holistic approach to wealth development. By integrating strategic planning, risk management, and operational efficiency, we simplify the path to your financial goals, giving you complete control over your wealth without the overwhelming complexity.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default MissionVision;
