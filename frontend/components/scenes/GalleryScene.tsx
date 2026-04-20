'use client';

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { mockData } from "@/lib/mock";
import { motion } from "framer-motion";
import type { Photo } from "@/lib/types";

const GalleryScene: React.FC = () => {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <section className="min-h-screen px-4 md:px-6 pt-24 pb-24 bg-gradient-to-b from-pink-50 to-rose-100">
      
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">
            Scene 02
          </p>

          <h2 className="font-serif text-3xl md:text-6xl text-rose-900 italic">
            Our Beautiful Moments
          </h2>

          <p className="mt-2 md:mt-3 text-rose-700/70 text-sm md:text-lg italic">
            Every photo is a day I want to keep forever
          </p>
        </header>

        {/* 🔥 MASONRY GRID */}
        <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {mockData.photos.map((photo, i) => (
            
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="break-inside-avoid"
            >
              <button
                onClick={() => setSelected(photo)}
                className="group relative w-full overflow-hidden rounded-2xl shadow-lg bg-white/50 hover:shadow-2xl transition-all duration-500"
              >
                
                {/* IMAGE */}
                <Image
                  src={photo.url}
                  alt={photo.caption}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-white text-lg italic font-serif">
                    {photo.caption}
                  </p>
                  <p className="text-rose-200 text-xs tracking-widest uppercase">
                    {photo.date}
                  </p>
                </div>

              </button>
            </motion.div>

          ))}
        </div>
      </div>

      {/* 💌 LIGHTBOX */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-rose-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelected(null)}
        >
          
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            onClick={() => setSelected(null)}
          >
            <X />
          </button>

          {/* IMAGE CONTAINER */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.url}
              alt={selected.caption}
              width={1200}
              height={800}
              className="w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
            />

            {/* TEXT */}
            <div className="text-center mt-5 text-white">
              <p className="text-xl md:text-2xl italic font-serif">
                {selected.caption}
              </p>
              <p className="text-rose-300 mt-1 text-sm tracking-widest uppercase">
                {selected.date}
              </p>
            </div>
          </motion.div>

        </motion.div>
      )}
    </section>
  );
};

export default GalleryScene;