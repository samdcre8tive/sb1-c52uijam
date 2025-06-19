import React from 'react';

const Services = () => {
  const multimediaServices = [
    {
      title: '3D Modeling and Architectural Designs',
      image: 'https://i.imgur.com/fRePzel.jpeg',
      description: 'Expert services including animation, rendering, and digital sculpting.'
    },
    {
      title: 'Video Editing and Motion Graphics',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Professional video editing and stunning motion graphics for all your multimedia needs.'
    },
    {
      title: 'Graphic Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Creative graphic design solutions for branding, marketing, and digital media.'
    },
    {
      title: 'Product Design (UI/UX Design)',
      image: 'https://i.imgur.com/dgbss77.png',
      description: 'User-centered design solutions that create exceptional digital experiences.'
    },
    {
      title: 'Web Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Modern, responsive websites that engage users and drive business results.'
    },
    {
      title: 'Digital Marketing',
      image: 'https://i.imgur.com/HXnU3W7.jpeg',
      description: 'Strategic digital marketing campaigns to boost your online presence and reach.'
    }
  ];

  const edtechServices = [
    {
      title: 'Digital Skills Training',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Comprehensive training programs in digital tools and creative software.'
    },
    {
      title: 'Creative Workshops',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Hands-on workshops to enhance your creative and technical skills.'
    },
    {
      title: 'Online Courses',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Flexible online learning programs designed for busy professionals.'
    },
    {
      title: 'Mentorship Programs',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'One-on-one mentorship to accelerate your creative career growth.'
    },
    {
      title: 'Corporate Training',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Customized training solutions for organizations and teams.'
    },
    {
      title: 'Certification Programs',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Industry-recognized certifications to validate your digital skills.'
    }
  ];

  const ServiceCard = ({ service }: { service: typeof multimediaServices[0] }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
      <div className="aspect-video overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for your multimedia and educational technology needs
          </p>
        </div>

        {/* Multimedia Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Multimedia Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multimediaServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* EdTech Services */}
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">EdTech Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {edtechServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;