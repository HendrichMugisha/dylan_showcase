import Image from "next/image";

export default function AboutPage() {
  return (
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
          ANIMECULT is the creative outlet of a digital illustrator specializing in cyberpunk, surrealism, and character design. 
          Drawing inspiration from 90s anime, streetwear culture, and dystopian literature, the work explores themes of urban isolation and technological integration.
        </p>
        <p className="text-lg text-gray-400 font-medium leading-relaxed">
          Currently based in the neon-drenched streets of a concrete jungle, working on freelance illustration and limited-run apparel drops.
        </p>
        <div className="mt-8 flex flex-col gap-2">
          <span className="font-black tracking-widest text-sm text-accent uppercase">Contact</span>
          <a href="mailto:hello@animecult.placeholder" className="font-bold text-xl text-white hover:text-gray-300 transition-colors">
            hello@animecult.placeholder
          </a>
        </div>
      </div>
    </div>
  );
}
