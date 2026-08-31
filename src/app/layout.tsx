import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anime Cult | Apparel & Art",
  description: "Exclusive anime illustrations and print-on-demand streetwear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="antialiased min-h-screen flex flex-col bg-[#050505] text-gray-100 font-sans selection:bg-accent selection:text-white">
        
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 w-full bg-[#050505]/80 backdrop-blur-xl border-b border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link href="/" className="font-black text-3xl tracking-tighter text-white hover:text-accent transition-colors">
              ANIMECULT<span className="text-accent">.</span>
            </Link>
            
            <nav className="flex gap-8 items-center text-sm font-bold tracking-widest text-gray-300">
              <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
              <Link href="/#apparel" className="relative group cursor-pointer hover:text-white transition-colors">
                APPAREL
                <span className="absolute -top-3 -right-6 text-[10px] font-black tracking-widest text-black bg-accent px-1.5 py-0.5 rounded-sm shadow-[0_0_10px_rgba(255,42,95,0.5)]">
                  DROP 1
                </span>
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>

        {/* Footer with Waitlist Teaser */}
        <footer className="w-full border-t border-gray-900 mt-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            
            <div className="max-w-md">
              <h3 className="text-3xl font-black tracking-tighter mb-2 uppercase text-white">Unlock the Drop.</h3>
              <p className="text-gray-400 text-sm mb-6 font-medium">Join the syndicate. Get early access to limited edition anime streetwear and prints before they sell out.</p>
              <form className="flex gap-0" action="#">
                <input 
                  type="email" 
                  placeholder="ENTER YOUR EMAIL" 
                  className="flex-1 px-4 py-3 bg-[#111] border border-gray-800 rounded-none text-sm font-bold focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-white placeholder-gray-600"
                  required
                />
                <button type="submit" className="bg-accent text-white px-8 py-3 text-sm font-black tracking-widest hover:bg-white hover:text-black transition-colors uppercase">
                  Join
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-4 text-sm font-bold tracking-widest text-gray-500">
              <a href="#" className="hover:text-accent transition-colors">INSTAGRAM</a>
              <a href="#" className="hover:text-accent transition-colors">TWITTER</a>
              <a href="#" className="hover:text-accent transition-colors">DISCORD</a>
            </div>

          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-900 flex justify-between items-center text-xs text-gray-600 font-bold tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} ANIMECULT. All rights reserved.</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
