import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/OdSkJk6.jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white p-4">
        <div className="mb-8 animate-pulse">
            <h1 className="text-7xl md:text-9xl font-anton tracking-wider text-shadow">MIK MUSIC</h1>
        </div>
        <h2 className="text-2xl md:text-4xl font-anton tracking-widest text-shadow">LA FÁBRICA DE <span className="text-[#FDFD96]">ESTRELLAS</span></h2>
        <a href="#servicios" className="mt-12 inline-block bg-[#FDFD96] text-black font-bold uppercase tracking-widest py-3 px-8 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105 neon-glow-yellow">
          Descubre Más
        </a>
      </div>
    </section>
  );
};

export default HeroSection;