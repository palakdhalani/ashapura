import React, { useState } from 'react';
import { Mail, MessageCircle, ChevronDown, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const countryCodes = [
  { code: '+91', country: 'IN', flag: '🇮🇳', label: 'IN (+91)' },
  { code: '+1', country: 'US', flag: '🇺🇸', label: 'US (+1)' },
  { code: '+44', country: 'UK', flag: '🇬🇧', label: 'UK (+44)' },
  { code: '+971', country: 'AE', flag: '🇦🇪', label: 'UAE (+971)' },
  { code: '+1', country: 'CA', flag: '🇨🇦', label: 'CA (+1)' },
  { code: '+61', country: 'AU', flag: '🇦🇺', label: 'AU (+61)' },
  { code: '+65', country: 'SG', flag: '🇸🇬', label: 'SG (+65)' },
  { code: '+966', country: 'SA', flag: '🇸🇦', label: 'SA (+966)' },
];

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    subject: '',
    agreed: false
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [checkboxErrorHighlight, setCheckboxErrorHighlight] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
    setSuccess('');
    if (name === 'agreed' && checked) {
      setCheckboxErrorHighlight(false);
    }
  };

  const validate = () => {
    if (!formData.fullName.trim()) {
      setError('Please enter your full name.');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email address.');
      return false;
    }
    if (!formData.phone.trim()) {
      setError('Please enter your phone number.');
      return false;
    }
    if (!formData.subject) {
      setError('Please select a subject.');
      return false;
    }
    if (!formData.agreed) {
      setError('Please agree to the Terms & Conditions and Privacy Policy to send your message.');
      setCheckboxErrorHighlight(true);
      return false;
    }
    setCheckboxErrorHighlight(false);
    return true;
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const fullPhone = `${formData.countryCode} ${formData.phone}`;
    const mailtoSubject = encodeURIComponent(`Inquiry: ${formData.subject} - ${formData.fullName}`);
    const mailtoBody = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${fullPhone}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Sent from Vishwas Development Corporation LLP Website Inquiry Form`
    );

    const mailtoUrl = `mailto:official@vwdc.in?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSuccess('Opening your email client to send the inquiry...');
    window.location.href = mailtoUrl;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const fullPhone = `${formData.countryCode} ${formData.phone}`;
    const message = encodeURIComponent(
      `*New Service Inquiry*\n\n` +
      `*Full Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${fullPhone}\n` +
      `*Subject:* ${formData.subject}`
    );

    const whatsappUrl = `https://wa.me/919081114222?text=${message}`;
    setSuccess('Redirecting to WhatsApp to send your inquiry...');
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full max-w-xl mx-auto h-full flex flex-col">
      {/* Main Form Card - Synchronized with Website Theme */}
      <div className="bg-white p-8 md:p-10 lg:p-12 rounded-[32px] shadow-xl shadow-primary/5 border border-gray-100/80 h-full flex flex-col justify-between">
        <form className="flex flex-col gap-6 justify-between h-full" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name */}
          <div>
            <label className="block text-sm md:text-base font-bold mb-2.5 text-primary">
              Full Name <span className="text-secondary">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-5 py-4 rounded-2xl bg-[#F8F9FA] border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all text-sm font-medium text-slate-800 placeholder:text-gray-400"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm md:text-base font-bold mb-2.5 text-primary">
              Email Address <span className="text-secondary">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-5 py-4 rounded-2xl bg-[#F8F9FA] border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all text-sm font-medium text-slate-800 placeholder:text-gray-400"
            />
          </div>

          {/* Phone Number with Selectable Country Dropdown */}
          <div>
            <label className="block text-sm md:text-base font-bold mb-2.5 text-primary">
              Phone Number <span className="text-secondary">*</span>
            </label>
            <div className="flex items-center bg-[#F8F9FA] rounded-2xl px-5 py-4 focus-within:border-primary focus-within:bg-white border border-transparent transition-all">
              
              {/* Selectable Country Code Dropdown */}
              <div className="relative flex items-center pr-3 border-r border-gray-200/80 shrink-0">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="bg-transparent font-bold text-sm text-primary cursor-pointer outline-none appearance-none pr-5 z-10"
                >
                  {countryCodes.map((c) => (
                    <option key={c.country + c.code} value={c.code} className="font-medium text-slate-800 bg-white">
                      {c.flag} {c.country} ({c.code})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-0 pointer-events-none" />
              </div>

              {/* Phone Input */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10 digit number"
                className="w-full bg-transparent outline-none text-sm font-medium text-slate-800 placeholder:text-gray-400 pl-4"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm md:text-base font-bold mb-2.5 text-primary">
              Subject <span className="text-secondary">*</span>
            </label>
            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-[#F8F9FA] border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all text-sm font-medium text-slate-800 cursor-pointer appearance-none pr-10"
              >
                <option value="" disabled>Select Subject</option>
                <option value="Term Life Insurance">Term Life Insurance</option>
                <option value="Health Insurance">Health Insurance</option>
                <option value="Investment Plans">Investment Plans</option>
                <option value="Car Insurance">Car Insurance</option>
                <option value="2 Wheeler Insurance">2 Wheeler Insurance</option>
                <option value="Family Health Insurance">Family Health Insurance</option>
                <option value="Guaranteed Return Plans">Guaranteed Return Plans</option>
                <option value="Child Saving Plans">Child Saving Plans</option>
                <option value="Retirement Plans">Retirement Plans</option>
                <option value="Mutual Fund">Mutual Fund</option>
                <option value="Bond">Bond</option>
                <option value="SIP (Systematic Investment)">SIP (Systematic Investment)</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Terms & Privacy Checkbox (Above Buttons) */}
          <div className={`flex items-center gap-2.5 p-3 rounded-xl transition-all ${
            checkboxErrorHighlight 
              ? 'bg-red-50 border border-red-200 ring-2 ring-red-200/50' 
              : 'bg-[#F8F9FA]/50 border border-transparent'
          }`}>
            <input
              type="checkbox"
              id="agreed"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer accent-primary shrink-0"
            />
            <label htmlFor="agreed" className="text-xs sm:text-sm text-gray-600 cursor-pointer select-none">
              I agree to the{' '}
              <Link to="/terms-and-conditions" target="_blank" className="text-primary font-bold hover:text-secondary transition-colors hover:underline">
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link to="/privacy-policy" target="_blank" className="text-primary font-bold hover:text-secondary transition-colors hover:underline">
                Privacy Policy
              </Link>{' '}
              <span className="text-secondary font-bold">*</span>
            </label>
          </div>

          {/* Error / Success Feedback */}
          {error && (
            <div className="text-secondary text-xs sm:text-sm font-medium bg-red-50 py-3 px-4 rounded-xl border border-red-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-secondary" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="text-emerald-700 text-xs sm:text-sm font-medium bg-emerald-50 py-3 px-4 rounded-xl border border-emerald-200 flex items-center gap-2">
              <span>{success}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={handleSendEmail}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.98] text-sm md:text-base cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </button>

            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-[0.98] text-sm md:text-base cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Send via WhatsApp</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
