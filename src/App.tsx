import React, { useState } from 'react';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Mail,
  MessageSquare,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';
import { BehanceLogo } from './components/BehanceLogo';
import { LinkedInLogo } from './components/LinkedInLogo';
import { WhatsAppButton } from './components/WhatsAppButton';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { MicrosoftSection } from './components/MicrosoftSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Services />
        <MicrosoftSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;