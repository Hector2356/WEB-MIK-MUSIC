import React from 'react';

const BeatsSection: React.FC = () => {
  return (
    <section id="beats" className="py-20 md:py-32 bg-[#111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-anton">Catálogo de Beats</h2>
          <p className="text-lg text-gray-400 mt-2">Escucha mi trabajo en Spotify y contacta para adquirir una licencia.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <iframe
            title="Spotify Artist Profile for MIK MUSIC"
            src="https://open.spotify.com/embed/artist/6K3cVYlcdu420FHW8PS8bH?utm_source=generator&theme=0"
            width="100%"
            height="500"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl shadow-2xl shadow-black/50 border border-gray-800"
          ></iframe>
        </div>

        <div className="text-center mt-16">
           <h3 className="text-3xl font-anton mb-4">¿Te gustó un Beat?</h3>
           <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Todas las licencias se gestionan de forma personalizada. Ponte en contacto conmigo para discutir precios y obtener los archivos de alta calidad para tu próximo hit.
           </p>
           <a 
            href="#contacto" 
            className="inline-block bg-[#FDFD96] text-black font-bold uppercase tracking-widest py-3 px-8 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105 neon-glow-yellow"
           >
              Contactar para Comprar
           </a>
        </div>
      </div>
    </section>
  );
};

export default BeatsSection;