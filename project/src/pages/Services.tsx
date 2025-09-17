import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Wrench, Shield, Zap, Droplets, PaintBucket, Hammer, Wind, Lock, CheckCircle, ArrowRight } from 'lucide-react';

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
      description: 'Specialised restoration services for insurance claims, working directly with assessors and insurers.',
      features: ['Water damage restoration', 'Fire damage repair', 'Storm damage cleanup', 'Make-safe services'],
      image: '/insurance.webp'
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
      features: ['Electrical repairs', 'Safety inspections', 'Lighting upgrades', 'Power installations'],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg'
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

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We assess your requirements and provide a detailed quote within 24 hours.'
    },
    {
      step: '02',
      title: 'Project Planning',
      description: 'Our team develops a comprehensive project plan with timelines and milestones.'
    },
    {
      step: '03',
      title: 'Expert Execution',
      description: 'Qualified professionals complete the work to Australian standards with quality assurance.'
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Final inspection and sign-off with warranty documentation and ongoing support.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <a href="/" className="text-slate-600 hover:text-red-600">Home</a>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-900">Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Facility <span className="text-red-600">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From routine maintenance to complex restoration projects, our expert team delivers quality solutions across all facility management needs throughout Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-48 w-full md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                          <Icon className="text-blue-600" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                      </div>
                      
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-slate-500 flex items-center">
                            <CheckCircle className="text-green-600 mr-2" size={16} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/contact"
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                      >
                        Get Quote <ArrowRight className="ml-1" size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A streamlined approach ensuring quality results and complete client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your facility maintenance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Free Quote
            </a>
            <a
              href="tel:1300718760"
              className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Call 1300 718 760
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;