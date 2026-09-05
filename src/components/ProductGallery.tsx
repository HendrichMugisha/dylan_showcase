
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Main Image */}
      <div className="relative w-full aspect-[4/5] bg-[#111] border border-gray-900 rounded-sm overflow-hidden">
        <Image
          src={images[activeIndex]}
          alt="Product View"
          fill
          className="object-cover md:object-contain"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-20 h-24 flex-shrink-0 border-2 rounded-sm overflow-hidden transition-all ${
              activeIndex === idx ? "border-accent" : "border-transparent hover:border-gray-500"
            }`}
          >
            <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Size Guide Button */}
      <button 
        onClick={() => setIsSizeChartOpen(true)}
        className="mt-4 w-full py-3 border border-gray-700 text-gray-300 font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
      >
        Size Guide
      </button>

      {/* Size Chart Modal */}
      {isSizeChartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsSizeChartOpen(false)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-lg overflow-hidden border border-gray-800" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsSizeChartOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors"
            >
              ?
            </button>
            <div className="relative w-full h-[80vh]">
              <Image 
                src="/images/Size_Chart.webp" 
                alt="Size Chart" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

