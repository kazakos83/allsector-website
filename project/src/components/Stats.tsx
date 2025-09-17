import React from 'react';
import { TrendingUp, Users, MapPin, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '10,000+',
      label: 'Projects Completed',
      description: 'Successfully delivered nationwide'
    },
    {
      icon: Users,
      number: '500+',
      label: 'Trusted Clients',
      description: 'Across all industry sectors'
    },
    {
      icon: MapPin,
      number: '8',
      label: 'State Coverage',
      description: 'Australia-wide presence'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      description: 'Industry-leading expertise'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            Our Track Record
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Trusted Across Australia</h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">The numbers speak for themselves - delivering excellence nationwide</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group relative">
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2 h-full min-h-[200px] flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                  <Icon size={24} className="text-white" />
                  </div>
                  <div className="stats-counter">{stat.number}</div>
                  <div className="text-xl font-bold mb-2 text-white">{stat.label}</div>
                  <div className="text-slate-300 text-sm font-medium">{stat.description}</div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 text-lg mb-6">Join hundreds of satisfied clients nationwide</p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:bg-slate-50 smooth-scroll"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;