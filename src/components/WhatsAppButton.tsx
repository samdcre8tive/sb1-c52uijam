import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.link/bhsgxt"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-orange-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;