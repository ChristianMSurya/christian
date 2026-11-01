'use client';

import { useState, type MouseEvent, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Profile = { name: string; url: string };

export default function ScreenshotLink({ profiles, children }: {
  profiles?: Profile[];
  children: ReactNode;
}) {
  const [blockedProfiles, setBlockedProfiles] = useState<Profile[]>([]);

  if (!profiles?.length) return children;

  function openProfiles(event: MouseEvent<HTMLAnchorElement>) {
    // Preserve the browser's usual modified-click behavior.
    if (profiles!.length < 2 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();

    const blocked = profiles!.filter((profile) => {
      // Open synchronously from the click, sever the opener before navigating,
      // and retain a normal link if the browser blocks an additional tab.
      const tab = window.open('about:blank', '_blank');
      if (!tab) return true;
      tab.opener = null;
      tab.location.replace(profile.url);
      return false;
    });
    setBlockedProfiles(blocked);
  }

  return (
    <div>
      <a
        href={profiles[0].url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block rounded-lg focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#777]"
        aria-label={`open ${profiles.map((profile) => profile.name).join(' and ')} on linkedin (new ${profiles.length > 1 ? 'tabs' : 'tab'})`}
        onClick={openProfiles}
      >
        {children}
        <ArrowUpRight aria-hidden="true" className="absolute left-full top-0 h-3 w-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-[250ms] ease-in-out" />
      </a>
      {blockedProfiles.length > 0 && (
        <div className="mt-2 text-sm">
          {blockedProfiles.map((profile, index) => (
            <span key={profile.url}>
              {index > 0 && ' / '}
              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="site-link group relative inline-block align-top">
                open {profile.name}
                <ArrowUpRight aria-hidden="true" className="absolute left-full top-0 h-3 w-3 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-[250ms] ease-in-out" />
              </a>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
