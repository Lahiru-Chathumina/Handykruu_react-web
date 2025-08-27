
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Fernandez',
      position: 'Homeowner',
      location: 'Colombo',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      rating: 5,
      content: 'Handykruu exceeded our expectations with our home renovation. Their attention to detail and professional approach made the entire process smooth and stress-free. The quality of work is outstanding!'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      position: 'Business Owner',
      location: 'Kandy',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 5,
      content: 'We hired Handykruu for our office construction project, and they delivered beyond our expectations. The team was professional, timely, and the craftsmanship is exceptional. Highly recommended!'
    },
    {
      id: 3,
      name: 'Sarah Perera',
      position: 'Interior Designer',
      location: 'Galle',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      content: 'Working with Handykruu on interior design projects has been a pleasure. They understand design vision and execute it perfectly. Their flooring and finishing work is top-notch.'
    }
  ];

  return (
<section id="testimonials" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our <span className="text-[#FFB302]">Clients Say</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote size={40} className="text-[#FFB302]" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#FFB302] text-[#FFB302]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#FFB302] mb-2">4.9/5</div>
              <div className="text-gray-700 font-medium">Average Rating</div>
              <div className="text-sm text-gray-600">Based on 200+ reviews</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#FFB302] mb-2">100%</div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-600">Projects completed successfully</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-[#FFB302] mb-2">15+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
              <div className="text-sm text-gray-600">In construction industry</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;