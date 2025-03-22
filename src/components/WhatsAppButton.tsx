import React from 'react';
import { MessageSquare } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.link/wsdr2g"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 bg-green-500 hover:bg-[#232464] text-white rounded-full shadow-lg transition-colors duration-200"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
}