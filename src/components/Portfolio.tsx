import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const portfolioCategories = {
    'UI/UX Design': [
      'https://i.imgur.com/zHujiY7.jpeg',
      'https://i.imgur.com/NDnDVKi.jpeg'
    ],
    'Flier Design': [
      'https://i.imgur.com/YJmLLLS.jpeg',
      'https://i.imgur.com/fiJGHFN.jpeg'
    ],
    'Floor Plan': [
      'https://i.imgur.com/JjHyODi.jpeg',
      'https://i.imgur.com/fRC5gWf.jpg'
    ],
    'Page Design': [
      'https://i.imgur.com/sgz0VtM.jpeg',
      'https://i.imgur.com/YMbXwDu.jpeg'
    ]
  };

  const youtubeVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  ];

  const edtechVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  ];

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our creative work and educational content
          </p>
        </div>

        {/* Multimedia Portfolio */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Multimedia Portfolio</h3>
          
          {/* Portfolio Categories */}
          {Object.entries(portfolioCategories).map(([category, images]) => (
            <div key={category} className="mb-12">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{category}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {images.map((image, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                    <img 
                      src={image} 
                      alt={`${category} ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* YouTube Videos */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Video Content</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {youtubeVideos.map((video, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                  <div className="aspect-video">
                    <iframe 
                      src={video}
                      title={`Portfolio Video ${index + 1}`}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EdTech Portfolio */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">EdTech Portfolio</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {edtechVideos.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="aspect-video">
                  <iframe 
                    src={video}
                    title={`EdTech Video ${index + 1}`}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://www.youtube.com/@cre8tiverse"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Learn More
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;