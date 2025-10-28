import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-white uppercase tracking-widest hover:text-[#FDFD96] transition-colors duration-300 px-4 py-2">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close menu on any link click
  };

  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="text-2xl font-anton tracking-wider text-white">
          MIK <span className="text-[#FDFD96]">MUSIC</span>
        </a>
        <nav className="hidden md:flex items-center">
          <NavLink href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')}>Inicio</NavLink>
          <NavLink href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')}>Servicios</NavLink>
          <NavLink href="#beats" onClick={(e) => handleNavClick(e, '#beats')}>Beats</NavLink>
          <NavLink href="#artista" onClick={(e) => handleNavClick(e, '#artista')}>Artista</NavLink>
          <NavLink href="#nuevo-artista" onClick={(e) => handleNavClick(e, '#nuevo-artista')}>Nuevo Artista</NavLink>
          <NavLink href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')}>Contacto</NavLink>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <NavLink href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')}>Inicio</NavLink>
            <NavLink href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')}>Servicios</NavLink>
            <NavLink href="#beats" onClick={(e) => handleNavClick(e, '#beats')}>Beats</NavLink>
            <NavLink href="#artista" onClick={(e) => handleNavClick(e, '#artista')}>Artista</NavLink>
            <NavLink href="#nuevo-artista" onClick={(e) => handleNavClick(e, '#nuevo-artista')}>Nuevo Artista</NavLink>
            <NavLink href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')}>Contacto</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;