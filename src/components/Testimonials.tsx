import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Executive",
      content: "Tom's coaching completely transformed my approach to life. I went from feeling stuck and overwhelmed to having clear direction and confidence. The tools and strategies he provided are still helping me today.",
      initials: "SM",
      bgColor: "bg-blue-500"
    },
    {
      name: "Michael Johnson",
      role: "Entrepreneur",
      content: "The intensive program was exactly what I needed. Tom helped me break through limiting beliefs I didn't even know I had. I've achieved more in 12 weeks than I did in the previous 12 months.",
      initials: "MJ",
      bgColor: "bg-green-500"
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      content: "Tom's group coaching sessions were incredible. The community support combined with his expert guidance helped me overcome my fear of public speaking. I now lead presentations with confidence!",
      initials: "ED",
      bgColor: "bg-purple-500"
    }
  ];

  const StarRating = () => (
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4 font-serif">
            What My <span className="text-gold-600">Clients Say</span>
          </h2>
          <p className="text-lg text-forest-700 max-w-2xl mx-auto">
            Real stories from real people who have transformed their lives through coaching.
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <StarRating />
              <blockquote className="text-forest-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-semibold mr-4`}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-forest-900">{testimonial.name}</div>
                  <div className="text-forest-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
