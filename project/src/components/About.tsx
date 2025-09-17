import React from 'react';
import { Award, Users, Shield, Clock, CheckCircle, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'Every project meets our rigorous quality standards with full warranty backing.'
    },
    {
      icon: Clock,
      title: 'Reliable Response',
      description: '24/7 emergency response with guaranteed arrival times across Australia.'
    },
    {
      icon: Shield,
      title: 'Fully Compliant',
      description: 'All work meets Australian standards with proper licensing and insurance coverage.'
    },
    {
      icon: Target,
      title: 'Results Focused',
      description: 'Delivering measurable outcomes that protect and enhance your property investments.'
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Allsector</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Australia's most trusted national facility maintenance partner, delivering excellence across every sector for over 15 years.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Your National Property Performance Partner</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Since 2008, Allsector has been at the forefront of Australia's facility maintenance industry. We've built our reputation on delivering exceptional service quality, maintaining the highest safety standards, and providing cost-effective solutions that protect and enhance property values nationwide.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our team of qualified professionals understands that every property is unique. Whether it's emergency restoration work for insurance companies, routine maintenance for commercial properties, or specialised services for healthcare facilities, we deliver tailored solutions that exceed expectations.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">15+</div>
                <div className="text-sm text-slate-600">Years of Excellence</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">10,000+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Certifications & Compliance</h4>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center text-sm text-slate-600">
                    <CheckCircle className="text-green-600 mr-2" size={16} />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/about.jpeg"
              alt="Professional team at work"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-200">
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Award className="text-red-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Industry Leaders</div>
                  <div className="text-sm text-slate-600">Setting the standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;