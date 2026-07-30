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
      <Navbar />
      <div className="pt-20 md:pt-24">
        <AboutHero />
      </div>
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
