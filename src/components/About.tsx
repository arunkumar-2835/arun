import React from 'react';
import { User, Heart, Coffee, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-purple-500/20 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                Hi there! I'm Alex, a passionate Full-Stack Developer with over 5 years of experience 
                crafting digital experiences that make a difference.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-gray-400">
                I specialize in modern web technologies and love turning complex problems into 
                simple, beautiful solutions. When I'm not coding, you'll find me contributing to 
                open source projects or exploring the latest tech trends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <Code className="text-blue-400" size={20} />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Heart className="text-red-400" size={20} />
                <span>50+ Projects Completed</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Coffee className="text-yellow-400" size={20} />
                <span>∞ Cups of Coffee</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <User className="text-green-400" size={20} />
                <span>Happy Clients</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Hire Me
              </button>
              <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-full font-semibold transition-all duration-300 hover:bg-purple-500 hover:text-white">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;