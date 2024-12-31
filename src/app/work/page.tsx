'use client';

import Link from "next/link";

export default function Work() {
  const projects = [
    {
      name: "FIREFLY",
      description: "Backed by Tim Connors, PivotNorth Capital.",
      link: "#"
    },
    {
      name: "COMMSOR",
      description: "Turn your network into warm sales leads.",
      link: "#"
    },
    {
      name: "SUBSET",
      description: "A modern spreadsheet.",
      link: "#"
    },
    {
      name: "GATHER",
      description: "Catholic dating app.",
      link: "#"
    },
    {
      name: "FRONTIDA RECORDS",
      description: "EHRs for refugee camps and non-profits.",
      link: "#"
    },
    {
      name: "GENUNITY",
      description: "Activating community leaders in Boston.",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col w-full h-screen scroll-smooth items-center justify-center">
      <section className="flex w-[800px] h-[75%] flex-col justify-between items-start animate-fade-in">
        <div className="flex flex-row gap-12">
          <Link href="/" className="cursor-pointer text-sm opacity-40 hover:opacity-100 transition-opacity duration-300">
            <p>1</p>
          </Link>
          <Link href="/work" className="cursor-pointer text-sm">
            <p>2</p>
          </Link>
          <Link href="/writing" className="cursor-pointer text-sm opacity-40 hover:opacity-100 transition-opacity duration-300">
            <p>3</p>
          </Link>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h2 className="text-sm">{project.name}</h2>
              <p className="text-sm opacity-40">{project.description}</p>
            </div>
          ))}
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