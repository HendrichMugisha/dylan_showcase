
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group flex flex-col gap-3"
    >
      <Link href={`/artwork/${item.id}`} className="relative w-full aspect-[3/4] bg-[#111] rounded-sm border border-gray-900 md:group-hover:border-accent transition-colors duration-300 overflow-hidden">
        
        {/* Responsive Image Container */}
        <div className="flex md:block w-full h-full overflow-x-auto md:overflow-hidden snap-x snap-mandatory scrollbar-hide">
          {/* Image 1 (Primary: Back Model) */}
          <div className="relative w-full h-full flex-shrink-0 snap-center md:absolute md:inset-0 transition-opacity duration-700 ease-in-out md:opacity-100 md:group-hover:opacity-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Image 2 (Alternate: Front Model) */}
          <div className="relative w-full h-full flex-shrink-0 snap-center md:absolute md:inset-0 transition-opacity duration-700 ease-in-out opacity-100 md:opacity-0 md:group-hover:opacity-100">
            <Image
              src={item.hover}
              alt={`${item.title} alternate`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 bg-accent text-white px-2 py-1 text-[10px] font-black tracking-widest uppercase shadow-md">
          NEW
        </div>
      </Link>
      
      <div className="flex flex-col items-center text-center mt-2">
        <Link href={`/artwork/${item.id}`} className="font-bold text-sm md:text-base tracking-tight hover:text-accent transition-colors line-clamp-1">{item.title}</Link>
        <div className="flex gap-2 items-center mt-1">
          <span className="text-gray-500 line-through text-sm font-medium">{item.originalPrice}</span>
          <span className="text-white font-black text-lg">{item.price}</span>
        </div>
      </div>
    </motion.div>
  );
}

