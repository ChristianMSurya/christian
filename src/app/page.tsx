'use client';
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
    <div className="flex flex-col w-full min-h-[50vh] scroll-smooth items-start justify-center animate-fade-in">
        <div className="flex flex-col text-sm gap-2">
          <p>christian matthew</p>
          <p className="opacity-40">figuring out what to work on next</p>
        </div>
    </div>
    <div className="mt-12 mb-24 animate-fade-in" style={{ animationDelay: '70ms', opacity: 0 }}>
      <Footer/>
    </div>
    </div>
  );
}
