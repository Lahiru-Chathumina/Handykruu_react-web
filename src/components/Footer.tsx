import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#FFB302]">Handy</span>kruu
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building dreams, brick by brick. Your trusted partner for construction, 
              renovation, and design projects across Sri Lanka.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
className="bg-gray-800 p-3 rounded-full hover:bg-[#FFB302] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
className="bg-gray-800 p-3 rounded-full hover:bg-[#FFB302] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
className="bg-gray-800 p-3 rounded-full hover:bg-[#FFB302] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-[#FFB302] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-[#FFB302] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#FFB302] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-[#FFB302] transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-[#FFB302] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400">Construction</span>
              </li>
              <li>
                <span className="text-gray-400">Renovation</span>
              </li>
              <li>
                <span className="text-gray-400">Interior Design</span>
              </li>
              <li>
                <span className="text-gray-400">Flooring</span>
              </li>
              <li>
                <span className="text-gray-400">Consultation</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FFB302] flex-shrink-0" />
                <span className="text-gray-400">123 Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FFB302] flex-shrink-0" />
                <span className="text-gray-400">+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FFB302] flex-shrink-0" />
                <span className="text-gray-400">info@handykruu.lk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Handykruu. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#FFB302] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFB302] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFB302] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;