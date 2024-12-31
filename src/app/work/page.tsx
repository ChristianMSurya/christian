'use client';
import Footer from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  const projects = [
    {
      name: "FIREFLY",
      description: "Currently in development, backed by Tim Connors.",
      link: "https://www.tryfirefly.ai"
    },
    {
      name: "COMMSOR",
      description: "Turning your network into warm sales leads.",
      link: "https://www.commsor.com"
    },
    {
      name: "SUBSET",
      description: "A modern spreadsheet for macOS.",
      link: "https://subset.so"
    },
    {
      name: "GATHER",
      description: "Catholic dating app.",
      link: "https://www.linkedin.com/company/comegather/"
    },
    {
      name: "FRONTIDA RECORDS",
      description: "EHRs for refugee camps and non-profits.",
      link: "https://www.frontidarecords.org"
    },
    {
      name: "GENUNITY",
      description: "Activating community leaders in Boston.",
      link: "https://genunity.org"
    }
  ];

  return (
    <div>
        <div className="flex flex-col w-full min-h-[50vh] mt-10 scroll-smooth items-start justify-center animate-fade-in relative">
            <div className="flex flex-col gap-12 overflow-y-auto max-h-full">
                {projects.map((project, index) => (
                <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index} 
                    className="flex flex-col gap-1 waterfall-item group cursor-pointer gap-[6px]"
                    style={{ animationDelay: `${index * 70}ms` }}
                >
                    <div className="flex flex-row items-start">
                      <h2 className="text-sm">{project.name}</h2>
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-300 ease-in-out" />
                    </div>
                    <p className="text-sm opacity-40">{project.description}</p>
                    
                </a>
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