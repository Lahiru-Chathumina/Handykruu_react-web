import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; 
import emailjs from 'emailjs-com';

// Fix default marker icons for React-Leaflet

const DefaultIcon = L.icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;


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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_5xu0gqu",
        "template_k5aoh3e",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "m_6GnAKmw4yFp-XEi"
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[#FFB302]" />,
      title: 'Visit Our Office',
      details: ['Boralesgamuwa, Sri Lanka']
    },
    {
      icon: <Phone className="w-6 h-6 text-[#FFB302]" />,
      title: 'Call Us',
      details: ['+94 777 627 835', '+94 777 627 836']
    },
    {
      icon: <Clock className="w-6 h-6 text-[#FFB302]" />,
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM']
    }
  ];

const center: L.LatLngTuple = [6.8382, 79.9104];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
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
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:[#FFB302] p-3 rounded-lg">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h4>
                    {info.details.map((d, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-300">{d}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* OpenStreetMap */}
    <div className="rounded-xl overflow-hidden"> <MapContainer center={center} zoom={14} style={{ width: '100%', height: '300px' }} scrollWheelZoom={true}> <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' /> <Marker 
    position={center}> <Popup>Our Office Location</Popup> </Marker> </MapContainer> </div>
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
                {['name', 'email', 'phone'].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {field === 'name' ? 'Full Name *' : field === 'email' ? 'Email Address *' : 'Phone Number *'}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                  <textarea
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
