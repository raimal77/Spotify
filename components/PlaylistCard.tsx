
import React from 'react';
import { Playlist } from '../types';
import { PlayIcon } from './Icons';

interface PlaylistCardProps {
  playlist: Playlist;
  onPlay: () => void;
}

export const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, onPlay }) => {
  return (
    <div
      className="bg-spotify-gray-400 p-4 rounded-lg group relative cursor-pointer hover:bg-spotify-gray-300 transition-colors duration-300"
      onClick={onPlay}
    >
      <div className="relative mb-4">
        <img src={playlist.coverArt} alt={playlist.title} className="w-full h-auto rounded-md shadow-lg" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPlay();
          }}
          className="absolute bottom-2 right-2 bg-spotify-green p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out hover:scale-110"
        >
          <PlayIcon className="w-6 h-6 text-black" />
        </button>
      </div>
      <h3 className="font-bold text-white truncate">{playlist.title}</h3>
      <p className="text-sm text-spotify-gray-100 mt-1 truncate">{playlist.description}</p>
    </div>
  );
};
