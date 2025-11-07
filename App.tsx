
import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { Player } from './components/Player';
import { Song, Playlist } from './types';
import { playlists } from './constants';

const App: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.75);
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null);

  const handlePlayPlaylist = useCallback((playlist: Playlist) => {
    if (playlist.songs.length > 0) {
      setCurrentPlaylist(playlist);
      setCurrentSong(playlist.songs[0]);
      setIsPlaying(true);
      setProgress(0);
    }
  }, []);

  const handlePlayPause = useCallback(() => {
    if (currentSong) {
      setIsPlaying(prev => !prev);
    }
  }, [currentSong]);

  const getSongIndex = useCallback(() => {
    if (!currentSong || !currentPlaylist) return -1;
    return currentPlaylist.songs.findIndex(song => song.title === currentSong.title && song.artist === currentSong.artist);
  }, [currentSong, currentPlaylist]);

  const handleNext = useCallback(() => {
    if (!currentPlaylist) return;
    const currentIndex = getSongIndex();
    if (currentIndex !== -1 && currentIndex < currentPlaylist.songs.length - 1) {
      setCurrentSong(currentPlaylist.songs[currentIndex + 1]);
      setProgress(0);
    }
  }, [currentPlaylist, getSongIndex]);

  const handlePrev = useCallback(() => {
    if (!currentPlaylist) return;
    const currentIndex = getSongIndex();
    if (currentIndex > 0) {
      setCurrentSong(currentPlaylist.songs[currentIndex - 1]);
      setProgress(0);
    }
  }, [currentPlaylist, getSongIndex]);

  useEffect(() => {
    let timer: number;
    if (isPlaying && currentSong) {
      timer = window.setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 100 / 180; // Assuming a 3-minute song
        });
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isPlaying, currentSong, handleNext]);
  
  useEffect(() => {
    if (playlists.length > 0 && playlists[0].songs.length > 0) {
      setCurrentSong(playlists[0].songs[0]);
      setCurrentPlaylist(playlists[0]);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col font-sans">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent onPlayPlaylist={handlePlayPlaylist} />
      </div>
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        progress={progress}
        volume={volume}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
        onSeek={setProgress}
        onVolumeChange={setVolume}
      />
    </div>
  );
};

export default App;
