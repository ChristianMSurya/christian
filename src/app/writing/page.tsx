'use client';

import Link from "next/link";

export default function Writing() {
  return (
    <div className="flex flex-col w-full h-screen scroll-smooth items-center justify-center">
      <section className="flex w-[800px] h-[75%] flex-col justify-between items-start animate-fade-in">
        <div className="flex flex-row gap-12">
          <Link href="/" className="cursor-pointer text-sm opacity-40 hover:opacity-100 transition-opacity duration-300">
            <p>1</p>
          </Link>
          <Link href="/work" className="cursor-pointer text-sm opacity-40 hover:opacity-100 transition-opacity duration-300">
            <p>2</p>
          </Link>
          <Link href="/writing" className="cursor-pointer text-sm">
            <p>3</p>
          </Link>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-1">
            <p className="text-sm">coming soon</p>
          </div>
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
      </section>
    </div>
  );
}