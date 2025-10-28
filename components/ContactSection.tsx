import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section 
      id="contacto" 
      className="py-20 md:py-32 relative bg-cover bg-center" 
      style={{ backgroundImage: "url('https://i.imgur.com/D8Z1gY6.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-anton mb-4 text-shadow">Convierte tu idea en un hit</h2>
            <p className="text-lg text-gray-300 mb-12">
              ¿Tienes un proyecto en mente? Contáctanos y hagamos que suceda. Estamos listos para llevar tu música al siguiente nivel.
            </p>

            <div className="bg-black/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
                <form className="flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <input 
                            type="text" 
                            placeholder="Tu Nombre" 
                            aria-label="Tu Nombre"
                            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FDFD96] text-white placeholder-gray-400 transition-all duration-300"
                        />
                        <input 
                            type="email" 
                            placeholder="Tu Email" 
                            aria-label="Tu Email"
                            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FDFD96] text-white placeholder-gray-400 transition-all duration-300"
                        />
                    </div>
                    <textarea
                        placeholder="Tu Mensaje"
                        aria-label="Tu Mensaje"
                        rows={4}
                        className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FDFD96] text-white placeholder-gray-400 resize-none transition-all duration-300"
                    ></textarea>
                    <button 
                        type="submit"
                        className="w-full bg-[#FDFD96] text-black font-bold uppercase tracking-widest py-4 px-6 rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105 neon-glow-yellow"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
