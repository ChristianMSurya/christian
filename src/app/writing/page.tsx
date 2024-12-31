'use client';
import Footer from "@/components/footer";

export default function Writing() {
  return (
    <div>
        <div className="flex flex-col w-full min-h-[50vh] scroll-smooth items-start justify-center animate-fade-in">
        
            <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-1">
                <p className="text-sm">coming soon</p>
            </div>
            </div>
        </div>
        <div className="mt-12 mb-24 animate-fade-in" style={{ animationDelay: '70ms', opacity: 0 }}>
            <Footer/>
        </div>
    </div>
  );
}