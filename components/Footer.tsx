

import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h3 className="font-anton text-xl text-white mb-4 tracking-wider">Información de Contacto</h3>
            <p>+3118772498</p>
            <p>+3125476851</p>
            <p className="mt-2 text-white hover:text-[#FDFD96] transition-colors"><a href="mailto:mikmusic2356@gmail.com">mikmusic2356@gmail.com</a></p>
          </div>
          <div>
            <h3 className="font-anton text-xl text-white mb-4 tracking-wider">Enlaces</h3>
            <ul>
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#beats" className="hover:text-white transition-colors">Beats</a></li>
              <li><a href="#artista" className="hover:text-white transition-colors">Artista</a></li>
              <li><a href="#nuevo-artista" className="hover:text-white transition-colors">Nuevo Artista</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-anton text-xl text-white mb-4 tracking-wider">Dirección</h3>
            <p>Bogota Colombia CO-BOG 110111</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MIK MUSIC. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors"><FacebookIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><TwitterIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><InstagramIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><PinterestIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;