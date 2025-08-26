import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
  
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[#FFB302]" />,
      title: 'Visit Our Office',
      details: ['123 Galle Road, Colombo 03', 'Sri Lanka']
    },
    {
      icon: <Phone className="w-6 h-6 text-[#FFB302]" />,
      title: 'Call Us',
      details: ['+94 11 234 5678', '+94 77 123 4567']
    },
    {
      icon: <Mail className="w-6 h-6 text-[#FFB302]" />,
      title: 'Email Us',
      details: ['info@handykruu.lk', 'projects@handykruu.lk']
    },
    {
      icon: <Clock className="w-6 h-6 text-[#FFB302]" />,
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM']
    }
  ];

  return (
   <section
  id="contact"
  className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Get In <span className="text-[#FFB302]">Touch</span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Ready to start your construction project? Contact us today for a free consultation and quote.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Contact Information
        </h3>

        <div className="space-y-6 mb-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-orange-100 dark:bg-orange-700 p-3 rounded-lg">
                {info.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h4>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 dark:text-gray-300">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-64 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-300">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="font-medium">Interactive Map</p>
            <p className="text-sm">123 Galle Road, Colombo 03</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>

        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="bg-green-100 dark:bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600 dark:text-green-200" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h4>
            <p className="text-gray-600 dark:text-gray-300">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/** Inputs **/}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FFB302] text-white py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="mr-2" size={20} />
                  Send Message
                </div>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;