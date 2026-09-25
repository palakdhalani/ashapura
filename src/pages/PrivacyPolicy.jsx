import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow pt-28 md:pt-36 pb-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 container">
          <div className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-gray-500 font-medium">Last Updated: September 2026</p>
          </div>
          
          <div className="text-gray-600 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p>
                At <strong>Shree Ashapura Enterprise</strong>, we are committed to safeguarding the privacy and commercial confidentiality of our clients, suppliers, and website visitors. This Privacy Policy explains how we collect, handle, and protect your commercial contact and transaction information when you interact with our website or trade with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              <p className="mb-3">To process inquiries, provide price quotations, and execute scrap material supply contracts, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Business & Contact Details:</strong> Company name, authorized representative name, contact telephone/WhatsApp number, email address, and delivery location.</li>
                <li><strong>Commercial Billing & GST Details:</strong> GSTIN, billing address, dispatch destination, and payment reconciliation details.</li>
                <li><strong>Website Interaction Data:</strong> Information submitted through our inquiry and quotation forms, as well as basic web analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">Your information is used strictly for legitimate commercial and business operations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To generate and provide accurate spot rate quotations for Copper, Iron, Aluminum, and Waste Paper scrap.</li>
                <li>To coordinate logistics, weighbridge documentation, dispatch notices, and delivery tracking.</li>
                <li><strong>Customer Communication:</strong> To respond promptly to your RFQs via phone call, WhatsApp, SMS, or email.</li>
                <li>To comply with statutory commercial, tax, and GST reporting requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security & Commercial Confidentiality</h2>
              <p>
                We implement robust security measures to safeguard all client communication and trade transactions. We do not sell, rent, or trade your contact information or transaction data to any third-party marketing agencies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Information Sharing</h2>
              <p>
                Information is only shared with verified transport/logistics partners strictly for delivery fulfillment, or with regulatory/tax authorities where required by applicable Indian law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
              <p>
                You may request updates, corrections, or verification of your contact and business details in our records at any time by contacting our trade office.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
              <p>
                If you have any questions or inquiries regarding our Privacy Policy or commercial terms, please contact us at:
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-100 font-medium">
                <p><strong>Shree Ashapura Enterprise</strong></p>
                <p>Aji GIDC, Road-P, Opposite Kirti Packaging, Near Rajveer Foundry, Rajkot</p>
                <p>Phone: <a href="tel:+919375077636" className="text-secondary font-bold">+91 93750 77636</a></p>
                <p>Email: <a href="mailto:contact@shreeashapuraenterprise.com" className="text-secondary">contact@shreeashapuraenterprise.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
