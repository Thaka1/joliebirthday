'use client';

import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { mockData } from '@/lib/mock';

interface LoadingScreenProps {
  onComplete: () => void;
}

interface FloatingHeart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setReady(true), 400);
          return 100;
        }
        return prev + 1;
      });
    }, 28);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-10),
        {
          id: Math.random(),
          left: Math.random() * 100,
          animationDuration: 2 + Math.random() * 2,
          size: 18 + Math.random() * 22,
        },
      ]);
    }, 280);
    return () => clearInterval(id);
  }, []);

  const message =
    progress < 25
      ? 'Wrapping your gift…'
      : progress < 55
      ? 'Adding a little sweetness…'
      : progress < 85
      ? 'Lighting the candles…'
      : 'Almost ready ♡';

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden z-50"
      style={{
        background:
          'radial-gradient(900px 500px at 30% 20%, #fecdd3 0%, transparent 60%), linear-gradient(180deg, #fff1f2 0%, #ffe4e6 100%)',
      }}
      data-testid="loading-screen"
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up opacity-60"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          <Heart className="fill-pink-300 text-pink-300" />
        </div>
      ))}

      <div className="relative z-10 text-center px-6">
        <div className="flex justify-center mb-6 gap-3">
          <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
          <Sparkles
            className="w-10 h-10 text-rose-400 animate-pulse"
            style={{ animationDelay: '0.3s' }}
          />
          <Sparkles
            className="w-6 h-6 text-pink-400 animate-pulse"
            style={{ animationDelay: '0.6s' }}
          />
        </div>

        <p className="text-xs tracking-[0.35em] uppercase text-rose-500 mb-4">
          For {mockData.person.nickname}
        </p>

        <div className="relative inline-block mb-10">
          <div className="w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-500 rounded-full flex items-center justify-center shadow-2xl animate-heartbeat">
            <Heart className="w-16 h-16 fill-white text-white" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border border-rose-100">
            <span
              className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"
              data-testid="loading-progress"
            >
              {progress}%
            </span>
          </div>
        </div>

        <div className="mt-10 min-h-[70px]">
          <p className="font-serif-romantic text-3xl text-rose-700 mb-2 italic">
            {message}
          </p>
          <p className="text-sm text-pink-500/80 tracking-wide">
            Preparing a little surprise…
          </p>
        </div>

        <div className="mt-8 w-72 h-1.5 bg-rose-100 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-10 h-14 flex justify-center">
          {ready && (
            <button
              type="button"
              onClick={onComplete}
              data-testid="enter-btn"
              className="animate-scene-enter inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium tracking-wide shadow-xl shadow-rose-500/30 transition-all hover:scale-105 animate-glow"
            >
              <Heart className="w-4 h-4 fill-white" />
              Open your surprise
            </button>
          )}
        </div>
      </div>

      {progress > 80 && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                backgroundColor: ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493'][
                  Math.floor(Math.random() * 4)
                ],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
