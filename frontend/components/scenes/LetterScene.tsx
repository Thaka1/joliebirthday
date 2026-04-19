'use client';

import { useState } from 'react';
import { Heart, X } from 'lucide-react';
import { mockData } from '@/lib/mock';

const LetterScene: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen px-6 pt-28 pb-28 flex flex-col items-center">
      <header className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">Scene 04</p>
        <h2 className="font-serif-romantic text-5xl md:text-6xl text-rose-900 italic">
          {mockData.letter.title}
        </h2>
        <p className="mt-3 text-rose-700/70 font-serif-romantic text-lg italic">
          {open ? 'Take your time to read ♡' : 'Tap the envelope to open…'}
        </p>
      </header>

      <div
        className="relative w-full max-w-xl flex items-center justify-center"
        style={{ minHeight: '560px' }}
      >
        <div
          className={`envelope-wrapper absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            open ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'
          }`}
          data-testid="envelope-wrapper"
        >
          <div
            className={`envelope ${open ? 'open' : ''}`}
            onClick={() => setOpen(true)}
            data-testid="envelope"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(true)}
            aria-label="Open the letter"
          >
            <div className="envelope-body">
              <div className="envelope-seal">
                <Heart className="w-5 h-5 fill-white text-white" />
              </div>
            </div>
            <div className="envelope-flap" />
          </div>
        </div>

        <div
          className={`relative w-full transition-all duration-700 ${
            open
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-6 pointer-events-none'
          }`}
          data-testid="letter-paper"
        >
          <div
            className="relative mx-auto max-w-lg rounded-[14px] p-8 md:p-10 shadow-2xl border border-rose-200"
            style={{
              background: 'linear-gradient(180deg, #fffafb 0%, #fff0f3 100%)',
              backgroundImage:
                'repeating-linear-gradient(180deg, transparent 0, transparent 31px, rgba(244,114,182,0.12) 31px, rgba(244,114,182,0.12) 32px)',
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              data-testid="close-letter-btn"
              aria-label="Close letter"
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-500 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-rose-400 text-[10px] uppercase tracking-[0.4em] mb-4 text-center">
              For {mockData.person.nickname}
            </div>

            <div className="max-h-[52vh] overflow-auto pr-1">
              <p className="font-serif-romantic text-rose-900 whitespace-pre-line leading-[2] text-[17px]">
                {mockData.letter.content}
              </p>
              <p className="font-script text-3xl text-rose-500 mt-6 text-right">
                {mockData.letter.signature}
              </p>
            </div>

            <Heart className="absolute -top-3 -left-3 w-6 h-6 fill-rose-400 text-rose-400 rotate-[-15deg]" />
            <Heart className="absolute -bottom-3 -right-3 w-6 h-6 fill-rose-400 text-rose-400 rotate-[15deg]" />
          </div>
        </div>
      </div>

      {!open && (
        <p
          className="mt-4 text-rose-500/80 text-sm italic animate-pulse"
          data-testid="letter-hint"
        >
          ♡ click to open ♡
        </p>
      )}
    </section>
  );
};

export default LetterScene;
