export interface Person {
  name: string;
  nickname: string;
  fromName: string;
  birthdayDate: string;
}

export interface MusicInfo {
  url: string;
  title: string;
  artist: string;
}

export interface Photo {
  id: number;
  url: string;
  caption: string;
  date: string;
}

export interface Moment {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: string;
  src: string;
}

export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  youtubeId?: string;
  src?: string;
}

export interface Letter {
  title: string;
  content: string;
  signature: string;
}

export interface MockData {
  person: Person;
  music: MusicInfo;
  photos: Photo[];
  letter: Letter;
  moments: Moment[];
  songs: Song[];
  videos: Video[];
}

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  reached: boolean;
}
