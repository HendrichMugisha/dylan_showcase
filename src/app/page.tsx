"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Anime & Apparel Dummy data with reliable placeholders
const artworks = [
  { id: '1', title: 'Cyber Ronin Tee', image: 'https://picsum.photos/seed/anime1/800/1000', tall: true, category: 'Apparel' },
  { id: '2', title: 'Neo Tokyo Grid', image: 'https://picsum.photos/seed/anime2/800/800', tall: false, category: 'Illustration' },
  { id: '3', title: 'Mech Pilot Hoodie', image: 'https://picsum.photos/seed/anime3/800/800', tall: false, category: 'Apparel' },
  { id: '4', title: 'Crimson Akuma', image: 'https://picsum.photos/seed/anime4/800/1000', tall: true, category: 'Illustration' },
  { id: '5', title: 'Street Punk Longsleeve', image: 'https://picsum.photos/seed/anime5/800/1000', tall: true, category: 'Apparel' },
  { id: '6', title: 'Digital Ghost', image: 'https://picsum.photos/seed/anime6/800/800', tall: false, category: 'Illustration' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] bg-black flex items-center justify-center overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/hero/2000/1200"
            alt="Hero anime artwork"
            fill
            className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/80" />
        
        <div className="relative z-20 text-center px-4 flex flex-col items-center">
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-7xl md:text-[9rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 uppercase leading-none drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] flex flex-col items-center"
          >
            <div className="flex overflow-hidden">
              {"NEO".split('').map((char, index) => (
                <motion.span key={index} variants={letterVariants}>{char}</motion.span>
              ))}
            </div>
            <div className="flex overflow-hidden text-accent drop-shadow-[0_0_30px_rgba(255,42,95,0.4)]">
              {"TOKYO".split('').map((char, index) => (
                <motion.span key={index} variants={letterVariants}>{char}</motion.span>
              ))}
            </div>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            className="mt-6 text-xl md:text-2xl font-bold tracking-widest text-white uppercase bg-black/50 px-6 py-2 rounded-sm backdrop-blur-sm border border-gray-800"
          >
            Premium Anime Apparel & Prints
          </motion.p>
        </div>
      </section>

      {/* Apparel Grid */}
      <section id="apparel">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12 border-b border-gray-900 pb-4"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-white">Latest Drops</h2>
          <span className="text-sm text-accent font-bold tracking-widest animate-pulse">LIVE NOW</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {artworks.map((art, i) => (
            <motion.div 
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={`/artwork/${art.id}`} className="group flex flex-col gap-4">
                <div className={`relative w-full overflow-hidden bg-[#111] rounded-sm border border-gray-900 group-hover:border-accent transition-colors ${art.tall ? 'aspect-[3/4]' : 'aspect-square'}`}>
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-bold tracking-widest uppercase border border-gray-800 text-white">
                    {art.category}
                  </div>
                </div>
                <div className="flex justify-between items-center px-1">
                  <h3 className="font-bold text-xl uppercase tracking-tight text-gray-200 group-hover:text-white transition-colors">{art.title}</h3>
                  <span className="text-xs font-black tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">EXPLORE &rarr;</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
