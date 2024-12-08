'use client';
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Plus } from "lucide-react";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const thirdSectionRef = useRef<HTMLDivElement>(null);
  const fourthSectionRef = useRef<HTMLDivElement>(null);

  const handleHover = () => {
    setTimeout(() => {
      setShowArrow(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col w-full min-h-screen scroll-smooth items-center justify-center font-[family-name:var(--font-geist-sans)]">
        <section className="flex w-full min-h-screen flex-col justify-between items-center">
          <div className="h-16"></div>
          <div className="flex flex-row w-full justify-center items-center gap-1">
            <div id="first-name" className="flex flex-row w-full items-center justify-end py-2 gap-1">
              <p id="friends" className="opacity-0 transition-opacity duration-300">my friends call me</p>
              <p id="christian" onMouseEnter={handleHover} className="cursor-pointer transition-opacity duration-300">christian</p>
            </div>
            <div id="second-name" className="flex flex-row w-full items-center justify-start py-2 gap-1">
              <p id="matthew" onMouseEnter={handleHover} className="cursor-pointer transition-opacity duration-300">matthew</p>
              <p id="family" className="opacity-0 transition-opacity duration-300">is what my family calls me</p>
            </div>
          </div>
          <div id="down-arrow" 
            className={`flex items-center justify-center transition-opacity duration-300 h-16 ${showArrow ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* <ChevronDown size={24} /> */}
          </div>
        </section>
        {/* <section ref={secondSectionRef} className="flex flex-col items-center justify-center min-h-screen w-full">
          <h2>Second Section</h2>
        </section>
        <section ref={thirdSectionRef} className="flex flex-col items-center justify-center min-h-screen w-full">
          <h2>Third Section</h2>
        </section>
        <section ref={fourthSectionRef} className="flex flex-col items-center justify-center min-h-screen w-full">
          <h2>Fourth Section</h2>
        </section> */}
    </div>
  );
}
