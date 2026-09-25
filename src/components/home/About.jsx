import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Tall Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-full min-h-[400px] lg:min-h-[600px]"
          >
            <img
              src="/images/copper-scrap.jpg"
              alt="Shree Ashapura Enterprise Metal Scrap Yard"
              className="w-full h-full object-cover rounded-[2rem] shadow-xl"
            />
          </motion.div>

          {/* Right Column: Text content & Landscape image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              hidden: { opacity: 0 }
            }}
            className="flex flex-col items-start justify-center"
          >

            <motion.span
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-secondary font-bold tracking-wider uppercase text-md mb-4"
            >
              About Us
            </motion.span>

            <motion.h2
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
                hidden: {}
              }}
              className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-6"
            >
              {"Sustainable Metal &".split(" ").map((word, index) => (
                <motion.span
                  key={`w1-${index}`}
                  variants={blurVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:block" />
              {"Paper Recycling Excellence".split(" ").map((word, index) => (
                <motion.span
                  key={`w2-${index}`}
                  variants={blurVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-gray-600 mb-8 leading-relaxed text-sm sm:text-base"
            >
              At <strong className="text-primary font-bold">Shree Ashapura Enterprise</strong>, situated in Aji GIDC, Rajkot, we are a premier merchant and bulk supplier of high-grade metal scrap and waste paper materials. We supply verified Copper Scrap, Heavy Iron Scrap, Aluminum Scrap, and industrial Waste Paper (ONP & Craft) to foundries, induction furnaces, and paper manufacturing plants across Gujarat and India.
            </motion.p>

            <Link
              to="/about"
              className="flex items-center gap-3 bg-secondary text-white pl-6 pr-2 py-2 rounded-full text-sm font-medium hover:bg-secondary-hover transition-all hover:scale-105 group shadow-lg mb-10"
            >
              Read More
              <span className="bg-white p-2 rounded-full group-hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-4 h-4 text-secondary" />
              </span>
            </Link>

            {/* Bottom Landscape Image */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.5 }}
              className="w-full h-56 sm:h-64 lg:h-72"
            >
              <img
                src="/images/waste-paper-craft.jpg"
                alt="Waste Paper Craft and Recycling Warehouse"
                className="w-full h-full object-cover rounded-[2rem] shadow-lg"
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
