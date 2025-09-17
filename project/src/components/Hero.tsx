import React from 'react';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  const features = [
    { icon: Shield, text: 'Fully Licensed & Insured' },
    { icon: Clock, text: '24/7 Emergency Response' },
    { icon: Users, text: 'Nationwide Coverage' },
    { icon: CheckCircle, text: 'Quality Guaranteed' }
  ];

  return (
    <section id="home" className="relative hero-gradient pt-20 pb-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 float-animation"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-200 rounded-full opacity-20 float-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 stagger-animation">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Australia's Trusted Partner
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Leading <span className="gradient-text">Facility</span>
                <span className="text-red-600"> Maintenance</span>
                <span className="block">Solutions</span>
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed max-w-xl font-medium">
                From minor repairs to major compliance projects, we deliver exceptional facility maintenance services nationwide. Trusted by insurance companies, government agencies, and commercial property managers across Australia.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-green-600" size={20} />
                    </div>
                    <span className="text-slate-800 font-semibold text-sm">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary text-center smooth-scroll"
              >
                Get Free Quote
              </a>
              <a
                href="#services"
                className="btn-secondary text-center smooth-scroll"
              >
                View Services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-slate-600 font-medium">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10,000+</div>
                <div className="text-sm text-slate-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-slate-600 font-medium">Emergency Response</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/hero-main.jpg"
                alt="Professional facility maintenance team at work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 float-animation">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl shadow-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">Available 24/7</div>
                  <div className="text-sm text-slate-600 font-medium">Emergency response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
            