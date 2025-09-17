import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, Shield, Clock, CheckCircle, Target, MapPin, Phone } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'Every project meets our rigorous quality standards with full warranty backing and ongoing support.'
    },
    {
      icon: Clock,
      title: 'Reliable Response',
      description: '24/7 emergency response with guaranteed arrival times across Australia for urgent maintenance needs.'
    },
    {
      icon: Shield,
      title: 'Fully Compliant',
      description: 'All work meets Australian standards with proper licensing, insurance coverage, and safety protocols.'
    },
    {
      icon: Target,
      title: 'Results Focused',
      description: 'Delivering measurable outcomes that protect and enhance your property investments and operational efficiency.'
    }
  ];

  const certifications = [
    'Licensed Builders',
    'Electrical Contractors',
    'Plumbing Specialists',
    'OH&S Compliant',
    'Insurance Approved',
    'Quality Assured'
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Allsector established as a specialist facility maintenance provider in Sydney.'
    },
    {
      year: '2012',
      title: 'National Expansion',
      description: 'Extended operations to Melbourne, Brisbane, and Perth with dedicated regional teams.'
    },
    {
      year: '2016',
      title: 'Insurance Partnership',
      description: 'Became preferred restoration partner for major Australian insurance companies.'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Launched digital project management platform for enhanced client communication.'
    },
    {
      year: '2024',
      title: 'Industry Leadership',
      description: 'Recognised as Australia\'s premier national facility maintenance company.'
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
            <span className="text-slate-900">About</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                About <span className="text-red-600">Allsector</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Australia's most trusted national facility maintenance partner, delivering excellence across every sector for over 15 years.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Since 2008, we've built our reputation on exceptional service quality, maintaining the highest safety standards, and providing cost-effective solutions that protect and enhance property values nationwide.
              </p>
            </div>
            <div className="relative">
              <img
                src="/hero-main.jpg"
                alt="Allsector team at work"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Years Experience', icon: Award },
              { number: '10,000+', label: 'Projects Completed', icon: CheckCircle },
              { number: '500+', label: 'Trusted Clients', icon: Users },
              { number: '8', label: 'States Covered', icon: MapPin }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do and ensure exceptional outcomes for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From a local Sydney operation to Australia's leading national facility maintenance company.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                      <div className="text-2xl font-bold text-red-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-red-600 rounded-full">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Fully licensed, insured, and compliant with all Australian standards and regulations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center">
                <CheckCircle className="text-green-600 mx-auto mb-2" size={24} />
                <div className="text-sm font-medium text-slate-900">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Australia's Best?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Allsector for their facility maintenance needs.
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
              <Phone className="inline mr-2" size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;