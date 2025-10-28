import React from 'react';
import { NEW_ARTIST_DATA } from '../constants';
import { SpotifyIcon, YoutubeIcon, InstagramIcon } from './icons/SocialIcons';

const GalleryItem: React.FC<{ src: string; alt: string; className: string }> = ({ src, alt, className }) => (
    <div className={`overflow-hidden rounded-lg shadow-2xl shadow-black/50 transform hover:scale-105 transition-transform duration-500 ease-in-out ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
);


const NewArtistSection: React.FC = () => {
  const { name, bio, galleryImages, socials } = NEW_ARTIST_DATA;

  return (
    <section id="nuevo-artista" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-anton">Presentando a Nuestro Nuevo Talento</h2>
          <p className="text-lg text-gray-300 mt-2">La nueva estrella de <span className="text-[#C4C6FF] font-bold">MIK MUSIC</span></p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
           <div className="grid grid-cols-4 auto-rows-fr gap-4 order-last md:order-first">
                <GalleryItem src={galleryImages[0]} alt={`${name} gallery image 1`} className="col-span-2 row-span-2" />
                <GalleryItem src={galleryImages[1]} alt={`${name} gallery image 2`} className="aspect-square" />
                <GalleryItem src={galleryImages[2]} alt={`${name} gallery image 3`} className="aspect-square" />
                <GalleryItem src={galleryImages[3]} alt={`${name} gallery image 4`} className="aspect-square" />
                <GalleryItem src={galleryImages[4]} alt={`${name} gallery image 5`} className="aspect-square" />
                <GalleryItem src={galleryImages[5]} alt={`${name} gallery image 6`} className="col-span-2 aspect-video" />
                <GalleryItem src={galleryImages[6]} alt={`${name} gallery image 7`} className="col-span-2 aspect-video" />
            </div>

           {/* Text Content */}
          <div className="text-center md:text-left">
            <h3 className="text-6xl md:text-8xl font-anton text-shadow text-white">{name}</h3>
            <div className="w-24 h-1 bg-[#C4C6FF] my-6 mx-auto md:mx-0 neon-glow-lavender"></div>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">{bio}</p>
            <div className="flex justify-center md:justify-start items-center gap-6 mb-8">
              <p className="text-lg font-semibold uppercase tracking-wider">Síguelo:</p>
              <a href={socials.spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C4C6FF] transition-colors duration-300"><SpotifyIcon className="w-10 h-10" /></a>
              <a href={socials.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C4C6FF] transition-colors duration-300"><YoutubeIcon className="w-10 h-10" /></a>
              <a href={socials.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C4C6FF] transition-colors duration-300"><InstagramIcon className="w-10 h-10" /></a>
            </div>
             <p className="mt-4 text-gray-500 text-sm uppercase tracking-widest animate-pulse">Primer lanzamiento próximamente...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArtistSection;