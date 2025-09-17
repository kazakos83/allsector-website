import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const services = [
    'General Maintenance',
    'Insurance Restoration',
    'Painting & Decorating',
    'Plumbing Services',
    'Electrical Services',
    'HVAC Services',
    'Minor Construction',
    'Security & Access'
  ];

  const industries = [
    'Insurance Companies',
    'Commercial Retail',
    'Government Agencies',
    'Property Management',
    'Hotels & Hospitality',
    'Strata & Body Corporate',
    'Healthcare Facilities',
    'Education Sector'
  ];

  const locations = [
    'Sydney, NSW',
    'Melbourne, VIC',
    'Brisbane, QLD',
    'Perth, WA',
    'Adelaide, SA',
    'Canberra, ACT',
    'Darwin, NT',
    'Hobart, TAS'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/logodrakbg.png" 
              alt="Allsector" 
              className="h-16 w-auto mb-8"
            />
            <p className="text-slate-300 mb-8 leading-relaxed font-medium">
              Australia's premier national facility maintenance company, delivering excellence across every sector for over 15 years.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-sm font-medium">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="text-white" size={14} />
                </div>
                <span className="text-white">1300 718 760</span>
              </div>
              <div className="flex items-center text-sm font-medium">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                  <Mail className="text-white" size={14} />
                </div>
                <span className="text-white">info@allsector.com.au</span>
              </div>
              <div className="flex items-center text-sm font-medium">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                  <Clock className="text-white" size={14} />
                </div>
                <span className="text-white">24/7 Emergency Response</span>
              </div>
              <div className="flex items-center text-sm font-medium">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="text-white" size={14} />
                </div>
                <span className="text-white">Australia-wide Coverage</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-slate-300 hover:text-white text-sm transition-colors font-medium hover:translate-x-1 transform duration-200 block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Industries We Serve</h3>
            <ul className="space-y-2">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a href="#industries" className="text-slate-300 hover:text-white text-sm transition-colors font-medium hover:translate-x-1 transform duration-200 block">
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Service Locations</h3>
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index} className="text-slate-300 text-sm font-medium">
                  {location}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-6 bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-lg">
              <h4 className="font-bold mb-3 text-white">Emergency Response</h4>
              <p className="text-sm text-red-100 font-medium">
                Available 24/7 across all locations with guaranteed response times.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-400 mb-4 md:mb-0 font-medium">
              © 2024 Allsector Pty Ltd. All rights reserved. ABN: 71 686 997 286
            </div>
            <div className="flex space-x-6 text-sm text-slate-400 font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Licensing</a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
              <span>Licensed Builders</span>
              <span>•</span>
              <span>Electrical Contractors</span>
              <span>•</span>
              <span>Plumbing Specialists</span>
              <span>•</span>
              <span>OH&S Compliant</span>
              <span>•</span>
              <span>Insurance Approved</span>
              <span>•</span>
              <span>Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;