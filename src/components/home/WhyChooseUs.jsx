import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      if (start === end) return;
      
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const yFloatBox = useTransform(smoothProgress, [0, 1], [150, -150]);
  const ySmallImage = useTransform(smoothProgress, [0, 1], [-100, 100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 container">
        
        {/* Top Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-20"
        >
          <motion.div variants={itemVariants} className="lg:w-1/4">
            <span className="inline-block px-4 py-1 rounded-full text-md font-bold tracking-wider text-secondary uppercase bg-white shadow-sm">
              Why Choose Us
            </span>
          </motion.div>
          
          <motion.div 
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }} 
            className="lg:w-3/4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary leading-snug">
              {"Our commitment is built on transparent spot pricing, accurate electronic weighbridges & dependable bulk scrap delivery for all industries.".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  variants={blurVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span 
                variants={blurVariants}
                className="inline-flex items-center gap-2 align-middle bg-secondary text-white text-base md:text-lg font-medium px-5 py-2 rounded-full cursor-pointer hover:bg-secondary-hover transition-all hover:scale-105 shadow-md"
              >
                <Link to="/#contact" className="inline-flex items-center gap-2 text-white">
                  Get Best Rates <ArrowUpRight className="w-5 h-5" />
                </Link>
              </motion.span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Bottom Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* Left: Large Image with Floating Box */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 relative pt-12 md:pl-12"
          >
            {/* Floating Experience Box with Parallax */}
            <motion.div style={{ y: yFloatBox }} className="absolute -top-4 -left-2 md:top-0 md:left-0 z-20 scale-75 md:scale-100 origin-top-left">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-primary text-white p-8 md:p-10 w-48 md:w-64 shadow-2xl rounded-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Industry<br/>Trust</p>
                <h3 className="text-7xl md:text-8xl font-bold text-secondary"><AnimatedCounter to={25} /></h3>
                <p className="text-xs text-white/80 mt-1 font-semibold uppercase tracking-wider">Years of Experience</p>
                {/* Subtle Pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]"></div>
              </motion.div>
            </motion.div>

            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-sm shadow-xl ml-4 md:ml-0">
              <img 
                src="/images/iron-scrap.jpg" 
                alt="Shree Ashapura Enterprise Iron Scrap Yard" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right: Stats and Small Image */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-5 flex flex-col justify-center lg:pl-10 mt-10 lg:mt-0"
          >
            <motion.p variants={itemVariants} className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              Our Scale
            </motion.p>
            
            <motion.div variants={itemVariants} className="mb-10">
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-2"><AnimatedCounter to={1500} suffix="+" /></h3>
              <p className="text-gray-500 text-lg">Tons Monthly Supplied</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="w-70 h-px bg-gray-300 mb-10"></motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div>
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-2"><AnimatedCounter to={100} suffix="%" /></h3>
                <p className="text-gray-500 text-lg">Quality & Purity Verified</p>
              </div>
              
              {/* Small Image with Parallax */}
              <motion.div style={{ y: ySmallImage }}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-40 h-48 overflow-hidden rounded-sm shadow-xl shrink-0 self-end sm:self-auto"
                >
                  <img 
                    src="/images/aluminum-scrap.jpg" 
                    alt="Aluminum Scrap Stock" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            
          </motion.div>

        </div>

      </div>
      
    </section>
  );
};

export default WhyChooseUs;
