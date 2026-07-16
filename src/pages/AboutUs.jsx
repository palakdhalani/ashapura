import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

import AboutHero from '../components/about/AboutHero';
import MissionVision from '../components/about/MissionVision';
import Industries from '../components/home/Industries';
import ConsultationCTA from '../components/about/ConsultationCTA';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

const AboutUs = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      {/* 
        Provide a dark background block for the fixed Navbar since this page has a light background.
      */}
      <div className="bg-primary h-[88px] md:h-[96px] w-full shrink-0">
        <Navbar />
      </div>

      <AboutHero />
      <MissionVision />
      <Industries />
      <ConsultationCTA />
      <Testimonials />
      <FAQ />

      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default AboutUs;
