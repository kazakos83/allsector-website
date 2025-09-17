import React from 'react';
import { Building, Shield, Landmark, Home, Hotel, Users, Heart, GraduationCap } from 'lucide-react';

const TargetMarkets = () => {
  const markets = [
    {
      icon: Shield,
      title: 'Insurance Companies',
      description: 'Specialized restoration and make-safe services for insurance claims across Australia.',
      services: ['Emergency response', 'Damage assessment', 'Restoration work', 'Compliance reporting'],
      image: '/make-safe-image.jpg'
    },
    {
      icon: Building,
      title: 'Commercial Retail',
      description: 'Comprehensive facility maintenance keeping retail spaces operational and appealing.',
      services: ['Store maintenance', 'Fit-out services', 'Emergency repairs', 'Regular inspections'],
      image: '/retail.jpeg'
    },
    {
      icon: Landmark,
      title: 'Government Agencies',
      description: 'Trusted maintenance partner for government buildings and public facilities nationwide.',
      services: ['Compliance maintenance', 'Accessibility upgrades', 'Security installations', 'Energy efficiency'],
      image: '/gov.webp'
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Supporting property managers with reliable, cost-effective maintenance solutions.',
      services: ['Preventive maintenance', 'Tenant services', 'Common area upkeep', 'Emergency response'],
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
    },
    {
      icon: Hotel,
      title: 'Hotels & Hospitality',
      description: 'Maintaining hospitality facilities to ensure guest satisfaction and operational efficiency.',
      services: ['Room maintenance', 'Kitchen services', 'Pool maintenance', 'Guest area upkeep'],
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
    },
    {
      icon: Users,
      title: 'Strata & Body Corporate',
      description: 'Comprehensive building maintenance for residential and commercial strata properties.',
      services: ['Common area maintenance', 'Building compliance', 'Lift maintenance', 'Garden services'],
      image: '/commercial.jpg'
    },
    {
      icon: Heart,
      title: 'Healthcare Facilities',
      description: 'Specialized maintenance for medical facilities with strict hygiene and safety requirements.',
      services: ['Infection control', 'Medical equipment support', 'Emergency systems', 'Compliance maintenance'],
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg'
    },
    {
      icon: GraduationCap,
      title: 'Education Sector',
      description: 'Safe, compliant maintenance solutions for schools, universities, and childcare centers.',
      services: ['Safety compliance', 'Playground maintenance', 'Facility upgrades', 'Emergency repairs'],
      image: '/child copy.jpg'
    }
  ];

  return (
    <section id="industries" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
            Sector Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Industries <span className="gradient-text">We Serve</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed">
            We understand that every industry has distinct operational requirements, compliance standards, and performance expectations. That's why Allsector maintains dedicated expert teams specializing in specific sectors, from healthcare's stringent hygiene protocols to government's rigorous compliance frameworks. Our solutions are never one-size-fits-all—instead, we customize our approach to meet your industry's unique challenges while ensuring full adherence to relevant standards and regulations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 stagger-animation">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden card-hover relative">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={market.image}
                      alt={market.title}
                      className={`h-48 w-full md:h-full object-cover transition-transform duration-300 hover:scale-105 ${
                        market.title === 'Insurance Companies' ? 'object-top' : 
                        market.title === 'Education Sector' ? 'object-center' : 'object-center'
                      }`}
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center mb-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-4 shadow-lg">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{market.title}</h3>
                    </div>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed font-medium">{market.description}</p>
                    
                    <div className="space-y-3">
                      {market.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600 font-medium">
                          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 flex-shrink-0"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-700 mb-8 font-medium">
            Don't see your industry? We work across all sectors.
          </p>
          <a
            href="#contact"
            className="btn-primary smooth-scroll"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
};

export default TargetMarkets;