import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Anime & Apparel Dummy data
const artworks = [
  { id: '1', title: 'Cyber Ronin Tee', image: 'https://picsum.photos/seed/anime1/800/1000', description: 'Heavyweight oversized tee featuring the iconic Cyber Ronin artwork. 100% premium cotton, drop shoulder fit.', year: 'DROP 1', category: 'Apparel' },
  { id: '2', title: 'Neo Tokyo Grid', image: 'https://picsum.photos/seed/anime2/800/800', description: 'Museum-quality poster made on thick and durable matte paper. Add a wonderful accent to your room and office with these posters that are sure to brighten any environment.', year: 'DROP 1', category: 'Illustration Print' },
  { id: '3', title: 'Mech Pilot Hoodie', image: 'https://picsum.photos/seed/anime3/800/800', description: 'Premium heavyweight hoodie. Fleece-lined, puff-print Mech Pilot graphic on the back.', year: 'DROP 1', category: 'Apparel' },
  { id: '4', title: 'Crimson Akuma', image: 'https://picsum.photos/seed/anime4/800/1000', description: 'Crimson Akuma exclusive print. Limited run of 50.', year: 'DROP 2', category: 'Illustration Print' },
  { id: '5', title: 'Street Punk Longsleeve', image: 'https://picsum.photos/seed/anime5/800/1000', description: 'Vintage wash longsleeve featuring the Street Punk gang insignia.', year: 'DROP 1', category: 'Apparel' },
  { id: '6', title: 'Digital Ghost', image: 'https://picsum.photos/seed/anime6/800/800', description: 'High-quality digital ghost print. Holographic foil accents.', year: 'DROP 2', category: 'Illustration Print' },
];

export function generateStaticParams() {
  return artworks.map((art) => ({
    id: art.id,
  }));
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const artwork = artworks.find((a) => a.id === id);

  if (!artwork) {
    notFound();
  }

  return (
    <div className="flex flex-col md:flex-row gap-12 items-start mt-8 animate-[fadeIn_0.5s_ease-out]">
      {/* Back button */}
      <div className="w-full md:w-2/3">
        <Link href="/" className="inline-flex items-center text-sm font-black tracking-widest text-accent hover:text-white mb-8 transition-colors uppercase">
          &larr; BACK
        </Link>
        <div className="relative w-full aspect-[4/5] bg-[#111] border border-gray-900 rounded-sm">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/3 flex flex-col gap-8 md:sticky md:top-32">
        <div className="animate-[slideInRight_0.5s_ease-out_0.2s_both]">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase text-white">{artwork.title}</h1>
          <p className="text-gray-400 leading-relaxed font-medium">{artwork.description}</p>
        </div>
        
        <div className="flex flex-col gap-2 py-6 border-y border-gray-900 animate-[slideInRight_0.5s_ease-out_0.3s_both]">
          <div className="flex justify-between">
            <span className="text-gray-600 text-xs font-black tracking-widest uppercase">COLLECTION</span>
            <span className="font-bold text-sm text-gray-300">{artwork.year}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-600 text-xs font-black tracking-widest uppercase">CATEGORY</span>
            <span className="font-bold text-sm text-gray-300">{artwork.category}</span>
          </div>
        </div>

        {/* E-commerce Foreshadowing */}
        <div className="bg-[#111] p-6 flex flex-col gap-4 border border-gray-900 rounded-sm animate-[slideInUp_0.5s_ease-out_0.4s_both]">
          <h3 className="font-black tracking-tighter text-xl uppercase text-white">Unlock Early Access</h3>
          <p className="text-sm text-gray-400 font-medium">This {artwork.category.toLowerCase()} will be available when the vault opens. Join the waitlist.</p>
          <button disabled className="w-full py-4 bg-gray-900 text-gray-600 font-black tracking-widest text-sm cursor-not-allowed uppercase border border-gray-800">
            Vault Closed
          </button>
        </div>
      </div>
    </div>
  );
}
