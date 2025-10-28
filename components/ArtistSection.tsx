import React from 'react';
import { ARTIST_RELEASE_DATA } from '../constants';
import { SpotifyIcon, YoutubeIcon, InstagramIcon } from './icons/SocialIcons';

const ArtistSection: React.FC = () => {
  const { artworkUrl, title, artist, spotifyUrl, youtubeUrl, instagramUrl } = ARTIST_RELEASE_DATA;

  return (
    <section id="artista" className="py-20 md:py-32 bg-[#FFDFDD] bg-opacity-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-anton">Artista Principal</h2>
          <p className="text-lg text-gray-300 mt-2">Descubre a <span className="text-[#FFDFDD] font-bold">MIK MUSIC</span></p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 max-w-md">
            <img src={artworkUrl} alt={`${title} artwork`} className="rounded-lg shadow-2xl shadow-black/50 aspect-square object-cover" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg text-gray-400">Último Lanzamiento</p>
            <h3 className="text-5xl md:text-6xl font-anton my-2">{title}</h3>
            <p className="text-2xl text-gray-300 mb-8">{artist}</p>
            <p className="text-lg mb-6">Escúchalo ahora en tu plataforma favorita:</p>
            <div className="flex justify-center md:justify-start items-center gap-4">
              <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300"><SpotifyIcon className="w-12 h-12" /></a>
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300"><YoutubeIcon className="w-12 h-12" /></a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300"><InstagramIcon className="w-12 h-12" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;