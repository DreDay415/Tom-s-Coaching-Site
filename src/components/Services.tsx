import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "1-on-1 Coaching",
      description: "Personalized men's coaching sessions tailored to your specific goals and challenges.",
      features: ["60-minute sessions", "Custom action plans", "Email support"],
      price: "$150",
      period: "/session",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      bgColor: "bg-forest-600"
    },
    {
      title: "Group Coaching",
      description: "Join a supportive community of like-minded individuals working towards similar goals.",
      features: ["90-minute sessions", "Small groups (6-8 people)", "Community support"],
      price: "$75",
      period: "/session",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: "bg-gold-600"
    },
    {
      title: "Intensive Program",
      description: "A comprehensive 12-week transformation program with intensive coaching and accountability.",
      features: ["12-week program", "Weekly 1-on-1 sessions", "Daily accountability"],
      price: "$1,800",
      period: "/program",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: "bg-forest-700"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4 font-serif">
            Men's <span className="text-gold-600">Coaching</span>
          </h2>
          <p className="text-lg text-forest-700 max-w-2xl mx-auto">
            Tailored men's coaching programs designed to help you overcome challenges, achieve your goals, and create lasting positive change in your life.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 p-6">
              <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-forest-900 mb-3">{service.title}</h3>
              <p className="text-forest-700 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4 text-sm">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-forest-700">
                    <svg className="w-4 h-4 text-gold-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-forest-900">
                {service.price}<span className="text-sm text-forest-600 font-normal">{service.period}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-forest-700 mb-6">Ready to start your transformation journey?</p>
          <a 
            href="#booking" 
            className="inline-flex items-center px-6 py-3 bg-gold-500 text-forest-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors duration-200"
          >
            Book Your Free Consultation
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
