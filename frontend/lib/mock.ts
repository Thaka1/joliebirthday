import type { Photo, Moment, Song, Video, MockData } from './types';

export const mockData: MockData = {
  person: {
    name: 'Nguyễn Ngọc Hà',
    nickname: 'Hà',
    fromName: 'The one who always loves you',
    // Hà's birthday — REPLACE with her actual date (YYYY-MM-DDTHH:mm:ss local 24h)
    birthdayDate: '2026-04-21T00:00:00',
  },

  music: {
    url: '/music/Bsong.mp3',
    title: 'A Teender Feeling',
    artist: 'For Hà',
  },

  photos: [
    { id: 1, url: '/images/fanart.jpg', caption: 'Birthday Drawing for you', date: '2026' },
    { id: 2, url: '/images/moment2.webp', caption: 'Chaos party back then-REVE', date: '2023' },
    { id: 3, url: '/images/moment3.webp', caption: "Playing music-REVE", date: '2026' },
    { id: 4, url: '/images/moment4.webp', caption: 'Someone feel asleep-REVE', date: '2026' },
    { id: 5, url: '/images/moment5.webp', caption: 'Pic of best Duo on HOK lol', date: '2025' },
    { id: 6, url: '/images/moment6.webp', caption: 'Explore together and meeting smol XD-CODL', date: '2025' },
    { id: 7, url: '/images/moment7.webp', caption: 'Under the rain-MLB', date: '2025' },
    { id: 8, url: '/images/moment8.webp', caption: 'Both of us on a swing during sunset-SOJ', date: '2025' },
    { id: 9, url: '/images/moment9.webp', caption: 'Green outfit-SOJ', date: '2025' },
    { id: 10, url: '/images/moment10.webp', caption: 'hehe i put this as closing', date: '2025' },
  ] satisfies Photo[],

  letter: {
    title: 'A Letter For You',
    content: `Hà,

I remember first time we met by accident, and i didnt really notice ur presence.

But somehow there is a tie that connect together, from stranger to became my closest person and the person i love until today.

My Dairy book started to write another story with our name, each moment feel precious, each story creates layers of connection, each laugh, dreams, cry, feel unforgettable 

Its because of you, hà

And hà,i dont have a words to describe how much you meant to me

Thank you for coming into my life 

For listening without judging 

For stay when u know who i am 

For always letting me know you're there when i need you

choosing to talk to me still, knowing that i done a lot that makes ur hearts broken after broken and endless tears

And aslo thanks for make me smile

In all the story of my life, one of the most favorite story is the story that has your name in it, story that I'll never forgot

Im forever grateful to have you~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
And today, its your 23rd birthday 

Happy Birthday cantik ^^

Wishing you all the best and success in life,

always filled with all the happiness you deserve, everything that you pray got answer, everything that you dream comes true

always healthy, always protected, always guided, always find peace and joy, and always have good people around you`,
    signature: '— Zhuu ♡',
  },

  moments: [
    { id: 1, title: 'The day we met', description: 'I didn’t know you back then. You were just a stranger in the crowd... but somehow, you captured a moment that would one day mean everything to me.', date: 'August 2023', image: '/images/journeyphoto1.webp' },
    { id: 2, title: 'Becoming Friends', description: "Somehow, we found our way into each other’s world. We started talking, laughing, and sharing little moments, just as friends.", date: 'August 2024', image: '/images/journeyphoto2.webp' },
    { id: 3, title: 'Growing Closer', description: 'What started as something simple slowly became more. We grew closer, day by day, without even realizing how much we meant to each other.', date: 'July 2025', image: '/images/journeyphoto13.webp' },
    { id: 4, title: 'Something More', description: 'Then one day, it wasn’t just friendship anymore. We chose each other, and just like that, you became my girlfriend.', date: 'August 2025', image: '/images/journeyphoto4.webp' },
    { id: 5, title: 'The Break', description: 'But not every story goes as planned. Somewhere along the way, we lost each other and had to let go. This was the last photo I took of you, when you sulk — December 25, 2025.', date: 'December 2025', image: '/images/journeyphoto5.webp' },
    { id: 6, title: 'Finding Our Way Back', description: 'In the end, it wasn’t just fate. You chose to reach out to me again, even after everything. After all the pain I caused, I feel so grateful to see you and talk to you again...and that alone is enough. And maybe, this time, I’m learning how not to lose you again.', date: 'March 2026', image: '/images/journeyphoto6.webp' },
  ] satisfies Moment[],

  songs: [
  {
    id: 1,
    title: "Có Chàng Trai Viết Lên Cây",
    artist: "Phan Mạnh Quỳnh",
    duration: '5:05',
    src: '/music/music1.mp3'
  },
  {
    id: 2,
    title: "Từ Đó",
    artist: "Phan Mạnh Quỳnh",
    duration: '3:02',
    src: '/music/music2.mp3'
  },
  {
    id: 3,
    title: '8Letters',
    artist: "Why Don't We",
    duration: '3:11',
    src: '/music/music3.mp3'
  },
  {
    id: 4,
    title: "Can't Help Falling in Love",
    artist: 'Richard Marx',
    duration: '3:40',
    src: '/music/music4.mp3'
  },
  {
    id: 5,
    title: "First Love",
    artist: 'Jurrivh',
    duration: '3:26',
    src: '/music/music5.mp3'
  }
] satisfies Song[],
  videos: [
  {
    id: 1,
    title: 'A small journey video',
    thumbnail: '/images/thumbnailyt.webp',
    duration: '2:14',
    youtubeId: 'TqBXZtgnKL4'
  }
] satisfies Video[],
};
