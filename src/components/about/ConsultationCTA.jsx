import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultationCTA = () => {
  return (
    <section 
      className="w-full py-20 md:py-32 relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80")' }}
    >
      {/* Dark overlay for better contrast if needed */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-start">
          
          {/* White Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-lg w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a192f] leading-tight mb-4 font-sans">
              Ready to Start Your <span className="text-[#10B981]">Investment</span> Journey?
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-8">
              Book a free investment consultation with one of our wealth experts today.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-[#0a192f] text-white px-6 py-3 rounded-md font-bold text-xs md:text-sm tracking-wide hover:bg-[#112a52] transition-colors"
            >
              SCHEDULE CONSULTATION
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
