import React from 'react';
import { ExternalLink } from 'lucide-react';

export function MicrosoftSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="https://i.imgur.com/G6c91YA.png"
              alt="Microsoft Innovative Educator"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#232464] mb-6">
              Crafting Visual Stories, Elevating Digital Learning
            </h2>
            <p className="text-gray-600 mb-8">
              <span className="font-bold">Samuel Aku</span> designs engaging and impactful learning experiences by blending instructional design with innovative technology. As a Microsoft Innovative Educator Expert, he leverages digital tools to create interactive, learner-centered solutions that enhance education and make learning more accessible and immersive.
            </p>
            <a
              href="https://www.credly.com/badges/25296e92-7237-47a0-80e9-a1543a1baa16"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#232464] text-white rounded-full hover:bg-[#f48515] transition-colors duration-200"
            >
              Verify Credential
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}