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
            <p className="text-gray-500 font-medium">Last Updated: July 2026</p>
          </div>
          
          <div className="text-gray-600 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p>
                At Vishwas Wealth Development Corporation (VWDC), we specialize in Investment Management and Financial Services. We understand that trust is the foundation of our relationship with our clients. This Privacy Policy outlines how we collect, use, protect, and disclose your personal and financial information when you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              <p className="mb-3">To provide you with comprehensive financial planning and investment management, we collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Identification:</strong> Name, address, date of birth, PAN, Aadhaar, and government-issued ID.</li>
                <li><strong>Financial Information:</strong> Income, net worth, investment experience, risk tolerance, bank account details, and existing investment portfolios.</li>
                <li><strong>Digital Data:</strong> IP address, browser type, and interaction data when you visit our website or use our client portal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">Your data is strictly used to deliver top-tier financial services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To design, implement, and monitor your investment portfolio and financial plan.</li>
                <li><strong>To Communicate with You:</strong> We may use your information to respond to your inquiries, provide customer service support, send you important information about the services, and send you marketing communications (with your consent) via different channels, including but not limited to SMS, Email, WhatsApp, RCS and Voice.</li>
                <li>To comply with legal and regulatory requirements, including Anti-Money Laundering (AML) and Know Your Customer (KYC) laws.</li>
                <li>To process transactions, open brokerage accounts on your behalf, and facilitate communication regarding market updates.</li>
              </ul>
            </section>   
 
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security & Protection</h2>
              <p>
                We employ banking-grade encryption, secure servers, and stringent access controls to safeguard your financial data. Only authorized personnel who require access to perform their duties (such as your dedicated financial advisor) are permitted to view your sensitive information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Information Sharing</h2>
              <p>
                <strong>We do not sell your personal information.</strong> We only share your data with trusted third parties necessary to execute our services, such as custodian banks, clearing firms, and technology providers. We may also disclose information to regulatory authorities if compelled by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
              <p>
                You have the right to access the personal information we hold about you, request corrections to inaccurate data, and request the deletion of your data (subject to our legal data retention obligations as a financial institution). 
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy or the handling of your financial data, please contact our Compliance Team at <strong>official@vwdc.in</strong> or call us at <strong>+91 90811 14222</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
