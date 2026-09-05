import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/ProductGallery";

const descriptionHTML = `
<ul class="list-disc pl-5 space-y-2 mt-4 text-sm text-gray-400 font-medium">
  <li><strong class="text-gray-300">Fabric Weight:</strong> 240 GSM – heavyweight and durable</li>
  <li><strong class="text-gray-300">Material:</strong> 100% Super Combed Cotton for a smooth feel</li>
  <li><strong class="text-gray-300">Pre-Shrunk:</strong> Stays true to size after washes</li>
  <li><strong class="text-gray-300">Bio-Washed:</strong> Enhanced softness and colour retention</li>
  <li><strong class="text-gray-300">Neckline:</strong> Lycra Ribbed Neck for lasting comfort</li>
  <li><strong class="text-gray-300">Fit:</strong> Unisex Oversized Fit – stylish and relaxed</li>
  <li><strong class="text-gray-300">Design:</strong> Custom made authentic anime design. NO AI BS</li>
  <li><strong class="text-gray-300">Care:</strong> Wash cold inside-out, tumble dry low, avoid ironing on print</li>
</ul>
`;

const jjkCollection = [
  { id: '1', title: 'JJK Maki Zenin Oversized T-shirt', price: '₹799', originalPrice: '₹1200', images: ['/images/Maki Zenin2.webp', '/images/Maki Zenin1.webp', '/images/Maki Zenin3.webp'], category: 'Apparel', collection: 'The JJK Collection' },
  { id: '2', title: 'JJK Okkotsu Yuuta Oversized T-shirt', price: '₹799', originalPrice: '₹1200', images: ['/images/Okkotsu Yuuta3.webp', '/images/Okkotsu Yuuta1.webp', '/images/Okkotsu Yuuta2.webp'], category: 'Apparel', collection: 'The JJK Collection' },
  { id: '3', title: 'JJK Suguru Geto Oversized T-shirt', price: '₹799', originalPrice: '₹1200', images: ['/images/Suguru Geto2.webp', '/images/Suguru Geto1.webp', '/images/Suguru Geto3.webp'], category: 'Apparel', collection: 'The JJK Collection' },
  { id: '4', title: 'JJK Toji Fushiguro Oversized T-shirt', price: '₹799', originalPrice: '₹1200', images: ['/images/Toji Fushiguro2.webp', '/images/Toji Fushiguro1.webp', '/images/Toji Fushiguro3.webp'], category: 'Apparel', collection: 'The JJK Collection' },
];

export function generateStaticParams() {
  return jjkCollection.map((art) => ({
    id: art.id,
  }));
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const artwork = jjkCollection.find((a) => a.id === id);

  if (!artwork) {
    notFound();
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-12 items-start mt-8 animate-[fadeIn_0.5s_ease-out]">
        
        {/* Left Column: Images */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
          <Link href="/" className="inline-flex items-center text-sm font-black tracking-widest text-accent hover:text-white transition-colors uppercase w-fit">
            &larr; BACK
          </Link>
          
          <ProductGallery images={artwork.images} />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/3 flex flex-col gap-8 md:sticky md:top-32">
          <div className="animate-[slideInRight_0.5s_ease-out_0.2s_both]">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase text-white">{artwork.title}</h1>
            <div className="flex gap-3 items-center mb-6">
              <span className="text-2xl font-black text-white">{artwork.price}</span>
              <span className="text-lg font-medium text-gray-500 line-through">{artwork.originalPrice}</span>
              <span className="bg-accent text-white px-2 py-0.5 text-xs font-black tracking-widest">SAVE 33%</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
          </div>
          
          <div className="flex flex-col gap-2 py-6 border-y border-gray-900 animate-[slideInRight_0.5s_ease-out_0.3s_both]">
            <div className="flex justify-between">
              <span className="text-gray-600 text-xs font-black tracking-widest uppercase">COLLECTION</span>
              <span className="font-bold text-sm text-gray-300">{artwork.collection}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-gray-600 text-xs font-black tracking-widest uppercase">SIZES</span>
              <span className="font-bold text-sm text-gray-300">XS, S, M, L, XL</span>
            </div>
          </div>

          {/* E-commerce Foreshadowing */}
          <div className="bg-[#111] p-6 flex flex-col gap-4 border border-gray-900 rounded-sm animate-[slideInUp_0.5s_ease-out_0.4s_both]">
            <h3 className="font-black tracking-tighter text-xl uppercase text-white">Unlock Early Access</h3>
            <p className="text-sm text-gray-400 font-medium">This item drops soon. Join the waitlist for exclusive 33% early bird pricing.</p>
            <button disabled className="w-full py-4 bg-gray-900 text-gray-600 font-black tracking-widest text-sm cursor-not-allowed uppercase border border-gray-800">
              Vault Closed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
