import React from 'react';
import type { Service, Release, NewArtist } from './types';

export const SERVICES_DATA: Service[] = [
  {
    title: 'Combo Rocket',
    tagline: '🟪 Perfecto para artistas nuevos',
    price: '500 mil COP',
    features: [
      'Grabación de voces alta calidad',
      'Mezcla de voces e instrumental',
      'Masterización de la canción'
    ],
    popular: false,
    colorClass: {
      button: 'bg-purple-600 hover:bg-purple-500',
      buttonText: 'text-white',
      shadow: 'shadow-purple-500/30',
      bgColor: 'bg-[#ddcaf8]',
      checkColor: 'text-purple-500'
    }
  },
  {
    title: 'Rocket Market',
    tagline: '⬛ Más Popular',
    price: '700 mil COP',
    features: [
      'Producción musical',
      'Mezcla y masterización',
      'Distribución musical'
    ],
    popular: true,
    colorClass: {
      button: 'bg-black hover:bg-gray-800',
      buttonText: 'text-white',
      shadow: 'shadow-yellow-400/30',
      bgColor: 'bg-[#f3ea9c]',
      checkColor: 'text-yellow-500'
    }
  },
  {
    title: 'Rocket V.I.P',
    tagline: '🟨 ¿Listo para llevar tu música al máximo?',
    price: '900 mil COP',
    features: [
      'Rocket Market',
      'Publishing',
      '1 Video musical'
    ],
    popular: false,
    colorClass: {
      button: 'bg-black hover:bg-gray-800',
      buttonText: 'text-white',
      shadow: 'shadow-yellow-400/40',
      bgColor: 'bg-yellow-300',
      checkColor: 'text-yellow-600'
    }
  }
];

export const ARTIST_RELEASE_DATA: Release = {
  artworkUrl: 'https://i.imgur.com/E9fh4Xb.jpeg',
  title: 'ESE TOTO',
  artist: 'MIK MUSIC',
  spotifyUrl: 'https://open.spotify.com/intl-es/track/12VJMnA9QAyjzR6bbDacmE?si=dfa541887b0241ca',
  youtubeUrl: 'https://www.youtube.com/watch?v=ECPeLBUwRkc',
  instagramUrl: 'https://www.instagram.com/mikmusic_official/'
};

export const NEW_ARTIST_DATA: NewArtist = {
  name: 'MIKAI',
  bio: 'Creada por inteligencia artificial y respaldada por MIK MUSIC, MIKAI llega para romper las reglas del género. Su estilo fusiona la energía vibrante del pop coreano con la intensidad de los ritmos urbanos, dando vida a un sonido fresco, envolvente y absolutamente adictivo. Prepárate para su debut mundial — el futuro del K-Pop ya tiene nombre: MIKAI.',
  galleryImages: [
    'https://i.imgur.com/W7P31ZG.jpeg', // Main Portrait
    'https://i.imgur.com/AWfSVtQ.jpeg', // Small Square
    'https://i.imgur.com/tOFQsMj.jpeg', // Small Square
    'https://i.imgur.com/MkvcBwT.jpeg', // Small Square
    'https://i.imgur.com/Wgoe7qQ.jpeg', // Small Square
    'https://i.imgur.com/s2Xu4lz.jpeg', // Wide Landscape
    'https://i.imgur.com/mWDwzAm.jpeg'  // Wide Landscape
  ],
  socials: {
    spotifyUrl: '#',
    youtubeUrl: '#',
    instagramUrl: '#'
  }
};