'use client';
import Footer from "@/components/footer";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';

export default function Work() {
  const projects = [
    {
      name: "SANTÉ",
      details: "Growth / January 2024 - Present",
      description: "",
      link: "https://www.santehq.com/"
    },
    {
      name: "FIREFLY",
      details: "Cofounder / Mar 2024 - Nov 2024",
      description: "",
      link: "https://www.tryfirefly.ai"
    },
    {
      name: "COMMSOR",
      details: "Chief of Staff / Aug 2023 - Jan 2024",
      description: "",
      link: "https://www.commsor.com"
    },
    {
      name: "SUBSET",
      details: "Growth / Jan 2023 - May 2023",
      description: "",
      link: "https://subset.so"
    },
    {
      name: "GATHER",
      details: "Growth / Aug 2022 - Jan 2023",
      description: "",
      link: "https://www.linkedin.com/company/comegather/"
    },
    {
      name: "FRONTIDA RECORDS",
      details: "Head of Marketing / Sep 2021 - Sep 2022",
      description: "",
      link: "https://www.frontidarecords.org"
    },
    {
      name: "GENUNITY",
      details: "Generalist / Sep 2021 - Aug 2022",
      description: "",
      link: "https://genunity.org"
    }
  ];

  return (
    <div>
        <div className="flex flex-col w-full min-h-[50vh] mt-10 scroll-smooth items-start justify-center animate-fade-in relative">
            <div className="flex flex-col gap-12 overflow-y-auto max-h-full">
                {projects.map((project, index) => (
                project.link.startsWith('http') ? (
                    <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index} 
                        className="flex flex-col gap-1 waterfall-item group cursor-pointer gap-1"
                        style={{ animationDelay: `${index * 70}ms` }}
                    >
                        <div className="flex flex-row items-start">
                          <h2 className="text-sm">{project.name}</h2>
                          <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-300 ease-in-out" />
                        </div>
                        <p className="text-sm opacity-40">{project.details}</p>
                        {/* <p className="text-sm opacity-40 mt-2">{project.description}</p> */}
                    </a>
                ) : (
                    <Link 
                        href={project.link}
                        key={index} 
                        className="flex flex-col gap-1 waterfall-item group cursor-pointer gap-1"
                        style={{ animationDelay: `${index * 70}ms` }}
                    >
                        <div className="flex flex-row items-start">
                            <h2 className="text-sm">{project.name}</h2>
                            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-300 ease-in-out" />
                        </div>
                        <p className="text-sm opacity-40">{project.details}</p>
                        {/* <p className="text-sm opacity-40 mt-2">{project.description}</p> */}
                    </Link>
                )
                ))}
            </div>
        </div>
        <div 
          className="mt-24 mb-24 waterfall-item" 
          style={{ animationDelay: `${(projects.length * 70)}ms` }}
        >
          <Footer/>
        </div>
    </div>
  );
}