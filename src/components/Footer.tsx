import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Facebook, Instagram, Youtube, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Wedding DJ Services',
      'Church Events',
      'Corporate Entertainment',
      'Festival Performances',
      'MC & Hosting',
      'Sound System Rental'
    ],
    quickLinks: [
      { name: 'About DJ Kach', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Events', path: '/events' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contact', path: '/contact' }
    ],
    contact: [
      { icon: Phone, text: '(+254) 723 157-309', href: 'tel:+254723157309' },
      { icon: Mail, text: 'bookings@djkach.com', href: 'mailto:bookings@djkach.com' }
    ]
  };

  const socialMedia = [
    { icon: Facebook, name: 'Facebook', href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, name: 'Instagram', href: '#', color: 'hover:text-pink-400' },
    { icon: Youtube, name: 'YouTube', href: '#', color: 'hover:text-red-400' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center mb-6">
                <img 
                  src="/DJ KACH LOGO 1 - WHITE - TRANSPARENT.png" 
                  alt="DJ Kach Logo" 
                  className="w-20 h-20"
                />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Bringing the joy of gospel music to every celebration. 
                Professional DJ services that uplift spirits and create 
                unforgettable moments.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4 mb-6">
                {footerLinks.contact.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <contact.icon className="w-5 h-5 text-red-500" />
                    <a
                      href={contact.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-200 w-full inline-block text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to get updates on new mixes, upcoming events, and special offers
            </p>
            
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="flex items-center space-x-1 mb-4 md:mb-0">
              <span>&copy; {currentYear} DJ Kach. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for spreading gospel joy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transform transition-all duration-200 z-40"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;