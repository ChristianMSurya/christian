'use client';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen scroll-smooth items-center justify-center font-[family-name:var(--font-geist-sans)]">
        <section className="flex w-full h-screen min-h-screen flex-col justify-between items-center">
          <div className="h-16"></div>
          <div className="flex flex-row w-full justify-center items-center gap-1 animate-fade-in">
            <div id="first-name" className="flex flex-row w-full items-center justify-end py-2 gap-1">
              <p id="friends" className="opacity-0 transition-opacity duration-300">my friends call me</p>
              <p id="christian" className="cursor-pointer transition-opacity duration-300">christian</p>
            </div>
            <div id="second-name" className="flex flex-row w-full items-center justify-start py-2 gap-1">
              <p id="matthew" className="cursor-pointer transition-opacity duration-300">matthew</p>
              <p id="family" className="opacity-0 transition-opacity duration-300">is what my family calls me</p>
            </div>
          </div>
          <div className="flex gap-2 text-sm mb-8 animate-fade-in">
            <a 
              href="https://linkedin.com/in/christianmatthewnd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              linkedin
            </a>
            <span className="opacity-50">|</span>
            <a 
              href="https://x.com/christianmsurya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              twitter
            </a>
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
