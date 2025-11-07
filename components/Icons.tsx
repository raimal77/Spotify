
import React from 'react';

interface IconProps {
  className?: string;
}

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.97 2.59a1.5 1.5 0 0 0-1.94 0L2.53 9.73A1.5 1.5 0 0 0 3.5 12h1.85v7.15a1.5 1.5 0 0 0 1.5 1.5h9.3a1.5 1.5 0 0 0 1.5-1.5V12h1.85a1.5 1.5 0 0 0 .97-2.27L12.97 2.59z"/></svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16.28 14.28a1.5 1.5 0 0 0-2.12 0l-2.07 2.07a1.5 1.5 0 0 0 2.12 2.12l2.07-2.07a1.5 1.5 0 0 0 0-2.12z"/><path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-1.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
);

export const LibraryIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.14 3.23a1.5 1.5 0 0 0-1.28 0L3.23 8.86a1.5 1.5 0 0 0 0 2.56l10.63 5.63a1.5 1.5 0 0 0 1.28 0l10.63-5.63a1.5 1.5 0 0 0 0-2.56L15.14 3.23zM3 20.61a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V19.5a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v1.11z"/></svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 2.5a.5.5 0 0 0-1 0v5h-5a.5.5 0 0 0 0 1h5v5a.5.5 0 0 0 1 0v-5h5a.5.5 0 0 0 0-1h-5v-5z"/></svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 5.23v13.54a1.5 1.5 0 0 0 2.25 1.3l10.5-6.77a1.5 1.5 0 0 0 0-2.6L9.75 3.93a1.5 1.5 0 0 0-2.25 1.3z"/></svg>
);

export const PauseIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 4.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 3 0V6a1.5 1.5 0 0 0-1.5-1.5zm9 0a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 3 0V6a1.5 1.5 0 0 0-1.5-1.5z"/></svg>
);

export const SkipBackIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.89 4.31a1.5 1.5 0 0 0-2.12 0l-7.5 7.5a1.5 1.5 0 0 0 0 2.12l7.5 7.5a1.5 1.5 0 0 0 2.12-2.12L12.27 12l6.62-6.57a1.5 1.5 0 0 0 0-2.12zm-15 1.19a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 3 0V7a1.5 1.5 0 0 0-1.5-1.5z"/></svg>
);

export const SkipForwardIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.11 4.31a1.5 1.5 0 0 1 2.12 0l7.5 7.5a1.5 1.5 0 0 1 0 2.12l-7.5 7.5a1.5 1.5 0 0 1-2.12-2.12L11.73 12 5.11 5.43a1.5 1.5 0 0 1 0-2.12zm15 1.19a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 1.5-1.5z"/></svg>
);

export const ShuffleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.64 6.86a1.5 1.5 0 0 0-2.12 0l-3.37 3.37-1.1-1.1a1.5 1.5 0 0 0-2.12 2.12l3.37 3.37-2.15 2.15a1.5 1.5 0 0 0 2.12 2.12l3.37-3.37 1.1 1.1a1.5 1.5 0 0 0 2.12-2.12L16.49 12l3.15-3.15a1.5 1.5 0 0 0 0-2.12zm-15.3 0a1.5 1.5 0 0 1 2.12 0l11.62 11.62a1.5 1.5 0 0 1-2.12 2.12L4.34 8.98a1.5 1.5 0 0 1 0-2.12z"/></svg>
);

export const RepeatIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.77 5.83a1.5 1.5 0 0 0-2.12-2.12l-8.25 8.25V7.5a1.5 1.5 0 0 0-3 0v7.5a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 0-3H11.5l8.27-8.17zM18 15a1.5 1.5 0 0 0-1.5-1.5H9a1.5 1.5 0 0 0 0 3h1.96l-3.21 3.21a1.5 1.5 0 0 0 2.12 2.12l3.21-3.21V21a1.5 1.5 0 0 0 3 0v-6z"/></svg>
);

export const VolumeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.91 3.26a1.5 1.5 0 0 0-1.82 0L6.23 7.5H3.75a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h2.48l4.86 4.24a1.5 1.5 0 0 0 1.82 0c.53-.41.86-1.04.86-1.74V5c0-.7-.33-1.33-.86-1.74z"/><path d="M15.5 8.25a1.5 1.5 0 0 1 0 7.5 1.5 1.5 0 0 1-1.5-1.5V9.75a1.5 1.5 0 0 1 1.5-1.5z"/><path d="M18.5 5.25a1.5 1.5 0 0 1 0 13.5 1.5 1.5 0 0 1-1.5-1.5v-10.5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>
);
