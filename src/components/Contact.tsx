import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:samuelaku32@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    setFormData({ name: '', email: '', message: '' });
    alert('Thanks for your message, we will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232464] mb-2">
            Get in touch
          </h2>
          <p className="text-xl text-gray-600">Let's discuss your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-[#f48515] mr-2" />
                <span className="text-gray-600">samuelaku32@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-[#f48515] mr-2" />
                <span className="text-gray-600">+2348065353480</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#232464]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#232464]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#232464]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#232464] text-white rounded-full hover:bg-[#f48515] transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}