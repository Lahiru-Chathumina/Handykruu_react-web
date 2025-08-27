import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black/60 to-black/40">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
            alt="Construction site"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Building Dreams,{' '}
            <span className="text-[#FFB302]">Brick by Brick</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Transform your vision into reality with Handykruu's expert construction services. 
            From renovations to complete builds, we deliver quality craftsmanship across Sri Lanka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              onClick={scrollToContact}
className="bg-[#FFB302] text-black px-8 py-4 rounded-lg hover:bg-[#E6C200] transition-all duration-300 font-semibold flex items-center justify-center group"
            >
              Get a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold flex items-center justify-center">
              <Play className="mr-2" size={20} />
              Watch Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFB302] mb-2">500+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFB302] mb-2">15+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FFB302] mb-2">100%</div>
              <div className="text-gray-300 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;