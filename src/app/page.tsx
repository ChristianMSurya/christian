'use client';

import Link from "next/link";
import { ThemeToggle } from '../components/theme-toggle'

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen scroll-smooth items-center justify-center font-[family-name:var(--font-berkeley)]">
        <section className="flex w-[800px] h-[75%] flex-col justify-between items-start animate-fade-in">
        
        <div className="flex flex-row gap-12">
          <Link href="/" className="cursor-pointer text-sm text-[var(--text-primary)]">
            <p>1</p>
          </Link>
          <Link href="/" className="cursor-pointer text-sm opacity-40 hover:opacity-100 transition-opacity duration-300">
            <p>2</p>
          </Link>
          <Link href="/" className="cursor-pointer text-sm opacity-40 hover:opacity-100 transition-opacity duration-300">
            <p>3</p>
          </Link>
        </div>

        <div className="flex flex-col text-sm gap-2">
          <p>christian matthew</p>
          <p className="opacity-40">figuring out what to work on next</p>
        </div>

        <div className="flex gap-8 text-sm">
            <a 
              href="https://linkedin.com/in/christianmatthewnd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              linkedin
            </a>
            <span className="opacity-40 cursor-default">/</span>
            <a 
              href="https://x.com/christianmsurya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              twitter
            </a>
          </div>


          {/* <div className="h-16"></div>
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
          </div> */}
        </section>
    </div>
  );
}
