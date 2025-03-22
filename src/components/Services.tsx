import React from 'react';
import { ExternalLink } from 'lucide-react';

const services = [
  {
    title: 'Branding Expert',
    description: 'A branding expert who crafts compelling digital experiences that elevate brands through innovative design and strategic storytelling. With a deep understanding of multimedia and education, he creates visually engaging and impactful brand identities that connect, inspire, and leave a lasting impression.',
    link: 'https://youtu.be/cKY6RJtAlqo',
  },
  {
    title: 'Motion Graphics Designer',
    description: 'A creative expert in video editing, motion graphics, and 3D animation, crafting visually compelling stories that captivate audiences. With a deep understanding of multimedia and design, he brings ideas to life through dynamic visuals, seamless motion, and immersive digital experiences.',
    link: 'https://youtu.be/cKY6RJtAlqo',
  },
  {
    title: 'Learning Experience Designer',
    description: 'An expert in instructional design, product design, and multimedia training, creating engaging learning experiences that blend creativity with technology. As a faculty and trainer, he develops innovative digital content, interactive courses, and user-centered designs that enhance education and professional development.',
    link: 'https://drive.google.com/file/d/1oFVt108qecX93aENBrpidLHgzth8RMeX/view',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#232464] mb-16">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-2xl font-bold text-[#232464] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#f48515] hover:text-[#232464] transition-colors duration-200"
              >
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}