import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          
          {/* Mobile Layout */}
          <div className="lg:hidden w-full text-center space-y-8">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight animate-fade-in">
              <span className="text-primary">Cre8tiverse</span> – Transforming Ideas into Reality
            </h1>
            
            {/* Circular Image */}
            <div className="flex justify-center animate-slide-up">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Digital Creativity" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Subheading */}
            <h2 className="text-2xl font-semibold text-accent animate-slide-up">
              Innovate, Create, and Inspire.
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up">
              🚀 Cre8tiverse is a digital agency that empowers individuals and brands with training, multimedia solutions, and insights to thrive in the evolving digital world.
            </p>
            
            {/* Button */}
            <div className="animate-slide-up">
              <button 
                onClick={scrollToServices}
                className="btn-primary inline-flex items-center gap-2"
              >
                Start Learning
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex w-full items-center justify-between">
            {/* Left Content */}
            <div className="w-2/3 space-y-8">
              <h1 className="text-5xl xl:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
                <span className="text-primary">Cre8tiverse</span> – Transforming Ideas into Reality
              </h1>
              
              <h2 className="text-3xl font-semibold text-accent animate-slide-up">
                Innovate, Create, and Inspire.
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl animate-slide-up">
                Cre8tiverse is a digital agency that empowers individuals and brands with training, multimedia solutions, and insights to thrive in the evolving digital world.
              </p>
              
              <div className="animate-slide-up">
                <button 
                  onClick={scrollToServices}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Start Learning
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-1/3 flex justify-center animate-float">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Digital Creativity" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;