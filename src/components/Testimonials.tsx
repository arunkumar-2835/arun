import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Solutions',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Alex is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to solve complex problems makes him invaluable to any team.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Working with Alex was a game-changer for our startup. He built our entire platform from scratch and delivered beyond our expectations. Highly recommended!'
    },
    {
      name: 'Emily Davis',
      role: 'Design Director',
      company: 'Digital Agency Pro',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Alex has an amazing ability to translate design concepts into beautiful, functional code. His collaboration and communication skills are outstanding.'
    },
    {
      name: 'David Wilson',
      role: 'Senior Developer',
      company: 'InnovateLab',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Alex is not just a great developer, but also an excellent mentor. He helped me grow my skills and always shared his knowledge generously.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50">
            <div className="flex items-center justify-center mb-8">
              <Quote className="text-purple-500" size={48} />
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8">
                "{testimonials[currentSlide].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full border-2 border-purple-500/30"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-purple-400">
                    {testimonials[currentSlide].role} at {testimonials[currentSlide].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-colors duration-200"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-colors duration-200"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;