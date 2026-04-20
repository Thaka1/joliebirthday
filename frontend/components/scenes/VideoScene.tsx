'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import { mockData } from '@/lib/mock';
import type { Video } from '@/lib/types';
import type { SceneProps } from '../BirthdayExperience';

const VideoScene: React.FC<SceneProps> = ({ setMusicOn }) => {
  const [selected, setSelected] = useState<Video | null>(null);

  const video = mockData.videos[0];

  return (
    <section className="min-h-screen px-6 pt-28 pb-28">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">
            Scene 06
          </p>
          <h2 className="font-serif-romantic text-5xl md:text-6xl text-rose-900 italic">
            Things I want to Share
          </h2>
          <p className="mt-3 text-rose-700/70 font-serif-romantic text-lg italic">
            Little videos for you ~
          </p>
        </header>

        {/* VIDEO CARD */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => {
              setSelected(video);
              setMusicOn?.(false); // 🔥 PAUSE MUSIC
            }}
            className="group w-full max-w-3xl overflow-hidden rounded-2xl shadow-xl bg-white border border-rose-100 hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="100vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-rose-900/10 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-rose-500 ml-1" />
                </div>
              </div>

              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-rose-900/70 text-white text-xs">
                {video.duration}
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="font-serif-romantic text-3xl italic text-rose-900">
                {video.title}
              </h3>
            </div>
          </button>
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-rose-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => {
            setSelected(null);
            setMusicOn?.(true); // 🔥 RESUME MUSIC
          }}
        >
          {/* CLOSE */}
          <button
            type="button"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            onClick={() => {
              setSelected(null);
              setMusicOn?.(true); // 🔥 RESUME MUSIC
            }}
          >
            <X className="w-5 h-5" />
          </button>

          {/* VIDEO */}
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selected.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
                title={selected.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            <h3 className="text-center mt-5 text-white text-xl italic font-serif-romantic">
              {selected.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoScene;