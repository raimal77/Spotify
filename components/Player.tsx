
import React from 'react';
import { Song } from '../types';
import { PlayIcon, PauseIcon, SkipBackIcon, SkipForwardIcon, ShuffleIcon, RepeatIcon, VolumeIcon } from './Icons';

interface PlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSeek: (value: number) => void;
  onVolumeChange: (value: number) => void;
}

const Slider: React.FC<{ value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; className?: string }> = ({ value, onChange, className }) => {
    const progressStyle = {
        background: `linear-gradient(to right, #1DB954 ${value}%, #535353 ${value}%)`
    };
    return (
        <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={onChange}
            className={`w-full h-1 rounded-full appearance-none cursor-pointer group ${className}`}
            style={progressStyle}
        />
    );
};


export const Player: React.FC<PlayerProps> = ({
  currentSong,
  isPlaying,
  progress,
  volume,
  onPlayPause,
  onNext,
  onPrev,
  onSeek,
  onVolumeChange
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const songDuration = 180; // 3 minutes
  const currentTime = (progress / 100) * songDuration;
  
  return (
    <footer className="bg-spotify-gray-400 p-4 border-t border-spotify-gray-300 grid grid-cols-3 items-center">
      <div className="flex items-center gap-4">
        {currentSong && (
          <>
            <img src={currentSong.coverArt} alt={currentSong.title} className="w-14 h-14 rounded" />
            <div>
              <p className="font-semibold text-white truncate">{currentSong.title}</p>
              <p className="text-sm text-spotify-gray-100 truncate">{currentSong.artist}</p>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4 mb-2">
          <button className="text-spotify-gray-100 hover:text-white transition-colors">
            <ShuffleIcon className="w-5 h-5" />
          </button>
          <button onClick={onPrev} className="text-spotify-gray-100 hover:text-white transition-colors">
            <SkipBackIcon className="w-6 h-6" />
          </button>
          <button
            onClick={onPlayPause}
            className="bg-white text-black p-2 rounded-full hover:scale-105 transition-transform"
          >
            {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
          </button>
          <button onClick={onNext} className="text-spotify-gray-100 hover:text-white transition-colors">
            <SkipForwardIcon className="w-6 h-6" />
          </button>
          <button className="text-spotify-gray-100 hover:text-white transition-colors">
            <RepeatIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-lg">
            <span className="text-xs text-spotify-gray-100 w-10 text-right">{formatTime(currentTime)}</span>
            <Slider value={progress} onChange={(e) => onSeek(Number(e.target.value))} />
            <span className="text-xs text-spotify-gray-100 w-10">{formatTime(songDuration)}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-end gap-2">
        <VolumeIcon className="w-5 h-5 text-spotify-gray-100"/>
        <div className="w-24">
             <Slider value={volume * 100} onChange={(e) => onVolumeChange(Number(e.target.value) / 100)} />
        </div>
      </div>
    </footer>
  );
};
