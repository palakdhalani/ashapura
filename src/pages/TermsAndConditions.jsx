import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow pt-28 md:pt-36 pb-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 container">
          <div className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Terms & Conditions</h1>
            <p className="text-gray-500 font-medium">Last Updated: July 2026</p>
          </div>
          
          <div className="text-gray-600 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
              <p>
                By engaging with Vishwas Wealth Development Corporation (VWDC) for Investment Management & Financial Services, or by using our website and client portals, you agree to be bound by these Terms & Conditions. Please read them carefully before making any investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Services Provided</h2>
              <p>
                Vishwas Wealth Development Corporation (VWDC) provides comprehensive financial advisory, portfolio management, wealth strategy, and related financial services. All recommendations and investment decisions are made based on the financial profile, risk tolerance, and objectives you provide to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Investment Risks & No Guarantees</h2>
              <p className="mb-3">Please be aware of the following inherent risks in financial markets:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No Guarantee of Profit:</strong> Past performance of any security, portfolio, or investment strategy is not an indicator or guarantee of future results.</li>
                <li><strong>Risk of Loss:</strong> All investments carry inherent risks, including the potential loss of principal capital. You should only invest money you can afford to lose.</li>
                <li><strong>Market Volatility:</strong> Economic conditions, political events, and market sentiment can cause the value of your portfolio to fluctuate unexpectedly.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Client Responsibilities</h2>
              <p>
                As a client, you agree to provide complete and accurate financial information. You are responsible for promptly notifying us of any material changes in your financial situation, investment objectives, or risk tolerance, as these changes may significantly impact our advisory strategies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Fees and Compensation</h2>
              <p>
                Our investment advisory and management fees are detailed in your specific Client Advisory Agreement. By engaging our services, you authorize the designated custodian to deduct our advisory fees directly from your managed accounts as per the agreed schedule.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
              <p>
                VWDC and its advisors shall not be held liable for any loss resulting from market fluctuations, general economic downturns, or actions taken in good faith based on the information you have provided. Our liability is strictly limited to cases of gross negligence or willful misconduct as defined by applicable securities laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Governing Law</h2>
              <p>
                These Terms & Conditions and any disputes arising out of your relationship with VWDC shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
