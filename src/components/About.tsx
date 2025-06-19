import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Heart className="w-8 h-8" />, title: 'Creativity', color: 'text-red-500' },
    { icon: <Target className="w-8 h-8" />, title: 'Integrity', color: 'text-blue-500' },
    { icon: <Eye className="w-8 h-8" />, title: 'Innovation', color: 'text-green-500' },
    { icon: <Users className="w-8 h-8" />, title: 'Customer-Centric', color: 'text-purple-500' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Cre8tiverse</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about empowering creativity and driving digital transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-accent mr-4" />
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower individuals with practical digital and creative skills, and help brands and organisations bring their visions to life through clear, compelling multimedia solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
            <div className="flex items-center mb-6">
              <Eye className="w-10 h-10 text-accent mr-4" />
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be a global leader in digital creativity and EdTech—nurturing talent for a dynamic digital world and enabling brands to achieve their goals through innovative multimedia solutions.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
                <div className={`${value.color} mb-4 flex justify-center`}>
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{value.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;