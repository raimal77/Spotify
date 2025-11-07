
import { Playlist } from './types';

export const playlists: Playlist[] = [
  {
    id: 1,
    title: 'Chill Hits',
    description: 'Kick back to the best new and recent chill hits.',
    coverArt: 'https://picsum.photos/seed/chill/300/300',
    songs: [
      { title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', coverArt: 'https://picsum.photos/seed/weeknd/300/300' },
      { title: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', coverArt: 'https://picsum.photos/seed/styles/300/300' },
      { title: 'Circles', artist: 'Post Malone', album: 'Hollywood\'s Bleeding', coverArt: 'https://picsum.photos/seed/malone/300/300' },
    ],
  },
  {
    id: 2,
    title: 'Rock Classics',
    description: 'Rock legends and epic songs that continue to inspire.',
    coverArt: 'https://picsum.photos/seed/rock/300/300',
    songs: [
      { title: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', coverArt: 'https://picsum.photos/seed/queen/300/300' },
      { title: 'Stairway to Heaven', artist: 'Led Zeppelin', album: 'Led Zeppelin IV', coverArt: 'https://picsum.photos/seed/zeppelin/300/300' },
    ],
  },
  {
    id: 3,
    title: 'Lofi Beats',
    description: 'Relax and focus with these low-key atmospheric beats.',
    coverArt: 'https://picsum.photos/seed/lofi/300/300',
    songs: [
      { title: 'Affection', artist: 'Jinsang', album: 'Solitude', coverArt: 'https://picsum.photos/seed/jinsang/300/300' },
      { title: 'Midnight', artist: 'potsu', album: 'i\'m closing my eyes', coverArt: 'https://picsum.photos/seed/potsu/300/300' },
    ],
  },
  {
    id: 4,
    title: 'Coding Focus',
    description: 'Instrumental music to help you concentrate and code.',
    coverArt: 'https://picsum.photos/seed/coding/300/300',
    songs: [
      { title: 'Music for Programming', artist: 'Datassette', album: 'Selected Works', coverArt: 'https://picsum.photos/seed/data/300/300' },
      { title: 'Dreaming', artist: 'Tycho', album: 'Dive', coverArt: 'https://picsum.photos/seed/tycho/300/300' },
    ],
  },
  {
    id: 5,
    title: 'Acoustic Morning',
    description: 'Start your day with gentle acoustic tracks.',
    coverArt: 'https://picsum.photos/seed/acoustic/300/300',
    songs: [
      { title: 'Ho Hey', artist: 'The Lumineers', album: 'The Lumineers', coverArt: 'https://picsum.photos/seed/lumineers/300/300' },
      { title: 'I Will Wait', artist: 'Mumford & Sons', album: 'Babel', coverArt: 'https://picsum.photos/seed/mumford/300/300' },
    ],
  },
  {
    id: 6,
    title: 'Workout Jams',
    description: 'High-energy tracks to get you pumped for your workout.',
    coverArt: 'https://picsum.photos/seed/workout/300/300',
    songs: [
        { title: 'Can\'t Hold Us', artist: 'Macklemore & Ryan Lewis', album: 'The Heist', coverArt: 'https://picsum.photos/seed/macklemore/300/300' },
        { title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', album: 'Uptown Special', coverArt: 'https://picsum.photos/seed/bruno/300/300' },
    ]
  }
];
