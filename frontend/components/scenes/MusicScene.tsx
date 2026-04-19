'use client';

import { useRef, useState } from 'react';
import { Music, Disc, Pause, Play } from 'lucide-react';
import { mockData } from '@/lib/mock';

const MusicScene: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentSongId, setCurrentSongId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (song: any) => {
    const audio = audioRef.current;
    if (!audio) return;

    // kalau klik lagu yang sama → toggle
    if (currentSongId === song.id) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
      return;
    }

    // lagu baru
    audio.src = song.src;
    audio.play();
    setCurrentSongId(song.id);
    setIsPlaying(true);
  };

  const stopMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setCurrentSongId(null);
  };

  return (
    <section className="min-h-screen px-6 pt-28 pb-28">
      <div className="max-w-3xl mx-auto">

        {/* AUDIO */}
        <audio ref={audioRef} />

        {/* HEADER */}
        <header className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">Scene 05</p>
          <h2 className="font-serif-romantic text-5xl md:text-6xl text-rose-900 italic">
            A playlist for you
          </h2>
          <p className="mt-3 text-rose-700/70 font-serif-romantic text-lg italic">
            Songs I want to listen to with you
          </p>
        </header>

        {/* DISC */}
                <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 flex items-center justify-center shadow-2xl animate-glow">
              <Disc className="w-20 h-20 md:w-24 md:h-24 text-white/90 animate-[spin_6s_linear_infinite]" />
            </div>
          </div>
        </div>


        {/* SONG LIST */}
        <div className="space-y-3">
          {mockData.songs.map((song, i) => {
            const active = currentSongId === song.id;

            return (
              <div
                key={song.id}
                onClick={() => handlePlay(song)}
                className={`cursor-pointer flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  active
                    ? 'bg-rose-100 border-rose-300'
                    : 'bg-white/70 border-rose-100 hover:bg-white'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-white flex items-center justify-center text-sm">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="flex-1">
                  <p className="text-rose-900 italic">{song.title}</p>
                  <p className="text-sm text-rose-600">{song.artist}</p>
                </div>

                {/* ICON PLAY/PAUSE */}
                {active && isPlaying ? (
                  <Pause className="text-rose-500" />
                ) : (
                  <Play className="text-rose-400" />
                )}

                <span className="text-sm text-rose-500 w-12 text-right">
                  {song.duration}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MusicScene;