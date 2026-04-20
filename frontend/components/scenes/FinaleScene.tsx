'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { mockData } from '@/lib/mock';

const FinaleScene: React.FC = () => {
  const [blown, setBlown] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-28 relative overflow-hidden">
      {blown && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                backgroundColor: ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#fbcfe8'][
                  Math.floor(Math.random() * 5)
                ],
                animationDelay: `${Math.random() * 1.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">
          Scene 07 — Finale
        </p>
        <h2 className="font-serif-romantic text-5xl md:text-7xl text-rose-900 italic leading-tight">
          Make a <span className="shimmer-text">wish</span>
        </h2>

        <div className="my-10 flex justify-center">
          <button
            type="button"
            onClick={() => setBlown(true)}
            data-testid="blow-candle-btn"
            className="relative group"
            aria-label="Blow the candle"
          >
            <div className="relative w-52 h-44">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-28">
                <div className="w-2 h-10 bg-gradient-to-b from-rose-200 to-rose-300 mx-auto rounded" />
                {!blown ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-5 rounded-full bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 animate-heartbeat shadow-[0_0_20px_6px_rgba(251,191,36,0.5)]" />
                ) : (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-1 bg-gray-300 rounded-full blur-[1px]" />
                )}
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-16 w-40 h-14 rounded-md bg-gradient-to-b from-pink-200 to-pink-300 shadow-md">
                <div className="h-3 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 rounded-t-md" />
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-52 h-16 rounded-md bg-gradient-to-b from-rose-200 to-rose-300 shadow-lg">
                <div className="h-3 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 rounded-t-md" />
                {[15, 40, 60, 85].map((x, i) => (
                  <div
                    key={i}
                    className="absolute top-3 w-2 h-4 bg-rose-500 rounded-b-full"
                    style={{ left: `${x}%` }}
                  />
                ))}
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-60 h-2 bg-rose-400/30 rounded-full blur-[1px]" />
            </div>

            {!blown && (
              <p className="mt-4 text-rose-500 text-sm italic animate-pulse">
                ♡ make a wish and blow the candle ♡
              </p>
            )}
          </button>
        </div>

        {blown ? (
          <div className="animate-scene-enter" data-testid="finale-message">
            <div className="flex justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-rose-400" />
              <Sparkles className="w-7 h-7 text-rose-500 animate-pulse" />
              <Sparkles className="w-5 h-5 text-rose-400" />
            </div>
            <p className="font-serif-romantic italic text-2xl md:text-3xl text-rose-800 leading-relaxed">
              Happy Birthday,{' '}
              <span className="shimmer-text font-semibold">{mockData.person.nickname}</span>.
              <br />
              May your wish come true — in the most beautiful way
            </p>
            <p className="font-script text-3xl text-rose-500 mt-6">
              — {mockData.person.fromName} ♡
            </p>
          </div>
        ) : (
          <p className="font-serif-romantic italic text-lg text-rose-700/80 max-w-md mx-auto">
            Close your eyes, make the one wish you want most this year, then tap the candle.
          </p>
        )}
      </div>
    </section>
  );
};

export default FinaleScene;
