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
            <p className="text-gray-500 font-medium">Last Updated: September 2026</p>
          </div>
          
          <div className="text-gray-600 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
              <p>
                By placing an order, requesting a quotation, or purchasing scrap materials from <strong>Shree Ashapura Enterprise</strong> (located at Aji GIDC, Road-P, Opposite Kirti Packaging, Near Rajveer Foundry, Rajkot), you agree to be bound by these commercial Terms & Conditions. Please read them thoroughly prior to finalizing any transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Products & Specifications</h2>
              <p className="mb-3">
                Shree Ashapura Enterprise supplies industrial-grade scrap materials across three main categories:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Metal Scrap:</strong> Copper Scrap (Millberry wire, tubes, heavy copper, turnings), Iron Scrap (HMS 1 & 2, cast iron, structural steel scrap), and Aluminum Scrap (6063 extrusions, clean sheets, wire scrap).</li>
                <li><strong>Waste Paper:</strong> Old News Paper Scrap (ONP) sorted and baled for recycling mills and paper manufacturers.</li>
                <li><strong>Other Products:</strong> News Paper Scrap (unprinted newsprint cut-offs, over-issue newsprint OINP) and Waste Paper Craft (corrugated cardboard OCC scrap, brown kraft clippings).</li>
              </ul>
              <p className="mt-3">
                All materials are sold as recyclable scrap according to accepted industry trade classifications and agreed specifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Weighbridge & Quantity Verification</h2>
              <p className="mb-3">
                Accuracy in quantity and weight is our highest commitment:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Certified Weighbridge:</strong> All dispatches and deliveries are weighed on government-certified electronic digital weighbridges. A computerized weighment slip is provided with every dispatch.</li>
                <li><strong>Tare & Gross Weight:</strong> Gross, tare, and net weights recorded on our dispatch slip shall be considered standard unless a designated mutual weighbridge is agreed upon prior to dispatch.</li>
                <li><strong>Tolerance & Discrepancies:</strong> Any weight discrepancy exceeding standard transit tolerance (0.5%) must be reported with photographic and weighbridge evidence within 24 hours of consignment arrival.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Pricing, Quotations & Payment Terms</h2>
              <p className="mb-3">
                Given the fluctuating nature of metal and paper recycling markets:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Quotation Validity:</strong> Spot price quotations for Copper, Iron, Aluminum, and Waste Paper are valid only for the duration stated on the quotation or sales confirmation.</li>
                <li><strong>Payment Methods:</strong> Payments are accepted via RTGS, NEFT, direct bank transfer, or mutually confirmed commercial terms. All applicable GST and statutory taxes are charged as per prevailing government rates.</li>
                <li><strong>Consignment Release:</strong> Materials are loaded and dispatched upon receipt of confirmed payment or as per pre-agreed contract credit schedules.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Inspection, Quality & Acceptance</h2>
              <p>
                Buyers or their designated representatives are welcome to inspect materials at our Aji GIDC, Rajkot yard prior to loading. Once loaded and dispatched with mutual sign-off, materials are deemed accepted. Any claim regarding grade mismatch, excessive moisture in waste paper bales, or non-metallic foreign materials must be submitted within 24 hours of delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Environmental & Regulatory Compliance</h2>
              <p>
                Both buyer and seller agree to adhere to applicable environmental, transportation, and waste management regulations prescribed by the Gujarat Pollution Control Board (GPCB) and the Ministry of Environment, Forest and Climate Change (MoEFCC). Scrap materials must only be used or processed in compliant recycling facilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Governing Law & Jurisdiction</h2>
              <p>
                These Terms & Conditions, sales contracts, and trade disputes arising between Shree Ashapura Enterprise and any client or vendor shall be governed exclusively by the laws of India, and subject to the exclusive jurisdiction of the competent courts in <strong>Rajkot, Gujarat</strong>.
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
