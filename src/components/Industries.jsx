import React from 'react';
import { ArrowUpRight, Presentation, Banknote, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Construction',
    description: 'We work closely with social and public sector organizations to create meaningful impact and drive sustainable change.',
    icon: Presentation
  },
  {
    title: 'Investment management',
    description: 'We provide strategic investment management services designed to grow and protect your wealth.',
    icon: Banknote
  },
  {
    title: 'Advanced manufacturing',
    description: 'We empower manufacturers to stay ahead by adopting next-generation technologies and smarter production methods.',
    icon: Activity
  },
  {
    title: 'Digital Transformation',
    description: 'Guiding organizations through comprehensive digital upgrades to enhance operational efficiency.',
    icon: Presentation
  },
  {
    title: 'Supply Chain Logistics',
    description: 'Optimizing global supply chains for resilience, speed, and cost-effectiveness.',
    icon: Banknote
  },
  {
    title: 'Digital Transformation',
    description: 'Guiding organizations through comprehensive digital upgrades to enhance operational efficiency.',
    icon: Presentation
  },
  {
    title: 'Supply Chain Logistics',
    description: 'Optimizing global supply chains for resilience, speed, and cost-effectiveness.',
    icon: Banknote
  }
];

const Industries = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white text-primary">
      <div className="container mx-auto px-6 lg:px-8 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Column */}
          <div className="flex flex-col items-start lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 text-md font-bold tracking-wider text-red-500 uppercase mb-6"
            >
              Our Business Flourishes
            </motion.span>

            <motion.h2
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
                hidden: {}
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-primary"
            >
              {"Proven Experience, Unlimited Industries".split(" ").map((word, index) => (
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
              transition={{ delay: 0.3 }}
              className="text-gray-500 leading-relaxed mb-10 max-w-md text-sm md:text-base"
            >
              We collaborate with forward-thinking organizations to support initiatives that create measurable global impact.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 bg-secondary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-colors shadow-md group mt-4"
            >
              Discover More
              <span className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-300" />
              </span>
            </motion.button>
          </div>

          {/* Right Column (Cards) */}
          <div className="flex flex-col gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#F8F9FA] p-8 md:p-10 rounded-xl flex flex-col gap-4 border border-transparent hover:border-secondary/30 transition-all cursor-pointer shadow-sm hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-secondary transition-colors mb-2">
                  <industry.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors">{industry.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;
