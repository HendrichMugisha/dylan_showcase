
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function ProductCard({ item, index }: { item: any; index: number }) {
  const ref = useRef(null);
  // Trigger when the element is near the center of the viewport (between 40% and 60% of the screen)
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Show alternate image if hovered (desktop) or in center of viewport (mobile/scroll)
  const showAlternate = isHovered || (isMobile && isInView);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group flex flex-col gap-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
    >
      <Link href={`/artwork/${item.id}`} className={`relative w-full aspect-[3/4] overflow-hidden bg-[#111] rounded-sm border transition-colors duration-300 ${showAlternate ? "border-accent shadow-[0_0_15px_rgba(255,42,95,0.3)]" : "border-gray-900"}`}>
        {/* Main Image (Flat-lay) */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-cover transition-all duration-700 ease-in-out ${showAlternate ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        />
        {/* Hover/Scroll Image (Model) */}
        <Image
          src={item.hover}
          alt={`${item.title} hover`}
          fill
          className={`object-cover absolute inset-0 transition-all duration-700 ease-in-out ${showAlternate ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
        />
        <div className="absolute top-2 left-2 bg-accent text-white px-2 py-1 text-[10px] font-black tracking-widest uppercase shadow-md">
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

