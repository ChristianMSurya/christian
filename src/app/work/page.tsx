'use client';
import AnText from "@/components/an-text";
import Footer from "@/components/footer";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';

export default function Work() {
  const projects = [
    {
      name: "santé",
      details: "product / jan 2025 - present",
      description: "",
      link: "https://www.santehq.com/"
    },
    {
      name: "firefly",
      details: "cofounder / mar 2024 - nov 2024",
      description: "",
      link: "https://www.tryfirefly.ai"
    },
    {
      name: "commsor",
      details: "chief of staff / aug 2023 - jan 2024",
      description: "",
      link: "https://www.commsor.com"
    },
    {
      name: "subset",
      details: "growth / jan 2023 - may 2023",
      description: "",
      link: "https://subset.so"
    },
    {
      name: "gather",
      details: "growth / aug 2022 - jan 2023",
      description: "",
      link: "https://www.linkedin.com/company/comegather/"
    },
    {
      name: "frontida records",
      details: "head of marketing / sep 2021 - sep 2022",
      description: "",
      link: "https://www.frontidarecords.org"
    },
    {
      name: "genunity",
      details: "generalist / sep 2021 - aug 2022",
      description: "",
      link: "https://genunity.org"
    }
  ];

  return (
    <div>
        <header className="thoughts-header"><h1>work</h1></header>
        <div className="flex flex-col w-full min-h-[50vh] mt-10 scroll-smooth items-start justify-start animate-fade-in relative">
            <div className="flex flex-col gap-12 overflow-y-auto max-h-full">
                {projects.map((project, index) => (
                project.link.startsWith('http') ? (
                    <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index} 
                        className="flex flex-col gap-1 waterfall-item site-link group cursor-pointer gap-1"
                        style={{ animationDelay: `${index * 25}ms` }}
                    >
                        <div className="flex flex-row items-start">
                          <h2 className="text-sm"><AnText>{project.name}</AnText></h2>
                          <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-[250ms] ease-in-out" />
                        </div>
                        <p className="text-sm"><AnText>{project.details}</AnText></p>
                        {/* <p className="text-sm opacity-40 mt-2">{project.description}</p> */}
                    </a>
                ) : (
                    <Link 
                        href={project.link}
                        key={index} 
                        className="flex flex-col gap-1 waterfall-item site-link group cursor-pointer gap-1"
                        style={{ animationDelay: `${index * 25}ms` }}
                    >
                        <div className="flex flex-row items-start">
                            <h2 className="text-sm"><AnText>{project.name}</AnText></h2>
                            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-[250ms] ease-in-out" />
                        </div>
                        <p className="text-sm"><AnText>{project.details}</AnText></p>
                        {/* <p className="text-sm opacity-40 mt-2">{project.description}</p> */}
                    </Link>
                )
                ))}
            </div>
        </div>
        <div 
          className="mt-24 mb-24 waterfall-item" 
          style={{ animationDelay: `${(projects.length * 25)}ms` }}
        >
          <Footer/>
        </div>
    </div>
  );
}
