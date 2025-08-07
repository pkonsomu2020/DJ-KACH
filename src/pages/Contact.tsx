import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube, CheckCircle } from 'lucide-react';
import { apiService } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiService.submitContactForm(formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      // You could add error state handling here
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'bookings@djkach.com',
      link: 'mailto:bookings@djkach.com'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      info: 'Greater Metro Area',
      link: null
    },
    {
      icon: Clock,
      title: 'Response Time',
      info: 'Within 24 hours',
      link: null
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', link: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, name: 'Instagram', link: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, name: 'YouTube', link: '#', color: 'hover:text-red-600' }
  ];

  const quickInfo = [
    'Professional equipment provided',
    'Backup systems available',
    'Liability insurance covered',
    'Flexible payment options',
    'Free consultation available',
    'Custom playlist creation'
  ];

  return (
    <div className="pt-16 sm:pt-20 px-0 sm:px-4">
      {/* Hero Section */}
      <section className="relative py-10 sm:py-20">
        <img src="/banner_img.jpg" alt="Banner" className="absolute inset-0 w-full h-48 sm:h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 to-transparent opacity-90 z-10"></div>
        <div className="relative z-20 max-w-2xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-6xl font-bold text-white mb-4 sm:mb-6">
            Get In Touch
          </h1>
          <p className="text-base sm:text-xl text-gray-100 max-w-xl sm:max-w-3xl mx-auto">
            Ready to book DJ Kach for your special event? Let's discuss how we can make it unforgettable.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-2xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border">
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Form</h2>
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Company (optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                        placeholder="Company name (optional)"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Type your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:scale-105 transform transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 inline mr-2" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-100 to-gray-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-red-600 hover:text-red-700 transition-colors duration-200 text-xs sm:text-base"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-xs sm:text-base">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-gray-900 to-red-900 rounded-2xl p-6 sm:p-8 text-white">
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">Follow DJ Kach</h3>
                <p className="text-gray-300 mb-4 sm:mb-6">
                  Stay updated with latest mixes, event photos, and announcements
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">What's Included</h3>
                <div className="space-y-2 sm:space-y-3">
                  {quickInfo.map((info, index) => (
                    <div key={index} className="flex items-center text-gray-700 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 sm:mr-3" />
                      <span>{info}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;