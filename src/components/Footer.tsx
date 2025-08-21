import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Alex Rodriguez
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer passionate about creating innovative solutions 
              and building amazing user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">alex.rodriguez@email.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>by Alex Rodriguez</span>
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-gray-400">
                © {new Date().getFullYear()} All rights reserved.
              </p>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-purple-600 rounded-full transition-colors duration-300 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="text-gray-400 group-hover:text-white" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;