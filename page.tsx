import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-red-600 font-sans relative overflow-hidden">
      <Navbar />
      
      <div className="flex items-center justify-center h-full relative">
        <main className="flex w-full max-w-3xl flex-col items-center px-16 bg-transparent relative h-full justify-between py-8">
          {/* SPX Logo and Button Container */}
          <div className="flex flex-col items-center relative">
            {/* SPX Logo */}
            <div className="flex items-center justify-center relative z-0">
              <Image
                src="/spx.png"
                alt="SPX Logo"
                width={900}
                height={800}
                priority
                className="object-contain"
              />
            </div>
            
            {/* SPIDER.WEB Blur Button - positioned closer and in front */}
            <Link href="/Login">
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white font-bold text-xl tracking-wider hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl relative z-10 -mt-16">
              SPIDER.WEB
            </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
