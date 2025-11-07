
export interface Song {
  title: string;
  artist: string;
  album: string;
  coverArt: string;
}

export interface Playlist {
  id: number;
  title: string;
  description: string;
  coverArt: string;
  songs: Song[];
}

export interface PlaylistIdea {
  title: string;
  description: string;
}
