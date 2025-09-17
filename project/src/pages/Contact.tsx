import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { submitContactForm, type ContactSubmission } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    location: '',
    message: '',
    urgency: 'standard'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [mailtoLink, setMailtoLink] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setMailtoLink('');
    
    try {
      // Submit to Supabase database
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || null,
        service: formData.service,
        location: formData.location,
        message: formData.message,
        urgency: formData.urgency as 'emergency' | 'urgent' | 'standard'
      };

      const result = await submitContactForm(submissionData);
      
      if (result.success || result.fallback) {
        // Show success message and reset form
        setIsSubmitted(true);
        if (result.mailtoLink) {
          setMailtoLink(result.mailtoLink);
        }
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          location: '',
          message: '',
          urgency: 'standard'
        });
        
        // Keep success message visible longer
        setTimeout(() => {
          setIsSubmitted(false);
          setMailtoLink('');
        }, 10000);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'There was an issue submitting your message. Please try again or call us directly at 1300 718 760 for immediate assistance.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['1800 ALLSECTOR', '(24/7 Emergency Line)'],
      link: 'tel:1800255732867'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@allsector.com.au', 'quotes@allsector.com.au'],
      link: 'mailto:info@allsector.com.au'
    },
    {
      icon: MapPin,
      title: 'Coverage Area',
      details: ['Australia-wide', 'All major cities & regional areas'],
      link: null
    },
    {
      icon: Clock,
      title: 'Response Times',
      details: ['Emergency: Within 2 hours', 'Standard: Same day'],
      link: null
    }
  ];

  const services = [
    'General Maintenance',
    'Insurance Restoration',
    'Painting & Decorating',
    'Plumbing Services',
    'Electrical Services',
    'HVAC Services',
    'Minor Construction',
    'Security & Access',
    'Other - Please Specify'
  ];

  const locations = [
    'Sydney, NSW',
    'Melbourne, VIC',
    'Brisbane, QLD',
    'Perth, WA',
    'Adelaide, SA',
    'Canberra, ACT',
    'Darwin, NT',
    'Hobart, TAS',
    'Regional Australia',
    'Multiple Locations'
  ];

  const offices = [
    {
      city: 'Sydney',
      address: 'Level 15, 123 Pitt Street, Sydney NSW 2000',
      phone: '(02) 9000 0000',
      email: 'sydney@allsector.com.au'
    },
    {
      city: 'Melbourne',
      address: 'Level 20, 456 Collins Street, Melbourne VIC 3000',
      phone: '(03) 9000 0000',
      email: 'melbourne@allsector.com.au'
    },
    {
      city: 'Brisbane',
      address: 'Level 10, 789 Queen Street, Brisbane QLD 4000',
      phone: '(07) 3000 0000',
      email: 'brisbane@allsector.com.au'
    },
    {
      city: 'Perth',
      address: 'Level 12, 321 St Georges Terrace, Perth WA 6000',
      phone: '(08) 9000 0000',
      email: 'perth@allsector.com.au'
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
            <span className="text-slate-900">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Get Your Free <span className="text-red-600">Quote Today</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to experience Australia's premier facility maintenance service? Contact us for a comprehensive quote tailored to your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <Icon className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                          {info.details.map((detail, idx) => (
                            <div key={idx} className="text-slate-600 text-sm">
                              {info.link && idx === 0 ? (
                                <a href={info.link} className="hover:text-red-600 transition-colors">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Trust Signals */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">Why Choose Allsector?</h4>
                <div className="space-y-3">
                  {[
                    'Free, no-obligation quotes',
                    'Australia-wide coverage',
                    'Licensed and insured',
                    '24/7 emergency response',
                    '15+ years of experience',
                    'Quality guaranteed'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="text-green-600 mr-2" size={16} />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Request Your Free Quote</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                      placeholder="0412 345 678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company/Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Location *
                    </label>
                    <select
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select location</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Urgency Level *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'emergency', label: 'Emergency', desc: 'Within 2 hours' },
                      { value: 'urgent', label: 'Urgent', desc: 'Same day' },
                      { value: 'standard', label: 'Standard', desc: 'Within 48 hours' }
                    ].map((urgency) => (
                      <label key={urgency.value} className="flex items-center p-3 border border-slate-300 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors duration-200">
                        <input
                          type="radio"
                          name="urgency"
                          value={urgency.value}
                          checked={formData.urgency === urgency.value}
                          onChange={handleChange}
                          className="mr-3 text-red-600"
                        />
                        <div>
                          <div className="font-medium text-slate-900 text-sm">{urgency.label}</div>
                          <div className="text-xs text-slate-500">{urgency.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                    placeholder="Please describe your maintenance requirements, including any specific details, timeframes, or special considerations..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitted || isSubmitting}
                    className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-green-600 disabled:opacity-75 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2" size={20} />
                        Thank You!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="loading-spinner mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Request Free Quote
                      </>
                    )}
                  </button>
                  
                  <a
                    href="tel:1800255732867"
                    className="flex-1 border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 text-center flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={20} />
                    Call Now
                  </a>
                </div>

                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg space-y-3">
                  <div className="text-green-800">
                    <p className="font-bold mb-2">✅ Thank you for your inquiry!</p>
                    <p className="text-sm mb-3">
                      Your request has been successfully submitted and our team will contact you shortly based on your urgency level.
                    </p>
                    {mailtoLink && (
                      <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-800 mb-2">
                          <strong>Alternative:</strong> You can also send your inquiry directly via email:
                        </p>
                        <a 
                          href={mailtoLink}
                          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          📧 Send via Email Client
                        </a>
                      </div>
                    )}
                    <div className="mt-3 pt-3 border-t border-green-200">
                      <p className="text-sm font-medium">
                        For urgent matters, please call us at <a href="tel:1300718760" className="underline hover:text-green-900">1300 718 760</a>
                      </p>
                    </div>
                  </div>
                  </div>
                )}

                {submitError && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg space-y-3">
                    <div className="text-red-800">
                      <p className="font-bold mb-2">❌ Submission Issue</p>
                      <p className="text-sm mb-3">
                        {submitError}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <a 
                          href="tel:1300718760"
                          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          📞 Call 1300 718 760
                        </a>
                        <a 
                          href="mailto:info@allsector.com.au?subject=Website Inquiry&body=Please include your contact details and requirements."
                          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          📧 Email Directly
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Offices</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              With offices across Australia, we're always close by when you need us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{office.city}</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start">
                    <MapPin className="mr-2 mt-0.5 text-slate-400" size={16} />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 text-slate-400" size={16} />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-red-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 text-slate-400" size={16} />
                    <a href={`mailto:${office.email}`} className="hover:text-red-600 transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;