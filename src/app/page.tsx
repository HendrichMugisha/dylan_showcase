"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ProductCard from "@/components/ProductCard";

// The JJK Collection Data
const jjkCollection = [
  { id: '1', title: 'JJK Maki Zenin Oversized T-shirt', price: '₹799', originalPrice: '₹1200', image: '/images/Maki Zenin2.webp', hover: '/images/Maki Zenin1.webp' },
  { id: '2', title: 'JJK Okkotsu Yuuta Oversized T-shirt', price: '₹799', originalPrice: '₹1200', image: '/images/Okkotsu Yuuta3.webp', hover: '/images/Okkotsu Yuuta1.webp' },
  { id: '3', title: 'JJK Suguru Geto Oversized T-shirt', price: '₹799', originalPrice: '₹1200', image: '/images/Suguru Geto2.webp', hover: '/images/Suguru Geto1.webp' },
  { id: '4', title: 'JJK Toji Fushiguro Oversized T-shirt', price: '₹799', originalPrice: '₹1200', image: '/images/Toji Fushiguro2.webp', hover: '/images/Toji Fushiguro1.webp' },
];

const testimonials = [
  { text: "The fabric weight is perfect. Feels exactly like a premium 240 GSM tee should.", author: "Karan S." },
  { text: "Incredible print quality and the oversized fit is spot on. Definitely my new favorite shirt.", author: "Anjali T." },
  { text: "No AI BS here. You can tell real effort went into the custom design. Looks sick! 🔥", author: "Rohan V." }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      
      {/* Video Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.shopify.com/videos/c/o/v/482d352067bf4566aa497b8383d51e46.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark Shadow Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50" />
        
        <div className="relative z-20 text-center px-4 flex flex-col items-center">
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-7xl md:text-[10rem] font-black tracking-tighter text-white uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex overflow-hidden"
          >
            {"KEEN".split('').map((char, index) => (
              <motion.span key={index} variants={letterVariants}>{char}</motion.span>
            ))}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6"
          >
            <Link href="#apparel" className="bg-accent text-white px-10 py-4 font-black tracking-widest uppercase hover:bg-white hover:text-black transition-colors shadow-xl">
              The JJK Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full bg-[#111] border-y border-gray-900 py-3 overflow-hidden flex whitespace-nowrap relative">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-16 items-center text-accent font-black tracking-widest text-sm uppercase"
        >
          <span>🔥 CUSTOM AUTHENTIC DESIGNS</span>
          <span>⚡ 100% SUPER COMBED COTTON</span>
          <span>🔥 240 GSM HEAVYWEIGHT</span>
          <span>⚡ UNISEX OVERSIZED FIT</span>
          <span>🔥 NO AI BS</span>
          <span>⚡ BIO-WASHED SOFTNESS</span>
          <span>🔥 CUSTOM AUTHENTIC DESIGNS</span>
          <span>⚡ 100% SUPER COMBED COTTON</span>
          <span>🔥 240 GSM HEAVYWEIGHT</span>
          <span>⚡ UNISEX OVERSIZED FIT</span>
          <span>🔥 NO AI BS</span>
        </motion.div>
      </div>

      {/* The JJK Collection Section */}
      <section id="apparel" className="px-4 md:px-0 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-white mb-2">The JJK Collection</h2>
          <div className="w-16 h-1 bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {jjkCollection.map((art, i) => (
            <ProductCard key={art.id} item={art} index={i} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 md:px-0 mb-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-black tracking-tighter uppercase text-white mb-2">Customers are saying</h2>
          <div className="w-16 h-1 bg-accent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#111] p-8 border border-gray-900 text-center flex flex-col items-center gap-4 hover:border-accent transition-colors rounded-sm">
              <div className="flex gap-1 text-accent">
                {/* 5 Stars */}
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>
                ))}
              </div>
              <p className="text-gray-300 font-medium italic">"{t.text}"</p>
              <span className="font-black tracking-widest text-xs uppercase text-white mt-auto pt-4">{t.author}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
