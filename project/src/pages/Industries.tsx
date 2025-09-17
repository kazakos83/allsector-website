import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Building, Shield, Landmark, Home, Hotel, Users, Heart, GraduationCap, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Shield,
      title: 'Insurance Companies',
      description: 'Specialized restoration and make-safe services for insurance claims across Australia, working directly with assessors and loss adjusters.',
      image: '/make-safe-image.jpg',
      challenges: [
        'Emergency response requirements',
        'Detailed documentation needs',
        'Compliance with insurance standards',
        'Cost-effective restoration solutions'
      ],
      solutions: [
        '24/7 emergency make-safe services',
        'Comprehensive damage assessment reports',
        'Direct insurer billing and communication',
        'Certified restoration processes',
        'Photo documentation and progress reporting',
        'Compliance with industry standards'
      ],
      caseStudy: {
        title: 'Storm Damage Restoration - Brisbane',
        description: 'Rapid response to severe storm damage across 50+ properties, completing make-safe and restoration work within insurance timelines.',
        result: '100% client satisfaction, zero safety incidents, all work completed within budget'
      }
    },
    {
      icon: Building,
      title: 'Commercial Retail',
      description: 'Comprehensive facility maintenance keeping retail spaces operational, appealing, and compliant with safety standards.',
      image: '/retail.jpeg',
      challenges: [
        'Minimizing business disruption',
        'Maintaining brand standards',
        'After-hours work requirements',
        'Multi-location coordination'
      ],
      solutions: [
        'Scheduled maintenance during off-hours',
        'Brand-compliant materials and finishes',
        'National coordination across locations',
        'Emergency repair services',
        'Preventive maintenance programs',
        'Store fit-out and renovation services'
      ],
      caseStudy: {
        title: 'National Retail Chain Maintenance',
        description: 'Ongoing maintenance contract covering 200+ retail locations across Australia with standardized service delivery.',
        result: '99.5% uptime maintained, 30% reduction in emergency callouts through preventive maintenance'
      }
    },
    {
      icon: Landmark,
      title: 'Government Agencies',
      description: 'Trusted maintenance partner for government buildings and public facilities with strict compliance and security requirements.',
      image: '/gov.webp',
      challenges: [
        'Strict compliance requirements',
        'Security clearance needs',
        'Budget constraints',
        'Public safety standards'
      ],
      solutions: [
        'Security-cleared personnel available',
        'Comprehensive compliance documentation',
        'Competitive government pricing',
        'OH&S excellence programs',
        'Accessibility compliance upgrades',
        'Energy efficiency improvements'
      ],
      caseStudy: {
        title: 'Government Office Complex - Canberra',
        description: 'Complete facility maintenance for major government department including security upgrades and accessibility improvements.',
        result: 'Full compliance achieved, 25% energy cost reduction, enhanced security protocols implemented'
      }
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Supporting property managers with reliable, cost-effective maintenance solutions for residential and commercial portfolios.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      challenges: [
        'Tenant satisfaction requirements',
        'Cost management pressures',
        'Emergency response needs',
        'Multiple property coordination'
      ],
      solutions: [
        'Dedicated property management portal',
        'Transparent pricing and reporting',
        '24/7 emergency response',
        'Preventive maintenance scheduling',
        'Tenant communication protocols',
        'Portfolio-wide service coordination'
      ],
      caseStudy: {
        title: 'Residential Portfolio - Sydney',
        description: 'Maintenance services for 500+ residential units across multiple complexes with integrated tenant communication system.',
        result: '95% tenant satisfaction rating, 40% reduction in maintenance costs, streamlined service delivery'
      }
    },
    {
      icon: Hotel,
      title: 'Hotels & Hospitality',
      description: 'Maintaining hospitality facilities to ensure guest satisfaction and operational efficiency with minimal disruption.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      challenges: [
        'Guest experience protection',
        'High-quality finish requirements',
        'Rapid turnaround needs',
        'Health and safety compliance'
      ],
      solutions: [
        'Silent operation protocols',
        'Premium materials and finishes',
        'Express service delivery',
        'Food safety compliance',
        'Pool and spa maintenance',
        'Guest area priority scheduling'
      ],
      caseStudy: {
        title: '5-Star Hotel Chain - Melbourne',
        description: 'Comprehensive maintenance services for luxury hotel including guest rooms, restaurants, and conference facilities.',
        result: 'Zero guest complaints, 99% room availability maintained, all health inspections passed with excellence'
      }
    },
    {
      icon: Users,
      title: 'Strata & Body Corporate',
      description: 'Comprehensive building maintenance for residential and commercial strata properties with transparent reporting.',
      image: '/commercial.jpg',
      challenges: [
        'Committee approval processes',
        'Budget management',
        'Resident communication',
        'Common area maintenance'
      ],
      solutions: [
        'Detailed quotations and approvals',
        'Competitive strata pricing',
        'Regular progress updates',
        'Common area specialization',
        'Lift and mechanical services',
        'Garden and landscape maintenance'
      ],
      caseStudy: {
        title: 'High-Rise Residential Complex - Perth',
        description: 'Complete building maintenance for 300-unit residential tower including mechanical systems and common areas.',
        result: 'Building compliance maintained, 20% cost savings achieved, 98% resident satisfaction'
      }
    },
    {
      icon: Heart,
      title: 'Healthcare Facilities',
      description: 'Specialized maintenance for medical facilities with strict hygiene, safety, and infection control requirements.',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
      challenges: [
        'Infection control protocols',
        'Critical system reliability',
        'Patient safety requirements',
        'Regulatory compliance'
      ],
      solutions: [
        'Hospital-grade cleaning protocols',
        'Critical system maintenance',
        'Patient area protection',
        'Medical equipment support',
        'Emergency power systems',
        'Compliance documentation'
      ],
      caseStudy: {
        title: 'Private Hospital - Adelaide',
        description: 'Ongoing maintenance for 200-bed private hospital including operating theatres and critical care areas.',
        result: '100% infection control compliance, zero critical system failures, all regulatory audits passed'
      }
    },
    {
      icon: GraduationCap,
      title: 'Education Sector',
      description: 'Safe, compliant maintenance solutions for schools, universities, and childcare centers with child safety focus.',
      image: '/child copy.jpg',
      challenges: [
        'Child safety requirements',
        'Educational continuity',
        'Budget constraints',
        'Seasonal maintenance needs'
      ],
      solutions: [
        'Child-safe materials and processes',
        'Holiday period scheduling',
        'Educational sector pricing',
        'Playground safety compliance',
        'Classroom environment optimization',
        'Security system maintenance'
      ],
      caseStudy: {
        title: 'Primary School Network - Brisbane',
        description: 'Maintenance services for 15 primary schools including playgrounds, classrooms, and administrative areas.',
        result: '100% safety compliance, minimal class disruption, 30% maintenance cost reduction through scheduling'
      }
    }
  ];

  const whyChooseReasons = [
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of sector-specific requirements and regulations'
    },
    {
      title: 'Compliance Focus',
      description: 'Ensuring all work meets industry standards and regulatory requirements'
    },
    {
      title: 'Tailored Solutions',
      description: 'Customized maintenance programs designed for each industry\'s unique needs'
    },
    {
      title: 'National Coverage',
      description: 'Consistent service delivery across all Australian states and territories'
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
            <span className="text-slate-900">Industries</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Industries <span className="text-red-600">We Serve</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Specialized maintenance solutions tailored to the unique requirements of diverse industry sectors across Australia. From emergency response to planned maintenance, we understand what each industry needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mr-4 shadow-lg">
                        <Icon className="text-white" size={28} />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900">{industry.title}</h2>
                    </div>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">{industry.description}</p>
                    
                    {/* Challenges & Solutions */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Key Challenges</h4>
                        <ul className="space-y-2">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Our Solutions</h4>
                        <ul className="space-y-2">
                          {industry.solutions.slice(0, 4).map((solution, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start">
                              <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Case Study */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Case Study: {industry.caseStudy.title}</h4>
                      <p className="text-sm text-slate-600 mb-3">{industry.caseStudy.description}</p>
                      <div className="text-sm font-medium text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                        Result: {industry.caseStudy.result}
                      </div>
                    </div>
                    
                    <a
                      href="/contact"
                      className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Get Industry Quote <ArrowRight className="ml-2" size={16} />
                    </a>
                  </div>
                  
                  {/* Image */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Industries Choose Allsector</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our industry-specific expertise ensures we understand your unique challenges and deliver tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-slate-300">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-slate-300">Industry Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.5%</div>
              <div className="text-slate-300">Compliance Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Experience Industry-Leading Service?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your industry-specific maintenance requirements and discover how we can help optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Industry Quote
            </a>
            <a
              href="tel:1300718760"
              className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              Call 1300 718 760
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;