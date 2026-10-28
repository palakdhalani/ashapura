import React from 'react';
import { ArrowUpRight, Phone, MessageCircle, ShieldCheck, Scale, Truck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ConsultationCTA = () => {
  return (
    <section 
      className="w-full py-20 md:py-28 relative bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
      style={{ backgroundImage: 'url("/images/hero-facility.jpg")' }}
    >
      {/* Dark modern industrial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/95 backdrop-blur-[2px]"></div>
      
      {/* Decorative ambient cyan glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Card Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl border border-white/40"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              INDUSTRIAL SCRAP & PAPER RECYCLING
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-5">
              Ready to Procure or Sell <span className="text-secondary">Industrial Scrap</span> at Best Market Rates?
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Connect directly with <strong>Shree Ashapura Enterprise</strong>. From high-purity Copper, Cast Iron, and Aluminum scrap to bulk Old Newspaper (ONP) and Kraft paper, we guarantee certified electronic weighbridge slips, transparent pricing, and rapid logistics across Rajkot, Gujarat & India.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-primary">Certified Weight</h4>
                  <p className="text-[11px] text-gray-500">Electronic weighbridge slips</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-primary">High-Grade Purity</h4>
                  <p className="text-[11px] text-gray-500">Low furnace melting loss</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-primary">Prompt Delivery</h4>
                  <p className="text-[11px] text-gray-500">Dedicated industrial dispatch</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://wa.me/919375077636?text=Hello%20Shree%20Ashapura%20Enterprise,%20I%20would%20like%20to%20get%20spot%20rates%20and%20discuss%20bulk%20scrap%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full font-bold text-sm tracking-wide transition shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                <MessageCircle size={18} />
                Instant WhatsApp Quote
              </a>

              <a 
                href="tel:+919375077636"
                className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-full font-bold text-sm tracking-wide transition shadow-md hover:shadow-lg hover:scale-[1.02]"
              >
                <Phone size={16} />
                Call +91 93750 77636
              </a>

              <Link 
                to="/#contact" 
                className="inline-flex items-center gap-1.5 text-secondary hover:text-secondary-hover font-semibold text-sm px-4 py-2 transition"
              >
                Online Inquiry
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Side Info Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5 text-secondary" />
                Recycling Yard & Yard Location
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                <strong>Shree Ashapura Enterprise</strong><br />
                Plot No.233/B,<br />
                Aji G.I.D.C. Phase 2,<br />
                Nr. Rajavir Foundary,<br />
                Rajkot, Gujarat - 360003
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Working Hours:</span>
                <span className="text-white font-medium">Mon - Sat (9 AM - 7 PM)</span>
              </div>
            </div>

            <div className="bg-secondary/20 backdrop-blur-md p-6 rounded-3xl border border-secondary/30 text-white">
              <h4 className="font-bold text-sm text-secondary mb-1">⚡ Spot Rate Assurance</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Rates fluctuate with international LME and local Mandi daily indices. Contact us today for guaranteed same-day bookings on Copper, Iron, Aluminum & Paper Scrap.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
