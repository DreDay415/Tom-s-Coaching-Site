import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-forest-900 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gold-500/20 text-gold-500 border border-gold-500/30 mb-8">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Guiding You Back to Yourself
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gold-500 mb-6 leading-tight font-serif">
          Tom Jameson
          <span className="block text-2xl md:text-3xl font-normal text-gold-400 mt-3">
            Men's Coach
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-gold-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Professional men's coaching that helps you break through barriers, achieve your goals, and create the life you've always dreamed of.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#booking" 
            className="inline-flex items-center px-8 py-4 bg-gold-500 text-forest-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors duration-200"
          >
            Book Free Consultation
          </a>
          
          <a 
            href="#services" 
            className="inline-flex items-center px-8 py-4 border border-gold-500 text-gold-500 font-semibold rounded-lg hover:bg-gold-500 hover:text-forest-900 transition-colors duration-200"
          >
            View Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-gold-500 mb-1">500+</div>
            <div className="text-sm text-gold-300">Lives Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold-500 mb-1">5+</div>
            <div className="text-sm text-gold-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold-500 mb-1">98%</div>
            <div className="text-sm text-gold-300">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
