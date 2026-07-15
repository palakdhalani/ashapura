import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
  return (
    <div className="font-sans bg-white overflow-x-clip">
      {/* Hero Section Wrapper */}
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>

      {/* About Section */}
      <About />

      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Services Section */}
      <Services />

      {/* Industries Section */}
      <Industries />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />
      
      {/* Global Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
