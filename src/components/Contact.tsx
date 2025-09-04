import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coachingInterest: '',
    goals: '',
    promoCode: ''
  });

  const [promoMessage, setPromoMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const validPromoCodes = ['WELCOME2024', 'FREECALL', 'COACHING50'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validatePromoCode = () => {
    if (!formData.promoCode) {
      setPromoMessage('Please enter a promo code');
      return;
    }
    
    if (validPromoCodes.includes(formData.promoCode.toUpperCase())) {
      setPromoMessage('✅ Promo code applied! You qualify for a free consultation.');
    } else {
      setPromoMessage('❌ Invalid promo code. Please check and try again.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate promo code if provided
    if (formData.promoCode && !validPromoCodes.includes(formData.promoCode.toUpperCase())) {
      setFormMessage('Invalid promo code. Please check and try again.');
      return;
    }
    
    // For now, just show success message
    setFormMessage('✅ Thank you! Your consultation request has been received. We\'ll contact you soon to confirm your appointment.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      coachingInterest: '',
      goals: '',
      promoCode: ''
    });
  };

  return (
    <section id="booking" className="py-16 bg-forest-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-500 mb-4 font-serif">
            Ready to <span className="text-gold-300">Transform</span> Your Life?
          </h2>
          <p className="text-lg text-gold-200 max-w-2xl mx-auto">
            Book your free consultation today and take the first step towards achieving your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Booking Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-forest-900 mb-4 font-serif">Book Your Free Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              {/* Coaching Interest */}
              <div>
                <label htmlFor="coachingInterest" className="block text-sm font-medium text-gray-700 mb-2">What type of coaching interests you? *</label>
                <select 
                  id="coachingInterest" 
                  name="coachingInterest" 
                  required 
                  value={formData.coachingInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select an option</option>
                  <option value="1-on-1">1-on-1 Coaching</option>
                  <option value="group">Group Coaching</option>
                  <option value="intensive">Intensive Program</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
              
              {/* Goals */}
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">What are your main goals? *</label>
                <textarea 
                  id="goals" 
                  name="goals" 
                  rows={4} 
                  required 
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your goals and what you'd like to achieve through coaching..."
                />
              </div>
              
              {/* Promo Code */}
              <div>
                <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-2">Promo Code (Optional)</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    id="promoCode" 
                    name="promoCode" 
                    value={formData.promoCode}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter promo code"
                  />
                  <button 
                    type="button" 
                    onClick={validatePromoCode}
                    className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <div className={`mt-2 text-sm ${promoMessage.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                    {promoMessage}
                  </div>
                )}
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-gold-500 text-forest-900 font-semibold py-4 px-6 rounded-lg hover:bg-gold-400 transition-colors duration-200"
              >
                Book Free Consultation
              </button>
              
              {/* Success/Error Messages */}
              {formMessage && (
                <div className={`p-4 rounded-lg ${formMessage.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formMessage}
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="text-gold-100">
            <h3 className="text-2xl font-bold mb-6 font-serif">Get In Touch</h3>
            <p className="text-gold-200 mb-8 leading-relaxed">
              You can also reach out directly to discuss your coaching needs and schedule a consultation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gold-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gold-200">tom@santamonicamenswork.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gold-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gold-200">808-796-0887</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gold-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gold-200">Santa Monica, CA</span>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-semibold text-gold-300 mb-4">What You Get:</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gold-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gold-200">30-minute free consultation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gold-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gold-200">Personalized coaching plan</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gold-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gold-200">No obligation to continue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
