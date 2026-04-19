'use client';

import { useEffect, useState, RefObject } from 'react';
import { Music, VolumeX, Pause, Play } from 'lucide-react';
import { mockData } from '@/lib/mock';

interface MusicPlayerProps {
  audioRef: RefObject<HTMLAudioElement | null>;
  musicOn: boolean;
  setMusicOn: (on: boolean) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioRef, musicOn, setMusicOn }) => {
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(musicOn);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    el.addEventListener('play', onPlay);
    el.addEventListener('pause', onPause);
    setPlaying(!el.paused);
    return () => {
      el.removeEventListener('play', onPlay);
      el.removeEventListener('pause', onPause);
    };
  }, [audioRef]);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.volume = 0.5;
      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
      setMusicOn(true);
    } else {
      el.pause();
      setMusicOn(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40" data-testid="music-player">
      <div
        className={`flex items-center gap-3 rounded-full bg-white/85 backdrop-blur-lg border border-rose-200 shadow-xl transition-all duration-500 ${
          expanded ? 'pl-4 pr-2 py-2' : 'p-2'
        }`}
      >
        {expanded && (
          <div className="min-w-0">
            <p className="text-xs text-rose-500 uppercase tracking-widest">Now playing</p>
            <p className="text-sm font-medium text-rose-900 truncate max-w-[160px]">
              {mockData.music.title}
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={toggle}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-all hover:scale-105 ${
            playing
              ? 'bg-gradient-to-br from-rose-500 to-pink-500 animate-heartbeat'
              : 'bg-gradient-to-br from-rose-400 to-pink-400'
          }`}
          data-testid="music-toggle-btn"
          aria-label={playing ? 'Pause music' : 'Play music'}
        >
          {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="w-10 h-10 rounded-full bg-rose-50 hover:bg-rose-100 flex items-center justify-center text-rose-500 transition-colors"
          data-testid="music-expand-btn"
          aria-label="Show music info"
        >
          {expanded ? <VolumeX className="w-4 h-4" /> : <Music className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
