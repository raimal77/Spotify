
import React, { useState } from 'react';
import { playlists } from '../constants';
import { Playlist, PlaylistIdea } from '../types';
import { PlaylistCard } from './PlaylistCard';
import { generatePlaylistIdea } from '../services/geminiService';

interface MainContentProps {
  onPlayPlaylist: (playlist: Playlist) => void;
}

const AIPlaylistGenerator: React.FC = () => {
  const [idea, setIdea] = useState<PlaylistIdea | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(null);
    setIdea(null);
    const result = await generatePlaylistIdea();
    if (result) {
      setIdea(result);
    } else {
      setError("Couldn't generate an idea. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-to-b from-emerald-800 to-spotify-gray-500 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white">AI Playlist Assistant</h2>
      <p className="text-spotify-gray-100 mb-4">Feeling uninspired? Let Gemini create a fresh playlist idea for you.</p>
      <button
        onClick={handleGenerate}
        disabled={isLoading}
        className="bg-spotify-green text-white font-bold py-2 px-6 rounded-full hover:bg-green-500 transition-transform duration-200 hover:scale-105 disabled:bg-spotify-gray-200 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Generating...' : 'Generate New Idea'}
      </button>
      {error && <p className="text-red-400 mt-4">{error}</p>}
      {idea && (
        <div className="mt-6 p-4 bg-black bg-opacity-30 rounded-lg animate-fade-in">
          <h3 className="text-lg font-bold text-spotify-green">{idea.title}</h3>
          <p className="text-spotify-gray-100 mt-1">{idea.description}</p>
        </div>
      )}
    </div>
  );
};

const PlaylistSection: React.FC<{ title: string; playlists: Playlist[]; onPlayPlaylist: (playlist: Playlist) => void; }> = ({ title, playlists, onPlayPlaylist }) => (
    <section>
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {playlists.map(playlist => (
                <PlaylistCard key={playlist.id} playlist={playlist} onPlay={() => onPlayPlaylist(playlist)} />
            ))}
        </div>
    </section>
);

export const MainContent: React.FC<MainContentProps> = ({ onPlayPlaylist }) => {
  return (
    <main className="flex-1 bg-gradient-to-b from-spotify-gray-300 to-spotify-gray-500 p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Good Afternoon</h1>
      <AIPlaylistGenerator />
      <PlaylistSection title="Made For You" playlists={playlists.slice(0, 6)} onPlayPlaylist={onPlayPlaylist} />
    </main>
  );
};
