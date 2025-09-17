import React, { useState } from 'react';
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
      details: ['1300 718 760', '(24/7 Emergency Line)'],
      link: 'tel:1300718760'
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

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-red-100 to-transparent rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Get Started Today
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Get Your Free <span className="gradient-text">Quote Today</span>
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Ready to experience Australia's premier facility maintenance service? Contact us for a comprehensive quote tailored to your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <Icon className="text-white" size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <div key={idx} className="text-slate-600 text-sm font-medium">
                            {info.link && idx === 0 ? (
                              <a href={info.link} className="hover:text-red-600 transition-colors font-semibold">
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
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-6 text-lg">Why Choose Allsector?</h4>
              <div className="space-y-3">
                {[
                  'Free, no-obligation quotes',
                  'Australia-wide coverage',
                  'Licensed and insured',
                  '24/7 emergency response',
                  '15+ years of experience',
                  'Quality guaranteed'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm text-slate-700 font-medium">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="text-white" size={12} />
                    </div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Request Your Free Quote</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="0412 345 678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input"
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
                  <label className="block text-sm font-bold text-slate-700 mb-3">
                    Location *
                  </label>
                  <select
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="form-input"
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
                <label className="block text-sm font-bold text-slate-700 mb-4">
                  Urgency Level *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'emergency', label: 'Emergency', desc: 'Within 2 hours' },
                    { value: 'urgent', label: 'Urgent', desc: 'Same day' },
                    { value: 'standard', label: 'Standard', desc: 'Within 48 hours' }
                  ].map((urgency) => (
                    <label key={urgency.value} className="flex items-center p-4 border-2 border-slate-200 rounded-xl cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                      <input
                        type="radio"
                        name="urgency"
                        value={urgency.value}
                        checked={formData.urgency === urgency.value}
                        onChange={handleChange}
                        className="mr-3 text-blue-600"
                      />
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{urgency.label}</div>
                        <div className="text-xs text-slate-500">{urgency.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-3">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Please describe your maintenance requirements, including any specific details, timeframes, or special considerations..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitted || isSubmitting}
                  className="flex-1 btn-primary disabled:bg-green-600 disabled:hover:bg-green-600 disabled:opacity-75 flex items-center justify-center"
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
                  className="flex-1 btn-secondary text-center flex items-center justify-center"
                >
                  <Phone className="mr-2" size={20} />
                  Call Now
                </a>
              </div>

              {isSubmitted && (
                <div className="mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-xl space-y-4">
                  <div className="text-green-800">
                    <p className="font-bold mb-2">✅ Thank you for your inquiry!</p>
                    <p className="text-sm mb-3">
                      Your request has been successfully submitted and our team will contact you shortly based on your urgency level.
                    </p>
                    {mailtoLink && (
                      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-800 mb-2">
                          <strong>Alternative:</strong> You can also send your inquiry directly via email:
                        </p>
                        <a 
                          href={mailtoLink}
                          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          📧 Send via Email Client
                        </a>
                      </div>
                    )}
                    <div className="mt-4 pt-4 border-t border-green-200">
                      <p className="text-sm font-medium">
                        For urgent matters, please call us at <a href="tel:1300718760" className="underline hover:text-green-900">1300 718 760</a>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mt-6 p-6 bg-red-50 border-2 border-red-200 rounded-xl space-y-4">
                  <div className="text-red-800">
                    <p className="font-bold mb-2">❌ Submission Issue</p>
                    <p className="text-sm mb-3">
                      {submitError}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href="tel:1300718760"
                        className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        📞 Call 1300 718 760
                      </a>
                      <a 
                        href="mailto:info@allsector.com.au?subject=Website Inquiry&body=Please include your contact details and requirements."
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
  );
};

export default Contact;