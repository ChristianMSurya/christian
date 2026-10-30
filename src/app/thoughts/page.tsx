'use client';

import AnText from '@/components/an-text';
import Footer from '@/components/footer';

const thoughts = [
  {
    title: 'second thought',
    date: 'october 29, 2026',
    paragraphs: ["can't wait to get more done tomorrow"],
  },
  {
    title: 'first thought',
    date: 'october 29, 2026',
    paragraphs: ['looking forward to getting sleep'],
  },
];

export default function Thoughts() {
  return (
    <div className="thoughts-page animate-fade-in">
      <header className="thoughts-header">
        <h1>thoughts</h1>
      </header>
      <div className="thoughts-list">
        {thoughts.map((thought, index) => {
          const number = String(thoughts.length - index).padStart(3, '0');
          const title = <AnText>{thought.title}</AnText>;
          return (
            <article className="thought" key={thought.title}>
              <h2>{number} / {title}</h2>
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
