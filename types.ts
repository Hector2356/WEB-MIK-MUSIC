import type React from 'react';

export interface Service {
  title: string;
  tagline: string;
  price: string;
  features: string[];
  popular: boolean;
  colorClass: {
    button: string;
    buttonText: string;
    shadow: string;
    bgColor: string;
    checkColor: string;
  };
}

export interface Release {
  artworkUrl: string;
  title: string;
  artist: string;
  spotifyUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
}

export interface NewArtist {
  name: string;
  bio: string;
  galleryImages: string[];
  socials: {
    spotifyUrl: string;
    youtubeUrl: string;
    instagramUrl: string;
  };
}