'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { thoughts } from '@/data/thoughts';
import AnText from '@/components/an-text';
import Footer from '@/components/footer';

export default function Thoughts() {
  return (
    <div className="thoughts-page animate-fade-in">
      <header className="thoughts-header">
        <h1>thoughts</h1>
      </header>
      <div className="thoughts-list">
        {thoughts.map((thought) => {
          const title = <AnText>{thought.title}</AnText>;
          return (
            <article className="thought" key={thought.title}>
              <h2>
                <Link className="site-link group inline-flex items-start" href={`/thoughts/${thought.slug}`}>
                  <span>{thought.number} / {title}</span>
                  <ArrowUpRight aria-hidden="true" className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-[250ms] ease-in-out" />
                </Link>
              </h2>
              <span>{thought.date}</span>
              <div className="thought-body">
                {thought.paragraphs.map((paragraph) => <p key={paragraph}><AnText>{paragraph}</AnText></p>)}
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-20 mb-24"><Footer /></div>
    </div>
  );
}
