'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnText from '@/components/an-text';

type Profile = { name: string; url: string };

const arrowClassName = 'absolute left-full top-0 h-3 w-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-[250ms] ease-in-out';
const imageLinkClassName = 'group relative block rounded-lg focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#777]';

export default function ScreenshotLink({ profiles, children }: {
  profiles?: Profile[];
  children: ReactNode;
}) {
  const [showProfiles, setShowProfiles] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const choicesRef = useRef<HTMLDivElement>(null);
  const choicesId = useId();

  useEffect(() => {
    if (!showProfiles) return;
    choicesRef.current?.querySelector('a')?.focus({ preventScroll: true });

    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setShowProfiles(false);
      }
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowProfiles(false);
        requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
      }
    }
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [showProfiles]);

  if (!profiles?.length) return children;

  if (profiles.length > 1) {
    return (
      <div
        ref={containerRef}
        className="relative"
        onPointerLeave={(event) => {
          if (event.pointerType !== 'touch') {
            setShowProfiles(false);
            if (choicesRef.current?.contains(document.activeElement)) {
              triggerRef.current?.focus({ preventScroll: true });
            }
          }
        }}
      >
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={showProfiles}
          aria-controls={choicesId}
          aria-hidden={showProfiles || undefined}
          tabIndex={showProfiles ? -1 : undefined}
          onClick={() => setShowProfiles(true)}
          className={`${imageLinkClassName} w-full text-left cursor-pointer transition-opacity duration-[200ms] ease-out motion-reduce:transition-none ${showProfiles ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label={`choose a linkedin profile: ${profiles.map((profile) => profile.name).join(', ')}`}
        >
          {children}
          <ArrowUpRight aria-hidden="true" className={arrowClassName} />
        </button>
        <div
          id={choicesId}
          ref={choicesRef}
          aria-hidden={!showProfiles}
          inert={!showProfiles}
          className={`absolute inset-0 flex flex-col items-start justify-center gap-[6px] text-sm leading-none transition-opacity duration-[200ms] ease-out motion-reduce:transition-none ${showProfiles ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {profiles.map((profile) => (
            <a
              key={profile.url}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="site-link group relative inline-block align-top focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#777]"
              aria-label={`open ${profile.name} on linkedin (new tab)`}
            >
              <AnText>{profile.name}</AnText>
              <ArrowUpRight aria-hidden="true" className={arrowClassName} />
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <a
      href={profiles[0].url}
      target="_blank"
      rel="noopener noreferrer"
      className={imageLinkClassName}
      aria-label={`open ${profiles[0].name} on linkedin (new tab)`}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className={arrowClassName} />
    </a>
  );
}
