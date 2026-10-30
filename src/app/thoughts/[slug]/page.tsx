import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import AnText from '@/components/an-text';
import Footer from '@/components/footer';
import { thoughts } from '@/data/thoughts';

export function generateStaticParams() {
  return thoughts.map((thought) => ({ slug: thought.slug }));
}

export default async function ThoughtPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const thought = thoughts.find((entry) => entry.slug === slug);
  if (!thought) notFound();

  return (
    <div className="thoughts-page animate-fade-in">
      <header className="thoughts-header">
        <Link href="/thoughts" className="site-link group thought-back-link">
          <ArrowLeft aria-hidden="true" size={12} className="thought-back-arrow" /><span>back</span>
        </Link>
      </header>
      <article className="thought">
        <h1 className="thought-page-title">{thought.number} / <AnText>{thought.title}</AnText></h1>
        <span>{thought.date}</span>
        <div className="thought-body">
          {thought.paragraphs.map((paragraph) => <p key={paragraph}><AnText>{paragraph}</AnText></p>)}
        </div>
      </article>
      <div className="mt-20 mb-24"><Footer /></div>
    </div>
  );
}
