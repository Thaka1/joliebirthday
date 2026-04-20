'use client';

import { useEffect, useRef, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import BirthdayExperience from '@/components/BirthdayExperience';
import MusicPlayer from '@/components/MusicPlayer';
import { mockData } from '@/lib/mock';

type Phase = 'loading' | 'experience';

export default function HomePage() {
  const [phase, setPhase] = useState<Phase>('loading');
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 🎧 handle global music state
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    el.volume = 0.5;

    if (musicOn) {
      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } else {
      el.pause();
    }
  }, [musicOn]);

  // 🎬 after loading screen
  const handleLoadingComplete = () => {
    const el = audioRef.current;
    if (el) {
      el.src = mockData.music.url;
      el.loop = true;
      el.volume = 0.5;

      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }

    setMusicOn(true);
    setPhase('experience');
  };

  return (
    <div data-testid="app-root">
      {/* 🔊 GLOBAL AUDIO (ONLY ONE SOURCE) */}
      <audio
        ref={audioRef}
        src={mockData.music.url}
        loop
        preload="auto"
        data-testid="bg-audio"
      />

      {/* LOADING */}
      {phase === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* MAIN EXPERIENCE */}
      {phase === 'experience' && (
        <>
          <BirthdayExperience setMusicOn={setMusicOn} />

          {/* 🎧 GLOBAL MUSIC CONTROL */}
          <MusicPlayer
            audioRef={audioRef}
            musicOn={musicOn}
            setMusicOn={setMusicOn}
          />
        </>
      )}
    </div>
  );
}