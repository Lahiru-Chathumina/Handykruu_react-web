import { Home, Hammer, Palette, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-[#FFB302]" />,
      title: 'Flooring',
      description: 'Expert flooring solutions including tiles, hardwood, laminate, and specialty flooring options for residential and commercial spaces.',
      features: ['Tile Installation', 'Hardwood Flooring', 'Laminate & Vinyl', 'Floor Restoration']
    },
    {
      icon: <Hammer className="w-12 h-12 text-[#FFB302]" />,
      title: 'Renovation',
      description: 'Complete home and office renovations that transform your space while maintaining structural integrity and modern standards.',
      features: ['Home Renovations', 'Office Remodeling', 'Kitchen Upgrades', 'Bathroom Renovation']
    },
    {
      icon: <Palette className="w-12 h-12 text-[#FFB302]" />,
      title: 'Interior Design',
      description: 'Professional interior design services that blend functionality with aesthetic appeal to create stunning living and working spaces.',
      features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Lighting Design']
    },
    {
      icon: <Building className="w-12 h-12 text-[#FFB302]" />,
      title: 'Construction',
      description: 'Full-scale construction services from foundation to finishing, delivering quality buildings that stand the test of time.',
      features: ['New Construction', 'Extensions', 'Commercial Buildings', 'Infrastructure']
    }
  ];

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-[#FFB302]">Services</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive construction and design services 
            tailored to meet your specific needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 text-[#FFB302] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

             <button className="mt-6 w-full bg-[#1E1E1E] text-[#FFB302] py-3 rounded-lg hover:bg-[#2A2A2A] transition-colors font-semibold border border-[#FFB302]">
  Learn More
</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;