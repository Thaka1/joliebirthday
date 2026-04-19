'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { mockData } from '@/lib/mock';
import type { Photo } from '@/lib/types';

const GalleryScene: React.FC = () => {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <section className="min-h-screen px-6 pt-28 pb-28">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">Scene 02</p>
          <h2 className="font-serif-romantic text-5xl md:text-6xl text-rose-900 italic">
            Our beautiful moments
          </h2>
          <p className="mt-3 text-rose-700/70 font-serif-romantic text-lg italic">
            Every photo is a day I want to keep forever
          </p>
        </header>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          data-testid="gallery-grid"
        >
          {mockData.photos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setSelected(photo)}
              data-testid={`photo-${photo.id}`}
              className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white/50 transition-all hover:scale-[1.03] hover:shadow-2xl ${
                i % 5 === 0 || i % 5 === 3 ? 'md:row-span-2 md:aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <Image
                src={photo.url}
                alt={photo.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-rose-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-10">
                <p className="font-serif-romantic italic text-white text-lg">{photo.caption}</p>
                <p className="text-rose-200 text-xs tracking-widest uppercase">{photo.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-rose-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelected(null)}
          data-testid="photo-lightbox"
        >
          <button
            type="button"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.url}
              alt={selected.caption}
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="text-center mt-5 text-white">
              <p className="font-serif-romantic italic text-2xl">{selected.caption}</p>
              <p className="text-rose-300 mt-1 text-sm tracking-widest uppercase">
                {selected.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryScene;
