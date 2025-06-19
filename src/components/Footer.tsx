import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook size={24} />, href: '#', label: 'Facebook' },
    { icon: <FaInstagram size={24} />, href: '#', label: 'Instagram' },
    { icon: <FaYoutube size={24} />, href: 'https://www.youtube.com/@cre8tiverse', label: 'YouTube' },
    { icon: <FaTwitter size={24} />, href: '#', label: 'Twitter' },
    { icon: <FaTiktok size={24} />, href: '#', label: 'TikTok' },
    { icon: <FaLinkedin size={24} />, href: '#', label: 'LinkedIn' },
    { icon: <FaEnvelope size={24} />, href: 'mailto:cre8tiverse@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-max">
        <div className="text-center">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center mb-6">
            <img 
              src="https://i.imgur.com/Z2zp8CH.png" 
              alt="Cre8tiverse Logo" 
              className="h-12 w-auto mr-4"
            />
          </div>

          {/* Company Description */}
          <h3 className="text-xl font-semibold mb-8">
            Cre8tiverse – Creating Multimedia & EdTech Solutions.
          </h3>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Cre8tiverse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;