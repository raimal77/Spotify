
import React from 'react';
import { HomeIcon, SearchIcon, LibraryIcon, PlusIcon } from './Icons';
import { playlists } from '../constants';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <a href="#" className={`flex items-center gap-4 px-6 py-2 rounded ${active ? 'text-white' : 'text-spotify-gray-100'} hover:text-white transition-colors duration-200`}>
    {icon}
    <span className="font-bold">{label}</span>
  </a>
);

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-black p-2 flex-shrink-0 hidden md:flex flex-col">
      <div className="bg-spotify-gray-500 rounded-lg mb-2">
        <nav className="p-2">
          <NavItem icon={<HomeIcon className="w-6 h-6" />} label="Home" active />
          <NavItem icon={<SearchIcon className="w-6 h-6" />} label="Search" />
        </nav>
      </div>
      <div className="bg-spotify-gray-500 rounded-lg flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4">
          <button className="flex items-center gap-4 text-spotify-gray-100 hover:text-white transition-colors duration-200">
            <LibraryIcon className="w-6 h-6" />
            <span className="font-bold">Your Library</span>
          </button>
          <button className="text-spotify-gray-100 hover:text-white transition-colors duration-200">
            <PlusIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-y-auto px-2 pb-2 flex-1">
          {playlists.map(playlist => (
            <a key={playlist.id} href="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-spotify-gray-400">
              <img src={playlist.coverArt} alt={playlist.title} className="w-12 h-12 rounded-md" />
              <div>
                <p className="font-semibold text-white truncate">{playlist.title}</p>
                <p className="text-sm text-spotify-gray-100">Playlist</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
