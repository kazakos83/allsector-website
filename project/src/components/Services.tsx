import React from 'react';
import { Wrench, Shield, Zap, Droplets, PaintBucket, Hammer, Wind, Lock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'General Maintenance',
      description: 'Comprehensive property maintenance including plumbing, electrical, carpentry, and general repairs.',
      features: ['Preventive maintenance', 'Emergency repairs', 'Compliance checks', 'Regular inspections'],
      image: '/general main.jpg'
    },
    {
      icon: Shield,
      title: 'Insurance Restoration',
      description: 'Specialized restoration services for insurance claims, working directly with assessors and insurers.',
      features: ['Water damage restoration', 'Fire damage repair', 'Storm damage cleanup', 'Make-safe services']
    },
    {
      icon: PaintBucket,
      title: 'Painting & Decorating',
      description: 'Professional painting services for interior and exterior applications across all property types.',
      features: ['Interior painting', 'Exterior painting', 'Commercial fit-outs', 'Protective coatings'],
      image: '/paint.webp'
    },
    {
      icon: Droplets,
      title: 'Plumbing Services',
      description: 'Licensed plumbing solutions including repairs, installations, and emergency call-outs.',
      features: ['Emergency plumbing', 'Pipe repairs', 'Fixture installation', 'Drain cleaning'],
      image: '/about copy copy.jpeg'
    },
    {
      icon: Zap,
      title: 'Electrical Services',
      description: 'Qualified electrical contractors providing safe, compliant electrical solutions nationwide.',
      features: ['Electrical repairs', 'Safety inspections', 'Lighting upgrades', 'Power installations']
    },
    {
      icon: Wind,
      title: 'HVAC Services',
      description: 'Heating, ventilation, and air conditioning maintenance and repair services.',
      features: ['AC maintenance', 'Heating repairs', 'Duct cleaning', 'System installations'],
      image: '/shutterstock copy.jpeg'
    },
    {
      icon: Hammer,
      title: 'Minor Construction',
      description: 'Small construction projects, renovations, and building modifications.',
      features: ['Office fit-outs', 'Bathroom renovations', 'Kitchen upgrades', 'Accessibility modifications'],
      image: '/fit.jpg'
    },
    {
      icon: Lock,
      title: 'Security & Access',
      description: 'Security installations, access control, and locksmith services for commercial properties.',
      features: ['Lock repairs', 'Access control', 'Security installations', 'Key management'],
      image: '/sec.jpg'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-white relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Our Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive <span className="gradient-text">Facility Services</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed">
            From routine maintenance to complex restoration projects, our expert team delivers quality solutions across all facility management needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 stagger-animation">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card group relative">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="text-white" size={28} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-center font-medium">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="btn-primary smooth-scroll"
          >
            Request Service Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;