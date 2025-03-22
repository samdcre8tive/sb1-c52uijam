import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://web.facebook.com/Samdcrea8tive/' },
    { icon: Instagram, href: 'https://www.instagram.com/samdcre8tive/' },
    { icon: Youtube, href: 'https://www.youtube.com/@cre8tiverse' },
    { icon: Twitter, href: 'https://twitter.com/samdcre8tive' },
    { icon: Mail, href: 'mailto:samuelaku32@gmail.com' },
  ];

  return (
    <footer className="bg-[#232464] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-lg">
            <span className="font-bold">Samuel Aku</span>—Multimedia & EdTech Specialist creating immersive digital experiences and transformative learning solutions.
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f48515] transition-colors duration-200"
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}