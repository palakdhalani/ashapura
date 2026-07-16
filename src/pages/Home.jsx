import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Services from '../components/home/Services';
import Industries from '../components/home/Industries';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';
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
      <div id="services">
        <Services />
      </div>

      {/* Industries Section */}
      <div id="industries">
        <Industries />
      </div>
      
      {/* Testimonials Section */}
      <div id="testimonials">
        <Testimonials />
      </div>
      
      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>
      
      {/* Global Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
