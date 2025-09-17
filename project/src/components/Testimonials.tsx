import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      company: 'Premier Property Group',
      title: 'Property Portfolio Manager',
      rating: 5,
      text: 'Allsector has been our go-to maintenance partner for over 5 years. Their response times are exceptional, and the quality of work consistently exceeds our expectations. They understand the unique needs of commercial property management.',
    },
    {
      company: 'Australian Insurance Solutions',
      title: 'Claims Manager',
      rating: 5,
      text: 'Working with Allsector on insurance restoration projects has been seamless. Their documentation is thorough, their work is compliant, and they always deliver on time. They\'re our preferred restoration partner nationwide.',
    },
    {
      company: 'Regional Health Network',
      title: 'Facilities Director',
      rating: 5,
      text: 'In healthcare, we can\'t afford downtime or substandard work. Allsector understands our stringent requirements and always delivers. Their infection control protocols and safety standards are exemplary.',
    },
    {
      company: 'National Retail Chain',
      title: 'Retail Operations Manager',
      rating: 5,
      text: 'Having a reliable maintenance partner across all our locations was crucial. Allsector\'s national coverage means consistent quality and service standards whether we\'re in Sydney, Perth, or anywhere in between.',
    },
    {
      company: 'Elite Strata Services',
      title: 'Strata Manager',
      rating: 5,
      text: 'Managing multiple residential complexes requires a maintenance partner who can handle everything from emergency repairs to planned maintenance. Allsector delivers every time, and our residents are always satisfied.',
    },
    {
      company: 'State Government Department',
      title: 'Government Facilities Coordinator',
      rating: 5,
      text: 'Government facilities have strict compliance requirements. Allsector not only meets these standards but exceeds them. Their reporting is comprehensive and their work always passes our rigorous inspections.',
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm20 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
            Client Success Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Don't just take our word for it. Here's what industry leaders across Australia say about our service quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card group transition-all duration-300">
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg group-hover:bg-white/20 transition-all duration-300">
                  <Quote className="text-white" size={20} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={18} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 leading-relaxed mb-8 font-medium italic transition-colors duration-300">"{testimonial.text}"</p>

              {/* Author Info */}
              <div className="border-t border-slate-200 pt-6">
                <div className="font-bold text-slate-900 text-lg transition-colors duration-300">{testimonial.title}</div>
                <div className="text-sm text-slate-600 font-medium transition-colors duration-300">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-700 mb-8 font-medium">
            Join hundreds of satisfied clients across Australia
          </p>
          <a
            href="#contact"
            className="btn-primary smooth-scroll"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;