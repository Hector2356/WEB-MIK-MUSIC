
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import BeatsSection from './components/BeatsSection';
import ArtistSection from './components/ArtistSection';
import NewArtistSection from './components/NewArtistSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#111] text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BeatsSection />
        <ArtistSection />
        <NewArtistSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;