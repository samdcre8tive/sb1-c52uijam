import React from 'react';
import { LinkedInLogo } from './LinkedInLogo';
import { BehanceLogo } from './BehanceLogo';

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-[#232464] to-[#1a1b4a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="font-bold">Samuel Aku</span>—Multimedia and EdTech Specialist
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              <span className="font-bold">Samuel Aku</span> transforms ideas into dynamic digital experiences by blending multimedia, design, and educational technology. With a passion for creativity and innovation, he crafts engaging visuals, immersive learning solutions, and compelling storytelling that empower brands and educators alike.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/samuel-aku/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-[#232464] rounded-full hover:bg-[#f48515] hover:text-white transition-colors duration-200"
              >
                <LinkedInLogo className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/samuel-aku"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#f48515] text-white rounded-full hover:bg-white hover:text-[#232464] transition-colors duration-200"
              >
                <BehanceLogo className="w-5 h-5 mr-2" />
                Portfolio
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#f48515] shadow-xl">
              <img
                src="https://i.imgur.com/1UHbIBn.jpeg"
                alt="Samuel Aku"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}