import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Villa Construction',
      category: 'construction',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      description: 'Luxury 3-bedroom villa with contemporary design and premium finishes.'
    },
    {
      id: 2,
      title: 'Office Renovation',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg',
      description: 'Complete office space transformation with modern amenities.'
    },
    {
      id: 3,
      title: 'Residential Interior Design',
      category: 'interior',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Elegant interior design for a family home with custom furniture.'
    },
    {
      id: 4,
      title: 'Premium Flooring Installation',
      category: 'flooring',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      description: 'High-quality hardwood flooring installation in luxury residence.'
    },
    {
      id: 5,
      title: 'Commercial Building',
      category: 'construction',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      description: '5-story commercial complex with modern architecture.'
    },
    {
      id: 6,
      title: 'Kitchen Renovation',
      category: 'renovation',
      image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg',
      description: 'Complete kitchen makeover with premium appliances and countertops.'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'construction', label: 'Construction' },
    { id: 'renovation', label: 'Renovation' },
    { id: 'interior', label: 'Interior Design' },
    { id: 'flooring', label: 'Flooring' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
<section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#FFB302]">Portfolio</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto mb-12">
            Explore our completed projects showcasing quality craftsmanship and innovative design solutions.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#FFB302] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-orange-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <button className="bg-white text-orange-600 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <Eye size={20} />
                    </button>
                    <button className="bg-white text-orange-600 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#FFB302] text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;