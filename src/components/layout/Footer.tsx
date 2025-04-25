import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">THE LORD REIGNS CHURCH</h3>
            <address className="not-italic">
              <div className="flex items-start mb-3">
                <MapPin className="h-5 w-5 text-secondary-400 mr-2 mt-1 flex-shrink-0" />
                <p className="text-neutral-100">
                  KINGS FARM, Vaderahalli Village, Vidyaranyapura post, Bengaluru- 560098
                </p>
              </div>
              <div className="flex items-center mb-3">
                <Phone className="h-5 w-5 text-secondary-400 mr-2 flex-shrink-0" />
                <p className="text-neutral-100">+91 9876543210</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary-400 mr-2 flex-shrink-0" />
                <p className="text-neutral-100">info@tlrchurch.org</p>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-100 hover:text-secondary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-100 hover:text-secondary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-100 hover:text-secondary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-100 hover:text-secondary-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-100 hover:text-secondary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Service Times</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-secondary-400 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Sunday Worship</p>
                  <p className="text-neutral-100">9:00 AM - 11:30 AM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-secondary-400 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Wednesday Prayer</p>
                  <p className="text-neutral-100">6:30 PM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-secondary-400 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Friday Bible Study</p>
                  <p className="text-neutral-100">7:00 PM - 8:30 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-700 text-white hover:bg-secondary-400 hover:text-primary-800 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-700 text-white hover:bg-secondary-400 hover:text-primary-800 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-700 text-white hover:bg-secondary-400 hover:text-primary-800 p-2 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-700 text-white hover:bg-secondary-400 hover:text-primary-800 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <Link to="/contact" className="btn btn-secondary inline-block">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-neutral-200">
            &copy; {currentYear} THE LORD REIGNS CHURCH. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;