import Image from "next/image";

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-16 mt-12 items-center md:items-start">
        <div className="w-full md:w-1/2 relative aspect-square bg-[#111] border border-gray-900 rounded-sm overflow-hidden grayscale">
          <Image 
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" 
            alt="Artist portrait" 
            fill 
            className="object-cover opacity-80" 
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-5xl font-black tracking-tighter uppercase text-white">The Syndicate</h1>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">
            KEEN is the creative outlet of a digital illustrator specializing in authentic custom anime designs. 
            Drawing inspiration from culture and the anime world, the work explores vivid themes and striking streetwear aesthetics.
          </p>
          <p className="text-lg text-gray-400 font-medium leading-relaxed">
            Every piece of apparel is made using 100% Super Combed Cotton and premium heavyweight fabrics, 
            designed explicitly by hand—NO AI BS.
          </p>
          <div className="mt-8 flex flex-col gap-2">
            <span className="font-black tracking-widest text-sm text-accent uppercase">Contact</span>
            <a href="mailto:dylanjeranyama12@gmail.com" className="font-bold text-xl text-white hover:text-gray-300 transition-colors">
              dylanjeranyama12@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
