import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import h3Video from '../assets/h3.mp4';

const About = () => {
  const achievements = [
    { icon: <CheckCircle className="w-6 h-6 text-[#FFB302]" />, text: 'Licensed & Insured' },
    { icon: <Award className="w-6 h-6 text-[#FFB302]" />, text: 'Award-Winning Team' },
    { icon: <Users className="w-6 h-6 text-[#FFB302]" />, text: 'Expert Craftsmen' },
    { icon: <Clock className="w-6 h-6 text-[#FFB302]" />, text: 'On-Time Delivery' },
  ];

  return (
    <section id="about" className="py-20 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-[#FFB302]">Handykruu</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              For over 15 years, Handykruu has been Sri Lanka's trusted partner in bringing construction 
              dreams to life. We pride ourselves on delivering exceptional quality, innovative solutions, 
              and unmatched customer service across all our projects.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team of skilled professionals combines traditional craftsmanship with modern 
              techniques to ensure every project meets the highest standards of quality and durability. 
              From residential homes to commercial spaces, we build with passion and precision.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {achievement.icon}
                  <span className="text-gray-200 font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>

            <button className="text-[#FFB302] px-8 py-3 rounded-lg transition-colors font-semibold shadow-lg border border-[#FFB302]">
              Learn More About Us
            </button>
          </div>

          {/* Video Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={h3Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#1E1E1E] text-white rounded-xl shadow-lg p-6 border-l-4 border-[#FFB302]">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-[#FFB302]">500+</div>
                <div>
                  <div className="font-semibold">Happy Clients</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
